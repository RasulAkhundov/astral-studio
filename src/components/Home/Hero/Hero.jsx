import React from 'react';
import './hero.scss';
import Image from 'next/image';

export default function Hero() {
   return (
      <div className="hero__wrapper section__paddings">
         <div className="hero-inner__wrapper">

            <div className="model-render__wrapper">
               <Image
                  src={'/images/hero-render.png'}
                  width={335}
                  height={332}
                  quality={100}
                  alt='astral'
                  draggable={false}
               />
            </div>

            <div className="content__wrapper">
               <h2 className="text__wrapper text-gradient-color">
                  Bringing ideas to life with <p>powerful animations</p> and <p>hyper-efficient workflows.</p>
               </h2>
            </div>
         </div>
      </div>
   )
}
