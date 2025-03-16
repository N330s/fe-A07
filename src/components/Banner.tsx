'use client'

import styles from './banner.module.css';
import { useState } from 'react';

const Banner = () => {
  const bannerImages = [
    '/img/cover.jpg',
    '/img/cover2.jpg',
    '/img/cover3.jpg',
    '/img/cover4.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBannerClick = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.banner} onClick={handleBannerClick}>
      <img 
        src={bannerImages[currentImageIndex]} 
        alt="venue" 
        className={styles.bannerImage} 
      />
      <div className={styles.bannerText}>
        <h1 className='text-4xl font-medium'>where every event finds its venue</h1>
        <h3 className='text-xl'>Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we connect people to the perfect place.</h3>
      </div>
    </div>
  );
};

export default Banner;