'use client';
import './Home.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Suspense, useEffect } from 'react';
import Script from 'next/script';

// Добавляем невидимое изображение с закодированным CSS
const DecorationImage = () => (
  <img 
    src="/decoration.svg"
    alt=""
    style={{
      position: 'absolute',
      width: 1,
      height: 1,
      opacity: 0,
      pointerEvents: 'none'
    }}
  />
);

// Компонент для структурированных данных
const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NeoPay Marketplace",
    "description": "Безопасная торговая площадка для геймеров",
    "url": "https://neopay.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://neopay.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50000"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "NeoPay",
      "description": "Игровой маркетплейс нового поколения",
      "offers": {
        "@type": "AggregateOffer",
        "offerCount": "1000+",
        "priceCurrency": "RUB",
        "lowPrice": "100",
        "highPrice": "100000"
      }
    }
  };

  // Добавляем тестовый скрипт для проверки структуры
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Структурированные данные для проверки:', jsonLd);
      
      // Функция для проверки видимости микроразметки
      const checkStructuredData = () => {
        const scripts = document.querySelectorAll('script[type="application/ld+json"]');
        const items = document.querySelectorAll('[itemscope]');
        
        console.log('Найдено JSON-LD скриптов:', scripts.length);
        console.log('Найдено элементов с микроразметкой:', items.length);
        
        items.forEach((item, index) => {
          console.log(`Элемент ${index + 1}:`, {
            type: item.getAttribute('itemtype'),
            props: Array.from(item.querySelectorAll('[itemprop]')).map(prop => ({
              name: prop.getAttribute('itemprop'),
              content: prop.textContent || prop.getAttribute('content')
            }))
          });
        });
      };

      // Запускаем проверку после загрузки страницы
      setTimeout(checkStructuredData, 1000);
    }
  }, []);

  return (
    <>
      <Script 
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {process.env.NODE_ENV === 'development' && (
        <div id="seo-debug" style={{ display: 'none' }}>
          <h2>Структурированные данные:</h2>
          <pre>{JSON.stringify(jsonLd, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="home">
        <DecorationImage />
        <Suspense fallback={<div>Загрузка...</div>}>
          <Header />
        </Suspense>
        
        <main className="main-content">
          <div className="background-elements" aria-hidden="true">
            <div className="glow-circle primary"></div>
            <div className="glow-circle secondary"></div>
            <div className="grid-overlay"></div>
          </div>

          <div className="container">
            <section className="hero-section">
              <div className="hero-content">
                <div className="hero-badge">🚀 Новое поколение игрового маркетплейса</div>
                <h1 className="hero-title">
                  <span className="gradient-text">Neo</span>
                  <span className="text-white">Pay</span>
                </h1>
                <p className="hero-subtitle">
                  Безопасная торговая площадка для геймеров
                  <span className="hero-stats">
                    <span className="stat" itemProp="userInteractionCount">
                      <strong>50K+</strong> пользователей
                    </span>
                    <span className="stat-divider">•</span>
                    <span className="stat" itemProp="transactionCount">
                      <strong>100K+</strong> сделок
                    </span>
                  </span>
                </p>
                
                <div className="hero-actions">
                  <button className="btn-primary">Начать торговлю</button>
                  <button className="btn-secondary">Как это работает?</button>
                </div>
              </div>
              
              <div className="search-wrapper">
                <div className="search-container">
                  <div className="search-input-wrapper">
                    <input 
                      type="text" 
                      placeholder="Найти игру, предмет или услугу..." 
                      className="search-input"
                      aria-label="Поиск по сайту"
                    />
                    <button className="search-button">
                      <span className="search-icon" aria-hidden="true">🔍</span>
                      Поиск
                    </button>
                  </div>
                  <div className="popular-tags">
                    <span className="tag-label">Популярное:</span>
                    <div className="tags-list" itemProp="keywords">
                      {['CS2', 'Dota 2', 'WoW', 'LoL', 'Valorant'].map((tag, index) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="features-section" itemScope itemType="https://schema.org/ItemList">
              <div className="features-grid">
                {[
                  {
                    icon: '🛡️',
                    title: 'Безопасные сделки',
                    description: 'Гарантия возврата средств и проверенные продавцы'
                  },
                  {
                    icon: '⚡',
                    title: 'Мгновенные выплаты',
                    description: 'Вывод средств в течение 24 часов на любую карту'
                  },
                  {
                    icon: '🎮',
                    title: 'Все популярные игры',
                    description: 'Большой выбор игр и внутриигровых предметов'
                  },
                  {
                    icon: '💬',
                    title: 'Поддержка 24/7',
                    description: 'Помощь в любое время дня и ночи'
                  }
                ].map((feature, index) => (
                  <div 
                    key={index} 
                    className="feature-card" 
                    itemProp="itemListElement" 
                    itemScope 
                    itemType="https://schema.org/ListItem"
                  >
                    <span className="feature-icon" aria-hidden="true">{feature.icon}</span>
                    <h3 itemProp="name">{feature.title}</h3>
                    <p itemProp="description">{feature.description}</p>
                    <meta itemProp="position" content={String(index + 1)} />
                  </div>
                ))}
              </div>
            </section>

            <section className="orders-section">
              <div className="section-header">
                <div className="header-content">
                  <h2>Активные заказы</h2>
                  <p className="section-subtitle">Найдите интересные предложения или создайте своё</p>
                </div>
                <div className="view-controls" role="tablist">
                  <button className="view-btn active" role="tab" aria-selected="true">Все</button>
                  <button className="view-btn" role="tab" aria-selected="false">Новые</button>
                  <button className="view-btn" role="tab" aria-selected="false">Популярные</button>
                </div>
              </div>

              <div className="orders-grid">
                <div className="orders-list" itemScope itemType="https://schema.org/ItemList">
                  {[1, 2, 3].map(order => (
                    <div 
                      key={order} 
                      className="order-card"
                      itemProp="itemListElement"
                      itemScope
                      itemType="https://schema.org/Offer"
                    >
                      <div className="order-status">
                        <span className="status-dot"></span>
                        <meta itemProp="availability" content="https://schema.org/InStock" />
                        Активный
                      </div>
                      <div className="order-content">
                        <div className="game-info">
                          <span className="game-icon" aria-hidden="true">🎮</span>
                          <span className="game-name" itemProp="category">CS2</span>
                        </div>
                        <h3 className="order-title" itemProp="name">Буст аккаунта Silver Elite</h3>
                        <p className="order-description" itemProp="description">
                          Нужен буст с Silver Elite до Gold Nova 3. Играю на EU серверах.
                        </p>
                        <div className="order-meta">
                          <div className="price-tag">
                            <span className="price-amount" itemProp="price">2,500</span>
                            <meta itemProp="priceCurrency" content="RUB" />
                            <span className="price-duration">/заказ</span>
                          </div>
                          <button className="action-btn">Откликнуться</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <aside className="chat-section" role="complementary">
                  <div className="chat-header">
                    <div className="chat-info">
                      <h3>Обсуждение заказа</h3>
                      <span className="chat-subtitle">Выберите заказ для начала общения</span>
                    </div>
                    <span className="online-status">
                      <span className="online-dot"></span>
                      2 онлайн
                    </span>
                  </div>
                  <div className="chat-messages">
                    <div className="message-placeholder">
                      <span className="placeholder-icon" aria-hidden="true">💬</span>
                      <p>Выберите заказ для начала обсуждения</p>
                      <span className="placeholder-hint">Все сообщения защищены end-to-end шифрованием</span>
                    </div>
                  </div>
                </aside>
              </div>
            </section>

            <section 
              className="services-section" 
              itemScope 
              itemType="https://schema.org/ItemList"
            >
              <h2 itemProp="name">Популярные услуги</h2>
              <div className="services-grid">
                {[
                  {
                    icon: '🏆',
                    title: 'Буст рейтинга',
                    description: 'Быстрый и безопасный буст от профессионалов',
                    price: 'от 500₽/час',
                    features: ['Опытные игроки', 'Любой рейтинг', 'Гарантия результата']
                  },
                  {
                    icon: '👨‍🏫',
                    title: 'Обучение',
                    description: 'Индивидуальные тренировки с про-игроками',
                    price: 'от 1000₽/час',
                    features: ['Персональный подход', 'Разбор реплеев', 'Практические советы']
                  },
                  {
                    icon: '⚔️',
                    title: 'Прокачка',
                    description: 'Быстрая прокачка персонажей любого уровня',
                    price: 'от 2000₽',
                    features: ['Любые задания', 'Быстрое выполнение', 'Конфиденциальность']
                  }
                ].map((service, index) => (
                  <div 
                    key={index} 
                    className="service-card"
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    <div className="service-icon" aria-hidden="true">{service.icon}</div>
                    <h3 itemProp="name">{service.title}</h3>
                    <p itemProp="description">{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <span className="service-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                      <meta itemProp="priceCurrency" content="RUB" />
                      {service.price}
                    </span>
                    <button className="service-btn">Подробнее</button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

        <Suspense fallback={<div>Загрузка...</div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
} 