import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/5 bg-[#060606] pt-12 md:pt-20 pb-6 md:pb-10">
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-0">
          <div className="flex flex-col gap-6">
            <Link className="flex items-center gap-2" href="/">
              <div className="flex items-center gap-3">
                <Image 
                  src="/gridmaps_icon.svg" 
                  alt="Gridmaps Logo" 
                  width={32} 
                  height={32} 
                  className="w-7 h-7 md:w-8 md:h-8 object-contain"
                />
                <span className="text-xl md:text-2xl font-bold text-white tracking-tight font-[Satoshi,sans-serif]">Gridmaps</span>
              </div>
            </Link>
            <p className="max-w-[300px] font-[Satoshi,sans-serif] text-sm text-[#a3a3a3] leading-relaxed">
              We build websites that convert, run marketing that fills your pipeline, and maintain everything so you can focus on growth.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex gap-8 sm:gap-12 lg:gap-20">
            <div className="flex flex-col gap-4">
              <h5 className="font-[Satoshi,sans-serif] text-sm font-bold text-white text-nowrap">Company</h5>
              <div className="flex flex-col gap-3">
                <Link className="font-[Satoshi,sans-serif] text-sm text-[#a3a3a3] transition-colors hover:text-white" href="#">About</Link>
                <Link className="font-[Satoshi,sans-serif] text-sm text-[#a3a3a3] transition-colors hover:text-white" href="#">Careers</Link>
                <Link className="font-[Satoshi,sans-serif] text-sm text-[#a3a3a3] transition-colors hover:text-white" href="#">Blog</Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <h5 className="font-[Satoshi,sans-serif] text-sm font-bold text-white text-nowrap">Services</h5>
              <div className="flex flex-col gap-3">
                <Link className="font-[Satoshi,sans-serif] text-sm text-[#a3a3a3] transition-colors hover:text-white text-nowrap" href="#">Web Development</Link>
                <Link className="font-[Satoshi,sans-serif] text-sm text-[#a3a3a3] transition-colors hover:text-white text-nowrap" href="#">UI/UX Design</Link>
                <Link className="font-[Satoshi,sans-serif] text-sm text-[#a3a3a3] transition-colors hover:text-white text-nowrap" href="#">App Development</Link>
                <Link className="font-[Satoshi,sans-serif] text-sm text-[#a3a3a3] transition-colors hover:text-white text-nowrap" href="#">Digital Marketing</Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h5 className="font-[Satoshi,sans-serif] text-sm font-bold text-white text-nowrap">Resources</h5>
              <div className="flex flex-col gap-3">
                <Link className="font-[Satoshi,sans-serif] text-sm text-[#a3a3a3] transition-colors hover:text-white text-nowrap" href="#">Case Studies</Link>
                <Link className="font-[Satoshi,sans-serif] text-sm text-[#a3a3a3] transition-colors hover:text-white text-nowrap" href="#">Documentation</Link>
                <Link className="font-[Satoshi,sans-serif] text-sm text-[#a3a3a3] transition-colors hover:text-white text-nowrap" href="#">Support</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 gap-4 md:gap-0">
          <span className="font-[Satoshi,sans-serif] text-xs text-[#525252] text-center md:text-left">
            © 2026 Gridmaps. All rights reserved.
          </span>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link className="font-[Satoshi,sans-serif] text-xs text-[#525252] hover:text-white transition-colors" href="#">Privacy Policy</Link>
            <Link className="font-[Satoshi,sans-serif] text-xs text-[#525252] hover:text-white transition-colors" href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
