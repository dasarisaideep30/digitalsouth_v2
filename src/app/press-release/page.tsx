"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/ContactSection";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Download, Newspaper } from "lucide-react";
import Image from "next/image";

const PRESS_RELEASES = [
  {
    id: 1,
    title: "Founder Calls for Global Blockchain Leadership",
    subtitle: "Digital South Trust's roadmap for a decentralized Bharat by 2030.",
    image: "/v1-images/rs=w_984,h_900.webp",
    date: "OCT 28, 2025",
    category: "Policy Roadmap"
  },
  {
    id: 2,
    title: "Delegation Meets MP Shri V. Vaithilingam",
    subtitle: "Advocating for pro-crypto policies and regulatory clarity in Puducherry.",
    image: "/v1-images/rs=w_1160,h_1839.webp",
    date: "AUG 27, 2024",
    category: "Advocacy"
  },
  {
    id: 3,
    title: "Regional Blockchain Awareness Summit",
    subtitle: "Knowledge sharing session at Sri Ramakrishna College of Arts & Science.",
    image: "/v1-images/download.webp",
    date: "AUG 15, 2024",
    category: "Community"
  }
];

export default function PressReleasePage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeRelease = PRESS_RELEASES[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % PRESS_RELEASES.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + PRESS_RELEASES.length) % PRESS_RELEASES.length);
  };

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-32 pb-48 container mx-auto px-6 max-w-6xl">
        <header className="mb-20 text-center text-white">
          <span className="text-xs font-black text-brand-yellow uppercase tracking-[0.4em] mb-4 block">Media & News</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8 leading-tight">Press <span className="text-brand-yellow">&</span> Media Releases</h1>
          <p className="max-w-3xl mx-auto text-xl text-white/50 font-medium">Official announcements and media coverage documenting our journey towards a digital-first Bharat.</p>
        </header>

        {/* Professional Document Viewer Slider */}
        <div className="relative bg-neutral-900 rounded-[3rem] p-10 lg:p-20 shadow-2xl border border-white/5 overflow-hidden ring-1 ring-white/10 mb-32">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRelease.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Release Header */}
              <div className="w-full mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
                 <div className="max-w-2xl">
                    <span className="text-brand-yellow font-black uppercase tracking-widest text-[10px] mb-2 block">{activeRelease.date} | {activeRelease.category}</span>
                    <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-3">
                      {activeRelease.title}
                    </h2>
                    <p className="text-white/50 font-medium text-sm lg:text-base">
                      {activeRelease.subtitle}
                    </p>
                 </div>
              </div>

              {/* Slider Container */}
              <div className="relative w-full max-w-4xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] rounded-xl overflow-hidden bg-white group">
                <div className="h-2 bg-brand-yellow w-full" />
                
                <div className="relative aspect-[16/22] w-full">
                  <Image
                    src={activeRelease.image}
                    alt={activeRelease.title}
                    fill
                    className="object-contain p-4 lg:p-12"
                  />
                  
                  {/* Overlay Navigation */}
                  <div className="absolute inset-y-0 left-0 w-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={handlePrev}
                      className="w-14 h-14 bg-black/80 text-white rounded-full flex items-center justify-center hover:bg-brand-blue"
                    >
                      <ChevronLeft size={32} />
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-0 w-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={handleNext}
                      className="w-14 h-14 bg-black/80 text-white rounded-full flex items-center justify-center hover:bg-brand-blue"
                    >
                      <ChevronRight size={32} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Slider Dots */}
              <div className="mt-12 flex items-center space-x-8">
                 <div className="flex space-x-3">
                    {PRESS_RELEASES.map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => setActiveIdx(i)}
                        className={`h-2.5 rounded-full transition-all duration-500 ${activeIdx === i ? 'w-12 bg-brand-yellow' : 'w-2.5 bg-white/20 hover:bg-white/40'}`}
                      />
                    ))}
                 </div>
                 <span className="text-white font-black text-sm uppercase tracking-widest opacity-50">
                   {activeIdx + 1} / {PRESS_RELEASES.length}
                 </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Directory Links Section */}
        <section className="mt-40 border-t border-white/10 pt-20">
           <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-12">All Press Clips</h3>
           <div className="grid md:grid-cols-3 gap-8">
              {PRESS_RELEASES.map((release) => (
                <button
                  key={release.id}
                  onClick={() => {
                    setActiveIdx(PRESS_RELEASES.indexOf(release));
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className="group flex flex-col p-8 rounded-3xl bg-neutral-900 border border-white/5 hover:border-brand-yellow transition-all text-left"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-yellow mb-6 group-hover:bg-brand-yellow group-hover:text-black transition-colors">
                     <Newspaper size={24} />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-4 leading-tight uppercase group-hover:text-brand-yellow transition-colors">{release.title}</h4>
                  <div className="mt-auto flex items-center text-xs font-black text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">
                     View Clipping <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </button>
              ))}
           </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
