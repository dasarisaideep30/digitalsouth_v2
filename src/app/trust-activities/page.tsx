"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/ContactSection";
import { motion } from "framer-motion";
import Image from "next/image";

import StoryGallery from "@/components/StoryGallery";

export default function TrustActivitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Header Area */}
      <header className="pt-48 pb-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-black text-brand-purple uppercase tracking-[0.4em] mb-6 block">Our Mission In Action</span>
          <h1 className="text-5xl md:text-8xl font-black text-brand-blue uppercase leading-[0.9] tracking-tighter mb-10">
            Trust <br className="md:hidden" /> Activities
          </h1>
          <div className="h-2 w-32 bg-brand-purple mx-auto rounded-full mb-10" />
          <p className="max-w-3xl mx-auto text-xl text-gray-500 font-medium leading-relaxed italic">
            &quot;Empowering the next generation through direct engagement, innovative education, and community-driven blockchain initiatives across India.&quot;
          </p>
        </motion.div>
      </header>

      {/* Main Gallery Section */}
      <div className="pb-32">
        <StoryGallery />
      </div>

      <Footer />
    </main>
  );
}
