import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>О проекте</h4>
            <p>NeoPay - современный маркетплейс игровых товаров и услуг</p>
          </div>

          <div className="footer-section">
            <h4>Навигация</h4>
            <div className="footer-links">
              <a href="#">Главная</a>
              <a href="#">Маркет</a>
              <a href="#">Заказы</a>
              <a href="#">Поддержка</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Поддержка</h4>
            <div className="footer-links">
              <a href="#">FAQ</a>
              <a href="#">Правила</a>
              <a href="#">Контакты</a>
              <a href="#">Безопасность</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Мы в соцсетях</h4>
            <div className="social-links">
              <a href="#" className="social-link">Discord</a>
              <a href="#" className="social-link">Telegram</a>
              <a href="#" className="social-link">VK</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 NeoPay. Все права защищены</p>
          <div className="footer-legal">
            <a href="#">Условия использования</a>
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 