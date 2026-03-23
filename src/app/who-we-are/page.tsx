"use client";

import Navbar from "@/components/Navbar";
import WhoWeAreHero from "@/components/who-we-are/WhoWeAreHero";
import VisionMission from "@/components/who-we-are/VisionMission";
import GoalsObjectives from "@/components/who-we-are/GoalsObjectives";
import LeadershipProfiles from "@/components/who-we-are/LeadershipProfiles";
import Footer from "@/components/ContactSection";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WhoWeArePage() {
  const sections = [
    { id: 'hero', component: <WhoWeAreHero /> },
    { id: 'vision', component: <VisionMission /> },
    { id: 'goals', component: <GoalsObjectives /> },
    { id: 'leadership', component: <LeadershipProfiles /> },
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

      <Footer />
    </main>
  );
}
