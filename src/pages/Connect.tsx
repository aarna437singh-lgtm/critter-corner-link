import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail } from "lucide-react";

const owners = [
  { name: "Emma Wilson", pets: ["Golden Retriever", "Cat"], location: "New York", bio: "Dog mom looking for playdate buddies!" },
  { name: "James Chen", pets: ["2 Cats"], location: "Los Angeles", bio: "Cat enthusiast, love sharing tips!" },
  { name: "Sofia Garcia", pets: ["Rabbit", "Hamster"], location: "Miami", bio: "Small pet lover, let's connect!" },
  { name: "Oliver Brown", pets: ["Parrot", "Fish"], location: "Seattle", bio: "Exotic pet owner, always learning new things" },
];

const Connect = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-2">Connect with Pet Owners</h1>
            <p className="text-muted-foreground">Find fellow pet lovers in your area</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-4">
                {owners.map((owner, idx) => (
                  <Card key={idx} className="border-border">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-xl">
                          {owner.name[0]}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{owner.name}</h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />{owner.location}
                          </p>
                          <p className="text-xs text-primary mt-1">{owner.pets.join(" • ")}</p>
                          <p className="text-sm text-muted-foreground mt-2">{owner.bio}</p>
                          <Button size="sm" variant="outline" className="mt-3 gap-1">
                            <Mail className="h-3 w-3" /> Connect
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="border-border h-fit">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Add Your Profile</h3>
                <div className="space-y-4">
                  <Input placeholder="Your name" />
                  <Input placeholder="Your pets (e.g., 2 Dogs, 1 Cat)" />
                  <Input placeholder="Location" />
                  <Textarea placeholder="Tell others about yourself and your pets..." />
                  <Button className="w-full">Submit Profile</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Connect;
