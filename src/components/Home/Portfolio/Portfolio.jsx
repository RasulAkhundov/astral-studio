'use client';
import React, { useEffect, useState, useRef } from 'react';
import './portfolio.scss';
import Image from 'next/image';
import { useLenis } from '@/utils/LenisProvider';
import VideoModal from '@/layouts/VideoModal/VideoModal';

export default function Portfolio() {
  const lenis = useLenis();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);

    let videoModal = document.querySelector('.video-modal__wrapper');
  };

  return (
    <div className='portfolio__wrapper' style={{ zIndex: isModalOpen ? 99999 : 2 }}>
      <div className="line"></div>
      <div className="portfolio-inner__wrapper">
        <div className="video__wrapper">
          <iframe
            src="https://player.vimeo.com/video/1057306776?h=5b3c302210&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&controls=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            title="BEST VIDEO ASTRAL EVER">
          </iframe>
        </div>

        <div className="play-btn__wrapper" onClick={handleOpen}>  
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
            <path d="M0 2.55551V12.1255C0 14.0855 2.13 15.3155 3.83 14.3355L7.98 11.9455L12.13 9.54551C13.83 8.56551 13.83 6.11551 12.13 5.13551L7.98 2.73551L3.83 0.345508C2.13 -0.634492 0 0.585507 0 2.55551Z" fill="white" />
          </svg>

          <span>play reel</span>
        </div>
      </div>

      {isModalOpen && <VideoModal setIsModalOpen={setIsModalOpen} />} {/* Modal Aç */}
    </div>
  );
}
