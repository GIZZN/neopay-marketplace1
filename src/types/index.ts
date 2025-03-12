export interface Order {
  id: string;
  status: 'active' | 'completed' | 'cancelled';
  game: string;
  title: string;
  description: string;
  price: number;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  price: string;
  delay?: string;
} 