import FAQClient from "./FAQClient";

export const metadata = {
  title: "FAQs | Safarhood - Trek Preparation & Wilderness Safety",
  description: "Browse frequently asked questions regarding physical fitness preparation, cold weather trekking gear, altitude sickness adaptation, and booking policies.",
  keywords: "faq trekking, ams altitude sickness, high altitude safety, packing checklist treks, group size policy, safarhood",
  alternates: {
    canonical: "https://safarhood.com/faq",
  },
  openGraph: {
    title: "FAQs | Safarhood - Trek Preparation & Wilderness Safety",
    description: "Browse frequently asked questions regarding physical fitness preparation, cold weather trekking gear, altitude sickness adaptation, and booking policies.",
    url: "https://safarhood.com/faq",
    siteName: "Safarhood",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Safarhood FAQ Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs | Safarhood - Trek Preparation & Wilderness Safety",
    description: "Browse frequently asked questions regarding physical fitness preparation, cold weather trekking gear, altitude sickness adaptation, and booking policies.",
    images: ["/banner.jpg"],
  },
};

export default function FAQServerPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What physical fitness level is required for these treks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All four treks (Dayara Bugyal, Valley of Flowers, Har Ki Dun, Chopta-Tungnath) are categorized as 'Easy to Moderate'. They are suitable for healthy beginners, active youth, and families. We recommend starting light cardio training (jogging, cycling, or climbing stairs) at least 3-4 weeks prior to departure to ensure comfortable trekking days."
        }
      },
      {
        "@type": "Question",
        "name": "How does Safarhood handle altitude sickness (AMS)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Safety is our absolute priority. Our itineraries are engineered with optimal ascent rates for organic acclimatization. Our guides are trained in wilderness first aid and check trekkers' pulse and blood oxygen levels (SpO2) twice daily. Every trek is equipped with portable oxygen canisters and baseline emergency medicines. In case of issues, a rapid descent team is deployed."
        }
      },
      {
        "@type": "Question",
        "name": "What gear and clothing should I pack?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For summer treks (March–June), you need 3 layers (thermal base, fleece middle, and water/windproof outer). For winter or monsoon treks (Valley of Flowers, post-September treks), a warm feather down jacket is required. You must pack high-traction broken-in hiking shoes, a 40-50L backpack, trekking poles, sunglasses, sunscreen, and reusable water bottles."
        }
      },
      {
        "@type": "Question",
        "name": "What is Safarhood's group size policy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We believe in intimate group sizes to maintain excellent safety standards and build genuine relationships. Our typical batches range between 12 to 18 trekkers. Every batch has a dedicated trek leader, certified guides, support kitchen crew, and porter staff to manage operations seamlessly."
        }
      },
      {
        "@type": "Question",
        "name": "How do you support eco-friendly trail management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We strictly follow the Leave-No-Trace environmental protocol. Our team carries eco-bags to collect our food wrappers. Additionally, on descents, we encourage and guide our group members to pick up non-biodegradable wastes left by other tourists, which we carry back to municipal disposal grids in Rishikesh and Dehradun."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQClient />
    </>
  );
}
