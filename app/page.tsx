'use client'
import Footer from './components/Footer';
import Header from './components/Header';
import './Home.css';
import "./global.css";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DescriptionBlock from './components/DescriptionBlock';
import AccentBlock from './components/AccentBlock';
import CircleTextSvg from './components/CircleTextSvg';

export default function Home() {
  const contentWrapperRef = useRef(null);
  const descriptionBlockRef = useRef(null);
  const accentBlockRef = useRef(null);
  const serviceTextRef = useRef(null);
  const watermarkRef = useRef(null);
  const watermarkCircleRef = useRef(null);
  const featuresBlockRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const calculateScale = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const baseWidth = 1700;
      const baseHeight = 808;
      
      let scale = Math.min(
        viewportWidth / baseWidth * 0.85,
        viewportHeight / baseHeight * 0.8
      );
      
      if (viewportWidth <= 400) {
        scale = Math.max(0.15, scale);
      } else if (viewportWidth <= 480) {
        scale = Math.max(0.17, scale);
      } else {
        scale = Math.max(0.2, scale);
      }
      
      return scale;
    };

    const handleResize = () => {
      const scale = calculateScale();
      
      gsap.to(contentWrapperRef.current, {
        scale: scale,
        force3D: false,
        duration: 0.3,
        ease: "power2.out",
        transformOrigin: "center center"
      });
    };

    handleResize();

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedResize);
    
    if (serviceTextRef.current) {
      gsap.fromTo(serviceTextRef.current, 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.5 }
      );
    }
    
    if (watermarkRef.current) {
      gsap.fromTo(watermarkRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: "power1.out", delay: 0.8 }
      );
      
      gsap.set(watermarkRef.current, {
        '--before-width': '0%',
        '--after-width': '0%'
      });
      
      gsap.to(watermarkRef.current, {
        '--before-width': '80%',
        '--after-width': '80%',
        duration: 1.5,
        ease: "power2.inOut",
        delay: 0.8
      });
    }
    
    if (watermarkCircleRef.current) {
      gsap.fromTo(watermarkCircleRef.current, 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out", delay: 1.0 }
      );
      
      const svgElement = watermarkCircleRef.current as HTMLDivElement;
      if (svgElement) {
        const pathElements = svgElement.querySelectorAll('path');
        
        gsap.fromTo(pathElements, 
          { opacity: 0 },
          { opacity: 1, duration: 0.8, stagger: 0.02, ease: "power1.inOut", delay: 1.2 }
        );
      }
    }
    
    const serviceDescriptionText = document.querySelector('.service-description-text');
    if (serviceDescriptionText) {
      gsap.fromTo(serviceDescriptionText, 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out", delay: 1.6 }
      );
    }
    
    if (!featuresBlockRef.current) return;
    
    gsap.fromTo(featuresBlockRef.current, 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.inOut",
        delay: 0.5 
      }
    );
    
    gsap.fromTo(".feature-item", 
      { opacity: 0, y: 20 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: "power2.out",
        delay: 0.8 
      }
    );
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <main className="home">
      <Header />
      <div className="main-content">
        <section className="top-section">
          <div className="hero-center-logo">
            <svg width="209" height="303" viewBox="0 0 209 303" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M201.377 107.877L30.3775 160.672C28.0723 161.383 26.5 163.514 26.5 165.927V294.368C26.5 298.071 30.0847 300.716 33.6225 299.623L204.623 246.828C206.928 246.117 208.5 243.986 208.5 241.573V113.132C208.5 109.429 204.915 106.784 201.377 107.877Z" fill="#161616" stroke="#31ECAA"/>
              <path d="M70.8438 246V199.455H90.9347C94.3892 199.455 97.4119 200.136 100.003 201.5C102.594 202.864 104.609 204.78 106.048 207.25C107.488 209.72 108.207 212.606 108.207 215.909C108.207 219.242 107.465 222.129 105.98 224.568C104.51 227.008 102.442 228.886 99.7756 230.205C97.1241 231.523 94.0256 232.182 90.4801 232.182H78.4801V222.364H87.9347C89.4195 222.364 90.6847 222.106 91.7301 221.591C92.7907 221.061 93.6013 220.311 94.1619 219.341C94.7377 218.371 95.0256 217.227 95.0256 215.909C95.0256 214.576 94.7377 213.439 94.1619 212.5C93.6013 211.545 92.7907 210.818 91.7301 210.318C90.6847 209.803 89.4195 209.545 87.9347 209.545H83.4801V246H70.8438ZM119.122 246H105.486L120.849 199.455H138.122L153.486 246H139.849L129.668 212.273H129.304L119.122 246ZM116.577 227.636H142.213V237.091H116.577V227.636ZM151.31 199.455H165.401L174.491 218.364H174.855L183.946 199.455H198.037L180.946 231.364V246H168.401V231.364L151.31 199.455Z" fill="white"/>
              <path d="M0 61.7513C0 57.8271 3.70494 54.9592 7.50384 55.9428L204.504 106.947C207.151 107.632 209 110.021 209 112.755V241.649C209 245.573 205.295 248.441 201.496 247.457L4.49616 196.453C1.84893 195.768 0 193.379 0 190.645V61.7513Z" fill="url(#paint0_linear_330_31)"/>
              <mask id="path-4-outside-1_330_31" maskUnits="userSpaceOnUse" x="69" y="198" width="131" height="49" fill="black">
                <rect fill="white" x="69" y="198" width="131" height="49"/>
                <path d="M70.8438 246V199.455H90.9347C94.3892 199.455 97.4119 200.136 100.003 201.5C102.594 202.864 104.609 204.78 106.048 207.25C107.488 209.72 108.207 212.606 108.207 215.909C108.207 219.242 107.465 222.129 105.98 224.568C104.51 227.008 102.442 228.886 99.7756 230.205C97.1241 231.523 94.0256 232.182 90.4801 232.182H78.4801V222.364H87.9347C89.4195 222.364 90.6847 222.106 91.7301 221.591C92.7907 221.061 93.6013 220.311 94.1619 219.341C94.7377 218.371 95.0256 217.227 95.0256 215.909C95.0256 214.576 94.7377 213.439 94.1619 212.5C93.6013 211.545 92.7907 210.818 91.7301 210.318C90.6847 209.803 89.4195 209.545 87.9347 209.545H83.4801V246H70.8438ZM119.122 246H105.486L120.849 199.455H138.122L153.486 246H139.849L129.668 212.273H129.304L119.122 246ZM116.577 227.636H142.213V237.091H116.577V227.636ZM151.31 199.455H165.401L174.491 218.364H174.855L183.946 199.455H198.037L180.946 231.364V246H168.401V231.364L151.31 199.455Z"/>
              </mask>
              <path d="M70.8438 246H69.8438V247H70.8438V246ZM70.8438 199.455V198.455H69.8438V199.455H70.8438ZM100.003 201.5L99.5371 202.385L99.5371 202.385L100.003 201.5ZM106.048 207.25L106.912 206.746L106.912 206.746L106.048 207.25ZM105.98 224.568L105.126 224.048L105.124 224.052L105.98 224.568ZM99.7756 230.205L99.3324 229.308L99.3304 229.309L99.7756 230.205ZM78.4801 232.182H77.4801V233.182H78.4801V232.182ZM78.4801 222.364V221.364H77.4801V222.364H78.4801ZM91.7301 221.591L92.1721 222.488L92.1773 222.485L91.7301 221.591ZM94.1619 219.341L93.302 218.83L93.2962 218.84L94.1619 219.341ZM94.1619 212.5L93.2996 213.006L93.3044 213.015L93.3093 213.023L94.1619 212.5ZM91.7301 210.318L91.2881 211.215L91.2959 211.219L91.3037 211.223L91.7301 210.318ZM83.4801 209.545V208.545H82.4801V209.545H83.4801ZM83.4801 246V247H84.4801V246H83.4801ZM71.8438 246V199.455H69.8438V246H71.8438ZM70.8438 200.455H90.9347V198.455H70.8438V200.455ZM90.9347 200.455C94.2561 200.455 97.1136 201.109 99.5371 202.385L100.469 200.615C97.7103 199.163 94.5223 198.455 90.9347 198.455V200.455ZM99.5371 202.385C101.966 203.663 103.842 205.45 105.184 207.754L106.912 206.746C105.376 204.111 103.221 202.064 100.469 200.615L99.5371 202.385ZM105.184 207.754C106.522 210.048 107.207 212.755 107.207 215.909H109.207C109.207 212.457 108.454 209.391 106.912 206.746L105.184 207.754ZM107.207 215.909C107.207 219.09 106.5 221.79 105.126 224.048L106.834 225.088C108.429 222.467 109.207 219.395 109.207 215.909H107.207ZM105.124 224.052C103.757 226.32 101.836 228.071 99.3324 229.308L100.219 231.101C103.049 229.702 105.264 227.695 106.837 225.084L105.124 224.052ZM99.3304 229.309C96.8419 230.546 93.9013 231.182 90.4801 231.182V233.182C94.1499 233.182 97.4062 232.499 100.221 231.1L99.3304 229.309ZM90.4801 231.182H78.4801V233.182H90.4801V231.182ZM79.4801 232.182V222.364H77.4801V232.182H79.4801ZM78.4801 223.364H87.9347V221.364H78.4801V223.364ZM87.9347 223.364C89.5321 223.364 90.9568 223.087 92.1721 222.488L91.2881 220.694C90.4125 221.125 89.307 221.364 87.9347 221.364V223.364ZM92.1773 222.485C93.4022 221.873 94.3632 220.991 95.0277 219.841L93.2962 218.84C92.8394 219.631 92.1793 220.248 91.2829 220.696L92.1773 222.485ZM95.0218 219.851C95.7038 218.703 96.0256 217.376 96.0256 215.909H94.0256C94.0256 217.078 93.7716 218.04 93.3021 218.83L95.0218 219.851ZM96.0256 215.909C96.0256 214.43 95.7052 213.104 95.0145 211.977L93.3093 213.023C93.7702 213.775 94.0256 214.721 94.0256 215.909H96.0256ZM95.0242 211.994C94.3555 210.855 93.3878 209.994 92.1565 209.414L91.3037 211.223C92.1936 211.642 92.8471 212.236 93.2996 213.006L95.0242 211.994ZM92.1721 209.421C90.9568 208.822 89.5321 208.545 87.9347 208.545V210.545C89.307 210.545 90.4125 210.784 91.2881 211.215L92.1721 209.421ZM87.9347 208.545H83.4801V210.545H87.9347V208.545ZM82.4801 209.545V246H84.4801V209.545H82.4801ZM83.4801 245H70.8438V247H83.4801V245ZM119.122 246V247H119.865L120.079 246.289L119.122 246ZM105.486 246L104.536 245.687L104.103 247H105.486V246ZM120.849 199.455V198.455H120.126L119.9 199.141L120.849 199.455ZM138.122 199.455L139.072 199.141L138.845 198.455H138.122V199.455ZM153.486 246V247H154.869L154.435 245.687L153.486 246ZM139.849 246L138.892 246.289L139.107 247H139.849V246ZM129.668 212.273L130.625 211.984L130.41 211.273H129.668V212.273ZM129.304 212.273V211.273H128.561L128.347 211.984L129.304 212.273ZM116.577 227.636V226.636H115.577V227.636H116.577ZM142.213 227.636H143.213V226.636H142.213V227.636ZM142.213 237.091V238.091H143.213V237.091H142.213ZM116.577 237.091H115.577V238.091H116.577V237.091ZM119.122 245H105.486V247H119.122V245ZM106.435 246.313L121.799 199.768L119.9 199.141L104.536 245.687L106.435 246.313ZM120.849 200.455H138.122V198.455H120.849V200.455ZM137.173 199.768L152.536 246.313L154.435 245.687L139.072 199.141L137.173 199.768ZM153.486 245H139.849V247H153.486V245ZM140.807 245.711L130.625 211.984L128.71 212.562L138.892 246.289L140.807 245.711ZM129.668 211.273H129.304V213.273H129.668V211.273ZM128.347 211.984L118.165 245.711L120.079 246.289L130.261 212.562L128.347 211.984ZM116.577 228.636H142.213V226.636H116.577V228.636ZM141.213 227.636V237.091H143.213V227.636H141.213ZM142.213 236.091H116.577V238.091H142.213V236.091ZM117.577 237.091V227.636H115.577V237.091H117.577ZM151.31 199.455V198.455H149.64L150.428 199.927L151.31 199.455ZM165.401 199.455L166.302 199.021L166.029 198.455H165.401V199.455ZM174.491 218.364L173.59 218.797L173.863 219.364H174.491V218.364ZM174.855 218.364V219.364H175.484L175.756 218.797L174.855 218.364ZM183.946 199.455V198.455H183.317L183.045 199.021L183.946 199.455ZM198.037 199.455L198.918 199.927L199.707 198.455H198.037V199.455ZM180.946 231.364L180.065 230.891L179.946 231.113V231.364H180.946ZM180.946 246V247H181.946V246H180.946ZM168.401 246H167.401V247H168.401V246ZM168.401 231.364H169.401V231.113L169.282 230.891L168.401 231.364ZM151.31 200.455H165.401V198.455H151.31V200.455ZM164.499 199.888L173.59 218.797L175.393 217.93L166.302 199.021L164.499 199.888ZM174.491 219.364H174.855V217.364H174.491V219.364ZM175.756 218.797L184.847 199.888L183.045 199.021L173.954 217.93L175.756 218.797ZM183.946 200.455H198.037V198.455H183.946V200.455ZM197.155 198.982L180.065 230.891L181.828 231.836L198.918 199.927L197.155 198.982ZM179.946 231.364V246H181.946V231.364H179.946ZM180.946 245H168.401V247H180.946V245ZM169.401 246V231.364H167.401V246H169.401ZM169.282 230.891L152.191 198.982L150.428 199.927L167.519 231.836L169.282 230.891Z" fill="white" mask="url(#path-4-outside-1_330_31)"/>
              <path d="M175.368 2.89551L4.36774 56.0381C2.06746 56.753 0.5 58.8815 0.5 61.2903V190.652C0.5 194.359 4.09236 197.005 7.63226 195.904L178.632 142.762C180.933 142.047 182.5 139.919 182.5 137.51V8.14771C182.5 4.44081 178.908 1.79539 175.368 2.89551Z" fill="#1CCDAA" stroke="black"/>
              <path d="M46.7727 67.4545V114H36.2273L19.4091 89.5455H19.1364V114H6.5V67.4545H17.2273L33.7727 91.8182H34.1364V67.4545H46.7727ZM52.75 114V67.4545H86.2955V77.6364H65.3864V85.6364H84.5682V95.8182H65.3864V103.818H86.2045V114H52.75ZM137.653 90.7273C137.653 95.9091 136.646 100.28 134.631 103.841C132.616 107.386 129.896 110.076 126.472 111.909C123.047 113.727 119.229 114.636 115.017 114.636C110.775 114.636 106.941 113.72 103.517 111.886C100.108 110.038 97.3958 107.341 95.3807 103.795C93.3807 100.235 92.3807 95.8788 92.3807 90.7273C92.3807 85.5455 93.3807 81.1818 95.3807 77.6364C97.3958 74.0758 100.108 71.3864 103.517 69.5682C106.941 67.7348 110.775 66.8182 115.017 66.8182C119.229 66.8182 123.047 67.7348 126.472 69.5682C129.896 71.3864 132.616 74.0758 134.631 77.6364C136.646 81.1818 137.653 85.5455 137.653 90.7273ZM124.653 90.7273C124.653 87.9394 124.282 85.5909 123.54 83.6818C122.812 81.7576 121.729 80.303 120.29 79.3182C118.866 78.3182 117.108 77.8182 115.017 77.8182C112.926 77.8182 111.161 78.3182 109.722 79.3182C108.297 80.303 107.214 81.7576 106.472 83.6818C105.744 85.5909 105.381 87.9394 105.381 90.7273C105.381 93.5152 105.744 95.8712 106.472 97.7955C107.214 99.7045 108.297 101.159 109.722 102.159C111.161 103.144 112.926 103.636 115.017 103.636C117.108 103.636 118.866 103.144 120.29 102.159C121.729 101.159 122.812 99.7045 123.54 97.7955C124.282 95.8712 124.653 93.5152 124.653 90.7273Z" fill="#161616"/>
              <defs>
                <linearGradient id="paint0_linear_330_31" x1="208.501" y1="148.193" x2="14.4654" y2="148.193" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0198262" stopColor="#161616"/>
                  <stop offset="1" stopColor="#1CCDAA"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="tagline-container">
            <div className="tagline">маркет плейс интернет услуг</div>
          </div>
        </section>

        <section className="bottom-section">
          <div className="top-line"></div>
          <div className="content-wrapper" ref={contentWrapperRef}>
            <DescriptionBlock ref={descriptionBlockRef} />
            <AccentBlock ref={accentBlockRef} />
          </div>
          <div className="bottom-line-container">
            <div className="bottom-line"></div>
          </div>
          <div className="service-text" ref={serviceTextRef}></div>
        </section>
        
        <div className="watermark-container" ref={watermarkRef}>
          <div className="watermark-text">
            <CircleTextSvg ref={watermarkCircleRef} />
            <div className="service-description-text">
              <p><span>суть сервиса и для кого он с кратким описанием услуг предоставляемых сервисом</span></p>
            </div>
          </div>
        </div>
        <div className="lower-line-container">
          <div className="lower-line"></div>
        </div>
        
        <div className="features-block-container">
          <div className="features-block" ref={featuresBlockRef}>
            <svg width="100%" height="100%" viewBox="0 0 1666 709" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1666 173.254L0 0V536.746L1652.76 708.623C1659.84 709.359 1666 703.806 1666 696.687V173.254Z" fill="#1CCDAA"/>
            </svg>
            <div className="features-content">
              <div className="feature-card">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L4 12L12 20L20 12L12 4Z" stroke="#1CCDAA" strokeWidth="3" />
                    <path d="M4 12L12 20L20 12" stroke="#1CCDAA" strokeWidth="3" />
                    <path d="M4 6L12 14L20 6" stroke="#1CCDAA" strokeWidth="3" />
                  </svg>
                </div>
                <h3 className="card-title">Безопасность</h3>
                <p className="card-description">Гарантия сохранности средств и данных на всех этапах работы с сервисом</p>
                <button className="card-button">Подробнее</button>
              </div>
              
              <div className="feature-card">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="#1CCDAA" strokeWidth="3" />
                    <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="#1CCDAA" strokeWidth="3" />
                  </svg>
                </div>
                <h3 className="card-title">Удобство</h3>
                <p className="card-description">Интуитивно понятный интерфейс и быстрые транзакции </p>
                <button className="card-button">Подробнее</button>
              </div>
              
              <div className="feature-card">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#1CCDAA" strokeWidth="3" />
                  </svg>
                </div>
                <h3 className="card-title">Поддержка</h3>
                <p className="card-description">Круглосуточная техническая поддержка и консультации специалистов</p>
                <button className="card-button">Подробнее</button>
              </div>
              
              <div className="feature-card">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15" stroke="#1CCDAA" strokeWidth="3" />
                    <path d="M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5C15 5.53043 14.7893 6.03914 14.4142 6.41421C14.0391 6.78929 13.5304 7 13 7H11C10.4696 7 9.96086 6.78929 9.58579 6.41421C9.21071 6.03914 9 5.53043 9 5Z" stroke="#1CCDAA" strokeWidth="3" />
                  </svg>
                </div>
                <h3 className="card-title">Лимиты</h3>
                <p className="card-description">Выгодные тарифы с высокими лимитами для всех типов пользователей</p>
                <button className="card-button">Подробнее</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

