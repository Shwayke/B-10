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
            <span className={styleClasses.homeBannerSubtitle}>Buy Original Art</span>
          </h1>
          <p className={styleClasses.homeBannerText}>
            Discover and buy original, hand-crafted art directly from independent artists around the world. 
            <br />Find any art piece you desire.
            <br />Enjoy exploring art with us.
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
