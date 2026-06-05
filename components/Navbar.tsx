import React from 'react';
import GlassSurface from './GlassSurface';
import Link from 'next/link';
import LogoButton from './LogoButton';

const Navbar = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <GlassSurface
        width="auto"
        height={80}
        borderRadius={40}
        backgroundOpacity={0.08}
        distortionScale={-100}
        redOffset={0}
        greenOffset={4}
        blueOffset={8}
        className="w-fit px-1"
      >
        <div className="flex items-center w-full h-full gap-2">
          {/* Logo Section */}
          <Link href="/" className="h-full flex items-center">
            <LogoButton />
          </Link>

          {/* Links Section */}
          <div className="flex items-center gap-6 px-4">
            <Link href="/" className="text-sm font-semibold text-white/70 hover:text-white transition-colors drop-shadow-sm">Home</Link>
            <Link href="/services" className="text-sm font-medium text-white/70 hover:text-white transition-colors whitespace-nowrap drop-shadow-sm">Services</Link>
            <Link href="/about" className="text-sm font-medium text-white/70 hover:text-white transition-colors drop-shadow-sm">About</Link>
            <Link href="/blogs" className="text-sm font-medium text-white/70 hover:text-white transition-colors drop-shadow-sm">Blogs</Link>
            <Link href="/career" className="text-sm font-medium text-white/70 hover:text-white transition-colors drop-shadow-sm">Career</Link>
          </div>
        </div>
      </GlassSurface>
    </div>
  );
};

export default Navbar;
