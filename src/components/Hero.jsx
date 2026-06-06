'use client';

import Image from 'next/image';
import { Compass, Users, Sparkles, Flame, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-primary-dark pt-28 pb-16 flex items-center overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary-light blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary-light/50 border border-accent/20 px-4 py-1.5 rounded-full text-accent font-body text-xs sm:text-sm font-semibold mb-6 w-fit"
            >
              <Sparkles size={14} className="animate-pulse text-accent" />
              Journeys Together. Bonds Forever.
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Not Just Trips, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                We Build Bonds.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-white/70 font-body text-base sm:text-lg max-w-xl leading-relaxed"
            >
              Experience the pristine Himalayas, not as isolated tourists, but as a community of explorers. Safarhood brings youth, families, and solo travelers together to discover valleys, conquer summits, and forge lifelong friendships.
            </motion.p>

            {/* Icons Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
            >
              {[
                { label: 'Treks', icon: Compass },
                { label: 'Adventure', icon: Flame },
                { label: 'Family', icon: Users },
                { label: 'Memories', icon: Sparkles }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl hover:border-accent/40 transition-colors duration-300">
                  <div className="p-2 bg-accent/15 rounded-lg text-accent">
                    <item.icon size={18} />
                  </div>
                  <span className="font-body text-sm font-medium text-white/90">{item.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <a 
                href="/tracks" 
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-body text-base font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 transform hover:-translate-y-0.5"
              >
                Explore Treks
                <ArrowRight size={18} />
              </a>
              <a 
                href="/about" 
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-body text-base font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Our Philosophy
              </a>
            </motion.div>
          </div>

          {/* Right Image/Banner Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-primary"
            >
              <Image 
                src="/banner.jpg" 
                alt="Safarhood Campaign - Not Just Trips, We Build Bonds" 
                fill
                priority
                sizes="(max-w-768px) 100vw, 360px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
              
              {/* Corner Badge */}
              <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold font-body uppercase tracking-wider shadow">
                Campaign
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
