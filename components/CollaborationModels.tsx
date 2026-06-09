import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const models = [
  {
    title: 'Staff Augmentation',
    description: 'Machine Learning and Artificial Intelligence solution for your organization by experts hand.',
    href: '/staff-augmentation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M38.3346 31.4266C46.236 21.4076 44.1014 11.4702 38.4252 7.9883C33.0618 4.69846 28.3808 6.02422 25.5688 8.13602L23.4996 9.68316M38.3346 31.4266C36.438 33.8312 33.9634 36.2408 30.821 38.5668C27.7286 40.8556 26.1824 42 23.5 42C20.8176 42 19.2714 40.8556 16.179 38.5668C-0.056592 26.5498 1.53611 12.3059 8.57485 7.9883C13.9381 4.69846 18.6192 6.02422 21.4312 8.13602L23.4996 9.68316M38.3346 31.4266L27.2842 18.8896C26.8318 18.3764 26.0746 18.2659 25.4944 18.6285L21.1222 21.3612C19.5836 22.3228 17.5866 22.1064 16.2898 20.8374C14.5767 19.1612 14.7495 16.3554 16.6554 14.9021L23.4996 9.68316" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    )
  },
  {
    title: 'Managed Services',
    description: 'End-to-end support for your applications, infrastructure, and digital platforms—so you can shift focus from maintenance to innovation.',
    href: '/managed-services',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M30.5 22C30.5 18.134 27.366 15 23.5 15C19.634 15 16.5 18.134 16.5 22C16.5 25.866 19.634 29 23.5 29C27.366 29 30.5 25.866 30.5 22Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M30.4653 22.6998C31.1093 22.895 31.7923 23 32.4999 23C36.3659 23 39.4999 19.866 39.4999 16C39.4999 12.134 36.3659 9 32.4999 9C28.8701 9 25.8855 11.7628 25.5345 15.3003" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M21.4654 15.3003C21.1144 11.7628 18.1298 9 14.5 9C10.634 9 7.5 12.134 7.5 16C7.5 19.866 10.634 23 14.5 23C15.2076 23 15.8907 22.895 16.5345 22.6998" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M43.5 33C43.5 27.4772 38.5752 23 32.5 23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M34.5 39C34.5 33.4772 29.5752 29 23.5 29C17.4249 29 12.5 33.4772 12.5 39" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M14.5 23C8.42486 23 3.5 27.4772 3.5 33" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    )
  },
  {
    title: 'Digital Transformation',
    description: 'Modernize legacy systems with AI-driven automation. Achieve 50% operational efficiency gains.',
    href: '/digital-transformation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M6.37868 17.1213C7.25736 18 8.67158 18 11.5 18C14.3284 18 15.7426 18 16.6213 17.1213C17.5 16.2426 17.5 14.8284 17.5 12C17.5 9.17158 17.5 7.75736 16.6213 6.87868C15.7426 6 14.3284 6 11.5 6C8.67158 6 7.25736 6 6.37868 6.87868C5.5 7.75736 5.5 9.17158 5.5 12C5.5 14.8284 5.5 16.2426 6.37868 17.1213Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M30.3786 17.1213C31.2574 18 32.6716 18 35.5 18C38.3284 18 39.7426 18 40.6214 17.1213C41.5 16.2426 41.5 14.8284 41.5 12C41.5 9.17158 41.5 7.75736 40.6214 6.87868C39.7426 6 38.3284 6 35.5 6C32.6716 6 31.2574 6 30.3786 6.87868C29.5 7.75736 29.5 9.17158 29.5 12C29.5 14.8284 29.5 16.2426 30.3786 17.1213Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M30.3786 41.1214C31.2574 42 32.6716 42 35.5 42C38.3284 42 39.7426 42 40.6214 41.1214C41.5 40.2426 41.5 38.8284 41.5 36C41.5 33.1716 41.5 31.7574 40.6214 30.8786C39.7426 30 38.3284 30 35.5 30C32.6716 30 31.2574 30 30.3786 30.8786C29.5 31.7574 29.5 33.1716 29.5 36C29.5 38.8284 29.5 40.2426 30.3786 41.1214Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M6.37868 41.1214C7.25736 42 8.67158 42 11.5 42C14.3284 42 15.7426 42 16.6213 41.1214C17.5 40.2426 17.5 38.8284 17.5 36C17.5 33.1716 17.5 31.7574 16.6213 30.8786C15.7426 30 14.3284 30 11.5 30C8.67158 30 7.25736 30 6.37868 30.8786C5.5 31.7574 5.5 33.1716 5.5 36C5.5 38.8284 5.5 40.2426 6.37868 41.1214Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M23.5 12H17.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M29.5 36H23.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M35.5 24V18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M11.5 30V24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    )
  },
  {
    title: 'Technology Consulting',
    description: 'Cut tech waste by 30% with our strategic audits. Align tools with business goals for maximum ROI.',
    href: '/technology-consulting-services',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M11.505 8C11.505 10.2091 9.7141 12 7.50496 12C5.29582 12 3.50496 10.2091 3.50496 8C3.50496 5.79086 5.29582 4 7.50496 4C9.7141 4 11.505 5.79086 11.505 8Z" stroke="currentColor" strokeWidth="2.5"></path>
        <path d="M43.505 8C43.505 10.2091 41.7142 12 39.505 12C37.2958 12 35.505 10.2091 35.505 8C35.505 5.79086 37.2958 4 39.505 4C41.7142 4 43.505 5.79086 43.505 8Z" stroke="currentColor" strokeWidth="2.5"></path>
        <path d="M43.505 40C43.505 42.2092 41.7142 44 39.505 44C37.2958 44 35.505 42.2092 35.505 40C35.505 37.7908 37.2958 36 39.505 36C41.7142 36 43.505 37.7908 43.505 40Z" stroke="currentColor" strokeWidth="2.5"></path>
        <path d="M11.505 40C11.505 42.2092 9.7141 44 7.50496 44C5.29582 44 3.50496 42.2092 3.50496 40C3.50496 37.7908 5.29582 36 7.50496 36C9.7141 36 11.505 37.7908 11.505 40Z" stroke="currentColor" strokeWidth="2.5"></path>
        <path d="M39.505 12V36M35.505 40H11.505M35.505 8H11.505M7.50496 12V36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M20.8044 16.9609L18.6271 18.0264C15.879 19.3713 14.505 20.0436 14.505 21C14.505 21.9564 15.879 22.6288 18.6271 23.9736L20.8044 25.039C22.1134 25.6796 22.768 26 23.505 26C24.242 26 24.8966 25.6796 26.2056 25.039L28.3828 23.9736C31.131 22.6288 32.505 21.9564 32.505 21C32.505 20.0436 31.131 19.3713 28.3828 18.0264L26.2056 16.9609C24.8966 16.3203 24.242 16 23.505 16C22.768 16 22.1134 16.3203 20.8044 16.9609Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M32.505 27C32.505 27.9564 31.131 28.6288 28.3828 29.9736L26.2056 31.039C24.8966 31.6796 24.242 32 23.505 32C22.768 32 22.1134 31.6796 20.8044 31.039L18.6271 29.9736C15.879 28.6288 14.505 27.9564 14.505 27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    )
  },
  {
    title: 'MVP Development',
    description: 'Launch market-ready MVPs in 8-12 weeks. AI-accelerated builds with 40% faster iteration cycles.',
    href: '/mvp-services',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M39.8398 20.256C39.8398 12.5929 39.8398 8.76128 37.4966 6.38064C35.1536 4 31.3822 4 23.8398 4H19.8398C12.2974 4 8.52614 4 6.18298 6.38064C3.83984 8.76128 3.83984 12.5929 3.83984 20.256C3.83984 27.9192 3.83984 31.7508 6.18298 34.1314C7.1222 35.0856 8.29084 35.6574 9.83984 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></path>
        <path d="M43.8398 35C43.8398 31.2502 43.8398 29.3754 42.8848 28.061C42.5764 27.6366 42.2032 27.2634 41.7788 26.955C40.4644 26 38.5896 26 34.8398 26H24.8398C21.09 26 19.2152 26 17.9009 26.955C17.4764 27.2634 17.1032 27.6366 16.7948 28.061C15.8398 29.3754 15.8398 31.2502 15.8398 35C15.8398 38.7498 15.8398 40.6246 16.7948 41.939C17.1032 42.3634 17.4764 42.7366 17.9009 43.045C19.2152 44 21.09 44 24.8398 44H34.8398C38.5896 44 40.4644 44 41.7788 43.045C42.2032 42.7366 42.5764 42.3634 42.8848 41.939C43.8398 40.6246 43.8398 38.7498 43.8398 35Z" stroke="currentColor" strokeWidth="2.5"></path>
        <path d="M32.8398 32L34.6796 33.5858C35.453 34.2524 35.8398 34.5858 35.8398 35C35.8398 35.4142 35.453 35.7476 34.6796 36.4142L32.8398 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M26.8398 32L25 33.5858C24.2266 34.2524 23.8398 34.5858 23.8398 35C23.8398 35.4142 24.2266 35.7476 25 36.4142L26.8398 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M4.83984 12H38.8398" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    )
  }
];

