'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HelpCircle, Search, Compass } from 'lucide-react';

export default function FAQClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What physical fitness level is required for these treks?",
      answer: "All four treks (Dayara Bugyal, Valley of Flowers, Har Ki Dun, Chopta-Tungnath) are categorized as 'Easy to Moderate'. They are suitable for healthy beginners, active youth, and families. We recommend starting light cardio training (jogging, cycling, or climbing stairs) at least 3-4 weeks prior to departure to ensure comfortable trekking days."
    },
    {
      question: "How does Safarhood handle altitude sickness (AMS)?",
      answer: "Safety is our absolute priority. Our itineraries are engineered with optimal ascent rates for organic acclimatization. Our guides are trained in wilderness first aid and check trekkers' pulse and blood oxygen levels (SpO2) twice daily. Every trek is equipped with portable oxygen canisters and baseline emergency medicines. In case of issues, a rapid descent team is deployed."
    },
    {
      question: "What gear and clothing should I pack?",
      answer: "For summer treks (March–June), you need 3 layers (thermal base, fleece middle, and water/windproof outer). For winter or monsoon treks (Valley of Flowers, post-September treks), a warm feather down jacket is required. You must pack high-traction broken-in hiking shoes, a 40-50L backpack, trekking poles, sunglasses, sunscreen, and reusable water bottles."
    },
    {
      question: "What is Safarhood's group size policy?",
      answer: "We believe in intimate group sizes to maintain excellent safety standards and build genuine relationships. Our typical batches range between 12 to 18 trekkers. Every batch has a dedicated trek leader, certified guides, support kitchen crew, and porter staff to manage operations seamlessly."
    },
    {
      question: "How do you support eco-friendly trail management?",
      answer: "We strictly follow the Leave-No-Trace environmental protocol. Our team carries eco-bags to collect our food wrappers. Additionally, on descents, we encourage and guide our group members to pick up non-biodegradable wastes left by other tourists, which we carry back to municipal disposal grids in Rishikesh and Dehradun."
    }
  ];

  // Filter based on search query
  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <section className="relative bg-primary-dark pt-32 pb-16 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <span className="text-xs font-bold text-accent tracking-widest uppercase font-body bg-accent/15 px-3 py-1.5 rounded-full border border-accent/25">
            Help Desk
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="font-body text-base text-white/70 max-w-xl mx-auto leading-relaxed">
            Quickly search our knowledge base. Find preparation logs, gear checklists, and safety guidelines.
          </p>
        </div>
      </section>

      {/* Interactive Accordion Section */}
      <section className="py-16 bg-cream text-charcoal min-h-[500px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search Box */}
          <div className="relative w-full mb-10 bg-white p-3 rounded-2xl border border-primary/5 shadow-xs">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-green" size={18} />
            <input 
              type="text" 
              placeholder="Search by keywords (e.g. fitness, safety, gear)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-cream border border-primary/10 focus:border-accent rounded-xl text-xs sm:text-sm text-primary outline-none transition-all"
            />
          </div>

          {/* Accordion List */}
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div 
                    key={idx}
                    className={`border rounded-2xl bg-white transition-all duration-300 ${isOpen ? 'border-accent/40 shadow-md' : 'border-primary/5 hover:border-accent/20'}`}
                  >
                    <button
                      onClick={() => handleToggle(idx)}
                      className="flex items-center justify-between w-full p-5 sm:p-6 text-left font-heading text-base sm:text-lg font-bold text-primary cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <HelpCircle size={18} className="text-accent flex-shrink-0" />
                        <span>{faq.question}</span>
                      </div>
                      <span className={`text-accent font-body transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                        +
                      </span>
                    </button>

                    <div 
                      className={`transition-all duration-350 ease-in-out ${isOpen ? 'max-h-[300px] border-t border-primary/5' : 'max-h-0'}`}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="p-6 font-body text-xs sm:text-sm text-muted-green leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="mx-auto w-12 h-12 bg-primary/5 text-accent rounded-full flex items-center justify-center">
                <Compass size={24} className="animate-spin" />
              </div>
              <h3 className="font-heading text-lg font-bold text-primary font-semibold">No Questions Match</h3>
              <p className="font-body text-xs text-muted-green leading-relaxed max-w-xs mx-auto">
                We couldn&apos;t find matches for &quot;{searchQuery}&quot;. Try searching for simpler words like &quot;fit&quot; or &quot;safety&quot;.
              </p>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}
