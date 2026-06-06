import TracksClient from "./TracksClient";

export const metadata = {
  title: "Himalayan Tracks & Expeditions | Safarhood",
  description: "Browse Safarhood's premium guided treks including Valley of Flowers, Dayara Bugyal, Har Ki Dun, and Chopta-Tungnath. Secure your departure date today.",
  keywords: "himalayan treks, trekking routes, dayara bugyal path, valley of flowers route, adventure groups india, guided travel, safarhood",
  alternates: {
    canonical: "https://safarhood.com/tracks",
  },
  openGraph: {
    title: "Himalayan Tracks & Expeditions | Safarhood",
    description: "Browse Safarhood's premium guided treks including Valley of Flowers, Dayara Bugyal, Har Ki Dun, and Chopta-Tungnath. Secure your departure date today.",
    url: "https://safarhood.com/tracks",
    siteName: "Safarhood",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Safarhood Tracks Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himalayan Tracks & Expeditions | Safarhood",
    description: "Browse Safarhood's premium guided treks including Valley of Flowers, Dayara Bugyal, Har Ki Dun, and Chopta-Tungnath. Secure your departure date today.",
    images: ["/banner.jpg"],
  },
};

export default function TracksServerPage() {
  return <TracksClient />;
}
