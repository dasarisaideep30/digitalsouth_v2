import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsGrid from "@/components/StatsGrid";
import ImpactCharts from "@/components/ImpactCharts";
import BookPromotion from "@/components/BookPromotion";
import ResearchAreas from "@/components/ResearchAreas";
import { NewsCarousel } from "@/components/NewsCarousel";
import JoinUs from "@/components/JoinUs";
import Partners from "@/components/Partners";
import StoryGallery from "@/components/StoryGallery";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";

export default function Home() {
  const sections = [
    { id: 1, component: <Hero /> },
    { id: 2, component: <StatsGrid /> },
    { id: 3, component: <ImpactCharts /> },
    { id: 4, component: <BookPromotion /> },
    { id: 5, component: <ResearchAreas /> },
    { id: 6, component: <NewsCarousel /> },
    { id: 7, component: <JoinUs /> },
    { id: 8, component: <Partners /> },
    { id: 9, component: <StoryGallery /> },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {sections.map((section, idx) => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {section.component}
        </motion.div>
      ))}

      <ContactSection />
    </main>
  );
}

