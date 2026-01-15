import { useState } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const defaultResponses: Record<string, string> = {
  "how do i feed my dog": "Dogs should be fed 1-2 times daily with age-appropriate food. Puppies need 3-4 meals, adults 2 meals, and seniors 1-2 meals. Always provide fresh water and avoid toxic foods like chocolate, grapes, and onions.",
  "how do i feed my cat": "Cats should be fed 2-3 times daily. Adult cats need about 200-300 calories per day. Provide fresh water always and avoid milk as many cats are lactose intolerant.",
  "how often should i walk my dog": "Most dogs need 30-60 minutes of exercise daily. Active breeds may need 1-2 hours. Puppies and seniors need shorter, more frequent walks.",
  "how to litter train a cat": "Place the litter box in a quiet, accessible spot. Show your cat the box after meals and naps. Keep it clean - scoop daily and change litter weekly. Use unscented, clumping litter.",
  "how to care for a rabbit": "Rabbits need unlimited hay, fresh vegetables, and limited pellets. Provide a spacious enclosure, daily exercise, and regular vet checkups. They're social and need interaction!",
  "how to care for a bird": "Birds need a spacious cage, varied diet of seeds and fresh produce, clean water, and daily interaction. Provide toys and perches at different heights.",
  "default": "I'm here to help with pet care questions! Try asking about feeding, grooming, training, or health tips for your specific pet. For emergencies, please contact your local veterinarian immediately."
};

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi! I'm PetPal Assistant 🐾 I can help answer your pet care questions. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState("");

  const getResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    for (const [key, value] of Object.entries(defaultResponses)) {
      if (key !== "default" && lowerQuery.includes(key.split(" ").slice(2).join(" "))) {
        return value;
      }
    }
    
    if (lowerQuery.includes("dog")) {
      return "Dogs are wonderful companions! They need regular exercise, balanced nutrition, and lots of love. Would you like specific tips about feeding, training, or health care?";
    }
    if (lowerQuery.includes("cat")) {
      return "Cats are independent yet affectionate pets! They need mental stimulation, proper nutrition, and regular vet visits. What specific aspect of cat care can I help with?";
    }
    if (lowerQuery.includes("bird") || lowerQuery.includes("parrot")) {
      return "Birds are intelligent and social! They need mental stimulation, a varied diet, and daily interaction. What would you like to know about bird care?";
    }
    if (lowerQuery.includes("fish")) {
      return "Fishkeeping is a relaxing hobby! Key factors are water quality, proper filtration, and appropriate tank mates. What type of fish do you have?";
    }
    if (lowerQuery.includes("rabbit") || lowerQuery.includes("bunny")) {
      return "Rabbits are gentle and curious! They need plenty of hay, space to hop, and social interaction. How can I help with your bunny care?";
    }
    if (lowerQuery.includes("vet") || lowerQuery.includes("sick") || lowerQuery.includes("emergency")) {
      return "For any health emergencies, please contact your local veterinarian immediately. You can find vets near you on our 'Find Services' page. Regular checkups are important for all pets!";
    }
    
    return defaultResponses.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input
    };

    const response = getResponse(input);
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: response
    };

    setMessages([...messages, userMessage, assistantMessage]);
    setInput("");
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-card border border-border rounded-lg shadow-xl z-50 animate-scale-in">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-border bg-primary rounded-t-lg">
            <Bot className="h-6 w-6 text-primary-foreground" />
            <div>
              <h3 className="font-semibold text-primary-foreground">PetPal Assistant</h3>
              <p className="text-xs text-primary-foreground/80">Ask me anything about pets!</p>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="h-80 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    message.role === "user" ? "bg-secondary" : "bg-primary"
                  }`}>
                    {message.role === "user" ? (
                      <User className="h-4 w-4 text-secondary-foreground" />
                    ) : (
                      <Bot className="h-4 w-4 text-primary-foreground" />
                    )}
                  </div>
                  <div className={`rounded-lg px-4 py-2 max-w-[75%] ${
                    message.role === "user" 
                      ? "bg-secondary text-secondary-foreground" 
                      : "bg-accent text-accent-foreground"
                  }`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex gap-2"
            >
              <Input
                placeholder="Ask about pet care..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
