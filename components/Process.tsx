import React from 'react';
import Image from 'next/image';

const Process = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery & Strategy",
      description: "Deep dives only. We map your goals into a high-precision roadmap.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-telescope h-5 w-5 sm:h-6 sm:w-6 text-white/80 shrink-0" aria-hidden="true">
          <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"></path>
          <path d="m13.56 11.747 4.332-.924"></path>
          <path d="m16 21-3.105-6.21"></path>
          <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"></path>
          <path d="m6.158 8.633 1.114 4.456"></path>
          <path d="m8 21 3.105-6.21"></path>
          <circle cx="12" cy="13" r="2"></circle>
        </svg>
      )
    },
    {
      number: 2,
      title: "UI/UX & Prototyping",
      description: "Aesthetics meets logic. We craft premium flows for a flawless digital experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-component h-5 w-5 sm:h-6 sm:w-6 text-white/80 shrink-0" aria-hidden="true">
          <path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path>
          <path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"></path>
          <path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"></path>
          <path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path>
        </svg>
      )
    },
    {
      number: 3,
      title: "Scalable Engineering",
      description: "Code that breathes. Fast, secure, and built for explosive growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml h-5 w-5 sm:h-6 sm:w-6 text-white/80 shrink-0" aria-hidden="true">
          <path d="m18 16 4-4-4-4"></path>
          <path d="m6 8-4 4 4 4"></path>
          <path d="m14.5 4-5 16"></path>
        </svg>
      )
    },
    {
      number: 4,
      title: "QA & Deployment",
      description: "Zero-friction launches. Rigorous testing ensures a bug-free mission start.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check h-5 w-5 sm:h-6 sm:w-6 text-white/80 shrink-0" aria-hidden="true">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      )
    },
    {
      number: 5,
      title: "Visual & Graphic Design",
      description: "Digital storytelling. We create brand assets that capture attention instantly.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-ruler h-5 w-5 sm:h-6 sm:w-6 text-white/80 shrink-0" aria-hidden="true">
          <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path>
          <path d="m8 6 2-2"></path>
          <path d="m18 16 2-2"></path>
          <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
          <path d="m15 5 4 4"></path>
        </svg>
      )
    },
    {
      number: 6,
      title: "SEO & Digital Growth",
      description: "Own the algorithm. Data-driven campaigns that turn strangers into fans.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-no-axes-combined h-5 w-5 sm:h-6 sm:w-6 text-white/80 shrink-0" aria-hidden="true">
          <path d="M12 16v5"></path>
          <path d="M16 14v7"></path>
          <path d="M20 10v11"></path>
          <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"></path>
          <path d="M4 18v3"></path>
          <path d="M8 14v7"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-25 bg-black">
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[120px]">
        
        {/* Header */}
        <div className="mb-10 md:mb-16 flex flex-col items-center gap-4 md:gap-5 text-center">
          <h2 
            className="font-[Satoshi,sans-serif] text-3xl md:text-5xl lg:text-[48px] font-bold leading-tight md:leading-none tracking-[-0.5px] bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(167deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}
          >
            From Blueprint to Breakthrough
          </h2>
          <p className="w-full max-w-[730px] font-[Satoshi,sans-serif] text-base md:text-[20px] leading-[1.4] md:leading-[1.35] text-[#a3a3a3]">
            We don't just build; we engineer success through a battle-tested framework.
          </p>
        </div>

        {/* Main Content Box */}
        <div 
          className="relative flex flex-col lg:flex-row gap-6 lg:gap-8 overflow-hidden rounded-2xl border border-[#525252] p-4 sm:p-6 lg:p-8"
          style={{ backgroundImage: 'linear-gradient(158deg, #171717 0%, rgba(23,23,23,0.7) 50%, #171717 100%)' }}
        >
          {/* Background Glows */}
          <div className="absolute rounded-full blur-[75px] opacity-20 pointer-events-none" style={{ width: '790px', height: '790px', left: '22%', top: '50%', transform: 'translateY(-50%)', background: '#3150aa' }}></div>
          <div className="absolute rounded-full blur-[65px] opacity-15 pointer-events-none" style={{ width: '437px', height: '437px', left: '-16%', top: '50%', transform: 'translateY(-50%)', background: '#6eb1ef' }}></div>
          <div className="absolute rounded-full blur-[75px] opacity-35 pointer-events-none" style={{ width: '157px', height: '157px', right: '4%', bottom: '-20px', background: '#cb57dd' }}></div>

          {/* Left Column - Image/GIF */}
          <div className="relative z-10 w-full lg:w-1/2 xl:w-[515px] shrink-0 rounded-[12px] md:rounded-[20px] overflow-hidden flex items-center justify-center min-h-[300px] lg:min-h-0 bg-[#0a0a0a]">
            <Image 
              alt="Process Journey" 
              src="/process-journey.0d8w6hikujknr.gif" 
              fill
              className="object-cover object-center"
              unoptimized
            />
          </div>

          {/* Right Column - Steps */}
          <div className="relative z-10 flex flex-col flex-1 py-4 lg:py-0">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-stretch gap-4 sm:gap-6">
                <div className="flex flex-col items-center shrink-0">
                  <div className="flex h-8 w-8 sm:h-[45px] sm:w-[45px] items-center justify-center rounded-full bg-[#e5e5e5] shrink-0 z-10">
                    <span className="font-[Satoshi,sans-serif] text-xs sm:text-[14px] font-bold text-[#404040]">
                      [{step.number}]
                    </span>
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="w-px bg-[#525252] flex-1 my-2"></div>
                  )}
                </div>

                <div className={`flex flex-col gap-1 md:gap-2 sm:pt-1 ${index !== steps.length - 1 ? 'pb-6 sm:pb-8' : ''}`}>
                  <div className="flex items-center gap-2 sm:gap-3">
                    {step.icon}
                    <span 
                      className="font-[Satoshi,sans-serif] text-base md:text-[20px] lg:text-lg font-bold bg-clip-text text-transparent leading-tight"
                      style={{ backgroundImage: 'linear-gradient(178deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}
                    >
                      {step.title}
                    </span>
                  </div>
                  <p className="font-[Satoshi,sans-serif] text-sm md:text-base lg:text-[14px] leading-relaxed text-[#a3a3a3]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
