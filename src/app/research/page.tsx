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
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-32 pb-48 container mx-auto px-6 max-w-6xl">
        <header className="mb-20 text-center text-white">
          <span className="text-xs font-black text-brand-yellow uppercase tracking-[0.4em] mb-4 block">Archive & Intelligence</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8 leading-tight">Research Papers <span className="text-brand-yellow">&</span> Library</h1>
          <p className="max-w-3xl mx-auto text-xl text-white/50 font-medium">Deep-dive technical analysis and regulatory roadmaps for the future of decentralized systems in Bharat.</p>
        </header>

        {/* Professional Document Viewer */}
        <div className="relative bg-neutral-900 rounded-[3rem] p-10 lg:p-20 shadow-2xl border border-white/5 overflow-hidden ring-1 ring-white/10 mb-32">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activePaper.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Paper Branding Header */}
              <div className="w-full mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
                 <div className="max-w-2xl">
                    <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-3">
                      {activePaper.title}
                    </h2>
                    <p className="text-brand-yellow font-bold uppercase tracking-widest text-xs opacity-80">
                      Technical Research Paper | {activePaper.pages} Pages
                    </p>
                 </div>
                 
                 <a 
                    href={activePaper.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-brand-yellow transition-colors shrink-0"
                  >
                    <Download size={16} />
                    <span>Download PDF</span>
                 </a>
              </div>

              {/* Document Container */}
              <div className="relative w-full max-w-4xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] rounded-xl overflow-hidden bg-white group">
                {/* Yellow Header Strip from audit */}
                <div className="h-2 bg-brand-yellow w-full" />
                
                <div className="relative aspect-[1.414/2] w-full">
                  <Image
                    src={activePaper.previewImage}
                    alt={activePaper.title}
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

              {/* Slider Meta */}
              <div className="mt-12 flex items-center space-x-8">
                 <div className="flex space-x-3">
                    {RESEARCH_PAPERS.map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => setActivePaperIdx(i)}
                        className={`h-2.5 rounded-full transition-all duration-500 ${activePaperIdx === i ? 'w-12 bg-brand-yellow' : 'w-2.5 bg-white/20 hover:bg-white/40'}`}
                      />
                    ))}
                 </div>
                 <span className="text-white font-black text-sm uppercase tracking-widest opacity-50">
                   0{activePaperIdx + 1} / 0{RESEARCH_PAPERS.length}
                 </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Paper Directory Links Section */}
        <section className="mt-40 border-t border-white/10 pt-20">
           <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-12">Publication Links</h3>
           <div className="grid md:grid-cols-3 gap-8">
              {RESEARCH_PAPERS.map((paper) => (
                <a
                  key={paper.id}
                  href={paper.pdfUrl}
                  className="group flex flex-col p-8 rounded-3xl bg-neutral-900 border border-white/5 hover:border-brand-yellow transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-yellow mb-6 group-hover:bg-brand-yellow group-hover:text-black transition-colors">
                     <FileText size={24} />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-4 leading-tight uppercase group-hover:text-brand-yellow transition-colors">{paper.title}</h4>
                  <div className="mt-auto flex items-center text-xs font-black text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">
                     View Document <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </a>
              ))}
           </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
