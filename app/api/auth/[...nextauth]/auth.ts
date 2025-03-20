import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
        // username: { label: "username", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please fill in all fields.");
        }

        try {
          const response = await fetch("http://localhost:3001/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          const text = await response.text(); // Для отладки
          console.log("API Response Text:", text);

          if (!response.ok) {
            throw new Error(`Invalid credentials: ${response.statusText}`);
          }

          const user = JSON.parse(text); // Разбираем JSON вручную

          return {
            id: user.user.id,
            email: user.user.email,
            username: user.user.username,
            accessToken: user.access_token,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          throw new Error("Authorization failed. Please try again.");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // Добавляем accessToken в JWT
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken; // Сохраняем JWT в токене
        token.id = user.id;
        token.username = user.username;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      if (token.accessToken) {
        session.accessToken = token.accessToken; // Передаем JWT в сессию
      }
      session.user = {
        id: token.id ?? "",
        email: session.user.email,
        username: token.username ?? "",
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Убедитесь, что секрет задан в .env
  debug: process.env.NODE_ENV === "development", // Включить отладку в development
};

// Расширяем типы NextAuth
declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      id: string;
      email: string;
      username: string;
    };
  }
  
  interface User {
    id: string;
    email: string;
    username: string;
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    id?: string;
    username?: string;
    email?: string;
  }
}
