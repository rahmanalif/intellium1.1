"use client";

import React from 'react';
import './StyledButton.css';

interface StyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = ({ children, onClick, className = '', type = 'button' }: StyledButtonProps) => {
  return (
    <div className={`styled-button-container ${className}`}>
      <button className="button" onClick={onClick} type={type}>
        <div className="dots_border" />
        <span className="text_button">{children}</span>
      </button>
    </div>
  );
}

export default StyledButton;
