'use client';

import Image from 'next/image';
import { Users2, Compass, HeartHandshake, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const pillars = [
    {
      title: 'Community & Camaraderie',
      description: 'Shared tents, group circle sessions, and storytelling under the stars. We believe in trekking as a community.',
      icon: Users2,
    },
    {
      title: 'Safety-First Guideline',
      description: 'Led by certified mountaineers equipped with medical response training, oxygen supplies, and satellite-linked safety grids.',
      icon: ShieldCheck,
    },
    {
      title: 'Conscious Eco-Tourism',
      description: 'We practice Leave-No-Trace principles. Our groups actively participate in keeping trailheads clean.',
      icon: Compass,
    },
    {
      title: 'Empathetic Adventure',
      description: 'Every trek is structured to be accessible yet challenging, promoting self-growth and mutual support.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="about" className="py-24 bg-cream text-charcoal relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Photo Frame */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image 
                src="/campfire.png" 
                alt="Trekkers bonding around campfire in Himalayas" 
                fill
                sizes="(max-w-1024px) 100vw, 600px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              {/* Decorative Label */}
              <div className="absolute bottom-6 left-6 bg-primary text-white p-4 rounded-2xl shadow-lg glass-card-dark max-w-[240px]">
                <p className="font-heading font-semibold text-sm">"The campfire is where strangers become lifelong friends."</p>
                <p className="font-body text-xs text-accent mt-2">— The Safarhood Ethos</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Text details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-accent text-sm font-bold tracking-widest uppercase mb-3">Our Story & Philosophy</h2>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-primary leading-tight">
                We Don't Just Guide Trips, We Forge Lasting Bonds.
              </h3>
              <p className="mt-6 font-body text-base text-muted-green leading-relaxed">
                Trekking in the Himalayas is a transformative experience, but it is infinitely more powerful when shared. At Safarhood, we focus on the human element. We customize group dynamics, design campfire icebreakers, and foster an atmosphere where everyone supports one another on the trail.
              </p>
            </motion.div>

            {/* Grid Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col gap-3 p-4 bg-white rounded-2xl border border-primary/5 hover:border-accent/20 transition-all duration-300 hover:shadow-md"
                >
                  <div className="p-2.5 bg-primary/5 text-primary rounded-xl w-fit">
                    <pillar.icon size={20} className="text-accent" />
                  </div>
                  <h4 className="font-heading text-base font-bold text-primary">{pillar.title}</h4>
                  <p className="font-body text-xs text-muted-green leading-relaxed">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
