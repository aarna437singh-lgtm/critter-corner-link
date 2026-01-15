import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const petGuides = {
  dogs: [
    { title: "Tail Wagging", info: "A wagging tail doesn't always mean happiness. Speed and height matter - low and slow can mean insecurity." },
    { title: "Yawning", info: "Dogs yawn when stressed or to calm themselves. If your dog yawns around strangers, they might be anxious." },
    { title: "Ear Position", info: "Ears forward = alert and interested. Ears back = fearful or submissive. Relaxed ears = content." },
  ],
  cats: [
    { title: "Slow Blink", info: "A slow blink is a cat's way of saying 'I trust you.' Try blinking slowly back!" },
    { title: "Tail Position", info: "Tail up = confident and happy. Puffed tail = frightened. Tucked = anxious or unwell." },
    { title: "Kneading", info: "Kneading is a comforting behavior from kittenhood. It means your cat feels safe and content." },
  ],
  birds: [
    { title: "Feather Ruffling", info: "Birds ruffle feathers to regulate temperature or after preening. Constant ruffling may indicate illness." },
    { title: "Head Bobbing", info: "Often a sign of excitement or wanting attention. Young birds bob when hungry." },
    { title: "Beak Grinding", info: "A content bird grinds its beak before sleep. It's a sign of relaxation and happiness." },
  ],
};

const Understand = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-2">Understand Your Pet</h1>
            <p className="text-muted-foreground">Learn to read your pet's body language and behavior</p>
          </div>

          <Tabs defaultValue="dogs" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
              <TabsTrigger value="dogs">🐕 Dogs</TabsTrigger>
              <TabsTrigger value="cats">🐱 Cats</TabsTrigger>
              <TabsTrigger value="birds">🦜 Birds</TabsTrigger>
            </TabsList>

            {Object.entries(petGuides).map(([pet, guides]) => (
              <TabsContent key={pet} value={pet}>
                <div className="grid md:grid-cols-3 gap-6">
                  {guides.map((guide, idx) => (
                    <Card key={idx} className="border-border">
                      <CardHeader>
                        <CardTitle className="text-lg text-foreground">{guide.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{guide.info}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Understand;
