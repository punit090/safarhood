import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Safarhood | Premium Himalayan Treks & Adventure Tours",
  description: "Embark on unforgettable journeys with Safarhood. We offer premium, guided treks like Valley of Flowers and Dayara Bugyal. Connect deeply, build lifelong bonds.",
  keywords: "safarhood, trekking in india, himalayan treks, valley of flowers trek, dayara bugyal trek, har ki dun trek, chopta tungnath chandrashila trek, adventure travel, family treks, trekking packages",
  metadataBase: new URL("https://safarhood.com"),
  openGraph: {
    title: "Safarhood | Journeys Together, Bonds Forever",
    description: "Discover premium Himalayan treks designed to build lifelong bonds. Join Safarhood for guided group treks, family adventures, and pristine alpine wilderness.",
    url: "https://safarhood.com",
    siteName: "Safarhood",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Safarhood Trekking Adventure - We Build Bonds",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safarhood | Premium Himalayan Treks & Adventure Tours",
    description: "Embark on guided Himalayan treks with Safarhood. Explore Dayara Bugyal, Valley of Flowers, Har Ki Dun, and build real human connections along the trail.",
    images: ["/banner.jpg"],
  },
};

export default function RootLayout({ children }) {
  const schemaMarkup = {
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
      "latitude": 30.7299,
      "longitude": 78.4354
    },
    "sameAs": [
      "https://www.instagram.com/safar_hood"
    ],
    "priceRange": "$$"
  };

  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
