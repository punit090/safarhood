import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Compass, Eye, ShieldCheck, HeartHandshake, Users } from "lucide-react";

export const metadata = {
  title: "About Us | Safarhood - Journeys Together, Bonds Forever",
  description: "Discover the mission and vision of Safarhood. We curate premium Himalayan trekking tours designed to build lasting bonds and human connections.",
  keywords: "about safarhood, trekking community, himalayan guides, safety-first treks, eco-tourism india, group bonding",
  alternates: {
    canonical: "https://safarhood.com/about",
  },
  openGraph: {
    title: "About Us | Safarhood - Journeys Together, Bonds Forever",
    description: "Discover the mission and vision of Safarhood. We curate premium Himalayan trekking tours designed to build lasting bonds and human connections.",
    url: "https://safarhood.com/about",
    siteName: "Safarhood",
    images: [
      {
        url: "/campfire.png",
        width: 800,
        height: 600,
        alt: "Safarhood Campfire Storytelling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Safarhood - Journeys Together, Bonds Forever",
    description: "Discover the mission and vision of Safarhood. We curate premium Himalayan trekking tours designed to build lasting bonds and human connections.",
    images: ["/campfire.png"],
  },
};

export default function AboutPage() {
  const values = [
    {
      title: "Wilderness Safety",
      description: "Equipped with oxygen grids, certified first-responders, and custom acclimatization timelines to guarantee peak security.",
      icon: ShieldCheck
    },
    {
      title: "Active Bonding",
      description: "Not just sightseeing. We structure campfires, sharing sessions, and community support tasks on the mountain paths.",
      icon: HeartHandshake
    },
    {
      title: "Clean Trail Actions",
      description: "Leave-No-Trace active conservation. Our teams pack out non-biodegradable waste to preserve pristine peaks.",
      icon: Compass
    },
    {
      title: "Himalayan Support",
      description: "65% of our operations support local mountaineering guides, kitchen crew, and homestays directly in base villages.",
      icon: Users
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Mini-Hero Header */}
      <section className="relative bg-primary-dark pt-32 pb-20 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs font-bold text-accent tracking-widest uppercase font-body bg-accent/15 px-3 py-1.5 rounded-full border border-accent/25">
            Who We Are
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            We are Safarhood. We Build Bonds.
          </h1>
          <p className="font-body text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Founded amidst the soaring summits of Uttarakhand, Safarhood is an adventure community dedicated to turning isolated treks into collaborative human journeys.
          </p>
        </div>
      </section>

      {/* Main Philosophy & Image Section */}
      <section className="py-24 bg-cream text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Mission & Vision Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <h2 className="font-heading text-accent text-xs font-bold uppercase tracking-wider">Company Focus</h2>
                <h3 className="font-heading text-3xl font-bold text-primary">Mission & Vision</h3>
              </div>

              {/* Cards layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-primary/5 shadow-xs space-y-4">
                  <div className="p-3 bg-accent/10 text-accent rounded-2xl w-fit">
                    <Compass size={22} />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-primary">Our Mission</h4>
                  <p className="font-body text-xs sm:text-sm text-muted-green leading-relaxed">
                    To build lasting human connections by organizing safe, structured, and deeply collaborative trekking expeditions through the pristine trails of the Indian Himalayas.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-primary/5 shadow-xs space-y-4">
                  <div className="p-3 bg-primary/5 text-primary rounded-2xl w-fit">
                    <Eye size={22} className="text-accent" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-primary">Our Vision</h4>
                  <p className="font-body text-xs sm:text-sm text-muted-green leading-relaxed">
                    To transform adventure tourism. We envision a world where hikers don&apos;t travel as isolated observers, but return as members of an active, empathetic, and eco-conscious network.
                  </p>
                </div>
              </div>

              {/* Operations Overview */}
              <div className="space-y-4 pt-4 border-t border-primary/5">
                <h4 className="font-heading text-lg font-bold text-primary">Business Operations & Overview</h4>
                <p className="font-body text-xs sm:text-sm text-muted-green leading-relaxed">
                  Safarhood operates guided group tours out of Dehradun and Haridwar. Unlike standard commercial agencies that pack 30 strangers into generic routes, we maintain small batch guidelines (12–18 people) and assign dedicated social leaders to coordinate interactive group circles. 
                </p>
                <p className="font-body text-xs sm:text-sm text-muted-green leading-relaxed">
                  Every step of our process—from gear rental advice to altitude adaptation charts—is tailored to remove friction, letting travelers focus on the majestic forests, the campfire stories, and the bonds being forged.
                </p>
              </div>
            </div>

            {/* Campfire Graphic Column */}
            <div className="lg:col-span-5 relative aspect-square sm:aspect-video lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image 
                src="/campfire.png" 
                alt="Safarhood Bonfire Bonding"
                fill
                sizes="(max-w-768px) 100vw, 450px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white max-w-sm">
                <p className="font-heading text-lg font-bold">Journeys Together. Bonds Forever.</p>
                <p className="font-body text-xs text-accent mt-1">Established 2024 in Uttarakhand, India.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-primary text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-accent tracking-widest uppercase font-body bg-accent/15 px-3 py-1.5 rounded-full border border-accent/25">
              Core Pillars
            </span>
            <h2 className="font-heading text-3xl font-bold mt-4">What Guides Safarhood</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4 hover:border-accent/40 hover:bg-white/10 transition-all duration-300">
                <div className="p-3 bg-accent/15 text-accent rounded-xl w-fit">
                  <val.icon size={22} />
                </div>
                <h3 className="font-heading text-base font-bold">{val.title}</h3>
                <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
