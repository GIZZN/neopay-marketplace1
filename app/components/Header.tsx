'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`} role="banner">
      <div className="header-backdrop" aria-hidden="true"></div>
      <div className="container">
        <nav className="nav-container" role="navigation" aria-label="Главная навигация">
          <Link href="/" className="logo" aria-label="NeoPay Marketplace">
            <div className="logo-glow" aria-hidden="true"></div>
            <span className="logo-text">
              <span className="gradient-text">Neo</span>
              <span className="text">Pay</span>
            </span>
          </Link>
          
          <div className={`nav-links ${isMenuOpen ? 'nav-links-active' : ''}`}>
            <div className="nav-group" role="menubar">
              <Link href="/" className="nav-link active" role="menuitem" aria-current="page">
                <span className="nav-link-icon" aria-hidden="true">🏠</span>
                <span>Главная</span>
              </Link>
              <Link href="/market" className="nav-link" role="menuitem">
                <span className="nav-link-icon" aria-hidden="true">🎮</span>
                <span>Маркет</span>
                <span className="nav-link-badge" aria-label="Новый раздел">Новое</span>
              </Link>
              <Link href="/orders" className="nav-link" role="menuitem">
                <span className="nav-link-icon" aria-hidden="true">📋</span>
                <span>Заказы</span>
              </Link>
              <Link href="/chats" className="nav-link" role="menuitem">
                <span className="nav-link-icon" aria-hidden="true">💬</span>
                <span>Чаты</span>
                <span className="nav-link-notification" aria-label="Есть новые сообщения"></span>
              </Link>
            </div>
          </div>

          <div className="auth-buttons">
            <button className="balance-btn" aria-label="Баланс аккаунта">
              <span className="balance-icon" aria-hidden="true">💎</span>
              <div className="balance-info">
                <span className="balance-label">Баланс</span>
                <span className="balance-amount" aria-live="polite">5,230₽</span>
              </div>
              <span className="balance-trend positive" aria-label="Рост на 12.5 процентов">+12.5%</span>
            </button>
            
            <div className="auth-actions">
              <button className="auth-btn login" aria-label="Войти в аккаунт">
                <span className="btn-icon" aria-hidden="true">👤</span>
                <span>Войти</span>
              </button>
              <button className="auth-btn register" aria-label="Зарегистрировать аккаунт">
                <span className="btn-icon" aria-hidden="true">✨</span>
                <span>Регистрация</span>
              </button>
            </div>
          </div>

          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            <span className="menu-icon"></span>
          </button>
        </nav>
      </div>
    </header>
  );
} 