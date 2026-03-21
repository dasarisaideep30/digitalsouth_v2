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
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Page Content */}
      <WhoWeAreHero />
      <VisionMission />
      <GoalsObjectives />
      <LeadershipProfiles />


      <Footer />
    </main>
  );
}
