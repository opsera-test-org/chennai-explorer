import { MapPin, Star, Clock } from "lucide-react";

interface PlaceCardProps {
  title: string;
  location: string;
  rating: number;
  time: string;
  category: string;
  emoji: string;
}

const PlaceCard = ({ title, location, rating, time, category, emoji }: PlaceCardProps) => {
  return (
    <div
      className="rounded-2xl bg-card p-5 transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-border"
      style={{ boxShadow: "var(--shadow-card)" }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card)")}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl">{emoji}</span>
        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
          {category}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-card-foreground mb-1">{title}</h3>
      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3" style={{ fontFamily: "var(--font-body)" }}>
        <MapPin className="h-3.5 w-3.5" />
        {location}
      </div>
      <div className="flex items-center gap-4 text-sm" style={{ fontFamily: "var(--font-body)" }}>
        <span className="flex items-center gap-1 text-primary font-medium">
          <Star className="h-3.5 w-3.5 fill-primary" />
          {rating}
        </span>
        <span className="flex items-center gap-1 text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          {time}
        </span>
      </div>
    </div>
  );
};

export default PlaceCard;
