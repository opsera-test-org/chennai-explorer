import heroImage from "@/assets/hero-chennai.jpg";
import { MapPin, Compass } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Marina Beach Chennai at golden sunset"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-20 text-center px-4">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary-foreground/80" style={{ fontFamily: "var(--font-body)" }}>
            South India
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-4 leading-tight">
          Discover Chennai
        </h1>
        <p
          className="max-w-xl text-lg md:text-xl text-primary-foreground/85 mb-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Temples, beaches, flavours & culture — explore the soul of Tamil Nadu
        </p>
        <a
          href="#explore"
          className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-105"
          style={{
            background: "var(--gradient-warm)",
            color: "white",
            fontFamily: "var(--font-body)",
            boxShadow: "0 8px 24px -6px hsla(32, 80%, 50%, 0.5)",
          }}
        >
          <Compass className="h-4 w-4" />
          Start Exploring
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
