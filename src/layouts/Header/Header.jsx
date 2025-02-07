'use client';
import React, { useEffect, useRef } from 'react';
import './header.scss';
import gsap from 'gsap';

export default function Header() {
   const headerUl = useRef(null);
   const stickyHeader = useRef(null);

   useEffect(() => {
      let heroText = document.querySelector('.hero__wrapper .hero-inner__wrapper .content__wrapper');
      let heroTextHeight = heroText.getBoundingClientRect().height;
      let heroTextTop = heroText.getBoundingClientRect().top;
      let headerPaddingTop = window.innerWidth >= 768 ? 34 : 30;

      if(heroText) {
         stickyHeader.current.style.marginTop = `${heroTextHeight + heroTextTop - headerPaddingTop}px`;
      }

      gsap.to(headerUl.current, {
         y: 0,
         opacity: 1,
         duration: .5,
         delay: 1.7,
         ease: 'ease'
      })
   }, [])

   return (
      <div className='sticky-header__wrapper'>
         <header className='sticky__header' ref={stickyHeader}>
            <div className="header__layer">
               <ul ref={headerUl}>
                  <li>
                     <span>PORTFOLIO</span>
                  </li>
                  <li>
                     <span>OUR PARTNERS</span>
                  </li>
                  <li>
                     <span>CONTACT</span>
                  </li>
               </ul>
            </div>
         </header>
      </div>
   )
}
