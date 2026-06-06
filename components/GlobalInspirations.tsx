import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const inspirations = [
  {
    title: "Case Study of Uber",
    image: "/image.webp",
    gradient: "from-blue-600/20 to-transparent",
  },
  {
    title: "Case Study of Spotify",
    image: "/image (1).webp",
    gradient: "from-green-600/20 to-transparent",
  },
  {
    title: "Case Study of AirBNB",
    image: "/image.webp", // Using Uber image as requested for AirBNB as well
    gradient: "from-rose-600/20 to-transparent",
  }
];

const GlobalInspirations = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-25 flex flex-col items-center bg-black">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute rounded-full blur-[80px] md:blur-[120px] opacity-10 w-[400px] h-[400px] md:w-[680px] md:h-[654px]" 
          style={{ right: '-100px', top: '-150px', background: '#2d4cab' }}
        ></div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 lg:pl-[120px] lg:pr-0 xl:px-[120px]">
        <div className="mx-auto max-w-[1440px] flex flex-col items-center xl:items-start lg:block w-full">
          
          {/* Header */}
          <div className="mb-10 md:mb-16 flex flex-col items-center gap-4 md:gap-5 text-center w-full lg:px-0">
            <div className="flex flex-wrap items-center justify-center xl:justify-start gap-2 md:gap-3 font-[Satoshi,sans-serif] text-4xl md:text-[48px] font-bold">
              <span 
                className="bg-clip-text text-transparent" 
                style={{ backgroundImage: 'linear-gradient(167deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}
              >
                Our Global Inspirations
              </span>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="w-screen sm:w-[500px] md:w-[700px] lg:w-full ml-[calc(-50vw+50%)] sm:ml-0 overflow-hidden relative lg:overflow-visible group">
            <div className="relative w-full overflow-x-auto no-scrollbar scroll-smooth">
              <div className="flex gap-6 px-4 sm:px-0 lg:px-0 pb-8">
                {inspirations.map((item, index) => (
                  <div 
                    key={index} 
                    className="min-w-[90%] sm:min-w-[80%] md:min-w-[60%] lg:min-w-[520px] shrink-0"
                  >
                    <div 
                      className="w-full h-full overflow-hidden rounded-2xl border border-[#525252] flex flex-col group/card hover:border-zinc-500 transition-colors duration-300" 
                      style={{ backgroundImage: 'linear-gradient(138deg, rgb(23,23,23) 0%, rgba(23,23,23,0.7) 50%, rgb(23,23,23) 100%)' }}
                    >
                      {/* Image Area */}
                      <div className="relative h-48 md:h-64 lg:h-[304px] overflow-hidden bg-zinc-900/50">
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} z-10`}></div>
                        <Image 
                          alt={item.title} 
                          src={item.image} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                        />
                      </div>

                      {/* Content Area */}
                      <div className="flex flex-1 flex-col gap-3 lg:gap-4 p-5 md:p-6 lg:p-8">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-1 md:gap-0">
                          <h4 className="font-[Satoshi,sans-serif] text-xl md:text-2xl font-medium text-white uppercase tracking-wider">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="mt-6 md:mt-10 mb-4 flex items-center justify-center lg:justify-end gap-3 px-6 lg:px-0 lg:pr-8">
              <button 
                className="inline-flex items-center justify-center h-10 w-10 md:h-9 md:w-9 rounded-full border border-[#525252] bg-[#171717] hover:bg-[#252525] text-white shrink-0 shadow-lg transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                className="inline-flex items-center justify-center h-10 w-10 md:h-9 md:w-9 rounded-full border border-[#525252] bg-[#171717] hover:bg-[#252525] text-white shrink-0 shadow-lg transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalInspirations;
