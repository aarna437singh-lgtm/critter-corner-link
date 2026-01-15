import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle } from "lucide-react";

const communities = [
  { name: "Dog Lovers", members: 2450, topics: 156, emoji: "🐕", desc: "Everything about our canine companions" },
  { name: "Cat People", members: 1890, topics: 134, emoji: "🐱", desc: "For those who serve their feline overlords" },
  { name: "Bunny Friends", members: 756, topics: 89, emoji: "🐰", desc: "Hop into bunny discussions" },
  { name: "Bird Watchers", members: 623, topics: 67, emoji: "🦜", desc: "Feathered friends and their humans" },
  { name: "Fish Keepers", members: 445, topics: 45, emoji: "🐠", desc: "Aquarium enthusiasts unite" },
  { name: "Reptile Enthusiasts", members: 334, topics: 38, emoji: "🦎", desc: "Cold-blooded pets, warm hearts" },
  { name: "Small Pet Lovers", members: 512, topics: 52, emoji: "🐹", desc: "Hamsters, guinea pigs, and more" },
  { name: "Exotic Pet Owners", members: 289, topics: 34, emoji: "🦔", desc: "Unique pets, unique community" },
];

const Communities = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-2">Pet Communities</h1>
            <p className="text-muted-foreground">Join communities of pet owners who share your passion</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communities.map((community) => (
              <Card key={community.name} className="border-border hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader className="text-center pb-2">
                  <span className="text-5xl mb-2">{community.emoji}</span>
                  <CardTitle className="text-foreground">{community.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">{community.desc}</p>
                  <div className="flex justify-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Users className="h-4 w-4" />{community.members}</span>
                    <span className="flex items-center gap-1"><MessageCircle className="h-4 w-4" />{community.topics}</span>
                  </div>
                  <Button className="w-full" variant="outline">Join Community</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Communities;
