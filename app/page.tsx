import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Domain from "@/components/Domain";
import HowItWorks from "@/components/HowItWorks";
import Agents from "@/components/Agents";
import TechStack from "@/components/TechStack";
import Milestones from "@/components/Milestones";
import Documents from "@/components/Documents";
import Presentations from "@/components/Presentations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-clip">
      <Navbar />
      <Hero />
      <Features />
      <Domain />
      <HowItWorks />
      <Agents />
      <TechStack />
      <Milestones />
      <Documents />
      <Presentations />
      <Contact />
      <Footer />
    </main>
  );
}
