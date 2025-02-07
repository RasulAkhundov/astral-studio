'use client';
import React, { useEffect } from 'react';
import './hero.scss';
import Image from 'next/image';
import gsap from 'gsap';

export default function Hero() {

   useEffect(() => {
      let heroText = document.querySelector('.hero__wrapper .hero-inner__wrapper .content__wrapper');
      let heroTextHeight = heroText.getBoundingClientRect().height;
      let renderWrapper = document.querySelector('.hero__wrapper .model-render__wrapper');

      if(heroText) {
         let loaderCenterLine = document.querySelector('.loader__wrapper .center__line');
         loaderCenterLine.style.minHeight = `${heroTextHeight + window.innerWidth >= 768 ? 10 : 5}px`;
      }

      gsap.to(renderWrapper, {
         opacity: 1,
         delay: 2,
         duration: .5,
      })
   }, [])

   return (
      <div className="hero__wrapper section__paddings">
         <div className="model-render__wrapper">
            {/* <Image
                  src={'/images/hero-render.png'}
                  width={335}
                  height={332}
                  quality={100}
                  alt='astral'
                  draggable={false}
               /> */}
            <iframe src='https://my.spline.design/ai-c0da7bce2d50818ca5563cef28e6db5c/' frameBorder='0' width='100%' height='100%'></iframe>
         </div>

         <div className="hero-inner__wrapper">
            <div className="content__wrapper">
               <h2 className="text__wrapper text-gradient-color">
                  Bringing ideas to life with <p>powerful animations</p> and <p>hyper-efficient workflows.</p>
               </h2>
            </div>
         </div>
      </div>
   )
}
