'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactClient() {
  return (
    <>
      <Navbar />

      {/* Mini-Hero Header */}
      <section className="relative bg-primary-dark pt-32 pb-16 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <span className="text-xs font-bold text-accent tracking-widest uppercase font-body bg-accent/15 px-3 py-1.5 rounded-full border border-accent/25">
            Contact Channels
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold leading-tight">
            Connect With Safarhood
          </h1>
          <p className="font-body text-base text-white/70 max-w-xl mx-auto leading-relaxed">
            Have questions about custom departures, health safety protocols, or physical training? Connect directly with our team.
          </p>
        </div>
      </section>

      {/* Shared Contact Form & Info Stack */}
      <ContactForm />

      {/* Map and Socials Panel */}
      <section className="py-16 bg-cream text-charcoal border-t border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
            
            {/* Socials & Address Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-primary">Base Camp Operations</h3>
                <p className="font-body text-xs sm:text-sm text-muted-green mt-2 leading-relaxed">
                  Our main base operations are located in Natin Village, Bhatwari. If you are trekking with us, this is our baseline training camp where we conduct gear checks, health screening, and group briefings.
                </p>
              </div>

              {/* Physical Coordinates */}
              <div className="space-y-4 font-body text-xs sm:text-sm text-muted-green">
                <div className="flex gap-3 items-start">
                  <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-primary">Headquarters & Base Camp</p>
                    <p className="mt-1">Natin Village, Bhatwari, Uttarkashi, Uttarakhand - 249193</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <Mail size={18} className="text-accent flex-shrink-0" />
                  <div>
                    <p className="font-bold text-primary">General Inquiries</p>
                    <a href="mailto:expeditions@safarhood.com" className="hover:text-accent transition-colors">
                      expeditions@safarhood.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Phone size={18} className="text-accent flex-shrink-0 mt-1" />
                  <div className="space-y-1">
                    <p className="font-bold text-primary">Direct Hotline (WhatsApp / Call)</p>
                    <div className="flex flex-col gap-1.5">
                      <a href="https://wa.me/919512499032?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20travel%20packages." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-accent hover:bg-accent-light text-white font-body text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-300 w-fit">
                        <WhatsAppIcon size={12} />
                        Chat on WhatsApp (+91 9512499032)
                      </a>
                      <a href="tel:+919512499032" className="text-xs text-muted-green hover:text-accent transition-colors font-semibold">
                        Call: +91-95124-99032
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="space-y-3 pt-4 border-t border-primary/5">
                <h4 className="font-heading text-sm font-bold text-primary">Follow Our Campfires</h4>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://instagram.com/safarhood" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 bg-white border border-primary/5 shadow-xs hover:border-accent rounded-xl text-primary hover:text-accent transition-all duration-300"
                    aria-label="Instagram Page Link"
                  >
                    <InstagramIcon size={20} />
                  </a>
                  <div>
                    <p className="font-body text-xs font-bold text-primary">Instagram</p>
                    <p className="font-body text-[10px] text-muted-green">@safarhood • Daily camp reels and traveler journals</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Google Map Iframe */}
            <div className="lg:col-span-7 bg-white p-4 rounded-3xl border border-primary/5 shadow-xl overflow-hidden h-[450px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3419.066487722709!2d78.6083818!3d30.8288285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908f244199c089f%3A0xe54d6fcd8ef9919f!2sBhatwari%2C%20Uttarakhand%20249193!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: "1.25rem" }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Safarhood HQ Basecamp Map"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// Inline Instagram SVG Helper
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

// Inline WhatsApp SVG Helper
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
      <path 
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.709 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        fill="currentColor"
      />
    </svg>
  );
}
