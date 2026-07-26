import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import VideoDemo from "@/components/VideoDemo";
import OrderSection from "@/components/OrderSection";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen overflow-hidden">
      <Hero />
      <TrustBadges />
      <ProblemSolution />
      <VideoDemo />
      <Features />
      <OrderSection />
      <Footer />
      <StickyCTA />
    </main>
  );
}
