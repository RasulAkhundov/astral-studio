'use client';
import React, { useEffect, useState, useRef } from 'react';
import './portfolio.scss';
import Image from 'next/image';
import { useLenis } from '@/utils/LenisProvider';
import VideoModal from '@/layouts/VideoModal/VideoModal';

export default function Portfolio() {
  const lenis = useLenis();
  const iframeRef = useRef(null);
  let player = null;
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
            ref={iframeRef}
            src="https://player.vimeo.com/video/1057306776?h=5b3c302210&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&controls=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            title="BEST VIDEO ASTRAL EVER">
          </iframe>
        </div>

        <svg className='play__btn' xmlns="http://www.w3.org/2000/svg" width="100" height="102" viewBox="0 0 100 102" fill="none" onClick={handleOpen}>
          <path fillRule="evenodd" clipRule="evenodd" d="M50 101.134C77.6142 101.134 100 78.6881 100 51C100 23.312 77.6142 0.866333 50 0.866333C22.3858 0.866333 0 23.312 0 51C0 78.6881 22.3858 101.134 50 101.134ZM39.5263 69.6579L71.1053 51.377L39.5263 33.0961V69.6579Z" fill="white" />
        </svg>
      </div>

      {isModalOpen && <VideoModal setIsModalOpen={setIsModalOpen} />} {/* Modal Aç */}
    </div>
  );
}
