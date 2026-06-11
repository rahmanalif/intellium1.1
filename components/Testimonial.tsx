import React from 'react';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-25 bg-black">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/4 md:left-52 -top-10 md:-top-19 h-[300px] w-[300px] md:h-[434px] md:w-[434px] rounded-full bg-[#cb57dd] opacity-15 blur-[60px]"></div>
        <div className="absolute left-10 md:left-18 -top-20 md:-top-43.75 h-[200px] w-[200px] md:h-[146px] md:w-[200px] rounded-full bg-[#3150aa] opacity-60 blur-[60px]"></div>
        <div className="absolute -bottom-10 right-10 md:-bottom-10.75 md:right-18 h-[300px] w-[300px] md:h-[446px] md:w-[446px] rounded-full bg-[#799afa] opacity-20 blur-[75px]"></div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 md:px-10">
        <div className="relative flex w-full flex-col items-center">
          <div className="flex flex-col items-center gap-8 md:gap-12.5 w-full">
            {/* Quote Icon */}
            <div className="relative h-16 w-16 md:h-20.5 md:w-20.5 shrink-0">
              <Image 
                src="/svg/qoute.084ec6knl-k~z.svg" 
                alt="Quote Icon" 
                fill 
                className="object-contain opacity-50"
              />
            </div>

            <div className="flex flex-col items-center gap-6 md:gap-8 w-full">
              <p 
                className="w-full max-w-[870px] text-center font-[Satoshi,sans-serif] text-[20px] sm:text-[24px] md:text-[32px] font-bold bg-clip-text text-transparent leading-relaxed md:leading-snug" 
                style={{ backgroundImage: 'linear-gradient(169deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}
              >
                “Gridmaps has taken our team to total transformation. The AI-powered insights have already saved us dozens of hours weekly. Simplicity at its most powerful. Highly recommended.”
              </p>

              <div className="flex items-center gap-3 md:gap-4 mt-2">
                <div className="relative h-10 w-10 md:h-12.5 md:w-12.5 overflow-hidden rounded-full shrink-0">
                  <Image 
                    src="/GridMaps_Icon_Pack/02_Medium_Simplified/GridMaps_Icon_Medium_256.png" 
                    alt="Person" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-0.5 text-white">
                  <span className="font-[Satoshi,sans-serif] text-sm md:text-base font-bold">— Sarah Mitchell</span>
                  <span className="font-[Satoshi,sans-serif] text-xs md:text-sm opacity-80">Marketing Consultant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
