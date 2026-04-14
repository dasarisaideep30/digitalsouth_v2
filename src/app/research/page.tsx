"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/ContactSection";
import Logo from "@/components/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Download, FileText } from "lucide-react";
import Image from "next/image";

const RESEARCH_PAPERS = [
  {
    id: 1,
    title: "BHARAT CRYPTO ASSET REGULATION & ENFORCEMENT (RECOMMENDATIONS AND FINDINGS)",
    pdfUrl: "https://img1.wsimg.com/blobby/go/3daea411-8842-4411-b6f6-a5549d1b547b/BHARAT%20CRYPTO%20ASSET%20REGULATION%20%26%20ENFORCEMENT.pdf",
    previewImage: "/images/research/paper-1.png",
    date: "Oct 15, 2025",
    pages: 14,
    author: "Mr. Lalith Krishnan"
  },
  {
    id: 2,
    title: "CRYPTO EXCHANGES IN INDIA OPERATIONS, RISKS, AND REGULATION",
    pdfUrl: "https://img1.wsimg.com/blobby/go/3daea411-8842-4411-b6f6-a5549d1b547b/CRYPTO%20EXCHANGES%20IN%20INDIA%20OPERATIONS%2C%20RISKS%2C%20A.pdf",
    previewImage: "/images/research/paper-2.png",
    date: "2025",
    pages: 17,
    author: "Dileep Kumar H V"
  },
  {
    id: 3,
    title: "ROLE OF BLOCKCHAIN IN VIKSIT BHARAT 2047",
    pdfUrl: "https://drive.google.com/file/d/1Fet3AP4NeH8gMo76k2hYZ_Gr7LV1BK6D/view?usp=sharing",
    previewImage: "/images/research/paper-3.png",
    date: "Oct 2025",
    pages: 14,
    author: "Digital South Trust"
  }
];

