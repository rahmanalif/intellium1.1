"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyledButton from '@/components/StyledButton';
import { MapPin, Clock, DollarSign, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const jobs = [
  {
    title: 'Junior Front End Developer',
    location: 'Remote',
    salary: 'BDT 20,000 – 30,000',
    type: 'Full-Time / Remote',
    category: 'Engineering',
    description: 'We are looking for a passionate Junior Front End Developer to help us build beautiful, responsive, and high-performance web experiences.'
  },
  {
    title: 'Senior Client Manager – Property Preservation',
    location: 'Remote',
    salary: '40,000 - 60,000 BDT',
    type: 'Full-Time / Remote',
    category: 'Management',
    description: 'Lead client relationships and oversee property preservation operations with a focus on excellence and radical reliability.'
  },
  {
    title: 'Business Development Representative (BDR)',
    location: 'Remote',
    salary: '20,000 - 40,000 BDT',
    type: 'Full-Time / Remote',
    category: 'Sales',
    description: 'Drive growth by identifying new opportunities and building strategic partnerships with global clients.'
  },
  {
    title: 'Junior Executive Officer',
    location: 'Remote',
    salary: '15,000 BDT',
    type: 'Full-Time / Remote',
    category: 'Operations',
    description: 'Support daily business operations and ensure efficient execution of administrative tasks within our tight-knit team.'
  }
];

export default function CareerPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-black overflow-x-hidden">

      {/* ── Hero Section ── */}
      <section className="relative w-full overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28">
        {/* Background glows matching site style */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[500px] opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(145,17,230,0.45) 0%, rgba(77,7,227,0.2) 45%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(37,58,122,0.8) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[120px] flex flex-col items-center text-center gap-6">
          <h1
            className="font-[Satoshi,sans-serif] text-4xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] tracking-[-1px] bg-clip-text text-transparent max-w-4xl"
            style={{
              backgroundImage: 'linear-gradient(165deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)',
            }}
          >
            Shape the Future <br className="hidden md:block" /> of Digital Evolution
          </h1>

          <p className="max-w-[700px] font-[Satoshi,sans-serif] text-base md:text-[20px] leading-[1.5] text-[#a3a3a3]">
            Join a powerhouse team of engineers and designers. We&apos;re looking for ambitious individuals who care about craft and are ready to move the needle.
          </p>
        </div>
      </section>

      {/* ── Job Listings ── */}
      <section id="openings" className="relative w-full py-16 md:py-24 bg-[#060606] border-t border-white/5 flex-grow">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[120px]">
          
          <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="font-[Satoshi,sans-serif] text-3xl md:text-[40px] font-bold text-white tracking-tight">
                Current Openings
              </h2>
              <p className="text-[#a3a3a3] font-[Satoshi,sans-serif] text-lg">
                Explore remote-first opportunities across multiple disciplines.
              </p>
            </div>
            <div className="text-[#525252] font-[Satoshi,sans-serif] text-sm font-medium uppercase tracking-widest">
              {jobs.length} Positions Available
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {jobs.map((job, index) => (
              <div 
                key={index} 
                className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-10 rounded-2xl bg-[#0f0f0f] border border-white/5 hover:border-white/10 hover:bg-[#111111] transition-all duration-500"
              >
                {/* Job Info */}
                <div className="flex flex-col gap-6 max-w-2xl">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#f59768] font-[Satoshi,sans-serif] text-xs font-bold uppercase tracking-widest">
                      {job.category}
                    </span>
                    <h3 className="font-[Satoshi,sans-serif] text-2xl md:text-3xl font-bold text-white group-hover:text-[#4992C1] transition-colors duration-300">
                      {job.title}
                    </h3>
                  </div>
                  
                  {/* Meta Details */}
                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    <div className="flex items-center gap-2 text-[#a3a3a3]">
                      <MapPin className="w-4 h-4 text-[#4992C1]" />
                      <span className="text-sm font-medium">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#a3a3a3]">
                      <Clock className="w-4 h-4 text-[#4992C1]" />
                      <span className="text-sm font-medium">{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#a3a3a3]">
                      <DollarSign className="w-4 h-4 text-[#4992C1]" />
                      <span className="text-sm font-medium">{job.salary}</span>
                    </div>
                  </div>

                  <p className="text-[#737373] font-[Satoshi,sans-serif] text-base leading-relaxed line-clamp-2 md:line-clamp-none">
                    {job.description}
                  </p>
                </div>

                {/* Action */}
                <div className="mt-8 md:mt-0">
                  <StyledButton href={`mailto:careers@gridmaps.com?subject=Application for ${job.title}`}>
                    APPLY NOW
                    <ArrowUpRight className="w-4 h-4" />
                  </StyledButton>
                </div>
              </div>
            ))}
          </div>

          {/* ── Empty State / Spontaneous Application ── */}
          <div className="mt-20 p-10 md:p-16 rounded-3xl bg-gradient-to-br from-[#111] to-black border border-white/5 flex flex-col items-center text-center gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f59768]/5 blur-[80px] rounded-full"></div>
            <h3 className="font-[Satoshi,sans-serif] text-2xl md:text-3xl font-bold text-white relative z-10">
              Don&apos;t see a perfect fit?
            </h3>
            <p className="max-w-xl text-[#a3a3a3] text-lg relative z-10">
              We&apos;re always looking for exceptional talent. If you think you belong at Gridmaps, send us your resume and tell us why.
            </p>
            <Link href="mailto:careers@gridmaps.com" className="relative z-10">
              <StyledButton>SPONTANEOUS APPLICATION</StyledButton>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
