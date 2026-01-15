import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, PawPrint } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="hidden md:flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground/10">
              <PawPrint className="h-10 w-10" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-2">
                Ready to Join the PetPals Family?
              </h2>
              <p className="text-primary-foreground/80 max-w-xl">
                Start sharing your pet moments, connect with other owners, and explore everything our community has to offer.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/moments" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10">
              <Link to="/facts">Explore Facts</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
