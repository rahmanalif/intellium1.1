"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import LogoButton from './LogoButton';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Career', href: '/career' },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div 
        className="bg-white/10 backdrop-blur-2xl shadow-xl shadow-black/10 border border-white/20 rounded-full px-6 py-3 transition-all duration-500 w-fit"
        style={{ backdropFilter: 'blur(20px) saturate(180%)' }}
      >
        <div className="flex items-center justify-between gap-8">
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0 transition-colors">
            <LogoButton />
          </Link>

          {/* Links Section - Kept relative/flex for compact fit instead of absolute center */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href} 
                className="relative text-white/70 hover:text-white transition-all cursor-pointer px-4 py-2 rounded-full font-medium text-sm group"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: 'rgba(255, 255, 255, 0.2) 0px 1px 1px inset' }}></span>
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-full text-white/70 hover:text-white hover:bg-white/20 md:hidden transition-all focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-2 pb-2 min-w-[200px]">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/70 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
