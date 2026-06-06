'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Tracks', href: '/tracks' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-lg' : 'bg-gradient-to-b from-black/50 to-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-accent/20 bg-white">
              <Image 
                src="/logo.jpg" 
                alt="Safarhood Logo" 
                fill
                sizes="40px"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="font-heading text-xl sm:text-2xl font-bold tracking-wider text-white">
              SAFAR<span className="text-accent">HOOD</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`relative font-body text-sm font-medium tracking-wide transition-colors duration-200 ${isActive ? 'text-accent' : 'text-white/80 hover:text-accent'}`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/919512499032?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20travel%20packages." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-body text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon size={16} />
              Book Free Trial
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="text-white hover:text-accent p-2 transition-colors duration-200 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Full Screen Modal Overlay) */}
      <div className={`md:hidden fixed inset-0 z-50 bg-gradient-to-b from-primary-dark via-primary-dark/98 to-primary/95 backdrop-blur-xl transform transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        
        {/* Background glow accents */}
        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-accent/15 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-primary-light/20 blur-[80px] pointer-events-none" />

        <div className="flex flex-col h-full justify-between p-6 sm:p-8 relative z-10">
          
          {/* Header row inside drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-accent/20 bg-white">
                <Image 
                  src="/logo.jpg" 
                  alt="Safarhood Logo" 
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <span className="font-heading text-lg font-bold tracking-wider text-white">
                SAFAR<span className="text-accent">HOOD</span>
              </span>
            </Link>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-accent p-2.5 transition-colors duration-200 focus:outline-none bg-white/5 rounded-full border border-white/10"
              aria-label="Close Menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="flex flex-col gap-5 my-auto py-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between font-heading text-xl sm:text-2xl font-bold py-2.5 transition-all duration-200 ${isActive ? 'text-accent border-b border-accent/20 pb-2.5' : 'text-white/90 hover:text-accent border-b border-white/5 pb-2.5'}`}
                >
                  <span>{link.name}</span>
                  <span className={`text-base transform transition-all duration-200 group-hover:translate-x-1.5 ${isActive ? 'text-accent opacity-100' : 'text-white/40 opacity-0 group-hover:opacity-100'}`}>
                    ➔
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Footer Info Stack inside drawer */}
          <div className="space-y-6">
            <a 
              href="https://wa.me/919512499032?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20travel%20packages." 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-light text-white font-body text-base font-bold py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 active:scale-[0.98]"
            >
              <WhatsAppIcon size={18} />
              Book Free Trial
            </a>
            
            {/* Quick base information */}
            <div className="text-center space-y-2 pt-4 border-t border-white/5">
              <p className="font-body text-[10px] text-white/50">Basecamp: Bhatwari, Uttarkashi, Uttarakhand</p>
              <p className="font-body text-[10px] text-accent font-semibold">Hotline: +91 95124 99032 (WhatsApp / Call)</p>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

function WhatsAppIcon({ size = 16, className = "" }) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="none" fill="none" />
      {/* Real WhatsApp icon SVG path for maximum premium appeal */}
      <path 
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.709 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        fill="currentColor"
      />
    </svg>
  );
}
