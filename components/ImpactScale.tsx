import React from 'react';
import Link from 'next/link';
import { TrendingUp, Layers, LineChart } from 'lucide-react';

const ImpactScale = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-25 bg-black">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 md:left-54 -top-10 md:-top-[125px] h-[400px] w-[400px] md:h-[731px] md:w-[720px] rounded-full bg-[#3150aa] opacity-30 blur-[80px] md:blur-[110px]"></div>
        <div className="absolute -left-40 md:-left-[365px] -top-20 md:-top-[181px] h-[400px] w-[400px] md:h-[731px] md:w-[720px] rounded-full bg-[rgba(218,91,211,0.6)] opacity-25 blur-[100px] md:blur-[125px]"></div>
        <div className="absolute -bottom-40 left-20 md:-bottom-[356px] md:left-[504px] h-[400px] w-[400px] md:h-[731px] md:w-[720px] rounded-full bg-[#3150aa] opacity-50 blur-[80px] md:blur-[110px]"></div>
        <div className="absolute -bottom-60 -right-40 md:-bottom-[412px] md:-right-[576px] h-[400px] w-[400px] md:h-[731px] md:w-[720px] rounded-full bg-[#7f5ad6] opacity-[0.39] blur-[100px] md:blur-[125px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[120px]">
        {/* Header */}
        <div className="mb-10 lg:mb-16 flex flex-col items-center gap-4 lg:gap-5 text-center">
          <div className="flex items-center gap-2 sm:gap-3 font-[Satoshi,sans-serif] text-4xl sm:text-5xl lg:text-[56px] font-bold">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(157deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}>Impact</span>
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(123deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}>at</span>
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(150deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}>Scale</span>
          </div>
          <p className="text-center font-[Satoshi,sans-serif] text-base md:text-xl">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(176deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}>
              Performance is Non-Negotiable. Design is subjective. Results are math.
            </span>
          </p>
          <div className="mt-4 md:mt-6">
            <Link 
              href="/#contact"
              className="relative flex items-center justify-center rounded-full border border-[#1F1FD3] px-10 py-3.5 text-sm font-bold text-white shadow-[0px_4px_20px_0px_rgba(145,172,255,0.15)] overflow-hidden font-[Satoshi,sans-serif]"
              style={{ background: 'radial-gradient(ellipse at center bottom, rgba(76, 76, 227, 1) 0%, rgba(0, 0, 38, 1) 100%)' }}
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 pointer-events-none rounded-full shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.4),inset_0px_-6px_4px_0px_rgba(0,0,0,0.2)]"></div>
            </Link>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row gap-6 min-h-0">
            
            {/* Revenue Supported */}
            <div 
              className="relative flex-1 overflow-hidden rounded-3xl border border-[#404040] p-6 lg:p-8 shadow-[0px_0px_18px_0px_rgba(0,0,0,0.2)] min-h-[300px]"
              style={{ backgroundImage: 'linear-gradient(147deg, rgb(18,20,32) 0%, rgb(10,10,10) 100%)' }}
            >
              <div className="absolute right-10 md:right-40 -top-5 md:-top-[41px] h-20 w-24 md:h-30 md:w-32 rounded-full bg-[#5791dd] opacity-25 blur-[32px]"></div>
              <div className="absolute -bottom-10 md:-bottom-[100px] -left-10 md:left-15 h-60 w-[250px] md:h-90 md:w-[384px] rounded-full bg-[#2d4cab] opacity-25 blur-[50px]"></div>
              
              {/* Placeholder Chart Icon */}
              <div className="absolute -bottom-6 -right-6 opacity-20 pointer-events-none">
                <TrendingUp size={180} className="text-[#5791dd]" />
              </div>

              <div className="relative z-10 flex flex-col gap-2 md:gap-3">
                <span className="font-[Satoshi,sans-serif] text-sm md:text-base font-medium bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(171deg, rgb(250,250,250) 10%, rgba(161,161,161,0.9) 60%, rgb(250,250,250) 90%)' }}>
                  Revenue Supported
                </span>
                <span className="font-[Satoshi,sans-serif] text-4xl md:text-[56px] font-bold bg-clip-text text-transparent tracking-[-0.84px] leading-tight md:leading-none" style={{ backgroundImage: 'linear-gradient(161deg, rgb(250,250,250) 10%, rgba(161,161,161,0.9) 60%, rgb(250,250,250) 90%)' }}>
                  $100M+
                </span>
                <span className="font-[Satoshi,sans-serif] text-xs md:text-sm font-medium bg-clip-text text-transparent leading-relaxed max-w-[280px]" style={{ backgroundImage: 'linear-gradient(172deg, rgb(250,250,250) 10%, rgba(161,161,161,0.9) 60%, rgb(250,250,250) 90%)' }}>
                  We build systems that back nine-figure growth.
                </span>
              </div>
            </div>

            {/* Assets Deployed */}
            <div 
              className="relative flex-1 overflow-hidden rounded-3xl border border-[#404040] p-6 lg:p-8 shadow-[0px_0px_18px_0px_rgba(0,0,0,0.45)] min-h-[300px]"
              style={{ backgroundImage: 'linear-gradient(214deg, rgb(21,25,43) 0%, rgb(10,10,10) 100%)' }}
            >
              <div className="absolute -right-5 md:-right-10 -top-10 md:-top-[91px] h-20 w-20 md:h-[142px] md:w-[142px] rounded-full bg-[#cb57dd] opacity-50 blur-[60px]"></div>
              <div className="absolute -bottom-10 md:-bottom-[100px] -left-10 md:left-[57px] h-60 w-60 md:h-90 md:w-[366px] rounded-full bg-[#010e4a] opacity-40 blur-[50px]"></div>
              
              {/* Placeholder Assets Icon */}
              <div className="absolute -bottom-6 -right-6 opacity-20 pointer-events-none">
                <Layers size={180} className="text-[#cb57dd]" />
              </div>

              <div className="relative z-10 flex flex-col gap-2 md:gap-3">
                <span className="font-[Satoshi,sans-serif] text-sm md:text-base font-medium bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(170deg, rgb(250,250,250) 10%, rgba(161,161,161,0.9) 60%, rgb(250,250,250) 90%)' }}>
                  Assets Deployed
                </span>
                <span className="font-[Satoshi,sans-serif] text-4xl md:text-[56px] font-bold bg-clip-text text-transparent tracking-[-0.84px] leading-tight md:leading-none" style={{ backgroundImage: 'linear-gradient(151deg, rgb(250,250,250) 10%, rgba(161,161,161,0.9) 60%, rgb(250,250,250) 90%)' }}>
                  100+
                </span>
                <span className="max-w-[80%] md:max-w-[384px] font-[Satoshi,sans-serif] text-xs md:text-sm font-medium bg-clip-text text-transparent leading-relaxed" style={{ backgroundImage: 'linear-gradient(173deg, rgb(250,250,250) 10%, rgba(161,161,161,0.9) 60%, rgb(250,250,250) 90%)' }}>
                  Production-ready creative for every channel. Ship with total confidence.
                </span>
              </div>
            </div>
          </div>

          {/* Enterprise DNA */}
          <div 
            className="h-auto md:h-100 min-h-[350px] relative overflow-hidden rounded-3xl border border-[#404040] p-6 md:p-8 shadow-[0px_0px_18px_0px_rgba(0,0,0,0.45)]"
            style={{ backgroundImage: 'linear-gradient(to right, #0d0d14, #0a0a0a)' }}
          >
            <div className="absolute left-10 md:left-[120px] -top-10 md:-top-[120px] h-60 w-60 md:h-90 md:w-[375px] rounded-full bg-[#3150aa] opacity-60 blur-[50px]"></div>
            <div className="absolute -bottom-20 md:-bottom-[200px] -left-10 md:-left-[120px] h-60 w-60 md:h-80 md:w-[333px] rounded-full bg-[#cb57dd] opacity-20 blur-[60px]"></div>
            
            {/* Placeholder Retention Icon */}
            <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none p-12">
              <LineChart size={300} className="text-white" />
            </div>

            <div className="relative z-10 flex flex-col gap-2 md:gap-3">
              <span className="font-[Satoshi,sans-serif] text-sm md:text-base font-medium bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(169deg, rgb(250,250,250) 10%, rgba(161,161,161,0.9) 60%, rgb(250,250,250) 90%)' }}>
                Enterprise DNA
              </span>
              <span className="max-w-[75%] md:max-w-[388px] font-[Satoshi,sans-serif] text-xs md:text-sm font-medium bg-clip-text text-transparent leading-relaxed" style={{ backgroundImage: 'linear-gradient(174deg, rgb(250,250,250) 10%, rgba(161,161,161,0.9) 60%, rgb(250,250,250) 90%)' }}>
                We apply multi-billion dollar architectural standards to your brand. No compromises.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactScale;
