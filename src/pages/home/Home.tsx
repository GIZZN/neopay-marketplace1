'use client';
import './Home.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useOrders } from '@/lib/hooks/useOrders';
import { useAppStore } from '@/store';

export default function Home() {
  const { data: orders } = useOrders();
  const theme = useAppStore((state) => state.theme);

  return (
    <div className="home">
      <Header />
      
      <main className="main-content">
        <div className="background-elements">
          <div className="glow-circle circle-1"></div>
          <div className="glow-circle circle-2"></div>
          <div className="glow-circle circle-3"></div>
        </div>

        <div className="container">
          <section className="hero-section">
            <div className="logo-wrapper">
              <div className="logo-container">
                <h1 className="logo">
                  <span className="neo">Neo</span>
                  <span className="pay">Pay</span>
                </h1>
                <div className="underline"></div>
              </div>
              <p className="tagline">Игровой маркетплейс нового поколения</p>
            </div>
            
            <div className="search-wrapper">
              <div className="search-container">
                <input 
                  type="text" 
                  placeholder="Найти игру, предмет или услугу..." 
                  className="search-input"
                />
                <div className="popular-tags">
                  <span className="tag-label">Популярное:</span>
                  <div className="tags-list">
                    <span className="tag">CS:GO</span>
                    <span className="tag">Dota 2</span>
                    <span className="tag">WoW</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="orders-section fade-in-up" style={{"--delay": "0.4s"} as React.CSSProperties}>
            <div className="section-header">
              <h2>Активные заказы</h2>
              <div className="view-controls">
                <button className="view-btn active">Все</button>
                <button className="view-btn">Новые</button>
                <button className="view-btn">Популярные</button>
              </div>
            </div>

            <div className="orders-grid">
              <div className="orders-list glassmorphism">
                {[1, 2, 3].map(order => (
                  <div key={order} className="order-card neomorphism">
                    <div className="order-status">
                      <span className="status-dot"></span>
                      Активный
                    </div>
                    <div className="order-content">
                      <div className="game-info">
                        <span className="game-icon">🎮</span>
                        <span className="game-name">CS:GO</span>
                      </div>
                      <h3 className="order-title">Буст аккаунта Silver Elite</h3>
                      <p className="order-description">
                        Нужен буст с Silver Elite до Gold Nova 3. Играю на EU серверах.
                      </p>
                      <div className="order-meta">
                        <div className="price-tag">
                          <span className="price-amount">2,500₽</span>
                          <span className="price-duration">/заказ</span>
                        </div>
                        <button className="action-btn">Откликнуться</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="chat-section glassmorphism">
                <div className="chat-header">
                  <h3>Обсуждение заказа</h3>
                  <span className="online-status">2 онлайн</span>
                </div>
                <div className="chat-messages">
                  <div className="message-placeholder">
                    <span className="placeholder-icon">💬</span>
                    <p>Выберите заказ для начала обсуждения</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="services-section fade-in-up" style={{"--delay": "0.6s"} as React.CSSProperties}>
            <h2 className="slide-in-left" style={{"--delay": "0.7s"} as React.CSSProperties}>
              Популярные услуги
            </h2>
            <div className="services-grid">
              {[
                {
                  icon: '🎯',
                  title: 'Буст рейтинга',
                  description: 'Быстрый и безопасный буст от профессионалов',
                  price: 'от 500₽/час',
                  delay: '0.8s'
                },
                {
                  icon: '👨‍🏫',
                  title: 'Обучение',
                  description: 'Индивидуальные тренировки с про-игроками',
                  price: 'от 1000₽/час',
                  delay: '0.9s'
                },
                {
                  icon: '⚔️',
                  title: 'Прокачка',
                  description: 'Быстрая прокачка персонажей любого уровня',
                  price: 'от 2000₽',
                  delay: '1s'
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="service-card neomorphism slide-in-up"
                  style={{"--delay": service.delay} as React.CSSProperties}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-price">{service.price}</span>
                  <button className="service-btn">Подробнее</button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
} 