"use client";

import React from 'react';
import Link from 'next/link';

interface StyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
}

const StyledButton = ({ children, onClick, className = '', type = 'button', href }: StyledButtonProps) => {
  const baseClasses = `flex items-center gap-2 justify-center rounded-full border border-[#1F1FD3] px-5 py-2.5 text-sm font-bold text-white shadow-[0px_4px_20px_0px_rgba(145,172,255,0.15)] relative overflow-hidden shrink-0 transition-transform active:scale-95 ${className}`;
  const style = {
    background: 'radial-gradient(ellipse at center bottom, rgba(76, 76, 227, 1) 0%, rgba(0, 0, 38, 1) 100%)'
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 pointer-events-none rounded-full shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.4),inset_0px_-6px_4px_0px_rgba(0,0,0,0.2)]"></div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} style={style} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={baseClasses}
      style={style}
      onClick={onClick}
      type={type}
    >
      {content}
    </button>
  );
}

export default StyledButton;
