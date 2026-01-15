import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

const Search = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  return (
    <Layout>
      <section className="py-12">
        <div className="container max-w-3xl">
          <h1 className="text-3xl font-bold text-foreground font-serif mb-6">Search PetPals</h1>
          <div className="relative mb-8">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search pets, facts, services, communities..." 
              className="pl-12 h-12 text-lg" 
              value={query} 
              onChange={(e) => setQuery(e.target.value)} 
            />
          </div>
          
          {query && (
            <Card className="border-border">
              <CardContent className="p-6 text-center text-muted-foreground">
                <p>Search results for "{query}" will appear here.</p>
                <p className="text-sm mt-2">Try browsing our pages directly using the navigation above!</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Search;
