"use client";

import React from 'react';
import './LogoButton.css';

const LogoButton = () => {
  return (
    <div className="logo-button-container">
      <button className="button">
        <div className="dots_border" />
        <span className="text_button">Gridmaps</span>
      </button>
    </div>
  );
}


export default LogoButton;
