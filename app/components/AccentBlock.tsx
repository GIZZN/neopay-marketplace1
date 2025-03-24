import React, { useEffect, useRef, forwardRef } from 'react';
import gsap from 'gsap';

const AccentBlock = forwardRef<HTMLDivElement>((props, ref) => {
  const pathRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const svg = svgRef.current;
    const block = ref as React.RefObject<HTMLDivElement>;
    
    if (!block.current) return;
    
    
    const tl = gsap.timeline({
      delay: 0.4
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
    }, "-=0.6");

  }, [ref]);

  return (
    <div className="accent-block" ref={ref}>
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 480 757"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M287 173.254L0 0V536.746L268.798 699.012C276.796 703.84 287 698.081 287 688.739V173.254Z"
          fill="#1CCDAA"
        />
      </svg>
    </div>
  );
});

AccentBlock.displayName = 'AccentBlock';

export default AccentBlock; 