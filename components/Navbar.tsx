"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import LogoButton from './LogoButton';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/#' },
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    // { label: 'Blogs', href: '/#blogs' },
    { label: 'Career', href: '/career' },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav 
        className="flex items-center justify-between md:justify-center w-full md:w-auto gap-4 md:gap-8 rounded-[32px] border border-[#404040] bg-white/5 px-2.5 py-2.5 md:pr-6 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] transition-all duration-300"
        style={{ backdropFilter: 'blur(8px)' }}
      >
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <LogoButton />
        </div>

        {/* Links Section */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.label}
              href={link.href} 
              className="font-[Satoshi,sans-serif] text-base font-medium text-[#a3a3a3] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 text-white mr-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Mobile Menu Dropdown (Logic retained from original) */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 md:hidden bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl">
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
      </nav>
    </div>
  );
};

export default Navbar;
