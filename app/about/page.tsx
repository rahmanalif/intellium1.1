"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyledButton from '@/components/StyledButton';

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

const stats = [
  { value: '5+', label: 'Years of Digital Evolution' },
  { value: '25+', label: 'Projects Shipped & Scaling' },
  { value: '18+', label: 'Global Clients Served' },
  { value: '98%', label: 'Client Satisfaction Rate' },
];

const values = [
  {
    title: 'Engineering-First',
    description: 'We build on solid foundations. Every product decision is backed by technical rigor, not just trend-chasing. We write code that scales and systems that last.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Obsessive Design',
    description: 'Interfaces are the first conversation between your product and your user. We obsess over every pixel, every interaction, and every detail that shapes that experience.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: 'Radical Reliability',
    description: "Deadlines are promises. Deliverables are commitments. We don't ship excuses — we ship software. Our clients can sleep knowing we have their back around the clock.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'Client-Centered Growth',
    description: "Your growth is our growth. We embed ourselves as strategic partners, not just vendors. When your metrics go up, that's the win we came to work for.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: 'Transparent Execution',
    description: 'No black boxes. No smoke and mirrors. You see exactly where your project stands at every step — decisions, blockers, milestones, all out in the open.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Long-Term Thinking',
    description: "We build for where you're going, not just where you are. Architecture decisions, tech choices, and team structure are all made with your 5-year vision in mind.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const team = [
  {
    name: 'Ahmed Raiyan',
    role: 'Founder & CEO',
    description: 'Visionary behind Gridmaps. Drives strategy, client relationships, and the relentless pursuit of product excellence.',
    initials: 'AA',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    name: 'Lihan Kisu ekta',
    role: 'Head of Engineering',
    description: 'Architects scalable systems and leads the technical team. Obsessed with clean code and zero-downtime deployments.',
    initials: 'LE',
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    name: 'Opi karim',
    role: 'Head of Design',
    description: 'Translates briefs into beautiful, conversion-focused interfaces. Champion of accessibility and design systems.',
    initials: 'DL',
    gradient: 'from-orange-500 to-yellow-400',
  },
  {
    name: 'Raphael Kabir Niloy',
    role: 'Head of Marketing',
    description: 'Fills pipelines and builds brands. Expert in performance marketing, SEO strategy, and demand generation.',
    initials: 'GL',
    gradient: 'from-green-500 to-teal-400',
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-black overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28">
        {/* Background glows */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[500px] opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(145,17,230,0.45) 0%, rgba(77,7,227,0.2) 45%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(37,58,122,0.8) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[120px] flex flex-col items-center text-center gap-6">
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f59768]" />
            <span className="font-[Satoshi,sans-serif] text-xs font-medium text-[#a3a3a3] uppercase tracking-widest">
              Our Story
            </span>
          </div> */}

          <h1
            className="font-[Satoshi,sans-serif] text-4xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] tracking-[-1px] bg-clip-text text-transparent max-w-4xl"
            style={{
              backgroundImage:
                'linear-gradient(165deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)',
            }}
          >
            The Powerhouse Behind Your Growth
          </h1>

          <p className="max-w-[700px] font-[Satoshi,sans-serif] text-base md:text-[20px] leading-[1.5] text-[#a3a3a3]">
            We&apos;re a tight-knit team of engineers, designers, and growth specialists who care deeply about one thing: building products that actually move the needle.
          </p>

          <Link href="/#contact">
            <StyledButton className="mt-2">START YOUR PROJECT</StyledButton>
          </Link>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="relative w-full py-12 border-y border-white/5 bg-[#080808]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[120px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1 rounded-xl bg-[#111111] border border-white/5 px-4 py-6 text-center hover:border-white/10 transition-colors"
              >
                <span className="font-[Satoshi,sans-serif] text-3xl md:text-[44px] font-bold text-[#f59768] leading-none">
                  {stat.value}
                </span>
                <span className="font-[Satoshi,sans-serif] text-xs md:text-sm font-medium text-[#a3a3a3] uppercase mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="relative w-full overflow-hidden py-20 md:py-28">
        <div
          className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-15"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(49,80,170,0.8) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[120px]">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text */}
            <div className="flex flex-col gap-6 flex-1">
              {/* <div className="inline-flex items-center gap-2 w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f59768]" />
                <span className="font-[Satoshi,sans-serif] text-xs font-medium text-[#a3a3a3] uppercase tracking-widest">
                  How It Started
                </span>
              </div> */}
              <h2
                className="font-[Satoshi,sans-serif] text-3xl md:text-[44px] font-bold leading-[1.15] tracking-[-0.5px] bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(165deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)',
                }}
              >
                Built from frustration. Driven by craft.
              </h2>
              <div className="flex flex-col gap-4">
                <p className="font-[Satoshi,sans-serif] text-base md:text-[18px] leading-[1.6] text-[#a3a3a3]">
                  Gridmaps was born from a simple observation: most businesses were being underserved by agencies that treated projects like tickets, not partnerships. We saw companies bleeding budget on flashy pitches that delivered mediocre results.
                </p>
                <p className="font-[Satoshi,sans-serif] text-base md:text-[18px] leading-[1.6] text-[#a3a3a3]">
                  So we built something different — a studio where engineers and designers work side by side from day one, where every project is treated like a product we&apos;re proud to put our name on.
                </p>
                <p className="font-[Satoshi,sans-serif] text-base md:text-[18px] leading-[1.6] text-[#a3a3a3]">
                  Five years later, we&apos;ve shipped over 25 products for clients ranging from seed-stage startups to publicly listed enterprises. The mission hasn&apos;t changed — deliver work that lasts.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full lg:w-[480px] shrink-0 aspect-[4/3] rounded-2xl overflow-hidden border border-white/5">
              <Image
                alt="Our Team"
                src="/team.jpg"
                fill
                className="object-cover object-center"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="relative w-full py-16 md:py-20 bg-[#060606] border-y border-white/5">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="flex flex-col gap-5 rounded-2xl bg-[#0f0f0f] border border-white/5 p-8 md:p-10 hover:border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target-icon lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <span className="font-[Satoshi,sans-serif] text-sm font-bold text-[#a3a3a3] uppercase tracking-widest">
                  Our Mission
                </span>
              </div>
              <h3 className="font-[Satoshi,sans-serif] text-2xl md:text-[28px] font-bold text-white leading-tight">
                Solve real problems with hardcore engineering and obsessive design.
              </h3>
              <p className="font-[Satoshi,sans-serif] text-base leading-[1.6] text-[#a3a3a3]">
                We exist to close the gap between what businesses need and what technology can deliver. Every engagement is an opportunity to build something meaningful — software that earns its place in the world.
              </p>
            </div>

            {/* Vision */}
            <div className="flex flex-col gap-5 rounded-2xl bg-[#0f0f0f] border border-white/5 p-8 md:p-10 hover:border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <span className="font-[Satoshi,sans-serif] text-sm font-bold text-[#a3a3a3] uppercase tracking-widest">
                  Our Vision
                </span>
              </div>
              <h3 className="font-[Satoshi,sans-serif] text-2xl md:text-[28px] font-bold text-white leading-tight">
                To be the most trusted digital growth partner for ambitious companies.
              </h3>
              <p className="font-[Satoshi,sans-serif] text-base leading-[1.6] text-[#a3a3a3]">
                We&apos;re building toward a future where every business — regardless of size — has access to world-class engineering and design. Reliability and excellence shouldn&apos;t be reserved for the well-funded.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="relative w-full overflow-hidden py-20 md:py-28">
        <div
          className="pointer-events-none absolute right-0 top-0 w-[500px] h-[500px] opacity-15"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(145,17,230,0.5) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[120px]">
          <div className="mb-12 md:mb-16 flex flex-col items-center gap-4 text-center">
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f59768]" />
              <span className="font-[Satoshi,sans-serif] text-xs font-medium text-[#a3a3a3] uppercase tracking-widest">
                What We Stand For
              </span>
            </div> */}
            <h2
              className="font-[Satoshi,sans-serif] text-3xl md:text-[48px] font-bold leading-[1.1] tracking-[-0.5px] bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(165deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)',
              }}
            >
              Core Values
            </h2>
            <p className="max-w-[600px] font-[Satoshi,sans-serif] text-base md:text-[18px] leading-[1.5] text-[#a3a3a3]">
              These aren&apos;t posters on a wall. They&apos;re the principles that show up in every commit, every design iteration, and every client call.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="group flex flex-col gap-4 rounded-2xl bg-[#0f0f0f] border border-white/5 p-6 md:p-8 hover:border-white/10 hover:bg-[#111111] transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#f59768] group-hover:bg-white/8 transition-colors shrink-0">
                  {value.icon}
                </div>
                <h3 className="font-[Satoshi,sans-serif] text-lg font-bold text-white">
                  {value.title}
                </h3>
                <p className="font-[Satoshi,sans-serif] text-sm leading-[1.6] text-[#a3a3a3]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="relative w-full py-20 md:py-28 bg-[#060606] border-t border-white/5">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[120px]">
          <div className="mb-12 md:mb-16 flex flex-col items-center gap-4 text-center">
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f59768]" />
              <span className="font-[Satoshi,sans-serif] text-xs font-medium text-[#a3a3a3] uppercase tracking-widest">
                The People
              </span>
            </div> */}
            <h2
              className="font-[Satoshi,sans-serif] text-3xl md:text-[48px] font-bold leading-[1.1] tracking-[-0.5px] bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(165deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)',
              }}
            >
              Meet the Team
            </h2>
            <p className="max-w-[600px] font-[Satoshi,sans-serif] text-base md:text-[18px] leading-[1.5] text-[#a3a3a3]">
              Small enough to care about every project. Experienced enough to handle anything.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="group flex flex-col gap-5 rounded-2xl bg-[#0f0f0f] border border-white/5 p-6 hover:border-white/10 hover:bg-[#111111] transition-all duration-300"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${member.gradient} shrink-0`}
                >
                  <span className="font-[Satoshi,sans-serif] text-base font-bold text-white">
                    {member.initials}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-[Satoshi,sans-serif] text-base font-bold text-white">
                    {member.name}
                  </h3>
                  <span className="font-[Satoshi,sans-serif] text-xs font-semibold text-[#f59768] uppercase tracking-wide">
                    {member.role}
                  </span>
                </div>
                <p className="font-[Satoshi,sans-serif] text-sm leading-[1.6] text-[#a3a3a3]">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="relative w-full py-20 md:py-24 border-t border-white/5">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[120px]">
          <div className="mb-10 md:mb-14 flex flex-col items-center gap-3 text-center">
            <h2
              className="font-[Satoshi,sans-serif] text-2xl md:text-[32px] font-bold leading-tight bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(165deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)',
              }}
            >
              Brands we&apos;ve partnered with
            </h2>
            <p className="font-[Satoshi,sans-serif] text-sm text-[#a3a3a3]">
              Trusted by startups and enterprises across industries.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="flex h-8 md:h-10 items-center justify-center transform hover:scale-110 transition-all duration-300"
              >
                <div className="relative h-full flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <Image
                    alt={partner.name}
                    src={partner.src}
                    width={120}
                    height={40}
                    className="h-full w-auto max-w-[90px] md:max-w-[120px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative w-full overflow-hidden py-20 md:py-28 bg-[#060606] border-t border-white/5">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-25"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(145,17,230,0.45) 0%, rgba(77,7,227,0.2) 45%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[120px] flex flex-col items-center text-center gap-6">
          <h2
            className="font-[Satoshi,sans-serif] text-3xl md:text-[52px] font-bold leading-[1.1] tracking-[-0.5px] bg-clip-text text-transparent max-w-3xl"
            style={{
              backgroundImage:
                'linear-gradient(165deg, rgb(255,255,255) 10%, rgba(189,189,189,0.9) 60%, rgb(255,255,255) 90%)',
            }}
          >
            Ready to build something great together?
          </h2>
          <p className="max-w-[520px] font-[Satoshi,sans-serif] text-base md:text-[18px] leading-[1.5] text-[#a3a3a3]">
            Tell us about your project. We&apos;ll get back to you within 24 hours with a clear plan of action.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Link href="/#contact">
              <StyledButton>START YOUR PROJECT</StyledButton>
            </Link>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-[Satoshi,sans-serif] text-sm font-semibold text-white/70 hover:text-white transition-colors duration-200 px-6 py-3 rounded-full border border-white/10 hover:border-white/25 hover:bg-white/5"
            >
              Back to Home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
