import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import bunny from "@/assets/pets/bunny.jpg";
import dogLove from "@/assets/pets/dog-love.jpg";
import catCurious from "@/assets/pets/cat-curious.jpg";

const communities = [
  {
    name: "Dog Lovers",
    members: 2450,
    image: dogLove,
    emoji: "🐕"
  },
  {
    name: "Cat People",
    members: 1890,
    image: catCurious,
    emoji: "🐱"
  },
  {
    name: "Bunny Friends",
    members: 756,
    image: bunny,
    emoji: "🐰"
  },
  {
    name: "Bird Watchers",
    members: 623,
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=400",
    emoji: "🦜"
  },
  {
    name: "Fish Keepers",
    members: 445,
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400",
    emoji: "🐠"
  },
  {
    name: "Reptile Enthusiasts",
    members: 334,
    image: "https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?w=400",
    emoji: "🦎"
  }
];

export const CommunitiesPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-accent/50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-2">
              Join Our Communities
            </h2>
            <p className="text-muted-foreground">
              Connect with pet owners who share your passion
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/communities">View All Communities</Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community) => (
            <Link key={community.name} to="/communities" className="group">
              <Card className="overflow-hidden border-border hover:shadow-lg transition-all duration-300">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={community.image}
                    alt={community.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <span className="absolute top-4 left-4 text-3xl">{community.emoji}</span>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {community.name}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <Users className="h-4 w-4" />
                    <span>{community.members.toLocaleString()} members</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
