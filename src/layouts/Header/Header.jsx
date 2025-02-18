'use client';
import React, { useEffect, useRef } from 'react';
import './header.scss';
import { useLenis } from '@/utils/LenisProvider';
import gsap from 'gsap';

export default function Header() {
   const lenis = useLenis();
   const headerUl = useRef(null);
   const stickyHeader = useRef(null);

   useEffect(() => {
      // let heroText = document.querySelector('.hero__wrapper .hero-inner__wrapper .content__wrapper');
      // let heroTextHeight = heroText.getBoundingClientRect().height;
      // let heroTextTop = heroText.getBoundingClientRect().top;
      // let headerPaddingTop = window.innerWidth >= 768 ? 34 : 30;

      // if(heroText) {
      //    stickyHeader.current.style.marginTop = `${heroTextHeight + heroTextTop - headerPaddingTop}px`;
      // }

      gsap.to(headerUl.current, {
         y: 0,
         opacity: 1,
         duration: .5,
         delay: 1.7,
         ease: 'ease'
      })
   }, []);

   const handleScrollToTop = (target, e) => {
      e.preventDefault(); // Sayfanın default davranışını engelle
      if (lenis) {
         lenis.scrollTo(target, { duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 3) });
      } else {
         window.scrollTo({ target, behavior: 'smooth' }); // Lenis yoksa fallback olarak normal scroll
      }
   };

   return (
      <div className='sticky-header__wrapper'>
         <header className='sticky__header' ref={stickyHeader}>
            <div className="header__layer">
               <ul ref={headerUl}>
                  <li>
                     <span onClick={(e) => handleScrollToTop('.portfolio__wrapper', e)}>PORTFOLIO</span>
                  </li>
                  <li>
                     <span onClick={(e) => handleScrollToTop('.partners__wrapper', e)}>OUR PARTNERS</span>
                  </li>
                  <li>
                     <span onClick={(e) => handleScrollToTop('footer', e)}>CONTACT</span>
                  </li>
               </ul>
            </div>
         </header>
      </div>
   )
}
