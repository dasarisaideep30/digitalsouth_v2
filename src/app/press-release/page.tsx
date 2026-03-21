"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ContactSection";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PressReleasePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-32 pb-20 container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <header className="mb-16 text-center">
            <span className="text-xs font-black text-brand-yellow uppercase tracking-[0.4em] mb-4 block">OCTOBER 28, 2025</span>
            <h1 className="text-4xl md:text-6xl font-black text-brand-blue uppercase leading-tight tracking-tight mb-8">
              Digital South Trust's Founder Calls for India's Global Blockchain Leadership
            </h1>
            <div className="h-1 w-24 bg-brand-yellow mx-auto rounded-full" />
          </header>

          <article className="w-full prose lg:prose-xl font-medium text-gray-700 leading-relaxed space-y-8">
            <p>
              Digital South Trust, a leading organization dedicated to blockchain education and innovation, has issued a landmark release outlining the CEO's roadmap for India's transition to a global decentralization hub by 2030.
            </p>

            <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-[12px] border-gray-50 my-12">
              <Image 
                src="/v1-images/rs=w_984,h_900.webp"
                alt="Press Release"
                fill
                className="object-cover"
              />
            </div>

            <p>
              The Trust's vision, dubbed "Block by Block, College by College," aims to bridge the gap between academic theory and industry reality through strategic MoUs with technical universities and localized developer support.
            </p>

            <p>
              The release emphasizes the importance of a coordinated "Viksit Bharat" roadmap, where regional centers of excellence serve as nodes for a national blockchain talent network.
            </p>
          </article>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
