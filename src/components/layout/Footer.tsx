import { Link } from "react-router-dom";
import { PawPrint, Heart, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <PawPrint className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground font-serif">PetPals</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Building a better ecosystem for pet owners and their beloved companions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/moments" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Pet Moments
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Find Services
              </Link>
              <Link to="/understand" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Understand Your Pet
              </Link>
              <Link to="/communities" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Communities
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/facts" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Animal Facts
              </Link>
              <Link to="/connect" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Connect with Owners
              </Link>
              <Link to="/search" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Search
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get in Touch</h3>
            <div className="flex flex-col gap-2">
              <a href="mailto:hello@petpals.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                hello@petpals.com
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Worldwide Community
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 PetPals. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-primary fill-primary" /> for pet lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};
