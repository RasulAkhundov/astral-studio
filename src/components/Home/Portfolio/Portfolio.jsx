import React from 'react';
import './portfolio.scss';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className='portfolio__wrapper'>
      <div className="line"></div>
      <div className="portfolio-inner__wrapper">
        <Image
          src={'/images/portfolio-bg.png'}
          width={2880}
          height={1500}
          alt='astral studio'
          quality={100}
        />

        <svg className='play__btn' xmlns="http://www.w3.org/2000/svg" width="100" height="102" viewBox="0 0 100 102" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M50 101.134C77.6142 101.134 100 78.6881 100 51C100 23.312 77.6142 0.866333 50 0.866333C22.3858 0.866333 0 23.312 0 51C0 78.6881 22.3858 101.134 50 101.134ZM39.5263 69.6579L71.1053 51.377L39.5263 33.0961V69.6579Z" fill="white" />
        </svg>
      </div>
    </div>
  )
}
