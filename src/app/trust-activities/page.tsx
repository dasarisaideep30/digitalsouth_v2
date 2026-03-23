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
      
      <div className="pt-24">
        <StoryGallery />
      </div>
      <Footer />
    </main>
  );
}
