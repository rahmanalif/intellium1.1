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
            <div className="flex h-16 w-16 md:h-20.5 md:w-20.5 items-center justify-center shrink-0">
              <svg 
                width="82" 
                height="82" 
                viewBox="0 0 82 82" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full object-contain text-[#cb57dd] opacity-50"
              >
                <path d="M20.5 30.75H10.25V20.5H20.5V30.75ZM20.5 51.25H10.25V41H20.5V51.25ZM41 30.75H30.75V20.5H41V30.75ZM41 51.25H30.75V41H41V51.25Z" fill="currentColor"/>
                <path d="M51.25 20.5H71.75V41H61.5V71.75H41V41H51.25V20.5ZM10.25 20.5H30.75V41H20.5V71.75H0V41H10.25V20.5Z" fill="currentColor"/>
              </svg>
            </div>

            <div className="flex flex-col items-center gap-6 md:gap-8 w-full">
              <p 
                className="w-full max-w-[870px] text-center font-[Satoshi,sans-serif] text-[20px] sm:text-[24px] md:text-[32px] font-bold bg-clip-text text-transparent leading-relaxed md:leading-snug" 
                style={{ backgroundImage: 'linear-gradient(169deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}
              >
                “Intellium has taken our team to total transformation. The AI-powered insights have already saved us dozens of hours weekly. Simplicity at its most powerful. Highly recommended.”
              </p>

              <div className="flex items-center gap-3 md:gap-4 mt-2">
                <div className="h-10 w-10 md:h-12.5 md:w-12.5 overflow-hidden rounded-full shrink-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">SM</span>
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
