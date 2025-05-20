
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SeasonalPlanning from "./pages/SeasonalPlanning";
import IrrigationManagement from "./pages/IrrigationManagement";
import SocialNetwork from "./pages/SocialNetwork";
import AIAnalytics from "./pages/AIAnalytics";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/seasonal-planning" element={<SeasonalPlanning />} />
          <Route path="/irrigation-management" element={<IrrigationManagement />} />
          <Route path="/social-network" element={<SocialNetwork />} />
          <Route path="/ai-analytics" element={<AIAnalytics />} />
          <Route path="/login" element={<Login />} />
          <Route path="/our-story" element={<NotFound />} />
          <Route path="/about-us" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
