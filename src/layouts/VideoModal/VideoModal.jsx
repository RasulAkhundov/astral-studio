'use client';
import React, { useEffect, useRef } from 'react';
import { useLenis } from '@/utils/LenisProvider';
import Player from '@vimeo/player';

export default function VideoModal({ setIsModalOpen }) {
   const lenis = useLenis();
   const iframeRef = useRef(null);
   let player = null;

   useEffect(() => {
      if (iframeRef.current) {
         player = new Player(iframeRef.current);
         player.play(); // Modal açıldığında oynat
      }

      if (lenis) {
         lenis.stop(); // Lenis scroll'u durdur
      }

      // Normal scroll'u da tamamen kapat
      document.body.style.overflow = 'hidden';

      return () => {
         if (player) {
            player.pause(); // Modal kapanırken videoyu durdur
         }

         if (lenis) {
            setTimeout(() => {
               lenis.start(); // Smooth scroll'u tekrar aktif et
               lenis.resize(); // Sayfanın yüksekliğini güncelle
            }, 100);
         }

         // Normal scroll'u tekrar aç
         document.body.style.overflow = '';
      };
   }, [lenis]);

   const handleClose = () => {
      setIsModalOpen(false); // Modal'ı kapat
   };

   return (
      <div className='video-modal__wrapper show' onClick={handleClose}>
         <div className="close__icon">
            <div className="arrow"></div>
            <div className="arrow"></div>
         </div>

         <div className="video__wrapper" onClick={(e) => e.stopPropagation()}>
            <iframe 
               ref={iframeRef}
               src="https://player.vimeo.com/video/1057306776?h=5b3c302210&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479" 
               frameBorder="0" 
               allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
               style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
               title="BEST VIDEO ASTRAL EVER">
            </iframe>
         </div>
      </div>
   );
}
