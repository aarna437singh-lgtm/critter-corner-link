import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Shuffle } from "lucide-react";

const allFacts = [
  { animal: "Dog", fact: "Dogs have a sense of time and can tell how long you've been gone.", category: "Mammals" },
  { animal: "Cat", fact: "Cats spend 70% of their lives sleeping.", category: "Mammals" },
  { animal: "Rabbit", fact: "Rabbits can't vomit, which is why their diet is so important.", category: "Mammals" },
  { animal: "Parrot", fact: "African Grey Parrots can learn over 1,000 words.", category: "Birds" },
  { animal: "Goldfish", fact: "Goldfish can live for over 40 years with proper care.", category: "Fish" },
  { animal: "Turtle", fact: "Sea turtles can hold their breath for up to 7 hours.", category: "Reptiles" },
  { animal: "Hamster", fact: "Hamsters can run up to 8 miles a night on their wheel.", category: "Mammals" },
  { animal: "Dog", fact: "A dog's nose print is unique, like a human fingerprint.", category: "Mammals" },
  { animal: "Cat", fact: "Cats have over 20 vocalizations, including the meow.", category: "Mammals" },
  { animal: "Horse", fact: "Horses can sleep both lying down and standing up.", category: "Mammals" },
  { animal: "Elephant", fact: "Elephants are the only animals that can't jump.", category: "Mammals" },
  { animal: "Owl", fact: "Owls can rotate their heads 270 degrees.", category: "Birds" },
  { animal: "Dolphin", fact: "Dolphins sleep with one eye open.", category: "Mammals" },
  { animal: "Octopus", fact: "An octopus has three hearts and blue blood.", category: "Marine" },
  { animal: "Penguin", fact: "Penguins propose with pebbles.", category: "Birds" },
  { animal: "Koala", fact: "Koalas sleep up to 22 hours a day.", category: "Mammals" },
  { animal: "Chameleon", fact: "Chameleons change color based on mood, not surroundings.", category: "Reptiles" },
  { animal: "Bee", fact: "Bees can recognize human faces.", category: "Insects" },
  { animal: "Snake", fact: "Snakes smell with their tongues.", category: "Reptiles" },
  { animal: "Frog", fact: "A group of frogs is called an army.", category: "Amphibians" },
];

const Facts = () => {
  const [search, setSearch] = useState("");
  const [randomFact, setRandomFact] = useState(allFacts[0]);

  const filteredFacts = allFacts.filter(f => 
    f.animal.toLowerCase().includes(search.toLowerCase()) || 
    f.fact.toLowerCase().includes(search.toLowerCase()) ||
    f.category.toLowerCase().includes(search.toLowerCase())
  );

  const getRandomFact = () => {
    const random = allFacts[Math.floor(Math.random() * allFacts.length)];
    setRandomFact(random);
  };

  return (
    <Layout>
      <section className="py-12">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-2">Animal Facts Encyclopedia</h1>
            <p className="text-muted-foreground">Discover fascinating facts about all kinds of animals</p>
          </div>

          <Card className="mb-8 bg-primary/5 border-primary/20">
            <CardContent className="p-6 flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Random Fact about {randomFact.animal}</p>
                <p className="text-lg text-foreground font-medium">{randomFact.fact}</p>
              </div>
              <Button onClick={getRandomFact} variant="outline" className="gap-2">
                <Shuffle className="h-4 w-4" /> New Fact
              </Button>
            </CardContent>
          </Card>

          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search animals, facts, or categories..." 
              className="pl-10" 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFacts.map((item, idx) => (
              <Card key={idx} className="border-border hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-primary">{item.animal}</span>
                    <span className="text-xs px-2 py-0.5 bg-accent rounded-full text-accent-foreground">{item.category}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.fact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Facts;
