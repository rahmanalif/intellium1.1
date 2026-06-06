import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import StyledButton from './StyledButton';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full overflow-hidden py-10 md:py-20 px-4 md:px-10 lg:px-[120px] bg-black">
      <div className="mx-auto flex flex-col lg:flex-row max-w-[1440px] items-center lg:items-stretch gap-10 lg:gap-16 px-6 md:px-10 pt-10 md:pt-20 pb-10 md:pb-20 bg-[#CFFF92] rounded-[24px]">
        
        {/* Left Column: Stats and Mockups (Hidden on Mobile/Tablet) */}
        <div className="relative hidden lg:flex flex-1 items-stretch gap-4">
          <div className="flex flex-col gap-4 flex-1">
            <div className="rounded-2xl bg-[#063B26] p-5 lg:p-6 text-white h-auto flex flex-col justify-center">
              <p className="text-2xl xl:text-3xl font-bold font-[Satoshi,sans-serif]">350K+</p>
              <p className="text-xs xl:text-sm opacity-70 font-[Satoshi,sans-serif]">Lives Impacted</p>
              <hr className="my-3 border-white/20" />
              <p className="text-2xl xl:text-3xl font-bold font-[Satoshi,sans-serif]">32K+</p>
              <p className="text-xs xl:text-sm opacity-70 font-[Satoshi,sans-serif]">Active Monthly Users</p>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl text-white min-h-[240px] xl:min-h-[300px] flex flex-col justify-end flex-1">
              <Image 
                src="/image (1).webp" 
                alt="Testimonial background" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="relative z-10 p-5">
                <p className="text-xs font-[Satoshi,sans-serif]">Intellium has been instrumental in helping us build our team from scratch.</p>
                <p className="mt-2 text-sm font-bold font-[Satoshi,sans-serif]">• Brooklyn Lean</p>
                <p className="text-[10px] xl:text-xs opacity-60 font-[Satoshi,sans-serif]">Software Engineer</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 flex-1">
            <div className="relative overflow-hidden rounded-2xl text-white min-h-[320px] xl:min-h-[400px] flex flex-col justify-end flex-1">
              <Image 
                src="/image.webp" 
                alt="Testimonial background" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="relative z-10 p-5">
                <p className="text-xs font-[Satoshi,sans-serif]">Intellium has been instrumental in helping us build our team.</p>
                <p className="mt-2 text-sm font-bold font-[Satoshi,sans-serif]">• Brooklyn Lean</p>
                <p className="text-[10px] xl:text-xs opacity-60 font-[Satoshi,sans-serif]">Software Engineer</p>
              </div>
            </div>
            
            <div className="rounded-2xl bg-[#063B26] p-5 text-center text-white h-auto min-h-[160px] xl:min-h-[186px] flex flex-col items-center justify-center">
              <p className="text-xs xl:text-sm opacity-70 font-[Satoshi,sans-serif]">Infinite Possibilities</p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="flex flex-1 flex-col gap-6 md:gap-8 w-full">
          <div>
            <h2 className="font-[Satoshi,sans-serif] text-3xl sm:text-4xl xl:text-[48px] font-bold leading-tight text-[#0f1f0f]">
              Let’s Build Something Iconic.
            </h2>
            <p className="mt-3 font-[Satoshi,sans-serif] text-sm md:text-base text-[#3a4a3a] max-w-lg lg:max-w-none">
              Share your vision. We’ll handle the execution - from premium UI to data-backed growth.
            </p>
          </div>
          
          <form className="flex flex-col gap-4 [&_label]:text-[#0f1f0f] [&_label]:text-sm w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-1">
              <label className="text-sm md:text-base font-medium font-[Satoshi,sans-serif]" htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name"
                className="w-full rounded-xl bg-white border-transparent px-4 py-3 text-sm text-gray-900 focus:border-[#063B26] focus:ring-0 outline-none placeholder:text-gray-400 h-12"
                placeholder="Your Name" 
                name="name" 
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 min-w-0 grid gap-1">
                <label className="text-sm md:text-base font-medium font-[Satoshi,sans-serif]" htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full rounded-xl bg-white border-transparent px-4 py-3 text-sm text-gray-900 focus:border-[#063B26] focus:ring-0 outline-none placeholder:text-gray-400 h-12"
                  placeholder="yourmail@gmail.com" 
                  name="email" 
                />
              </div>
              <div className="flex-1 min-w-0 grid gap-1">
                <label className="text-sm md:text-base font-medium font-[Satoshi,sans-serif]" htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full rounded-xl bg-white border-transparent px-4 py-3 text-sm text-gray-900 focus:border-[#063B26] focus:ring-0 outline-none placeholder:text-gray-400 h-12"
                  placeholder="+880 1XXXXXXXXX" 
                  name="phone_number" 
                />
              </div>
            </div>
            
            <div className="grid gap-1">
              <label className="text-sm md:text-base font-medium font-[Satoshi,sans-serif]" htmlFor="project">Project Details</label>
              <textarea 
                id="project"
                className="mt-1 rounded-xl bg-white border-transparent px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#063B26] focus:ring-0 placeholder:text-gray-400 resize-none h-36" 
                name="project" 
                placeholder="Details" 
              ></textarea>
            </div>
            
            <StyledButton 
              className="w-full mt-2" 
              type="submit"
            >
              <div className="flex items-center justify-center gap-2">
                Let&apos;s Connect
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </div>
            </StyledButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
