import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, MapPin, BookOpen } from "lucide-react";
import pet1 from "@/assets/pets/pet-1.jpg";
import dogLove from "@/assets/pets/dog-love.jpg";
import catMilk from "@/assets/pets/cat-milk.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent to-background py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
              🐾 Welcome to PetPals
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-serif leading-tight">
              Building a Better{" "}
              <span className="text-primary">Pet Ecosystem</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Connect with fellow pet lovers, discover local services, share precious moments, 
              and learn everything about your beloved companions in one warm community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/moments">Share Your Moments</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/communities">Join Communities</Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">10K+</p>
                  <p className="text-xs text-muted-foreground">Pet Moments</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                  <Users className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">5K+</p>
                  <p className="text-xs text-muted-foreground">Pet Owners</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">2K+</p>
                  <p className="text-xs text-muted-foreground">Services</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg animate-float" style={{ animationDelay: "0s" }}>
                  <img 
                    src={pet1} 
                    alt="Adorable pet" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
                  <img 
                    src={catMilk} 
                    alt="Cat drinking milk" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                  <img 
                    src={dogLove} 
                    alt="Loving dog" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
