'use client';
import React from 'react';
import { useLenis } from '@/utils/LenisProvider';

export default function VideoModal() {
   const lenis = useLenis();

   const handleClose = () => {
      let videoPlayer = document.querySelector('.video-modal__wrapper');

      if (lenis) {
         videoPlayer.classList.remove('show');
         lenis.start();
      }
   }

   return (
      <div className='video-modal__wrapper'>
         <div className="close__icon" onClick={handleClose}>
            <div className="arrow"></div>
            <div className="arrow"></div>
         </div>

         <div className="video__wrapper">

         </div>
      </div>
   )
}
