'use client';

import { ShieldCheck, Compass, HeartHandshake, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Wilderness Safety Grid",
      description: "Our guides are certified rescue mountaineers. Every expedition carries pulse oximeters, oxygen canisters, comprehensive trauma kits, and satellite-linked escape routes.",
      icon: ShieldCheck,
      color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-500/10"
    },
    {
      title: "Bonds & Community",
      description: "We don't do silent bus rides. Our custom-designed community activities, daily sharing circles, and interactive campfires transform single travelers into solid friends.",
      icon: HeartHandshake,
      color: "from-accent/10 to-amber-500/10 text-accent border-accent/10"
    },
    {
      title: "Conscious Footsteps",
      description: "We lead by example in conservation. Through our 'Clean Trails' initiative, our team and trekkers actively clean plastic wastes from high pass zones during descents.",
      icon: Compass,
      color: "from-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-500/10"
    },
    {
      title: "Local Himalayan Roots",
      description: "We source our raw supplies, pack mules, and homestays directly from local villages like Natin and Sankri, giving back 65% of our profits directly to rural communities.",
      icon: MapPin,
      color: "from-purple-500/10 to-pink-500/10 text-purple-600 border-purple-500/10"
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-accent blur-[120px]" />
        <div className="absolute top-[-15%] right-[-5%] w-[550px] h-[550px] rounded-full bg-primary-light blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold text-accent tracking-widest uppercase font-body bg-accent/15 px-3 py-1.5 rounded-full border border-accent/25">
              The Safarhood Advantage
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-6 leading-tight">
              Why True Adventurers Trek With Us
            </h2>
            <p className="mt-4 font-body text-sm text-white/60 leading-relaxed">
              We design journeys that respect the mountains, support local communities, and create authentic, close-knit group dynamics that last long after the trek is over.
            </p>
          </motion.div>
        </div>

        {/* Reason Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`p-8 bg-white/5 border rounded-3xl flex flex-col sm:flex-row gap-6 hover:bg-white/10 transition-all duration-300 hover:shadow-lg group ${reason.color.split(' ').slice(-1)[0]}`}
            >
              {/* Icon Container */}
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${reason.color.split(' ').slice(0, 2).join(' ')} ${reason.color.split(' ').slice(2, 3)[0]} w-fit h-fit flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon size={26} />
              </div>

              {/* Text Area */}
              <div className="space-y-3">
                <h3 className="font-heading text-lg font-bold text-white group-hover:text-accent transition-colors">
                  {reason.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
