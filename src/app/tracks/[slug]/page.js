import { treksData } from "@/data/treks";
import TrackDetailsClient from "./TrackDetailsClient";

export async function generateStaticParams() {
  return treksData.map((trek) => ({
    slug: trek.id,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const trek = treksData.find((t) => t.id === slug);
  if (!trek) {
    return {
      title: "Track Not Found | Safarhood",
      description: "The requested Himalayan track could not be found."
    };
  }
  const url = `https://safarhood.com/tracks/${slug}`;
  return {
    title: `${trek.title} - Itinerary & Details | Safarhood`,
    description: `Embark on the ${trek.duration} guided ${trek.title} starting from ${trek.startingPoint}. Read day-by-day itineraries, attractions, and safety logs.`,
    keywords: `${trek.title.toLowerCase()}, ${trek.difficulty.toLowerCase()} trek, ${trek.startingPoint.toLowerCase()} trek, himalayan expeditions, safarhood`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${trek.title} - Itinerary & Details | Safarhood`,
      description: `Embark on the ${trek.duration} guided ${trek.title} starting from ${trek.startingPoint}. Read day-by-day itineraries, attractions, and safety logs.`,
      url: url,
      siteName: "Safarhood",
      images: [
        {
          url: trek.image,
          width: 800,
          height: 600,
          alt: trek.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${trek.title} - Itinerary & Details | Safarhood`,
      description: `Embark on the ${trek.duration} guided ${trek.title} starting from ${trek.startingPoint}. Read day-by-day itineraries, attractions, and safety logs.`,
      images: [trek.image],
    },
  };
}

export default async function TrackDetailsPage({ params }) {
  const { slug } = await params;
  const trek = treksData.find((t) => t.id === slug);

  if (!trek) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream text-charcoal">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-heading font-bold text-primary">Track Not Found</h1>
          <p className="text-sm font-body text-muted-green">The trekking destination you requested does not exist.</p>
        </div>
      </div>
    );
  }

  return <TrackDetailsClient trek={trek} />;
}
