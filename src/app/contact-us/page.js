import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | Safarhood - Himalayan Basecamp & Hotline",
  description: "Connect with Safarhood's expedition basecamp. Find our WhatsApp hotline, email coordinates, physical address in Bhatwari, and embedded map.",
  keywords: "contact safarhood, trekking basecamp, bhatwari location, uttarkashi trekking camp, whatsapp hotline treks, safarhood",
  alternates: {
    canonical: "https://safarhood.com/contact-us",
  },
  openGraph: {
    title: "Contact Us | Safarhood - Himalayan Basecamp & Hotline",
    description: "Connect with Safarhood's expedition basecamp. Find our WhatsApp hotline, email coordinates, physical address in Bhatwari, and embedded map.",
    url: "https://safarhood.com/contact-us",
    siteName: "Safarhood",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Safarhood Camp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Safarhood - Himalayan Basecamp & Hotline",
    description: "Connect with Safarhood's expedition basecamp. Find our WhatsApp hotline, email coordinates, physical address in Bhatwari, and embedded map.",
    images: ["/banner.jpg"],
  },
};

export default function ContactServerPage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Safarhood",
    "image": "https://safarhood.com/logo.jpg",
    "@id": "https://safarhood.com/#organization",
    "url": "https://safarhood.com",
    "telephone": "+91-9512499032",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Natin Village, Bhatwari",
      "addressLocality": "Uttarkashi",
      "addressRegion": "Uttarakhand",
      "postalCode": "249193",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.8288,
      "longitude": 78.6083
    },
    "sameAs": [
      "https://www.instagram.com/safarhood"
    ],
    "priceRange": "$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <ContactClient />
    </>
  );
}
