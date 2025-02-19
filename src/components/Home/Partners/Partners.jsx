'use client';
import React, { useEffect, useRef, useState } from 'react';
import './partners.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Partners() {
   const [hover, setHover] = useState(false);

   let partners = [
      {
         img: '/images/partners/ac.png',
         title: '3 ac'
      },
      {
         img: '/images/partners/ebull.jpg',
         title: 'ebull'
      },
      {
         img: '/images/partners/kermit.png',
         title: 'kermit'
      },
      {
         img: '/images/partners/klaus.png',
         title: 'klaus'
      },
      {
         img: '/images/partners/magaverse.jpg',
         title: 'magaverse'
      },
      {
         img: '/images/partners/night.jpg',
         title: 'night'
      },
      {
         img: '/images/partners/oxfun.png',
         title: 'oxfun'
      },
      {
         img: '/images/partners/parry.png',
         title: 'parry'
      },
      {
         img: '/images/partners/scrat.jpg',
         title: 'scrat'
      },
      {
         img: '/images/partners/wap.jpeg',
         title: 'wap'
      },
      {
         img: '/images/partners/wolf.jpg',
         title: 'wolf'
      }
   ]

   const extendedPartners = [...partners, ...partners];

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      let title = document.querySelector('.partners__wrapper .content__wrapper .title__wrapper h5');

      gsap.to(title, {
         y: 0,
         scrollTrigger: {
            trigger: title,
            start: 'top bottom',
            end: 'top center',
            scrub: true
         }
      });

      const singlePartners = gsap.utils.toArray(".single-partner__wrapper");

      const loop = horizontalLoop(singlePartners, {
         // paused: hover ? true : false,
         repeat: -1,
         speed: 1.25,
         paddingRight: window.innerWidth > 768 ? 70 : 30
      });

      function horizontalLoop(items, config) {
         items = gsap.utils.toArray(items);
         config = config || {};
         let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100) }),
            length = items.length,
            startX = items[0].offsetLeft,
            times = [],
            widths = [],
            xPercents = [],
            curIndex = 0,
            pixelsPerSecond = (config.speed || 1) * 100,
            snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
            totalWidth, curX, distanceToStart, distanceToLoop, item, i;
         gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
            xPercent: (i, el) => {
               let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
               xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
               return xPercents[i];
            }
         });
         gsap.set(items, { x: 0 });
         totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
         for (i = 0; i < length; i++) {
            item = items[i];
            curX = xPercents[i] / 100 * widths[i];
            distanceToStart = item.offsetLeft + curX - startX;
            distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
            tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
               .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
               .add("label" + i, distanceToStart / pixelsPerSecond);
            times[i] = distanceToStart / pixelsPerSecond;
         }
         function toIndex(index, vars) {
            vars = vars || {};
            (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
            let newIndex = gsap.utils.wrap(0, length, index),
               time = times[newIndex];
            if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
               vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
               time += tl.duration() * (index > curIndex ? 1 : -1);
            }
            curIndex = newIndex;
            vars.overwrite = true;
            return tl.tweenTo(time, vars);
         }
         tl.next = vars => toIndex(curIndex + 1, vars);
         tl.previous = vars => toIndex(curIndex - 1, vars);
         tl.current = () => curIndex;
         tl.toIndex = (index, vars) => toIndex(index, vars);
         tl.times = times;
         tl.progress(1, true).progress(0, true); // pre-render for performance
         if (config.reversed) {
            tl.vars.onReverseComplete();
            tl.reverse();
         }
         return tl;
      }
   }, []);

   // const handleMouseEnter = () => {
   //    if (window.innerWidth > 768) {
   //       setHover(true);
   //    }
   // };

   // const handleMouseLeave = () => {
   //    if (window.innerWidth > 768) {
   //       setHover(false);
   //    }
   // };

   return (
      <div className='partners__wrapper'>

         <Image
            src={'/images/partners-bg.png'}
            className='bg__img'
            width={2880}
            height={2160}
            alt='astral studio'
            quality={100}
         />

         <div className="partners-inner__wrapper">
            <div className="content__wrapper">
               <div className="title__wrapper">
                  <h5>Our Partners:</h5>
               </div>

               <div className="marquee__wrapper">
                  <div className="marquee-inner__wrapper"
                     // onMouseEnter={handleMouseEnter}
                     // onMouseLeave={handleMouseLeave}
                  >
                     {
                        extendedPartners.map((p, i) => (
                           <div className="single-partner__wrapper" key={i}>
                              <Image
                                 src={p.img}
                                 width={100}
                                 height={100}
                                 alt='astral-studios'
                                 quality={100}
                                 draggable={false}
                              />

                              <span>{p.title}</span>
                           </div>
                        ))
                     }
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
