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
                  src="/GridMaps_Icon_Pack/03_Small_Minimal/GridMaps_Icon_Small_128.png" 
                  alt="Gridmaps Logo" 
                  width={32} 
                  height={32} 
                  className="w-7 h-7 md:w-8 md:h-8 object-contain"
                />
                <span className="text-xl md:text-2xl font-bold text-white tracking-tight font-[Satoshi,sans-serif] uppercase">Gridmaps</span>
              </div>
            </Link>
            <p className="max-w-[300px] font-[Satoshi,sans-serif] text-sm text-[#a3a3a3] leading-relaxed">
              We build websites that convert, run marketing that fills your pipeline, and maintain everything so you can focus on growth.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex gap-8 sm:gap-12 lg:gap-20">
            <div className="flex flex-col gap-4">
              <h4 className="font-[Satoshi,sans-serif] text-sm font-bold text-white uppercase tracking-wider">Company</h4>
              <nav className="flex flex-col gap-2">
                <Link className="font-[Satoshi,sans-serif] text-sm text-[#a3a3a3] hover:text-white transition-colors" href="/about">About Us</Link>
                <Link className="font-[Satoshi,sans-serif] text-sm text-[#a3a3a3] hover:text-white transition-colors" href="/career">Careers</Link>
                <Link className="font-[Satoshi,sans-serif] text-sm text-[#a3a3a3] hover:text-white transition-colors" href="/#services">Services</Link>
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-[Satoshi,sans-serif] text-sm font-bold text-white uppercase tracking-wider">Connect</h4>
              <nav className="flex flex-col gap-2">
                <Link className="font-[Satoshi,sans-serif] text-sm text-[#a3a3a3] hover:text-white transition-colors" href="https://linkedin.com">LinkedIn</Link>
                <Link className="font-[Satoshi,sans-serif] text-sm text-[#a3a3a3] hover:text-white transition-colors" href="https://twitter.com">Twitter</Link>
                <Link className="font-[Satoshi,sans-serif] text-sm text-[#a3a3a3] hover:text-white transition-colors" href="mailto:hello@gridmaps.com">Email Us</Link>
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-[Satoshi,sans-serif] text-sm font-bold text-white uppercase tracking-wider">Legal</h4>
              <nav className="flex flex-col gap-2">
                <Link className="font-[Satoshi,sans-serif] text-sm text-[#a3a3a3] hover:text-white transition-colors" href="#">Privacy Policy</Link>
                <Link className="font-[Satoshi,sans-serif] text-sm text-[#a3a3a3] hover:text-white transition-colors" href="#">Terms of Service</Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-[Satoshi,sans-serif] text-xs text-[#525252]">
            © {new Date().getFullYear()} Gridmaps. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link className="font-[Satoshi,sans-serif] text-xs text-[#525252] hover:text-white transition-colors" href="#">Privacy Policy</Link>
            <Link className="font-[Satoshi,sans-serif] text-xs text-[#525252] hover:text-white transition-colors" href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
