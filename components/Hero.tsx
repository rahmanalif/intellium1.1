import React from 'react';
import StyledButton from './StyledButton';

const logos = [
  {
    name: 'Vercel',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg',
  },
  {
    name: 'Nextjs',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg',
  },
  {
    name: 'Prime',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg',
  },
  {
    name: 'Trustpilot',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg',
  },
  {
    name: 'Webflow',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg',
  },
  {
    name: 'Airbnb',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg',
  },
  {
    name: 'Tina',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg',
  },
  {
    name: 'Stackoverflow',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg',
  },
  {
    name: 'mistral',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg',
  },
];

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden flex flex-col min-h-screen bg-black">
      {/* Background Glows - Matching Screenshot Aesthetic with very subtle visibility */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Large Left Purple Glow - Minimal Opacity */}
        <div className="absolute -left-[20%] -top-[10%] h-[120%] w-[80%] rounded-full bg-[#4d07e3] opacity-5 blur-[120px]"></div>
        <div className="absolute -left-[10%] top-[10%] h-[80%] w-[60%] rounded-full bg-[#9111e6] opacity-5 blur-[100px]"></div>
        <div className="absolute left-[0%] top-[25%] h-[50%] w-[40%] rounded-full bg-[#7a09c2] opacity-5 blur-[80px]"></div>
        
        {/* Subtle Right Dark Accents */}
        <div className="absolute -right-[10%] -bottom-[10%] h-[60%] w-[40%] rounded-full bg-[#1e3a8a] opacity-[0.03] blur-[140px]"></div>
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-10 lg:px-[120px] pt-32 lg:pt-40 pb-12 gap-12 lg:gap-0 relative z-10 w-full">
        {/* Left Content */}
        <div className="flex w-full lg:w-[540px] flex-col gap-6 lg:gap-8 items-center lg:items-start text-center lg:text-left">
          <div className="flex flex-col gap-5">
            <h1 
              className="font-[Satoshi,sans-serif] text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-[-0.84px] bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(160deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}
            >
              Digital Identity,<br />Orchestrated
            </h1>
            <div className="flex flex-col font-[Satoshi,sans-serif] text-lg lg:text-xl">
              <span 
                className="bg-clip-text text-transparent leading-[1.35]"
                style={{ backgroundImage: 'linear-gradient(176deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}
              >
                We fuse the precision of code with the soul of design. One identity. Total authority. Growth Everywhere.
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 sm:gap-6 mt-2 lg:mt-0">
            <StyledButton onClick={() => window.location.href = '/#contact'} className="w-full sm:w-auto">
              Get in Touch
            </StyledButton>
          </div>
        </div>

        {/* Right Content - Video Container with isolation and radial mask for perfect edge blending */}
        <div className="relative w-full max-w-[595px] aspect-[595/407] lg:w-[595px] lg:h-[407px] shrink-0 overflow-hidden lg:overflow-visible">
          <div 
            className="absolute inset-0 flex items-center justify-center [isolation:isolate]"
            style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 85%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 85%)' }}
          >
            {/* Subtle glow behind the isolated blending layer */}
            <div className="absolute inset-0 bg-[#3150aa]/5 blur-[100px] rounded-full -z-10"></div>
            
            <div className="relative w-full h-full mix-blend-screen">
              <video 
                className="absolute inset-0 h-full w-full object-cover scale-[1.1] sm:scale-100"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Cloud Section at the Bottom */}
      <div className="w-full pb-16 pt-8 z-10 mt-auto">
        <div className="mx-auto w-full px-4 md:px-8">
          <div
            className="group relative flex gap-6 overflow-hidden p-2"
            style={{
              maskImage:
                'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
            }}
          >
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex shrink-0 animate-logo-cloud group-hover:[animation-play-state:paused] flex-row justify-around gap-12"
                >
                  {logos.map((logo, key) => (
                    <img
                      key={key}
                      src={logo.url}
                      className="h-8 w-auto min-w-[100px] px-4 brightness-0 dark:invert opacity-40 hover:opacity-100 transition-opacity duration-300"
                      alt={`${logo.name}`}
                    />
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
