import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Map, Users, BookOpen, Heart, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Pet Moments",
    description: "Capture and share your favorite moments with your pets. Create lasting memories in our community gallery.",
    link: "/moments",
    color: "text-primary"
  },
  {
    icon: Map,
    title: "Find Services",
    description: "Discover pet shops, veterinarians, groomers, and parks near you with our interactive map.",
    link: "/services",
    color: "text-secondary"
  },
  {
    icon: Users,
    title: "Communities",
    description: "Join communities based on your pet type. Connect with owners who understand your journey.",
    link: "/communities",
    color: "text-primary"
  },
  {
    icon: BookOpen,
    title: "Understand Your Pet",
    description: "Learn to read your pet's body language, behavior patterns, and health signals.",
    link: "/understand",
    color: "text-secondary"
  },
  {
    icon: Heart,
    title: "Connect with Owners",
    description: "Find pet owners in your area for playdates, advice, and lasting friendships.",
    link: "/connect",
    color: "text-primary"
  },
  {
    icon: MessageCircle,
    title: "Animal Facts",
    description: "Explore our encyclopedia of fascinating facts about all kinds of animals.",
    link: "/facts",
    color: "text-secondary"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-4">
            Everything Your Pet Needs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From sharing precious moments to finding the best care, we've got you covered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link key={feature.title} to={feature.link} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
