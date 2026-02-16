import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryCard from "@/components/CategoryCard";
import PlaceCard from "@/components/PlaceCard";
import { Heart } from "lucide-react";

import templesImg from "@/assets/temples.jpg";
import beachesImg from "@/assets/beaches.jpg";
import foodImg from "@/assets/food.jpg";
import cultureImg from "@/assets/culture.jpg";

const categories = [
  { image: templesImg, title: "Temples", count: "12 sacred sites" },
  { image: beachesImg, title: "Beaches", count: "8 coastal gems" },
  { image: foodImg, title: "Food", count: "20+ must-try spots" },
  { image: cultureImg, title: "Culture", count: "15 experiences" },
];

const places = [
  { title: "Kapaleeshwarar Temple", location: "Mylapore", rating: 4.8, time: "1-2 hrs", category: "Temple", emoji: "🛕" },
  { title: "Marina Beach", location: "Triplicane", rating: 4.5, time: "2-3 hrs", category: "Beach", emoji: "🏖️" },
  { title: "Dakshinachitra", location: "Muttukadu", rating: 4.6, time: "3-4 hrs", category: "Culture", emoji: "🎭" },
  { title: "San Thome Basilica", location: "Santhome", rating: 4.7, time: "1 hr", category: "Heritage", emoji: "⛪" },
  { title: "Saravana Bhavan", location: "T. Nagar", rating: 4.4, time: "1 hr", category: "Food", emoji: "🍛" },
  { title: "Fort St. George", location: "George Town", rating: 4.3, time: "2 hrs", category: "Heritage", emoji: "🏰" },
];

const tips = [
  { emoji: "🌡️", title: "Best Time", desc: "November to February — pleasant weather, temple festivals" },
  { emoji: "🚌", title: "Getting Around", desc: "Use Chennai Metro & auto-rickshaws; apps like Ola/Uber work well" },
  { emoji: "👗", title: "Dress Code", desc: "Modest clothing for temples; carry a scarf to cover shoulders" },
  { emoji: "💧", title: "Stay Hydrated", desc: "Carry water bottles — Chennai can get very hot and humid" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* Categories */}
      <section id="explore" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Explore by Category
        </h2>
        <p className="text-muted-foreground mb-10" style={{ fontFamily: "var(--font-body)" }}>
          Find your perfect Chennai experience
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.title} {...cat} />
          ))}
        </div>
      </section>

      {/* Top Places */}
      <section id="places" className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Must-Visit Places
        </h2>
        <p className="text-muted-foreground mb-10" style={{ fontFamily: "var(--font-body)" }}>
          Top-rated attractions hand-picked for you
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((place) => (
            <PlaceCard key={place.title} {...place} />
          ))}
        </div>
      </section>

      {/* Travel Tips */}
      <section id="tips" className="bg-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Travel Tips
          </h2>
          <p className="text-muted-foreground mb-10" style={{ fontFamily: "var(--font-body)" }}>
            Make the most of your Chennai trip
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tips.map((tip) => (
              <div
                key={tip.title}
                className="rounded-2xl bg-card p-6 border border-border"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <span className="text-3xl mb-3 block">{tip.emoji}</span>
                <h3 className="font-semibold text-card-foreground mb-1">{tip.title}</h3>
                <p className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1" style={{ fontFamily: "var(--font-body)" }}>
            Made with <Heart className="h-3.5 w-3.5 fill-accent text-accent" /> for Chennai lovers
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
