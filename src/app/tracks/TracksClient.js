'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrekCard from "@/components/TrekCard";
import { treksData } from "@/data/treks";
import { Compass, Search, Filter } from "lucide-react";

export default function TracksPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [durationFilter, setDurationFilter] = useState('all'); // all, 5days, long

  // Filter logic
  const filteredTracks = treksData.filter(track => {
    const matchesSearch = track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          track.attractions.some(attr => attr.toLowerCase().includes(searchQuery.toLowerCase()));
    
    let matchesDuration = true;
    if (durationFilter === '5days') {
      matchesDuration = track.duration.includes('5 Days');
    } else if (durationFilter === 'long') {
      matchesDuration = track.duration.includes('6 Days') || track.duration.includes('7 Days');
    }

    return matchesSearch && matchesDuration;
  });

  return (
    <>
      <Navbar />

      {/* Mini-Hero Header */}
      <section className="relative bg-primary-dark pt-32 pb-16 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <span className="text-xs font-bold text-accent tracking-widest uppercase font-body bg-accent/15 px-3 py-1.5 rounded-full border border-accent/25">
            Expeditions catalog
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold leading-tight">
            Explore Himalayan Tracks
          </h1>
          <p className="font-body text-base text-white/70 max-w-xl mx-auto leading-relaxed">
            Select an adventure tailored to your fitness targets. Every path features certified guides and customized group circles.
          </p>
        </div>
      </section>

      {/* Filter and Cards Section */}
      <section className="py-16 bg-cream text-charcoal min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search and Filter Panel */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 bg-white p-5 rounded-3xl border border-primary/5 shadow-xs">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-green" size={18} />
              <input 
                type="text" 
                placeholder="Search tracks or attractions (e.g. Meadows, Valley)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-cream border border-primary/10 focus:border-accent rounded-xl text-xs sm:text-sm text-primary outline-none transition-all"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 self-start md:self-auto w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <div className="flex items-center gap-1.5 text-xs text-muted-green font-semibold mr-2 flex-shrink-0">
                <Filter size={14} />
                <span>Duration:</span>
              </div>
              <button 
                onClick={() => setDurationFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${durationFilter === 'all' ? 'bg-accent text-white shadow-sm shadow-accent/20' : 'bg-primary/5 text-primary hover:bg-primary/10'}`}
              >
                All Tracks
              </button>
              <button 
                onClick={() => setDurationFilter('5days')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${durationFilter === '5days' ? 'bg-accent text-white shadow-sm shadow-accent/20' : 'bg-primary/5 text-primary hover:bg-primary/10'}`}
              >
                5 Days
              </button>
              <button 
                onClick={() => setDurationFilter('long')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${durationFilter === 'long' ? 'bg-accent text-white shadow-sm shadow-accent/20' : 'bg-primary/5 text-primary hover:bg-primary/10'}`}
              >
                6+ Days
              </button>
            </div>
          </div>

          {/* Results Grid */}
          {filteredTracks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredTracks.map((trek) => (
                <TrekCard 
                  key={trek.id} 
                  trek={trek} 
                  // onOpenDetails is bypassed, card handles Next.js router links directly
                  onOpenDetails={() => {}} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 space-y-4 max-w-sm mx-auto">
              <div className="mx-auto w-12 h-12 bg-primary/5 text-accent rounded-full flex items-center justify-center">
                <Compass size={24} className="animate-spin" />
              </div>
              <h3 className="font-heading text-lg font-bold text-primary">No Tracks Found</h3>
              <p className="font-body text-xs text-muted-green leading-relaxed">
                We couldn&apos;t match your keyword query. Try searching for &quot;Meadow&quot;, &quot;Gurudwara&quot;, or select another duration tab filter.
              </p>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}
