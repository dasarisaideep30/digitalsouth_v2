import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsGrid from "@/components/StatsGrid";
import ImpactCharts from "@/components/ImpactCharts";
import BookPromotion from "@/components/BookPromotion";
import ResearchAreas from "@/components/ResearchAreas";
import EditorialGrid from "@/components/EditorialGrid";
import { NewsCarousel } from "@/components/NewsCarousel";
import JoinUs from "@/components/JoinUs";
import Partners from "@/components/Partners";
import StoryGallery from "@/components/StoryGallery";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsGrid />
      <ImpactCharts />
      <BookPromotion />
      <ResearchAreas />
      <EditorialGrid />
      <NewsCarousel />
      <JoinUs />
      <Partners />
      <StoryGallery />
      <ContactSection />
    </main>
  );
}

