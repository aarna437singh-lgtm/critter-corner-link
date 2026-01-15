import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    pet: "Golden Retriever Mom",
    content: "PetPals helped me find the best vet in my area and connect with other dog parents. My Max has never been happier!",
    avatar: "🐕"
  },
  {
    name: "James K.",
    pet: "Cat Dad x3",
    content: "The community here is amazing. I've learned so much about cat behavior and made friends who truly understand the cat life.",
    avatar: "🐱"
  },
  {
    name: "Maria L.",
    pet: "Bunny Enthusiast",
    content: "Finally a place where rabbit owners are represented! The facts section taught me things even my vet didn't know.",
    avatar: "🐰"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-4">
            Loved by Pet Parents
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our community members have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative border-border">
              <CardContent className="pt-8 pb-6">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-muted/50" />
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{testimonial.avatar}</span>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.pet}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
