import { MapPin } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/60 border-b border-border/50">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <div className="flex items-center gap-2">
        <MapPin className="h-5 w-5 text-primary" />
        <span className="text-lg font-bold text-foreground">Chennai Visit</span>
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
        <a href="#explore" className="hover:text-primary transition-colors">Explore</a>
        <a href="#places" className="hover:text-primary transition-colors">Top Places</a>
        <a href="#tips" className="hover:text-primary transition-colors">Tips</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
