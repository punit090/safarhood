'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TrekCard from '@/components/TrekCard';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { treksData } from '@/data/treks';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  // Show all 4 featured treks on the homepage
  const featuredTracks = treksData;

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      
      {/* Featured Tracks Section */}
      <section className="py-24 bg-cream text-charcoal relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 text-left max-w-xl">
              <span className="text-xs font-bold text-accent tracking-widest uppercase font-body bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                Featured Trips
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary leading-tight">
                Featured Himalayan Expeditions
              </h2>
              <p className="font-body text-sm text-muted-green leading-relaxed">
                Take a preview of our premium guided hikes. Small groups, wilderness safety checkers, and deep peer bonding activities.
              </p>
            </div>
            
            <Link 
              href="/tracks" 
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-body text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full transition-colors w-fit flex-shrink-0 cursor-pointer shadow-md shadow-accent/15"
            >
              View All Trips
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto animate-fade-in-up">
            {featuredTracks.map((trek) => (
              <TrekCard 
                key={trek.id} 
                trek={trek} 
              />
            ))}
          </div>

        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  );
}
