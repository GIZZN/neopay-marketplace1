import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav-container">
          <div className="logo">
            <span className="logo-text">
              <span className="gradient-text">Neo</span>Pay
            </span>
          </div>
          
          <div className="nav-links">
            <a href="#" className="nav-link active">Главная</a>
            <a href="#" className="nav-link">Маркет</a>
            <a href="#" className="nav-link">Заказы</a>
            <a href="#" className="nav-link">Чаты</a>
          </div>

          <div className="auth-buttons">
            <button className="balance-btn">
              <span className="balance-icon">💰</span>
              <span className="balance-amount">5,230₽</span>
            </button>
            <button className="auth-btn login">Войти</button>
            <button className="auth-btn register">Регистрация</button>
          </div>
        </nav>
      </div>
    </header>
  );
} 