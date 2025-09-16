import { useEffect, useRef, useState } from 'react';

export const useScrollSnap = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    let ticking = false;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const sections = document.querySelectorAll('.scroll-section');
      const totalSections = sections.length;
      
      // Allow normal scrolling when trying to scroll down from last section
      if (currentSection === totalSections - 1 && direction > 0) {
        return; // Don't prevent default, allow normal scrolling to footer
      }
      
      // Allow normal scrolling when trying to scroll up from first section
      if (currentSection === 0 && direction < 0) {
        return; // Don't prevent default, allow normal scrolling
      }
      
      e.preventDefault();
      
      let newSection = currentSection + direction;
      
      if (newSection < 0) newSection = 0;
      if (newSection >= totalSections) newSection = totalSections - 1;
      
      if (newSection !== currentSection) {
        setIsScrolling(true);
        setCurrentSection(newSection);
        
        const targetSection = sections[newSection] as HTMLElement;
        if (targetSection) {
          targetSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
        
        // Reset scrolling state after animation
        setTimeout(() => {
          setIsScrolling(false);
        }, 800);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = document.querySelectorAll('.scroll-section');
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
          
          sections.forEach((section, index) => {
            const element = section as HTMLElement;
            const rect = element.getBoundingClientRect();
            const sectionTop = rect.top + scrollPosition;
            const sectionHeight = element.offsetHeight;
            
            // Check if section is in view (at least 50% visible)
            if (
              scrollPosition >= sectionTop - windowHeight * 0.5 &&
              scrollPosition < sectionTop + sectionHeight - windowHeight * 0.5
            ) {
              if (currentSection !== index && !isScrolling) {
                setCurrentSection(index);
              }
            }
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add wheel event listener with passive: false to allow preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [currentSection, isScrolling]);

  return { currentSection };
};