const CollaborationModels = () => {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32 bg-black border-t border-white/5">
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[120px]">
        {/* Header matched to website style */}
        <div className="mb-20 md:mb-28">
          <h2 className="font-[Satoshi,sans-serif] text-4xl md:text-[64px] font-bold bg-clip-text text-transparent leading-[1.1] tracking-tight"
              style={{ backgroundImage: 'linear-gradient(160deg, rgb(255,255,255) 10%, rgba(189,189,189,0.8) 60%, rgb(255,255,255) 90%)' }}>
            Collaboration Models
          </h2>
        </div>

        {/* Content rows distributed as 3 in first row and 2 in second, filling width */}
        <div className="flex flex-col gap-24 md:gap-32">
          {/* Row 1: 3 Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
            {models.slice(0, 3).map((model, index) => (
              <div key={index} className="flex flex-col items-start gap-8 group">
                <div className="text-[#4992C1] transition-all duration-500 group-hover:scale-110">
                  {model.icon}
                </div>
                <div className="flex flex-col gap-5">
                  <h3 className="font-[Satoshi,sans-serif] text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                    {model.title}
                  </h3>
                  <p className="font-[Satoshi,sans-serif] text-lg text-[#a3a3a3] leading-relaxed max-w-[380px]">
                    {model.description}
                  </p>
                </div>
                <Link 
                  href={model.href}
                  className="flex items-center gap-3 text-[#4992C1] font-bold text-base hover:text-white transition-all duration-300 group/link"
                >
                  <span className="uppercase tracking-[0.2em] text-xs">Learn More</span>
                  <div className="w-9 h-9 rounded-full border border-[#4992C1]/30 flex items-center justify-center transition-all duration-300 group-hover/link:bg-[#4992C1] group-hover/link:text-black">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Row 2: 2 Items filling the width balanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {models.slice(3, 5).map((model, index) => (
              <div key={index} className="flex flex-col items-start gap-8 group">
                <div className="text-[#4992C1] transition-all duration-500 group-hover:scale-110">
                  {model.icon}
                </div>
                <div className="flex flex-col gap-5">
                  <h3 className="font-[Satoshi,sans-serif] text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                    {model.title}
                  </h3>
                  <p className="font-[Satoshi,sans-serif] text-lg text-[#a3a3a3] leading-relaxed max-w-[500px]">
                    {model.description}
                  </p>
                </div>
                <Link 
                  href={model.href}
                  className="flex items-center gap-3 text-[#4992C1] font-bold text-base hover:text-white transition-all duration-300 group/link"
                >
                  <span className="uppercase tracking-[0.2em] text-xs">Learn More</span>
                  <div className="w-9 h-9 rounded-full border border-[#4992C1]/30 flex items-center justify-center transition-all duration-300 group-hover/link:bg-[#4992C1] group-hover/link:text-black">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationModels;
