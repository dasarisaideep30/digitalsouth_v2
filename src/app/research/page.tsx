"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/ContactSection";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Download, FileText } from "lucide-react";
import Image from "next/image";

const RESEARCH_PAPERS = [
  {
    id: 1,
    title: "BHARAT CRYPTO ASSET REGULATION & ENFORCEMENT",
    pdfUrl: "/research/BHARAT CRYPTO ASSET REGULATION & ENFORCEMENT.pdf",
    previewImage: "/images/research/paper-1.png",
    pages: 14 
  },
  {
    id: 2,
    title: "CRYPTO EXCHANGES IN INDIA",
    pdfUrl: "/research/CRYPTO EXCHANGES IN INDIA OPERATIONS, RISKS, A.pdf",
    previewImage: "/images/research/paper-2.png",
    pages: 10
  },
  {
    id: 3,
    title: "RESEARCH PAPER FINALIZED",
    pdfUrl: "/research/Research paper Finalized.pdf",
    previewImage: "/images/research/paper-3.png",
    pages: 18
  }
];

export default function ResearchPage() {
  const [activePaperIdx, setActivePaperIdx] = useState(0);
  const activePaper = RESEARCH_PAPERS[activePaperIdx];

  const handleNext = () => {
    setActivePaperIdx((prev) => (prev + 1) % RESEARCH_PAPERS.length);
  };

  const handlePrev = () => {
    setActivePaperIdx((prev) => (prev - 1 + RESEARCH_PAPERS.length) % RESEARCH_PAPERS.length);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-6 max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePaper.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Header Section from screenshot 10 */}
            <div className="w-full mb-12">
               <h1 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-4 uppercase">
                 {activePaper.title}
               </h1>
               <div className="h-0.5 w-full bg-gray-200" />
            </div>

            {/* Pagination / Page Counter from screenshot 8 */}
            <div className="flex items-center space-x-6 mb-8 text-black font-bold">
              <span className="opacity-50">1/{activePaper.pages}</span>
              <button 
                onClick={handleNext}
                className="flex items-center hover:translate-x-1 transition-transform group"
              >
                <span>Next</span>
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </div>

            {/* Download PDF Link from screenshot 10 */}
            <a 
              href={activePaper.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-black font-bold hover:scale-105 transition-all mb-12 border-b-2 border-transparent hover:border-black pb-1 uppercase tracking-widest text-sm"
            >
              <span>Download PDF</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            {/* PDF Preview (Image of first page) */}
            <div className="relative w-full aspect-[3/4] max-w-3xl bg-gray-50 rounded-lg shadow-2xl overflow-hidden border border-gray-100 p-0.5 group">
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/5 pointer-events-none" />
              {/* Optional yellow strip from screenshot 10 */}
              <div className="absolute top-0 left-0 w-full h-2 bg-brand-yellow z-20" />
              
              <Image
                src={activePaper.previewImage}
                alt={activePaper.title}
                fill
                className="object-contain"
              />

              {/* Navigation Overlay */}
              <div className="absolute inset-y-0 left-0 w-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center text-black hover:bg-black/20"
                >
                  <ChevronLeft />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 w-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center text-black hover:bg-black/20"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
    </main>
  );
}
