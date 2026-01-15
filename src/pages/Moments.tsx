import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Heart, Plus, Camera } from "lucide-react";
import pet1 from "@/assets/pets/pet-1.jpg";
import pet2 from "@/assets/pets/pet-2.jpg";
import pet3 from "@/assets/pets/pet-3.jpg";
import dogLove from "@/assets/pets/dog-love.jpg";
import catMilk from "@/assets/pets/cat-milk.jpg";
import bunny from "@/assets/pets/bunny.jpg";

const initialMoments = [
  { id: 1, image: pet1, title: "Morning cuddles", owner: "Emma", likes: 234, pet: "Max" },
  { id: 2, image: dogLove, title: "Best friends forever", owner: "Jake", likes: 189, pet: "Buddy" },
  { id: 3, image: catMilk, title: "Milk time!", owner: "Mia", likes: 312, pet: "Whiskers" },
  { id: 4, image: pet2, title: "Nap time champion", owner: "Oliver", likes: 156, pet: "Luna" },
  { id: 5, image: bunny, title: "Fluffy adventures", owner: "Sophie", likes: 278, pet: "Cotton" },
  { id: 6, image: pet3, title: "Park day!", owner: "Liam", likes: 198, pet: "Charlie" },
];

const Moments = () => {
  const [moments, setMoments] = useState(initialMoments);

  return (
    <Layout>
      <section className="py-12 bg-accent/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-2">Pet Moments</h1>
              <p className="text-muted-foreground">Share and celebrate precious moments with your pets</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2"><Plus className="h-4 w-4" /> Share a Moment</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Share Your Pet Moment</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <Input placeholder="Your name" />
                  <Input placeholder="Pet's name" />
                  <Textarea placeholder="Describe this moment..." />
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Camera className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">Click to upload a photo</p>
                  </div>
                  <Button className="w-full">Submit Moment</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moments.map((moment) => (
              <Card key={moment.id} className="overflow-hidden group border-border">
                <div className="relative h-64 overflow-hidden">
                  <img src={moment.image} alt={moment.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground">{moment.title}</h3>
                  <p className="text-sm text-muted-foreground">{moment.pet} • by {moment.owner}</p>
                  <div className="flex items-center gap-1 mt-2 text-primary">
                    <Heart className="h-4 w-4 fill-primary" />
                    <span className="text-sm">{moment.likes}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Moments;
