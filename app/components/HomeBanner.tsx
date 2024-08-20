import React from 'react';
import { styleClasses } from  '@/Utils/tailwindClasses';

// Define the HomeBanner component
const HomeBanner = () => {
  return (
    <div className={styleClasses.homeBanner}>
      <div className={styleClasses.homeBannerSegragate}>
        {/* Text Content */}
        <div className={styleClasses.homeBannerLeft}>
          <h1 className={styleClasses.homeBannerTitle}>
            Artify
            <span className={styleClasses.homeBannerSubtitle}>Find Your Art Passion</span>
          </h1>
          <p className={styleClasses.homeBannerText}>
            Your hub for finding and exploring new artists and their creations.
            <br />View creative art exhibitions.
            <br />Purchase your favorite pieces.
          </p>
        </div>
        {/* Decorative Elements */}
        <div className={styleClasses.homeBannerRight}>
          <div className={styleClasses.homeBannerSimpleCircle}></div>
          <div className={styleClasses.homeBannerGradientCircle}></div>
          <div 
            className={styleClasses.homeBannerBigCircle}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
