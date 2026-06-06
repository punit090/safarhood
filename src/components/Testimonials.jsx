'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Safarhood completely changed the way I look at trekking. On Dayara Bugyal, I didn't just see stunning mountains; I made 12 amazing friends. The campfires and community bonding sessions were absolutely magical!",
      name: "Aarav Mehta",
      age: 24,
      location: "New Delhi",
      trek: "Dayara Bugyal Trek",
      rating: 5
    },
    {
      quote: "As a family, we were worried about altitude safety on the Chopta-Tungnath-Chandrashila trail. But the Safarhood team was incredibly professional. Regular oxygen checks, high-quality gear, and extremely kind local guides.",
      name: "Priyal Shah",
      age: 38,
      location: "Mumbai",
      trek: "Chopta & Tungnath Temple Trek",
      rating: 5
    },
    {
      quote: "The Har Ki Dun valley is spectacular, but it was Safarhood's custom social icebreakers and conscious trail cleanup that made the journey special. For the first time, I felt like a community member rather than a tourist.",
      name: "Kabir Sen",
      age: 29,
      location: "Bangalore",
      trek: "Har Ki Dun Valley Trek",
      rating: 5
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-cream text-charcoal relative overflow-hidden">
      {/* Subtle graphic accent */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-accent tracking-widest uppercase font-body bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
            Trekkers Stories
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-6 text-primary">
            What Our Community Says
          </h2>
        </div>

        {/* Carousel Frame */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-primary/5 shadow-xl min-h-[320px] flex flex-col justify-between">
          {/* Quote Icon */}
          <div className="absolute top-6 right-8 text-primary/5">
            <Quote size={80} className="transform rotate-180" />
          </div>

          <div className="relative overflow-hidden flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Rating stars */}
                <div className="flex gap-1 text-accent">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-heading text-lg sm:text-xl md:text-2xl text-primary font-medium italic leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Profile */}
                <div>
                  <h4 className="font-heading text-base font-bold text-primary">
                    {testimonials[currentIndex].name}, {testimonials[currentIndex].age}
                  </h4>
                  <p className="font-body text-xs text-muted-green">
                    From {testimonials[currentIndex].location} • Trekked {testimonials[currentIndex].trek}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 border-t border-primary/5 pt-6 flex-shrink-0">
            {/* Index Tracker */}
            <div className="flex gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-350 ${idx === currentIndex ? 'bg-accent w-6' : 'bg-primary/20'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next/Prev Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full border border-primary/10 hover:border-accent text-primary hover:text-accent hover:bg-accent/5 transition-all duration-200 cursor-pointer"
                aria-label="Previous story"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-primary hover:bg-accent text-white transition-all duration-200 cursor-pointer"
                aria-label="Next story"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
