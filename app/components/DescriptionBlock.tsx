import React, { useEffect, useRef, forwardRef } from 'react';
import gsap from 'gsap';

const DescriptionBlock = forwardRef<HTMLDivElement>((props, ref) => {
  const pathRef = useRef(null);
  const svgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const svg = svgRef.current;
    const block = ref as React.RefObject<HTMLDivElement>;
    const content = contentRef.current;
    
    if (!block.current) return;
    
    gsap.set([svg, path, content], { 
      opacity: 0 
    });
    
    const tl = gsap.timeline({
      delay: 0.2
    });
    
    tl.to(svg, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.inOut"
    })
    .to(path, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.inOut"
    }, "-=0.6")
    .to(content, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.inOut"
    }, "-=0.4");

  }, [ref]);

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
        <div>суть сервиса и для кого он с кратким описанием услуг предоставляемых сервисом</div>
      </div>
    </div>
  );
});

DescriptionBlock.displayName = 'DescriptionBlock';

export default DescriptionBlock; 