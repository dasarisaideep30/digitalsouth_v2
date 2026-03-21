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
  const [activeIdx, setActiveIdx] = useState(0);
  const activePaper = RESEARCH_PAPERS[activeIdx];

  const handleNext = () => setActiveIdx((prev) => (prev + 1) % RESEARCH_PAPERS.length);
  const handlePrev = () => setActiveIdx((prev) => (prev - 1 + RESEARCH_PAPERS.length) % RESEARCH_PAPERS.length);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-48 container mx-auto px-6 max-w-5xl">
        <header className="mb-20 text-center">
          <span className="text-xs font-black text-brand-yellow uppercase tracking-[0.4em] mb-4 block">Archive & Intelligence</span>
          <h1 className="text-4xl md:text-6xl font-black text-brand-blue uppercase tracking-tight mb-8 leading-tight">Research Papers <span className="text-brand-yellow">&</span> Library</h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-400 font-medium">Deep-dive technical analysis and regulatory roadmaps for the future of decentralized systems in Bharat.</p>
        </header>

        {/* Simplified Doc Viewer */}
        <div className="bg-gray-50 rounded-[3rem] p-10 lg:p-16 border border-gray-100 shadow-xl mb-32">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left: Metadata */}
            <div className="lg:w-1/3">
              <span className="inline-block px-4 py-1 bg-brand-yellow text-black text-[10px] font-black uppercase tracking-widest rounded-full mb-6 italic shadow-sm">
                PAPER 0{activeIdx + 1}
              </span>
              <h2 className="text-3xl font-black text-brand-blue uppercase leading-tight mb-4">{activePaper.title}</h2>
              <p className="text-gray-500 font-bold uppercase tracking-tight text-sm mb-12">Total Count: {activePaper.pages} Pages</p>
              
              <div className="flex space-x-4 mb-20 lg:mb-0">
                <button onClick={handlePrev} className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all">
                  <ChevronLeft />
                </button>
                <button onClick={handleNext} className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all">
                  <ChevronRight />
                </button>
              </div>
            </div>

            {/* Right: Preview with Download Cover */}
            <div className="lg:w-2/3 w-full">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-[12px] border-white group">
                <Image src={activePaper.previewImage} alt={activePaper.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <a 
                     href={activePaper.pdfUrl} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest rounded-xl flex items-center gap-3 active:scale-95 transition-transform shadow-2xl"
                   >
                     <Download size={20} />
                     Download PDF
                   </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Clean Directory Section */}
        <div className="grid md:grid-cols-3 gap-8">
           {RESEARCH_PAPERS.map((paper, i) => (
             <div key={paper.id} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                   <FileText size={24} />
                </div>
                <h4 className="text-brand-blue font-black uppercase text-base leading-tight mb-4 h-12 line-clamp-2">{paper.title}</h4>
                <a href={paper.pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs font-black text-brand-yellow uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                  Full PDF <ChevronRight size={14} className="ml-1" />
                </a>
             </div>
           ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
