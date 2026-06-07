import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StyledButton from './StyledButton';

const partners = [
  { name: 'Bongo', src: 'https://scalecraftit.com/_next/static/media/bongo.147xbw9-a2kl5.svg' },
  { name: 'Praava', src: 'https://scalecraftit.com/_next/static/media/praava.0o~wp51~_h36b.svg' },
  { name: 'Gozayaan', src: 'https://scalecraftit.com/_next/static/media/gozayaan.0vj-w5znr~-1s.svg' },
  { name: 'Wire', src: 'https://scalecraftit.com/_next/static/media/wire.0uki06bdc~0p2.svg' },
  { name: 'Fashol', src: 'https://scalecraftit.com/_next/static/media/fashol.03fncx4k4.-~y.svg' },
  { name: 'Pickaboo', src: 'https://scalecraftit.com/_next/static/media/pickaboo.08vus.yz7a3ye.svg' },
  { name: 'Ayykor', src: 'https://scalecraftit.com/_next/static/media/ayykor.07h56rf-n8wel.svg' },
  { name: 'Audacity', src: 'https://scalecraftit.com/_next/static/media/audacity.0qmlil4.z03t0.svg' },
  { name: 'Anwar', src: 'https://scalecraftit.com/_next/static/media/anwar.0l-fmv2trjze_.svg' },
  { name: 'Wegro', src: 'https://scalecraftit.com/_next/static/media/wegro.0s4bpw_wh3z~8.svg' },
  { name: 'PriyoShop', src: 'https://scalecraftit.com/_next/static/media/priyoShop.0betnktxow~y4.svg' },
  { name: 'Singularity', src: 'https://scalecraftit.com/_next/static/media/singularity.035k915rf2xa3.svg' },
];

const AboutUs = () => {
  return (
    <section id="about" className="relative w-full overflow-hidden py-16 md:py-25 bg-black">
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[120px]">
        
        {/* Header */}
        <div className="mb-10 md:mb-16 flex flex-col items-center gap-4 md:gap-5 text-center">
          <h2 
            className="font-[Satoshi,sans-serif] text-4xl md:text-[48px] font-bold leading-none tracking-[-0.5px] bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(165deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}
          >
            About Us: The Powerhouse
          </h2>
          <p className="max-w-[904px] font-[Satoshi,sans-serif] text-base md:text-[20px] leading-[1.4] md:leading-[1.35] text-[#a3a3a3]">
            We solve real problems with hardcore engineering and obsessive design. Reliability and success aren't just goals - it’s our basic target.
          </p>
          <Link href="/#contact">
            <StyledButton className="w-fit">
              START YOUR PROJECT
            </StyledButton>
          </Link>
        </div>

        {/* Content Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 items-stretch">
          
          {/* Left Column - Partners & Stats */}
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex flex-col gap-6 md:gap-10">
              <h3 className="font-[Satoshi,sans-serif] text-xl md:text-[24px] font-bold text-[#fafafa] text-center lg:text-left">
                Brands we've partnered with
              </h3>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 items-center">
                {partners.map((partner, index) => (
                  <div 
                    key={index}
                    className="flex h-6 md:h-8.25 items-center justify-center transform hover:scale-110 transition-all duration-300"
                  >
                    <div className="relative h-full flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                      <Image 
                        alt={partner.name} 
                        src={partner.src} 
                        width={100} 
                        height={32} 
                        className="h-full w-auto max-w-[80px] md:max-w-[100px] object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="mt-10 md:mt-14 flex flex-col sm:flex-row md:grid md:grid-cols-3 gap-3 md:gap-4 lg:gap-3 text-center">
              <div className="flex flex-1 flex-col gap-1 rounded-xl bg-[#171717] border border-white/5 px-3 py-6 md:py-4 transition-colors hover:border-white/10">
                <span className="font-[Satoshi,sans-serif] text-3xl md:text-[40px] font-bold text-[#f59768] leading-tight md:leading-[1.35]">5+</span>
                <span className="font-[Satoshi,sans-serif] text-xs md:text-sm font-medium text-[#e5e5e5] uppercase">Years of Digital Evolution</span>
              </div>
              <div className="flex flex-1 flex-col gap-1 rounded-xl bg-[#171717] border border-white/5 px-3 py-6 md:py-4 transition-colors hover:border-white/10">
                <span className="font-[Satoshi,sans-serif] text-3xl md:text-[40px] font-bold text-[#f59768] leading-tight md:leading-[1.35]">25+</span>
                <span className="font-[Satoshi,sans-serif] text-xs md:text-sm font-medium text-[#e5e5e5] uppercase"> Projects Shipped & Scaling</span>
              </div>
              <div className="flex flex-1 flex-col gap-1 rounded-xl bg-[#171717] border border-white/5 px-3 py-6 md:py-4 transition-colors hover:border-white/10">
                <span className="font-[Satoshi,sans-serif] text-3xl md:text-[40px] font-bold text-[#f59768] leading-tight md:leading-[1.35]">18+</span>
                <span className="font-[Satoshi,sans-serif] text-xs md:text-sm font-medium text-[#e5e5e5] uppercase">Global Clients Served</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hidden lg:block relative w-[504px] shrink-0 aspect-[4/3] rounded-xl overflow-hidden self-center border border-white/5">
            <Image 
              alt="About Us" 
              src="https://scalecraftit.com/_next/static/media/about.0j79dkyw3p9fy.webp" 
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
