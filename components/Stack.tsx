import React from 'react';
import Image from 'next/image';

const techStack = [
  { name: 'Django', color1: '#C6005C', color2: '#59168B', icon: '/vercel.svg' },
  { name: 'AWS', color1: '#CA3500', color2: '#894B00', icon: '/globe.svg' },
  { name: 'Figma', color1: '#005F78', color2: '#1447E6', icon: '/window.svg' },
  { name: 'React', color1: '#0B4F4A', color2: '#007595', icon: '/vercel.svg' },
  { name: 'Python', color1: '#022F2E', color2: '#006045', icon: '/file.svg' },
  { name: 'Vercel', color1: '#C6005C', color2: '#6E11B0', icon: '/vercel.svg' },
  { name: 'Next.js', color1: '#7008E7', color2: '#59168B', icon: '/next.svg' },
  { name: 'Notion', color1: '#9F0712', color2: '#441306', icon: '/file.svg' },
  { name: 'After Effects', color1: '#9F2D00', color2: '#BB4D00', icon: '/window.svg' },
  { name: 'Spline', color1: '#005F5A', color2: '#354794', icon: '/globe.svg' },
  { name: 'Creative Cloud', color1: '#733E0A', color2: '#9F2D00', icon: '/file.svg' },
  { name: 'Blender', color1: '#8200DB', color2: '#312C85', icon: '/globe.svg' },
];

const Stack = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-25 bg-black">
      <div className="relative z-10 mx-auto flex max-w-[1440px] items-start justify-center px-4 sm:px-6 md:px-10 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row lg:h-[555px] w-full items-center justify-between overflow-hidden rounded-3xl bg-[#0d101a] relative border border-white/5">
          
          {/* Main Background Glows */}
          <div className="absolute right-0 lg:left-[366px] top-0 lg:-top-[63px] h-48 w-48 lg:h-[146px] lg:w-[146px] rounded-full bg-[#cb57dd] opacity-35 blur-[80px]"></div>
          <div className="absolute left-0 lg:left-[58px] top-20 lg:-top-[167px] h-[400px] w-[400px] lg:h-[376px] lg:w-[360px] rounded-full bg-[#3150aa] opacity-30 blur-[60px] md:blur-[50px]"></div>
          <div className="absolute bottom-0 lg:-bottom-[150px] left-1/4 lg:-left-[146px] h-[300px] w-[300px] lg:h-[437px] lg:w-[437px] rounded-full bg-[#6eb1ef] opacity-15 blur-[60px] md:blur-[65px]"></div>

          {/* Left Content Column */}
          <div className="flex h-full w-full lg:w-[448px] shrink-0 flex-col justify-center gap-6 px-6 sm:px-10 lg:pl-12 py-12 lg:py-36 relative z-10">
            <div className="flex flex-wrap font-[Satoshi,sans-serif] text-4xl sm:text-5xl font-bold text-center lg:text-left">
              <span className="bg-clip-text text-transparent w-full" style={{ backgroundImage: 'linear-gradient(142deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}>
                The Stack of the Future
              </span>
            </div>
            <p className="font-[Satoshi,sans-serif] text-sm sm:text-base bg-clip-text text-transparent leading-relaxed text-center lg:text-left mx-auto lg:mx-0 max-w-md lg:max-w-none" style={{ backgroundImage: 'linear-gradient(175deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}>
              We leverage an elite toolkit to ensure uncompromising polish and lightning speed.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button 
                className="relative w-fit flex items-center justify-center rounded-full border border-[#1F1FD3] px-8 py-3.5 text-sm font-bold text-white shadow-[0px_4px_20px_0px_rgba(145,172,255,0.15)] overflow-hidden font-[Satoshi,sans-serif] transition-transform hover:scale-105 active:scale-95"
                style={{ background: 'radial-gradient(ellipse at center bottom, rgba(76, 76, 227, 1) 0%, rgba(0, 0, 38, 1) 100%)' }}
              >
                <span className="relative z-10">Get a Free Quote</span>
                <div className="absolute inset-0 pointer-events-none rounded-full shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.4),inset_0px_-6px_4px_0px_rgba(0,0,0,0.2)]"></div>
              </button>
            </div>
          </div>

          {/* Right Tech Grid Column */}
          <div className="flex flex-1 items-center justify-center p-6 sm:p-10 lg:p-12 relative z-10 w-full">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 w-full max-w-2xl lg:max-w-none">
              {techStack.map((tech, index) => (
                <div 
                  key={index}
                  className="relative group flex aspect-square sm:aspect-auto sm:h-24 md:h-30 w-full sm:w-auto items-center justify-center overflow-hidden rounded-[14px] bg-[#1a1c2e]/50 border border-white/5 hover:border-white/20 transition-all duration-500"
                >
                  {/* Tech Item Glows */}
                  <div className="absolute -bottom-14 -left-4 h-34 w-34 rounded-full opacity-50 blur-[30px] group-hover:opacity-80 transition-opacity" style={{ backgroundColor: tech.color1 }}></div>
                  <div className="absolute -right-3 -top-14 h-34 w-34 rounded-full opacity-50 blur-[30px] group-hover:opacity-80 transition-opacity" style={{ backgroundColor: tech.color2 }}></div>
                  
                  {/* Tech Icon Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center gap-1 w-full h-full p-4 transition-transform duration-500 group-hover:scale-110">
                    <Image 
                      alt={tech.name} 
                      src={tech.icon}
                      width={32}
                      height={32}
                      className="max-w-[70%] max-h-[70%] object-contain brightness-0 invert opacity-80"
                    />
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-tighter group-hover:text-white/100 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
