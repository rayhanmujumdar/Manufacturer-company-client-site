import React from "react";
import bg1 from '../../../image/bg1.jpg'
import bannarImg from '../../../image/bannerImg2.png'

const Banner = () => {
  return (
    <div>
        <div className="hero min-h-screen" style={{backgroundImage: `url(${bg1})`}}>
        <div className="hero-overlay bg-opacity-60" />
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row gap-x-11">
    <img src={bannarImg} className="max-w-sm rounded-lg shadow-2xl bg-black bg-opacity-50" alt="graphics card"/>
    <div className="text-white text-left">
      <h1 className="text-5xl font-bold">MSI GeForce RTX 3080 Gaming X Trio 10G</h1>
      <p className="py-6">The latest iteration of MSI’s iconic GAMING series once again brings performance, low-noise efficiency, and aesthetics that hardcore gamers have come to recognize and trust.</p>
      <button className="btn btn-primary">Get purchase</button>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Banner;