export default function ResearchPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activePageNum, setActivePageNum] = useState(1);
  const activePaper = RESEARCH_PAPERS[activeIdx];

  const handleNext = () => {
    const nextIdx = (activeIdx + 1) % RESEARCH_PAPERS.length;
    setActiveIdx(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeIdx - 1 + RESEARCH_PAPERS.length) % RESEARCH_PAPERS.length;
    setActiveIdx(prevIdx);
  };

  // Helper to determine the image to show
  const getDisplayImage = () => {
    // For now, using base image for all since only one exists per paper
    return activePaper.previewImage;
  };

  return (
    <main className="min-h-screen bg-brand-blue/5">
      <Navbar />
      
      <div className="pt-48 pb-48 container mx-auto px-6 max-w-6xl">
        {/* Header Branding */}
        <header className="mb-20 text-center">
           <div className="inline-block mb-12">
              <Logo height={60} />
           </div>
           <h2 className="text-neutral-500 font-bold tracking-[0.2em] text-sm uppercase">Research & Publications</h2>
        </header>

        {/* Professional Document Viewer */}
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden relative border border-gray-100">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activePaper.id}-${activePageNum}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8 lg:p-20 flex flex-col items-center"
            >
              {/* Main Title Section */}
              <div className="text-center mb-16 max-w-4xl">
                 <h1 className="text-3xl md:text-5xl font-black text-[#1b3c74] leading-[1.1] mb-8 tracking-tight uppercase">
                   {activePaper.title}
                 </h1>
                 <p className="text-gray-500 font-bold text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto italic opacity-70">
                   &quot;Building the intellectual foundation for a truly Viksit Bharat — secure, innovative, and decentralized.&quot;
                 </p>
                 <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-black text-[#1b3c74]/60 uppercase tracking-widest border-t border-b border-gray-50 py-5">
                   <div className="flex items-center">
                     <FileText className="w-4 h-4 mr-2 text-brand-blue" />
                     <span>RESEARCH PAPER</span>
                   </div>
                   <span className="opacity-30">|</span>
                   <span>{activePaper.author}</span>
                   <span className="opacity-30">|</span>
                   <span>{activePaper.date}</span>
                   <span className="opacity-30">|</span>
                   <span>{activePaper.pages} PAGES</span>
                 </div>
              </div>

              {/* PDF Viewer Area */}
              <div className="relative w-full aspect-[1/1.2] max-w-2xl rounded-2xl overflow-hidden shadow-inner border border-gray-100 group mb-12 bg-gray-50">
                  <iframe
                    src={activePaper.pdfUrl.includes('drive.google.com') ? activePaper.pdfUrl.replace('/view?usp=sharing', '/preview') : `${activePaper.pdfUrl}#toolbar=0&navpanes=0`}
                    className="w-full h-full border-none"
                    title={activePaper.title}
                    allow="autoplay"
                  />
                  
                  {/* Overlay Navigation Buttons - Kept for switching between documents if needed or simple page overlay */}
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <button onClick={handlePrev} className="w-12 h-12 bg-white/90 text-[#1b3c74] rounded-xl flex items-center justify-center shadow-xl border border-gray-100 hover:bg-brand-blue hover:text-white transition-all active:scale-95 pointer-events-auto">
                      <ChevronLeft size={24} />
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <button onClick={handleNext} className="w-12 h-12 bg-white/90 text-[#1b3c74] rounded-xl flex items-center justify-center shadow-xl border border-gray-100 hover:bg-brand-blue hover:text-white transition-all active:scale-95 pointer-events-auto">
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  {/* Quick Action Overlay */}
                  <div className="absolute top-6 right-6">
                    <a 
                      href={activePaper.pdfUrl} 
                      download 
                      className="flex items-center gap-3 bg-brand-yellow text-black font-black px-6 py-3 rounded-xl shadow-2xl hover:bg-black hover:text-brand-yellow transition-all"
                    >
                      <Download size={20} />
                      <span className="hidden md:block">DOWNLOAD PDF</span>
                    </a>
                  </div>
              </div>

              {/* Hashtags Area */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-4xl text-brand-blue font-black text-sm mb-16 uppercase tracking-widest opacity-60">
                 <span>#ViksitBharat</span>
                 <span>#DigitalSouthTrust</span>
                 <span>#NationalBlockchainFramework</span>
                 <span>#IndiaLeads</span>
                 <span>#BlockchainEducation</span>
                 <span>#NationalPride</span>
              </div>

              {/* Navigation Indicators */}
              <div className="flex flex-col items-center pt-8 border-t border-gray-50">
                 <div className="flex space-x-3 mb-6">
                    {RESEARCH_PAPERS.map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => { setActiveIdx(i); setActivePageNum(1); }}
                        className={`h-2 rounded-full transition-all duration-500 ${activeIdx === i ? 'w-10 bg-[#1b3c74]' : 'w-2 bg-gray-200 hover:bg-gray-300'}`}
                      />
                    ))}
                 </div>
                 <span className="text-gray-400 font-black text-sm uppercase tracking-widest">
                   DOCUMENT {activeIdx + 1} of {RESEARCH_PAPERS.length}
                 </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Directory cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-40">
           {RESEARCH_PAPERS.map((paper, i) => (
             <div
               key={paper.id}
               className={`p-10 rounded-[2.5rem] transition-all duration-500 group border flex flex-col justify-between ${activeIdx === i ? 'bg-white border-brand-blue shadow-2xl scale-105' : 'bg-white/50 border-gray-200 hover:border-brand-blue/30'}`}
             >
                <div>
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-colors ${activeIdx === i ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-brand-blue/10 group-hover:text-brand-blue'}`}>
                      <FileText size={28} />
                   </div>
                   <h4 className={`font-black uppercase text-base leading-tight mb-8 transition-colors ${activeIdx === i ? 'text-[#1b3c74]' : 'text-gray-500'}`}>{paper.title}</h4>
                </div>
                
                <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                   <button 
                    onClick={() => { setActiveIdx(i); setActivePageNum(1); window.scrollTo({ top: 200, behavior: 'smooth' }); }}
                    className="flex items-center text-xs font-black uppercase tracking-widest text-[#1b3c74] hover:text-brand-blue transition-colors"
                  >
                    View Document <ChevronRight size={14} className="ml-1" />
                  </button>
                  <a 
                    href={paper.pdfUrl} 
                    download
                    className="w-10 h-10 bg-gray-100 text-gray-400 rounded-lg flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all"
                    title="Download PDF"
                  >
                    <Download size={18} />
                  </a>
                </div>
             </div>
           ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
