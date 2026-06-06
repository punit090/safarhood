'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Philosophy', href: '/about' },
    { name: 'Himalayan Treks', href: '/tracks' },
    { name: 'Why Safarhood', href: '/#why-us' },
    { name: 'Help & FAQs', href: '/faq' },
    { name: 'Get In Touch', href: '/contact-us' },
  ];

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Background visual details */}
      <div className="absolute bottom-[-20%] left-[-20%] w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/10">
          
          {/* Logo & Description */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-accent/20 bg-white">
                <Image 
                  src="/logo.jpg" 
                  alt="Safarhood Logo" 
                  fill
                  sizes="32px"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="font-heading text-lg font-bold tracking-wider text-white">
                SAFAR<span className="text-accent">HOOD</span>
              </span>
            </Link>
            <p className="font-body text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
              We design premium guided trekking expeditions that prioritize high safety levels, environmental cleanup actions, and team social bonding.
            </p>
            <div className="flex gap-3 pt-2">
              <a 
                href="https://instagram.com/safarhood" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-white/5 hover:bg-accent border border-white/10 rounded-full text-white hover:text-white transition-all duration-300"
                aria-label="Instagram handle link"
              >
                <InstagramIcon size={16} />
              </a>
              <span className="font-body text-xs text-white/80 self-center">
                @safarhood
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold tracking-wider text-accent uppercase">Explore site</h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    className="font-body text-xs sm:text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact coordinates */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-heading text-sm font-bold tracking-wider text-accent uppercase">Office & base Camp</h4>
            <ul className="space-y-3 font-body text-xs sm:text-sm text-white/60">
              <li className="flex gap-2.5 items-start">
                <MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span>Natin Village, Bhatwari, Uttarkashi, Uttarakhand - 249193</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a href="mailto:expeditions@safarhood.com" className="hover:text-accent transition-colors">
                  expeditions@safarhood.com
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a href="https://wa.me/919512499032" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  +91-95124-99032 (WhatsApp)
                </a>
              </li>
            </ul>
            
            {/* Eco Pledge */}
            <div className="flex gap-2 items-center bg-white/5 border border-white/15 p-3 rounded-xl max-w-sm mt-4">
              <Sparkles size={16} className="text-accent animate-pulse flex-shrink-0" />
              <p className="font-body text-[10px] text-white/70 leading-relaxed">
                <span className="font-bold text-white">LNT Pledge:</span> We pack back all non-biodegradable trail wastes to preserve high altitude ecosystems.
              </p>
            </div>
          </div>

        </div>

        {/* Copyright subtext */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-center sm:text-left font-body text-[10px] sm:text-xs text-white/40 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Safarhood. All rights reserved.</p>
          <p className="flex items-center gap-1 justify-center">
            Journeys together. Bonds forever. Made with <Heart size={10} className="text-accent fill-accent" /> for Himalayan trails.
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon({ size = 16, className = "" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

