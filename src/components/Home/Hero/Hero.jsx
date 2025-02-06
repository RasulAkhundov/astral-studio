'use client';
import React, { useEffect } from 'react';
import './hero.scss';
import Image from 'next/image';

export default function Hero() {

   useEffect(() => {
      let heroText = document.querySelector('.hero__wrapper .hero-inner__wrapper .content__wrapper');
      let heroTextHeight = heroText.getBoundingClientRect().height;

      if(heroTextHeight) {
         let loaderCenterLine = document.querySelector('.loader__wrapper .center__line');
         loaderCenterLine.style.minHeight = `${heroTextHeight + 10}px`
      }
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
