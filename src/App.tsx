import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Moments from "./pages/Moments";
import Services from "./pages/Services";
import Understand from "./pages/Understand";
import Communities from "./pages/Communities";
import Connect from "./pages/Connect";
import Facts from "./pages/Facts";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/moments" element={<Moments />} />
          <Route path="/services" element={<Services />} />
          <Route path="/understand" element={<Understand />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
