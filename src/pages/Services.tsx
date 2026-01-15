import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Clock, Star } from "lucide-react";

const services = [
  { id: 1, name: "Happy Paws Vet Clinic", type: "Veterinarian", address: "123 Pet Street", phone: "(555) 123-4567", rating: 4.8, hours: "8AM - 6PM" },
  { id: 2, name: "Pet Paradise Shop", type: "Pet Shop", address: "456 Animal Ave", phone: "(555) 234-5678", rating: 4.6, hours: "9AM - 8PM" },
  { id: 3, name: "Fluffy Grooming Spa", type: "Groomer", address: "789 Grooming Blvd", phone: "(555) 345-6789", rating: 4.9, hours: "10AM - 7PM" },
  { id: 4, name: "City Dog Park", type: "Pet Park", address: "101 Park Lane", phone: "N/A", rating: 4.7, hours: "6AM - 10PM" },
  { id: 5, name: "Exotic Pets Vet", type: "Veterinarian", address: "202 Exotic Way", phone: "(555) 456-7890", rating: 4.5, hours: "9AM - 5PM" },
  { id: 6, name: "Pet Supplies Plus", type: "Pet Shop", address: "303 Supply St", phone: "(555) 567-8901", rating: 4.4, hours: "8AM - 9PM" },
];

const Services = () => {
  const [filter, setFilter] = useState("all");
  const [mapboxToken, setMapboxToken] = useState("");

  const filteredServices = filter === "all" ? services : services.filter(s => s.type === filter);

  return (
    <Layout>
      <section className="py-12">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-2">Find Pet Services</h1>
            <p className="text-muted-foreground">Discover pet shops, vets, groomers, and parks near you</p>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-48"><SelectValue placeholder="Filter by type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Services</SelectItem>
                <SelectItem value="Veterinarian">Veterinarians</SelectItem>
                <SelectItem value="Pet Shop">Pet Shops</SelectItem>
                <SelectItem value="Groomer">Groomers</SelectItem>
                <SelectItem value="Pet Park">Pet Parks</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {!mapboxToken && (
            <Card className="mb-8 border-primary/30 bg-primary/5">
              <CardContent className="p-4">
                <p className="text-sm text-foreground mb-2">To enable the interactive map, enter your Mapbox public token:</p>
                <div className="flex gap-2">
                  <Input placeholder="pk.eyJ1..." value={mapboxToken} onChange={(e) => setMapboxToken(e.target.value)} />
                  <Button>Enable Map</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Get your token at mapbox.com</p>
              </CardContent>
            </Card>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-foreground">{service.name}</h3>
                    <span className="flex items-center gap-1 text-sm text-primary">
                      <Star className="h-4 w-4 fill-primary" />{service.rating}
                    </span>
                  </div>
                  <span className="inline-block px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full mb-3">{service.type}</span>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2"><MapPin className="h-4 w-4" />{service.address}</p>
                    <p className="flex items-center gap-2"><Phone className="h-4 w-4" />{service.phone}</p>
                    <p className="flex items-center gap-2"><Clock className="h-4 w-4" />{service.hours}</p>
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

export default Services;
