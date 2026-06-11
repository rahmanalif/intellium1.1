"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LogoButton = () => {
  return (
    <Link 
      href="/"
      className="flex items-center gap-2 justify-center rounded-full border border-[#1F1FD3] px-5 py-2.5 text-sm font-bold text-white shadow-[0px_4px_20px_0px_rgba(145,172,255,0.15)] relative overflow-hidden shrink-0 transition-transform hover:scale-105 active:scale-95"
      style={{
        background: 'radial-gradient(ellipse at center bottom, rgba(76, 76, 227, 1) 0%, rgba(0, 0, 38, 1) 100%)'
      }}
    >
      <div className="relative z-10 flex items-center gap-2">
        <Image 
          src="/gridmaps_icon.svg" 
          alt="Gridmaps" 
          width={24} 
          height={24} 
          className="h-6 w-6"
        />
        <span className="text-sm font-bold tracking-tight">GridMaps</span>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-full shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.4),inset_0px_-6px_4px_0px_rgba(0,0,0,0.2)]"></div>
    </Link>
  );
}

export default LogoButton;
