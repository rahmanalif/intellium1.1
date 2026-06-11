import React from 'react';
import StyledButton from './StyledButton';
import Image from 'next/image';

const partners = [
  { name: 'Bongo', src: 'https://scalecraftit.com/_next/static/media/bongo.147xbw9-a2kl5.svg' },
  { name: 'Gozayaan', src: 'https://scalecraftit.com/_next/static/media/gozayaan.0vj-w5znr~-1s.svg' },
  { name: 'Wire', src: 'https://scalecraftit.com/_next/static/media/wire.0uki06bdc~0p2.svg' },
  { name: 'Fashol', src: 'https://scalecraftit.com/_next/static/media/fashol.03fncx4k4.-~y.svg' },
  { name: 'Praava', src: 'https://scalecraftit.com/_next/static/media/praava.0o~wp51~_h36b.svg' },
  { name: 'Pickaboo', src: 'https://scalecraftit.com/_next/static/media/pickaboo.08vus.yz7a3ye.svg' },
  { name: 'Ayykor', src: 'https://scalecraftit.com/_next/static/media/ayykor.07h56rf-n8wel.svg' },
  { name: 'Audacity', src: 'https://scalecraftit.com/_next/static/media/audacity.0qmlil4.z03t0.svg' },
  { name: 'Anwar', src: 'https://scalecraftit.com/_next/static/media/anwar.0l-fmv2trjze_.svg' },
  { name: 'Wegro', src: 'https://scalecraftit.com/_next/static/media/wegro.0s4bpw_wh3z~8.svg' },
  { name: 'PriyoShop', src: 'https://scalecraftit.com/_next/static/media/priyoShop.0betnktxow~y4.svg' },
  { name: 'Singularity', src: 'https://scalecraftit.com/_next/static/media/singularity.035k915rf2xa3.svg' },
];

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black pt-24 lg:pt-31">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-32 lg:-left-72 -top-10 lg:-top-22.5 h-100 lg:h-180 w-100 lg:w-180 rounded-full bg-[#2d4cab] opacity-45 blur-[80px] lg:blur-[120px]"></div>
        <div className="absolute left-10 lg:left-16.25 -top-20 lg:-top-33.25 h-100 lg:h-180 w-100 lg:w-180 rounded-full bg-[rgba(218,91,211,0.2)] blur-[80px] lg:blur-[125px]"></div>
      </div>

      <div className="relative mx-auto flex max-w-[1440px] flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-10 lg:px-30 py-6 gap-12 lg:gap-0">
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
            <StyledButton href="/#contact" className="w-full sm:w-auto px-6 py-3">
              Get in Touch
            </StyledButton>
          </div>
        </div>

        {/* Right Content - Video Container */}
        <div className="relative w-full max-w-[595px] aspect-[595/407] lg:w-[595px] lg:h-[407px] shrink-0">
          <div className="absolute inset-0 flex items-center justify-center [isolation:isolate]" style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 85%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 85%)' }}>
            <video 
              className="absolute inset-0 h-full w-full object-cover mix-blend-screen scale-[1.1] sm:scale-100"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Logo Marquee Section */}
      <div className="relative z-10 mx-auto mt-10 lg:mt-16 max-w-[1440px] overflow-hidden py-6">
        <div className="flex w-max animate-logo-cloud items-center gap-6 lg:gap-8 pr-6 lg:pr-8">
          {[...partners, ...partners].map((logo, index) => (
            <div 
              key={index}
              className="flex h-6 lg:h-8 w-24 lg:w-30 shrink-0 items-center justify-center"
            >
              <Image 
                src={logo.src} 
                alt={logo.name} 
                width={120} 
                height={40} 
                className="w-full h-auto object-contain opacity-30"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
