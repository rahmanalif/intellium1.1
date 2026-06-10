"use client";

import React from 'react';
import Image from 'next/image';
import './LogoButton.css';

const LogoButton = () => {
  return (
    <div className="logo-button-container">
      <button className="button">
        <div className="dots_border" />
        <Image 
          src="/logo/image.png" 
          alt="Gridmaps Logo" 
          width={32} 
          height={32} 
          className="logo-img"
        />
        <span className="text_button">Gridmaps</span>
      </button>
    </div>
  );
}


export default LogoButton;
