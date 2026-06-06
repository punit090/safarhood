'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Compass, Shield, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrekCard({ trek }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-primary/5 hover:border-accent/30 transition-all duration-300 hover:shadow-2xl flex flex-col h-full"
    >
      {/* Image header with overlay */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image 
          src={trek.image} 
          alt={trek.title}
          fill
          sizes="(max-w-768px) 100vw, 380px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Difficulty Badge */}
        <div className="absolute top-4 left-4 bg-primary/95 text-white font-body text-xs font-semibold px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 backdrop-blur-sm shadow">
          <Shield size={12} className="text-accent" />
          {trek.difficulty}
        </div>

        {/* Altitude badge */}
        <div className="absolute bottom-4 right-4 bg-accent/90 text-white font-body text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow">
          <Compass size={12} />
          {trek.maxAltitude.split(' – ')[0]}
        </div>
      </div>

      {/* Details Area */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-accent tracking-wider uppercase font-body">
            {trek.duration}
          </span>
          <h3 className="font-heading text-lg sm:text-xl font-bold text-primary mt-1.5 group-hover:text-accent transition-colors duration-300 line-clamp-1">
            {trek.title}
          </h3>
          <p className="font-body text-xs text-muted-green mt-1">
            Starts from {trek.startingPoint}
          </p>
          <p className="font-body text-xs text-muted-green/80 mt-3 line-clamp-2 leading-relaxed">
            {trek.description || `Explore ${trek.title} with Safarhood. Includes experienced guides, camp accommodations, LNT trail cleanups, and community bonding.`}
          </p>

          {/* Attractions Chips */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {trek.attractions.slice(0, 3).map((item, idx) => (
              <span key={idx} className="bg-primary/5 text-primary text-[10px] font-semibold px-2 py-1 rounded-md font-body">
                {item}
              </span>
            ))}
            {trek.attractions.length > 3 && (
              <span className="bg-primary/5 text-primary text-[10px] font-semibold px-2 py-1 rounded-md font-body">
                +{trek.attractions.length - 3} more
              </span>
            )}
          </div>
        </div>

        <Link 
          href={`/tracks/${trek.id}`}
          className="mt-6 flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-body text-sm font-bold w-full py-3 rounded-xl transition-all duration-300 group-hover:bg-accent group-hover:hover:bg-accent-light cursor-pointer text-center"
        >
          View Full Itinerary
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
