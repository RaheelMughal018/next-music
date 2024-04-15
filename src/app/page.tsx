import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUs />
      <TestimonialCards />
    </main>
  );
}
