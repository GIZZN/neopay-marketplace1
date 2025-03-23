import React, { useEffect, useRef, forwardRef } from 'react';
import gsap from 'gsap';

const DescriptionBlock = forwardRef<HTMLDivElement>((props, ref) => {
  const pathRef = useRef(null);
  const svgRef = useRef(null);
  const contentRef = useRef(null);
  const textRef = useRef<HTMLDivElement>(null);
  const textContent = "суть сервиса и для кого он с кратким описанием услуг предоставляемых сервисом";
  
  useEffect(() => {
    const path = pathRef.current;
    const svg = svgRef.current;
    const block = ref as React.RefObject<HTMLDivElement>;
    const content = contentRef.current;
    const text = textRef.current;
    
    if (!block.current || !text) return;
    
    // Разбиваем текст на отдельные символы и оборачиваем их в span
    const chars = textContent.split('');
    text.innerHTML = '';
    
    chars.forEach((char) => {
      const charSpan = document.createElement('span');
      charSpan.textContent = char === ' ' ? '\u00A0' : char; // Заменяем пробелы на неразрывные
      charSpan.className = 'char';
      text.appendChild(charSpan);
    });
    
    const charElements = text.querySelectorAll('.char');
    
    // Устанавливаем начальное состояние
    // Для SVG и path устанавливаем сразу финальное состояние без анимации
    gsap.set([svg, path], { 
      opacity: 1,
      scale: 1,
      transformOrigin: 'center center'
    });
    
    // Отключаем все возможные эффекты анимации для SVG элементов
    gsap.killTweensOf([svg, path]);
    
    // Для контента оставляем начальное невидимое состояние
    gsap.set(content, { 
      opacity: 0 
    });
    
    // Установка начальных значений для каждого символа
    gsap.set(charElements, {
      opacity: 0,
      x: () => gsap.utils.random(-500, 500),
      y: () => gsap.utils.random(-500, 500),
      rotation: () => gsap.utils.random(-720, 720),
      scale: 0
    });
    
    const tl = gsap.timeline({
      delay: 0.2
    });
    
    // Анимируем только контент
    tl.to(content, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.inOut"
    })
    
    // Анимируем каждый символ по отдельности
    .staggerTo(charElements, 0.75, {
      opacity: 1,
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      ease: "power4.inOut"
    }, 0.0125);

  }, [ref, textContent]);

  return (
    <div className="description-block" ref={ref}>
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 1066 808"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M1066 594.193C1066 603.835 1059.12 612.105 1049.64 613.859L-4.05312e-06 808V197.167L1066 0V594.193Z"
          fill="white"
        />
      </svg>
      <div className="description-content" ref={contentRef}>
        <div className="description-text" ref={textRef}></div>
      </div>
    </div>
  );
});

DescriptionBlock.displayName = 'DescriptionBlock';

export default DescriptionBlock; 