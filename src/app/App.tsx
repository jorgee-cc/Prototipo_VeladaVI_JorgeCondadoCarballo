import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { MatchupsSection } from "./components/MatchupsSection";
import { SponsorsSection } from "./components/SponsorsSection";
import { EventInfoSection } from "./components/EventInfoSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0A0A0C] text-white min-h-screen font-sans selection:bg-[#D91A2A] selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <HeroSection />
        <MatchupsSection />
        <SponsorsSection />
        <EventInfoSection />
      </main>
      <Footer />
    </div>
  );
}