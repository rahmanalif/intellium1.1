import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StyledButton from './StyledButton';

interface ServicesProps {
  variant?: 'home' | 'dedicated';
}

const Services = ({ variant = 'home' }: ServicesProps) => {
  return (
    <div id="services">
      <section className="relative w-full overflow-hidden pt-12 md:pt-20 pb-16 md:pb-25">
        {/* Background Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bg-[#253a7a] blur-[60px] md:blur-[100px] opacity-50 rounded-full w-full max-w-[500px] h-[500px]" style={{ top: '10%', right: '-10%' }}></div>
          <div className="absolute bg-[rgba(218,91,211,0.6)] blur-[80px] md:blur-[120px] opacity-60 rounded-full w-full max-w-[400px] h-[400px]" style={{ top: '30%', right: '20%' }}></div>
          <div className="absolute bg-[#253a7a] blur-[60px] md:blur-[100px] opacity-40 rounded-full w-full max-w-[600px] h-[600px]" style={{ top: '50%', left: '-20%' }}></div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[120px]">
          {variant === 'home' ? (
            <>
              {/* Heading Section */}
              <div className="mb-8 md:mb-12 flex flex-col items-center gap-6">
                <h2 className="flex flex-wrap justify-center gap-2 md:gap-[12.9px] font-[Satoshi,sans-serif] text-4xl md:text-[48px] font-bold text-center">
                  <span className="bg-clip-text text-transparent leading-[1.2]" style={{ backgroundImage: 'linear-gradient(150deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}>
                    The Capabilities: The Power Spectrum
                  </span>
                </h2>
                <div className="max-w-[720px] text-center font-[Satoshi,sans-serif] text-lg md:text-xl">
                  <span className="bg-clip-text text-transparent leading-relaxed block" style={{ backgroundImage: 'linear-gradient(178deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}>
                    One Partner. Total Coverage of Tech, Design, & Marketing. Stop juggling vendors. We build the entire digital engine your business runs on.
                  </span>
                </div>
              </div>

              {/* Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full auto-rows-[minmax(350px,auto)] xl:grid-rows-[350px_350px_350px]">
                
                {/* 1. Web Development - Top Left (Spans 2 cols) */}
                <div className="relative flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-[#525252] bg-[#0e111b] md:col-span-2 xl:col-span-2 xl:row-span-1 group transition-all duration-300">
                  <div className="absolute bg-[#253a7a] blur-[32px] -bottom-20 right-0 md:right-40 rounded-full w-[320px] h-80"></div>
                  <div className="relative z-10 flex flex-col gap-4 justify-start items-center text-center w-full sm:w-1/2 pt-12 pb-8 md:pt-16 md:pb-10 px-8 md:px-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-6 w-6 text-white/70" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                    <h3 className="font-[Satoshi,sans-serif] text-2xl md:text-[32px] font-bold bg-clip-text text-transparent leading-tight" style={{ backgroundImage: 'linear-gradient(171deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}>
                      Web Development
                    </h3>
                    <p className="font-[Satoshi,sans-serif] text-sm md:text-base bg-clip-text text-transparent leading-relaxed" style={{ backgroundImage: 'linear-gradient(168deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}>
                      Concepts transformed into high-velocity experiences. We engineer story-driven sites and products that never lag.
                    </p>
                  </div>
                  <div className="relative sm:absolute sm:top-0 sm:right-0 sm:bottom-0 w-full h-[250px] sm:h-full sm:w-1/2 rounded-b-2xl sm:rounded-b-none overflow-hidden">
                    <video 
                      className="absolute inset-0 h-full w-full object-cover"
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                    >
                      <source src="/web-development.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>

                {/* 2. UI/UX Design - Right Column (Spans 2 rows) */}
                <div className="relative flex flex-col overflow-hidden rounded-2xl border border-[#525252] bg-[#0e111b] md:col-span-1 xl:col-span-1 xl:row-span-2 xl:col-start-3 xl:row-start-1 group transition-all duration-300">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-[rgba(218,91,211,0.6)] opacity-40 blur-[60px]"></div>
                  <div className="flex-1 relative z-10 flex flex-col gap-4 items-center justify-start text-center pt-12 pb-8 md:pt-16 md:pb-10 px-8 md:px-10 max-w-[400px] xl:max-w-none mx-auto min-h-[300px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette h-6 w-6 text-white/70" aria-hidden="true">
                      <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    <h3 className="font-[Satoshi,sans-serif] text-2xl md:text-[32px] font-bold bg-clip-text text-transparent leading-tight" style={{ backgroundImage: 'linear-gradient(168deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}>
                      UI/UX Design
                    </h3>
                    <p className="font-[Satoshi,sans-serif] text-sm md:text-base font-medium bg-clip-text text-transparent leading-relaxed" style={{ backgroundImage: 'linear-gradient(169deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}>
                      Immersive journeys. Elite aesthetics. We architect digital identities that give your brand a dominant global edge.
                    </p>
                  </div>
                  <div className="relative w-full h-[200px] md:h-[250px] xl:h-[350px] shrink-0">
                    <Image 
                      src="/uiux.webp" 
                      alt="UI/UX Design" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw" 
                      className="object-cover object-top" 
                    />
                  </div>
                </div>

                {/* 3. App Development - Middle Left (Spans 2 rows, under Web Dev) */}
                <div className="relative flex flex-col overflow-hidden rounded-2xl border border-[#525252] bg-[#0e111b] md:col-span-1 xl:col-span-1 xl:row-span-2 xl:col-start-1 xl:row-start-2 min-h-[450px] group transition-all duration-300">
                  <div className="absolute bg-[rgba(73,77,147,0.6)] blur-[60px] -bottom-20 left-1/2 -translate-x-1/2 rounded-full w-80 h-80 pointer-events-none"></div>
                  <div className="absolute bg-[rgba(218,91,211,0.6)] blur-2xl top-[40%] -right-10 w-40 h-40 opacity-20 pointer-events-none"></div>
                  <div className="flex-1 relative z-10 flex flex-col gap-4 items-center justify-start text-center pt-12 pb-8 md:pt-16 md:pb-10 px-8 md:px-10 max-w-[400px] xl:max-w-none mx-auto min-h-[300px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code h-6 w-6 text-white/70" aria-hidden="true">
                      <path d="m16 18 6-6-6-6"></path>
                      <path d="m8 6-6 6 6 6"></path>
                    </svg>
                    <h3 className="font-[Satoshi,sans-serif] text-2xl md:text-[32px] font-bold bg-clip-text text-transparent leading-tight" style={{ backgroundImage: 'linear-gradient(171deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}>
                      App Development
                    </h3>
                    <p className="font-[Satoshi,sans-serif] text-sm md:text-base bg-clip-text text-transparent leading-relaxed" style={{ backgroundImage: 'linear-gradient(172deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}>
                      Erase manual friction. We deploy intelligent software tailored to automate your most complex operations.
                    </p>
                  </div>
                  <div className="relative w-full h-[200px] xl:h-[340px] overflow-hidden shrink-0">
                    <Image 
                      src="/appdevelopment.webp" 
                      alt="App Development" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw" 
                      className="object-cover" 
                    />
                  </div>
                </div>

                {/* 4. Logo / Middle Placeholder */}
                <div className="hidden relative lg:flex items-center justify-center overflow-hidden rounded-2xl border border-[#525252] min-h-[250px] md:col-span-1 xl:col-span-1 xl:row-span-1 xl:col-start-2 xl:row-start-2 bg-[#080a11]">
                <Image 
                  src="/GridMaps_Icon_Pack/01_Big_FullDetail/GridMaps_Icon_Full_1024.png" 
                  alt="Gridmaps Logo" 
                  width={180} 
                  height={180} 
                  className="relative z-10 w-32 md:w-full h-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-700"
                />
                </div>


                {/* 5. Digital Marketing - Bottom Row (Spans 2 cols) */}
                <div className="relative flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-[#525252] bg-[#0e111b] md:col-span-2 xl:col-span-2 xl:row-span-1 xl:col-start-2 xl:row-start-3 group transition-all duration-300">
                  <div className="absolute bg-[rgba(30,46,94,0.7)] blur-[60px] -bottom-20 -right-10 rounded-full w-80 h-80 opacity-40"></div>
                  <div className="relative z-10 flex flex-col gap-4 justify-start items-center text-center w-full sm:w-1/2 pt-12 pb-8 md:pt-16 md:pb-10 px-8 md:px-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-text-search h-6 w-6 text-white/70" aria-hidden="true">
                      <path d="M21 5H3"></path>
                      <path d="M10 12H3"></path>
                      <path d="M10 19H3"></path>
                      <circle cx="17" cy="15" r="3"></circle>
                      <path d="m21 19-1.9-1.9"></path>
                    </svg>
                    <h3 className="font-[Satoshi,sans-serif] text-2xl md:text-[32px] font-bold bg-clip-text text-transparent leading-tight" style={{ backgroundImage: 'linear-gradient(170deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}>
                      Digital Marketing
                    </h3>
                    <p className="font-[Satoshi,sans-serif] text-sm md:text-base bg-clip-text text-transparent leading-relaxed" style={{ backgroundImage: 'linear-gradient(168deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}>
                      Surgical SEO. Data-backed growth. We don&apos;t just find your audience; we help you own the market.
                    </p>
                  </div>
                  <div className="relative sm:absolute sm:top-0 sm:right-0 sm:bottom-0 w-full h-[250px] sm:h-full sm:w-1/2 rounded-b-2xl sm:rounded-b-none overflow-hidden">
                    <Image 
                      src="/digitalmarketing.webp" 
                      alt="Digital Marketing" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw" 
                      className="object-cover object-center" 
                    />
                  </div>
                </div>

              </div>
              
              <div className="mt-12 flex justify-center">
                <Link href="/services">
                  <StyledButton>
                    See More
                  </StyledButton>
                </Link>
              </div>
            </>
          ) : (
            /* Dedicated Services Hero Section */
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
               <h1 className="text-white text-5xl font-bold">Our Services</h1>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
