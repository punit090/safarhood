'use client';

import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
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

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faqs" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-accent tracking-widest uppercase font-body bg-accent/15 px-3 py-1.5 rounded-full border border-accent/25">
            Help Desk
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-6">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 font-body text-sm text-white/60">
            Got questions? We have answers. If you don't find what you are looking for, feel free to send us an enquiry.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'bg-white/10 border-accent/40 shadow-lg' : 'bg-white/5 border-white/5 hover:border-white/20'}`}
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="flex items-center justify-between w-full p-5 sm:p-6 text-left font-heading text-base sm:text-lg font-bold text-white cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-accent flex-shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <span className={`text-accent font-body text-xl transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>

                <div 
                  className={`transition-all duration-350 ease-in-out ${isOpen ? 'max-h-[300px] border-t border-white/5' : 'max-h-0'}`}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="p-6 font-body text-xs sm:text-sm text-white/70 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
