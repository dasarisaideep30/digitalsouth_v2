"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/ContactSection";
import Logo from "@/components/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function WhitePaperPage() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 7;

  const handleNext = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1));
  const handlePrev = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages));

  return (
    <main className="min-h-screen bg-brand-blue/5">
      <Navbar />
      
      <div className="pt-48 pb-48 container mx-auto px-6 max-w-6xl">
        {/* Header Branding */}
        <header className="mb-20 text-center">
           <div className="inline-block mb-12">
              <Logo scale={1.2} />
           </div>
           <h2 className="text-neutral-500 font-bold tracking-[0.2em] text-sm uppercase">Official White Paper</h2>
        </header>

        {/* Professional Document Viewer */}
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden relative border border-gray-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8 lg:p-20 flex flex-col items-center"
            >
              {/* Main Title Section */}
              <div className="text-center mb-16 max-w-4xl">
                 <h1 className="text-3xl md:text-6xl font-black text-[#1b3c74] leading-[1.1] mb-8 tracking-tighter uppercase">
                    ROLE OF BLOCKCHAIN <br className="hidden md:block" /> IN VIKSIT BHARAT 2047
                 </h1>
                 <p className="text-gray-500 font-bold text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto italic opacity-70">
                   &quot;An Educational Overview of India&apos;s Blockchain Ecosystem — bridging technology and national vision.&quot;
                 </p>
                 <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-black text-[#1b3c74]/60 uppercase tracking-widest border-t border-b border-gray-50 py-5">
                   <div className="flex items-center">
                     <FileText className="w-4 h-4 mr-2 text-brand-blue" />
                     <span>OFFICIAL WHITE PAPER</span>
                   </div>
                   <span className="opacity-30">|</span>
                   <span>BLOCKCHAIN EDUCATION</span>
                   <span className="opacity-30">|</span>
                   <span>v2025</span>
                   <span className="opacity-30">|</span>
                   <span>{totalPages} PAGES</span>
                 </div>
              </div>

              {/* PDF Viewer Area */}
              <div className="relative w-full aspect-[1.414/2] max-w-2xl rounded-2xl overflow-hidden shadow-inner border border-gray-100 group mb-16 bg-gray-50">
                  <iframe
                    src="https://img1.wsimg.com/blobby/go/3daea411-8842-4411-b6f6-a5549d1b547b/White%20Paper-1183e32.pdf#toolbar=0&navpanes=0"
                    className="w-full h-full border-none"
                    title="White Paper PDF Preview"
                    allow="autoplay"
                  />
                  
                  {/* Page Indicator Overlay - Optional since iframe has its own, but keeps UI consistent */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 text-white px-6 py-2 rounded-full font-black text-xs tracking-widest backdrop-blur-md z-20">
                     PAGE {currentPage} / {totalPages}
                  </div>

                  {/* Overlay Navigation Buttons */}
                  <div className="absolute inset-y-0 left-4 flex items-center z-10 pointer-events-none">
                    <button onClick={handlePrev} className="w-12 h-12 bg-white/90 text-[#1b3c74] rounded-xl flex items-center justify-center shadow-xl border border-gray-100 hover:bg-brand-blue hover:text-white transition-all active:scale-95 pointer-events-auto">
                      <ChevronLeft size={24} />
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-4 flex items-center z-10 pointer-events-none">
                    <button onClick={handleNext} className="w-12 h-12 bg-white/90 text-[#1b3c74] rounded-xl flex items-center justify-center shadow-xl border border-gray-100 hover:bg-brand-blue hover:text-white transition-all active:scale-95 pointer-events-auto">
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  {/* Quick Action Overlay */}
                  <div className="absolute top-6 right-6 z-10">
                    <a 
                      href="https://img1.wsimg.com/blobby/go/3daea411-8842-4411-b6f6-a5549d1b547b/White%20Paper-1183e32.pdf" 
                      download 
                      className="flex items-center gap-3 bg-brand-yellow text-black font-black px-6 py-3 rounded-xl shadow-2xl hover:bg-black hover:text-brand-yellow transition-all"
                    >
                      <Download size={20} />
                      <span className="hidden md:block">DOWNLOAD PDF</span>
                    </a>
                  </div>
              </div>

              {/* Sub-sections or features */}
              <div className="grid md:grid-cols-2 gap-12 w-full max-w-4xl mb-20 text-left">
                 <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#1b3c74] uppercase tracking-tight flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-brand-yellow" />
                       The Vision
                    </h3>
                    <p className="text-gray-500 font-bold leading-relaxed">
                      Detailed blueprint of our decentralised education framework, designed to reach over 1,000 institutes across the nation.
                    </p>
                 </div>
                 <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#1b3c74] uppercase tracking-tight flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-brand-yellow" />
                       Technological Stack
                    </h3>
                    <p className="text-gray-500 font-bold leading-relaxed">
                      Insight into the Polygon-based verification system, IPFS storage, and our commitment to open-source innovation.
                    </p>
                 </div>
              </div>

              {/* CTA */}
              <div className="w-full pt-16 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="text-left">
                    <p className="text-[#1b3c74] font-black uppercase text-sm tracking-widest mb-2">Ready to explore?</p>
                    <p className="text-gray-400 font-bold">Download the complete technical document to understand our impact.</p>
                 </div>
                 <a 
                  href="https://img1.wsimg.com/blobby/go/3daea411-8842-4411-b6f6-a5549d1b547b/White%20Paper-1183e32.pdf" 
                  download 
                  className="flex items-center gap-3 bg-brand-blue text-white font-black px-8 py-4 rounded-xl shadow-xl hover:bg-brand-yellow hover:text-black transition-all active:scale-95"
                >
                  Download PDF <Download size={18} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Links to and from */}
        <div className="mt-20 flex justify-center space-x-8 text-xs font-black uppercase tracking-widest text-brand-blue/40">
           <a href="/research" className="hover:text-brand-blue transition-colors">Go to Research Papers</a>
           <span>|</span>
           <a href="/csr-activities" className="hover:text-brand-blue transition-colors">CSR Activities</a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
