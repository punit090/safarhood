'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Mountain, MapPin, Sun, Check, MessageSquare, HeartHandshake, Clock } from 'lucide-react';

export default function TrackDetailsClient({ trek }) {
  const [activeDay, setActiveDay] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    groupSize: '1',
    message: ''
  });

  if (!trek) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Define dynamic benefits/features based on the trek details
  const features = [
    { title: "Wilderness Safety Grid", desc: "Twice daily oxygen/pulse checks, trauma response systems, and rescue stretchers on path." },
    { title: "Social Design campfires", desc: "Structured campfire games, peer support systems, and group reflections." },
    { title: "LNT Active Cleanup", desc: "Trekkers and guides participate in picking up plastic rubbish from high points." },
    { title: "Cozy A-frame tents", desc: "Double-walled premium alpine tents with thick foam ground insulation mats." }
  ];

  const benefits = [
    { title: "Forging Lifelong Friendships", desc: "Explore in close-knit batches where group synergy turns strangers into a supportive cohort." },
    { title: "Acclimatized Safety Pace", desc: "No rushed climbs. We trek slowly and pace ascend paths for healthy lung adaptation." },
    { title: "Himalayan Cultural Exposure", desc: "Eat authentic meals and support local mule-handlers in rural border villages." },
    { title: "Mental Restoration", desc: "Unplug from screen devices and realign focus amid clean, silent alpine ecosystems." }
  ];

  return (
    <>
      <Navbar />

      {/* Large Banner Image Header */}
      <section className="relative h-[45vh] min-h-[300px] w-full bg-primary-dark">
        <Image 
          src={trek.image} 
          alt={trek.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-primary-dark/30 to-black/40" />
        
        {/* Banner Copy Overlay */}
        <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="text-white">
                <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/20 px-3 py-1.5 rounded-full border border-accent/35 backdrop-blur-xs">
                  {trek.difficulty}
                </span>
                <h1 className="font-heading text-3xl sm:text-5xl font-bold mt-4 leading-tight text-white drop-shadow-xs">
                  {trek.title}
                </h1>
                <p className="font-body text-sm sm:text-base text-white/80 mt-2 font-medium">
                  {trek.subTitle}
                </p>
              </div>
              <a 
                href={`https://wa.me/919512499032?text=Hello%2C%20I%20would%20like%20to%20book%20a%20free%20consultation%20regarding%20the%20${encodeURIComponent(trek.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-body text-xs sm:text-sm font-bold px-5 py-3 rounded-full transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40 transform hover:-translate-y-0.5 w-fit"
              >
                <WhatsAppIcon size={16} />
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="py-16 bg-cream text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
            
            {/* Left Column (Details, Route, Itinerary, Features/Benefits) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Overview Details Section */}
              <div className="space-y-4">
                <h2 className="font-heading text-2xl font-bold text-primary">Track Details & Description</h2>
                <p className="font-body text-sm text-muted-green leading-relaxed">
                  The {trek.title} is an immersion into the high-altitude wilderness. Designed for youth cohorts, families, and solo explorers, this trek features comfortable walking grids combined with pristine high passes. Whether you are walking through the vast golden meadows of {trek.title.split(' Trek')[0]} or exploring local border villages, this route is packed with physical rejuvenation and peer connection.
                </p>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-5 rounded-3xl border border-primary/5 shadow-xs">
                <div className="flex items-center gap-3">
                  <Calendar className="text-accent flex-shrink-0" size={20} />
                  <div>
                    <p className="font-body text-[9px] text-muted-green uppercase tracking-wider font-semibold">Duration</p>
                    <p className="font-heading text-xs sm:text-sm font-bold text-primary">{trek.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mountain className="text-accent flex-shrink-0" size={20} />
                  <div>
                    <p className="font-body text-[9px] text-muted-green uppercase tracking-wider font-semibold">Max Altitude</p>
                    <p className="font-heading text-xs sm:text-sm font-bold text-primary">{trek.maxAltitude.split(' – ')[0]}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-accent flex-shrink-0" size={20} />
                  <div>
                    <p className="font-body text-[9px] text-muted-green uppercase tracking-wider font-semibold">Starts & Ends</p>
                    <p className="font-heading text-xs sm:text-sm font-bold text-primary">{trek.startingPoint}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Sun className="text-accent flex-shrink-0" size={20} />
                  <div>
                    <p className="font-body text-[9px] text-muted-green uppercase tracking-wider font-semibold">Best Season</p>
                    <p className="font-heading text-xs sm:text-sm font-bold text-primary leading-tight">{trek.bestSeason.split(' & ')[0]}</p>
                  </div>
                </div>
              </div>

              {/* Route Map path */}
              <div className="bg-white p-6 rounded-3xl border border-primary/5 shadow-xs">
                <h3 className="font-heading text-base font-bold text-primary mb-3">Trek Route Map Coordinates</h3>
                <div className="flex flex-wrap gap-2 items-center">
                  {trek.route.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs font-body">
                      <span className={`px-2.5 py-1 rounded-md font-semibold ${idx === 0 || idx === trek.route.length - 1 ? 'bg-primary text-white' : 'bg-primary/5 text-primary'}`}>
                        {step}
                      </span>
                      {idx < trek.route.length - 1 && (
                        <span className="text-muted-green">➔</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Day-by-Day Itinerary Accordion */}
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-primary">Day-by-Day Journey Path</h3>
                <div className="space-y-3">
                  {trek.briefItinerary.map((dayPlan) => {
                    const isOpen = activeDay === dayPlan.day;
                    return (
                      <div 
                        key={dayPlan.day} 
                        className={`rounded-2xl border bg-white overflow-hidden transition-all duration-300 ${isOpen ? 'border-accent/40 shadow-sm' : 'border-primary/5 hover:border-accent/20'}`}
                      >
                        <button 
                          onClick={() => setActiveDay(isOpen ? 0 : dayPlan.day)}
                          className="flex items-center justify-between w-full p-4 sm:p-5 text-left font-heading font-bold text-primary cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-body text-xs font-bold ${isOpen ? 'bg-accent text-white' : 'bg-primary/5 text-primary'}`}>
                              Day {dayPlan.day}
                            </span>
                            <span className="text-sm sm:text-base">{dayPlan.title}</span>
                          </div>
                          <span className={`text-accent font-body transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                            ▼
                          </span>
                        </button>

                        <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] border-t border-primary/5' : 'max-h-0'}`} style={{ overflow: 'hidden' }}>
                          <div className="p-5 font-body text-xs sm:text-sm text-muted-green leading-relaxed space-y-3">
                            <p>{dayPlan.desc}</p>
                            {trek.shortItinerary.find(i => i.day === dayPlan.day) && (
                              <div className="flex gap-2 items-center bg-cream/50 p-2.5 rounded-lg border border-primary/5 text-xs text-primary font-semibold w-fit">
                                <Clock size={12} className="text-accent" />
                                {trek.shortItinerary.find(i => i.day === dayPlan.day).details}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Distance Summary logs */}
              <div className="space-y-3">
                <h3 className="font-heading text-base font-bold text-primary">Distance Summary log</h3>
                <div className="bg-white rounded-2xl border border-primary/5 overflow-hidden shadow-xs">
                  <table className="w-full text-left font-body text-xs border-collapse">
                    <thead>
                      <tr className="bg-primary/5 text-primary font-bold border-b border-primary/10">
                        <th className="p-3">Departure coordinates</th>
                        <th className="p-3">Destination point</th>
                        <th className="p-3 text-right">Distance Log</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/5">
                      {trek.trekDistanceSummary.map((item, idx) => (
                        <tr key={idx} className="hover:bg-cream/40 transition-colors">
                          <td className="p-3 font-semibold text-primary">{item.from}</td>
                          <td className="p-3 text-muted-green">{item.to}</td>
                          <td className="p-3 text-right font-bold text-accent">{item.distance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Features & Benefits details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-primary/5">
                {/* Features */}
                <div className="space-y-4">
                  <h3 className="font-heading text-lg font-bold text-primary flex items-center gap-2">
                    <Check size={18} className="text-accent" />
                    Key Features Included
                  </h3>
                  <div className="space-y-4">
                    {features.map((feat, i) => (
                      <div key={i} className="space-y-1">
                        <h4 className="font-heading text-sm font-bold text-primary">{feat.title}</h4>
                        <p className="font-body text-xs text-muted-green leading-relaxed">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  <h3 className="font-heading text-lg font-bold text-primary flex items-center gap-2">
                    <HeartHandshake size={18} className="text-accent" />
                    Your Benefits
                  </h3>
                  <div className="space-y-4">
                    {benefits.map((ben, i) => (
                      <div key={i} className="space-y-1">
                        <h4 className="font-heading text-sm font-bold text-primary">{ben.title}</h4>
                        <p className="font-body text-xs text-muted-green leading-relaxed">{ben.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (Booking card details) */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">

              {/* WhatsApp Sticky Sidebar Card */}
              <div className="bg-white p-6 rounded-3xl border border-primary/5 shadow-md space-y-4">
                <h4 className="font-heading text-base font-bold text-primary">Need Instant Help?</h4>
                <p className="font-body text-xs text-muted-green leading-relaxed">
                  Chat directly with our trek coordinator on WhatsApp to resolve your queries about fitness prep, gear, or departures.
                </p>
                <a 
                  href={`https://wa.me/919512499032?text=Hello%2C%20I%20would%20like%20to%20book%20a%20free%20consultation%20regarding%20the%20${encodeURIComponent(trek.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-body text-xs font-bold w-full py-3.5 rounded-2xl transition-all duration-300 shadow-sm shadow-accent/15 cursor-pointer"
                >
                  <WhatsAppIcon size={16} />
                  Book Free Consultation
                </a>
              </div>
              
              {/* Quick checklist */}
              <div className="bg-white p-5 rounded-3xl border border-primary/5 shadow-xs">
                <h4 className="font-heading text-sm font-bold text-primary mb-3">Booking Inclusions</h4>
                <ul className="space-y-2.5 font-body text-xs text-muted-green">
                  {["Rescue certified trek leaders", "Cozy shared high mountain camps", "Acclimatized organic dining", "LNT active environment cleanup fees"].map((inc, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-accent font-semibold">✔</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquiry Form */}
              <div className="bg-primary text-white p-6 sm:p-8 rounded-3xl border border-white/5 relative overflow-hidden shadow-xl">
                {/* Visual fireglow */}
                <div className="absolute bottom-[-15%] right-[-10%] w-32 h-32 bg-accent/20 rounded-full blur-2xl" />

                {formSubmitted ? (
                  <div className="text-center py-8 space-y-4 relative z-10">
                    <div className="mx-auto w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                      <HeartHandshake size={24} />
                    </div>
                    <h4 className="font-heading text-lg font-bold">Inquiry Logged!</h4>
                    <p className="font-body text-xs text-white/70 leading-relaxed">
                      Thank you for choosing Safarhood. We have logged your request. One of our community heads will reach out within 24 hours to schedule a team discovery call.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-accent underline hover:text-accent-light"
                    >
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                    <div className="space-y-1">
                      <h4 className="font-heading text-lg font-bold flex items-center gap-2">
                        <MessageSquare size={16} className="text-accent animate-pulse" />
                        Plan This Expedition
                      </h4>
                      <p className="font-body text-[10px] text-white/60">Submit details to reserve your preferred batch date.</p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-[9px] font-semibold uppercase tracking-wider text-white/70 mb-1" htmlFor="name">Full Name</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/15 focus:border-accent rounded-lg px-3 py-2 text-xs text-white outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-[9px] font-semibold uppercase tracking-wider text-white/70 mb-1" htmlFor="email">Email Address</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/15 focus:border-accent rounded-lg px-3 py-2 text-xs text-white outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-[9px] font-semibold uppercase tracking-wider text-white/70 mb-1" htmlFor="phone">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/15 focus:border-accent rounded-lg px-3 py-2 text-xs text-white outline-none transition-colors"
                          placeholder="+91-98765-43210"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[9px] font-semibold uppercase tracking-wider text-white/70 mb-1" htmlFor="date">Start Date</label>
                          <input 
                            type="date" 
                            id="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleInputChange}
                            className="w-full bg-white/10 border border-white/15 focus:border-accent rounded-lg px-2 py-2 text-xs text-white outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] font-semibold uppercase tracking-wider text-white/70 mb-1" htmlFor="groupSize">Trekkers</label>
                          <select 
                            id="groupSize"
                            name="groupSize"
                            value={formData.groupSize}
                            onChange={handleInputChange}
                            className="w-full bg-white/10 border border-white/15 focus:border-accent rounded-lg px-2 py-2 text-xs text-white/80 outline-none transition-colors cursor-pointer"
                          >
                            <option value="1" className="text-charcoal bg-white">1 Person</option>
                            <option value="2" className="text-charcoal bg-white">2 People</option>
                            <option value="3-5" className="text-charcoal bg-white">3–5 People</option>
                            <option value="6+" className="text-charcoal bg-white">6+ People</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[9px] font-semibold uppercase tracking-wider text-white/70 mb-1" htmlFor="message">Message / Queries</label>
                        <textarea 
                          id="message"
                          name="message"
                          rows="3"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/15 focus:border-accent rounded-lg px-3 py-2 text-xs text-white outline-none transition-colors resize-none"
                          placeholder="Physical constraints or customization requests..."
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-accent hover:bg-accent-light text-white font-body text-xs font-bold py-3 rounded-xl transition-all duration-300 cursor-pointer shadow-md shadow-accent/15"
                    >
                      Book Free Consultation
                    </button>
                  </form>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight">
            Ready to Embark on Your Next Bonding Journey?
          </h2>
          <p className="font-body text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
            Acclimatize in safety under certified mountaineers. Lock your preferred batch date now and explore the pristine Himalayas as a community.
          </p>
          <div className="pt-4">
            <a 
              href={`https://wa.me/919512499032?text=Hello%2C%20I%20would%20like%20to%20book%20a%20free%20consultation%20regarding%20the%20${encodeURIComponent(trek.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-body text-sm sm:text-base font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <WhatsAppIcon size={20} />
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="none" fill="none" />
      <path 
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.709 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        fill="currentColor"
      />
    </svg>
  );
}
