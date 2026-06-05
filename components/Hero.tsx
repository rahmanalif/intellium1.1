import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute bg-[#253a7a] blur-[60px] md:blur-[100px] opacity-50 rounded-full w-full max-w-[500px] h-[500px]" style={{ top: '-10%', left: '-10%' }}></div>
        <div className="absolute bg-[rgba(218,91,211,0.6)] blur-[80px] md:blur-[120px] opacity-60 rounded-full w-full max-w-[400px] h-[400px]" style={{ top: '20%', left: '10%' }}></div>
        <div className="absolute bg-[#253a7a] blur-[60px] md:blur-[100px] opacity-40 rounded-full w-full max-w-[600px] h-[600px]" style={{ bottom: '10%', right: '-10%' }}></div>
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 pt-32 min-h-screen">
        {/* Left Content */}
        <div className="flex-1 text-left z-10 flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h1 
              className="font-[Satoshi,sans-serif] text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-[-0.84px] bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(160deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}
            >
              Digital Identity,<br />Orchestrated
            </h1>
            <div className="flex flex-col font-[Satoshi,sans-serif] text-lg lg:text-xl max-w-xl">
              <span 
                className="bg-clip-text text-transparent leading-[1.35]"
                style={{ backgroundImage: 'linear-gradient(176deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)' }}
              >
                We fuse the precision of code with the soul of design. One identity. Total authority. Growth Everywhere.
              </span>
            </div>
          </div>

          <button className="relative group overflow-hidden rounded-full px-8 py-4 font-bold text-white transition-all hover:scale-105 active:scale-95 w-fit">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative">Get in Touch</span>
          </button>
        </div>

        {/* Right Content - Video */}
        <div className="flex-1 w-full max-w-[600px] aspect-square relative flex items-center justify-center overflow-hidden">
          {/* Subtle glow behind video */}
          <div className="absolute w-[80%] h-[80%] bg-purple-500/10 blur-[80px] rounded-full"></div>
          
          <video 
            className="w-full h-full object-cover mix-blend-screen scale-[1.1] sm:scale-100 relative z-10"
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
    </section>
  );
};

export default Hero;
