import HomeClient from "./HomeClient";

export const metadata = {
  title: "Safarhood | Premium Himalayan Treks & Adventure Tours",
  description: "Embark on unforgettable journeys with Safarhood. We offer premium, guided treks like Valley of Flowers and Dayara Bugyal. Connect deeply, build lifelong bonds.",
  keywords: "safarhood, trekking in india, himalayan treks, valley of flowers trek, dayara bugyal trek, har ki dun trek, chopta tungnath chandrashila trek, adventure travel, family treks, trekking packages",
  alternates: {
    canonical: "https://safarhood.com",
  },
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

export default function HomeServerPage() {
  return <HomeClient />;
}
