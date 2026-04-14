"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/ContactSection";
import Logo from "@/components/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Download, Newspaper } from "lucide-react";
import Image from "next/image";

const PRESS_RELEASES = [
  {
    id: 1,
    title: "Digital South Trust's Founder Calls for India's Global Blockchain Leadership",
    subtitle: "National Pride, Vision, and Action for Viksit Bharat — Block by Block, College by College",
    date: "October 28, 2025",
    location: "India",
    tags: ["#ViksitBharat", "#DigitalSouthTrust", "#NationalBlockchainFramework", "#IndiaLeads", "#BlockchainEducation", "#NationalPride", "#FiveCollegesPerDistrict", "#FutureReady", "#BharatBlockByBlock"],
    content: (
      <div className="space-y-6 text-gray-700 leading-relaxed text-left">
        <p className="font-medium">
          Mr. Sudhakar Lakshmanaraja, founder of Digital South Trust, passionately believes that <span className="font-bold text-brand-blue">"India should lead the world in blockchain technology. Our time is now!"</span> In an inspiring address, he shared his vision for a truly Viksit Bharat—where innovation, opportunity, and digital empowerment reach every corner of the nation.
        </p>
        
        <div className="bg-brand-blue/5 border-l-4 border-brand-blue p-6 italic font-medium">
          "Imagine a future where from bustling metros to the smallest villages, every student, entrepreneur, and citizen has the opportunity to learn, build, and prosper through blockchain. Our five colleges per district model will transform 4,000+ institutions into national blockchain talent hubs. Tier-II and Tier-III cities will no longer be spectators; they will be powerhouses of innovation and leadership."
        </div>

        <p>
          This decentralized framework is more than an educational strategy—it's a movement. By 2035, Digital South Trust aims to train 2 million blockchain professionals—engineers, policy leaders, legal experts, and creative minds who will shape India's economy and governance. Every Indian will have the tools to access global opportunities and defend against digital risks.
        </p>

        <p>
          Mr. Lakshmanaraja's message highlights the remarkable vision and leadership of the Government of India in advancing digital transformation. The new National Blockchain Framework stands as a testament to the government's forward-thinking policies, commitment to inclusive growth, and determination to make India a global leader in emerging technologies.
        </p>

        <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-100">
          <h4 className="text-xl font-black text-brand-blue mb-4">Join the Story — Become a Pioneer</h4>
          <p className="mb-6">Inspired by this historic call, Digital South Trust and Nirmala College for Women now launch their Online Diploma in Blockchain Technology. Be the change, be the leader. Enrollment begins for November 25th — details and registration here:</p>
          <div className="flex flex-col gap-2 font-bold text-brand-blue">
            <a href="https://www.digitalsouth.co.in" className="hover:underline">www.digitalsouth.co.in</a>
            <a href="https://www.nirmalacollegeonline.ac.in" className="hover:underline">www.nirmalacollegeonline.ac.in</a>
          </div>
          <div className="mt-8 relative aspect-[4/3] w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <Image src="/images/book-cover.png" alt="Blockchain for Viksit Bharat Book" fill className="object-contain p-2 bg-white" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Digital South Trust Launches World's First Web3 Talent Roadmap for India",
    subtitle: "Blockchain for Viksit Bharat: Building the Global Capital of Blockchain Talent",
    date: "September 17, 2025",
    location: "India",
    content: (
      <div className="space-y-6 text-gray-700 leading-relaxed text-left">
        <p>
          Digital South Trust today unveiled its landmark book <span className="font-bold">Blockchain for Viksit Bharat</span>, the world's first comprehensive roadmap dedicated to building India as the global capital of Web3 and blockchain talent.
        </p>
        
        <p>
          This groundbreaking vision lays out a district-level strategy to establish five blockchain colleges in each of India's 806 districts, train 2 million professionals by 2030, and integrate blockchain across education, governance, and industry.
        </p>

        <div className="my-10 relative aspect-[1/1.4] w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-100">
          <Image src="/images/book-cover.png" alt="Blockchain for Viksit Bharat Book Cover" fill className="object-contain p-4 bg-white" />
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl italic font-medium border-l-4 border-gray-300">
          "Blockchain is not just a technology—it is India's opportunity to lead the world. This roadmap provides a first-of-its-kind, scalable model to make India the talent capital of Web3, empower our youth, prevent fraud, and accelerate the journey toward a $1 trillion digital economy."
          <span className="block mt-3 not-italic font-black text-brand-blue">— Sudhakar Lakshmanaraja, Founder of Digital South Trust</span>
        </div>

        <p>
          By aligning with the Viksit Bharat 2047 agenda and international frameworks like the G20, FATF, IMF, and UN SDGs, this initiative positions India not just as a participant but as the global leader in blockchain education, adoption, and innovation — ensuring every citizen, from metropolitan hubs to rural villages, shares in the benefits of the decentralized future.
        </p>

        <div className="pt-6 border-t">
          <p className="font-bold">For more information, visit: <a href="https://www.digitalsouth.co.in" className="text-brand-blue hover:underline">www.digitalsouth.co.in</a></p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Web3 Industry Delegation Submits Policy Recommendations to Parliament",
    date: "July 29, 2025",
    location: "New Delhi",
    content: (
      <div className="space-y-6 text-gray-700 leading-relaxed text-left">
        <p>
          In a milestone moment for India's digital future, a delegation of top Web3 professionals and public policy advocates submitted a forward-looking proposal to <span className="font-bold text-gray-900">Dr. Bhartruhari Mahtab</span>, Chairperson of the Parliamentary Standing Committee on Finance.
        </p>
        
        <p>
          This comprehensive proposal outlines a vision to accelerate blockchain and digital asset innovation in India — laying the foundation for a $100 billion Web3 economy by 2035, the creation of over 7 million jobs, and $2 billion in annual foreign investment.
        </p>

        <p>
          At the forefront of this movement is <span className="text-brand-blue font-bold">Digital South Trust</span>, a nonprofit organization that has emerged as a pioneer in blockchain education, policy advocacy, and grassroots mobilization.
        </p>

        <div className="bg-brand-blue/90 text-white p-8 rounded-3xl my-8">
          <p className="text-xl font-medium italic mb-4 leading-relaxed">
            "India has the talent and the tech leadership to shape the global Web3 landscape. What we need now is a regulatory foundation that nurtures innovation, safeguards users, and encourages long-term investment."
          </p>
          <p className="font-black border-t border-white/20 pt-4">— Sudhakar Lakshmanaraja, Founder of Digital South Trust</p>
        </div>

        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
           <Image src="/images/gallery/gallery-10.png" alt="Delegation submits recommendations" fill className="object-cover" />
           <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
             <p className="text-white text-xs font-bold">Web3 Delegation with Hon. MP Dr. Bhartruhari Mahtab at Parliament House</p>
           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div className="bg-gray-50 p-6 rounded-2xl">
            <h4 className="font-black text-brand-blue uppercase text-xs tracking-widest mb-4">The Delegation</h4>
            <ul className="space-y-2 text-sm font-bold text-gray-600">
              <li>• Sudhakar Lakshmanaraja (Digital South)</li>
              <li>• Ramakrishna Venkatesh (Bharat Web3 Assoc)</li>
              <li>• Vedang Vatsa (Hashtag Web3)</li>
              <li>• Ankit Anand (CoinDCX)</li>
              <li>• Jagdish Pandya (BlockOn Ventures)</li>
              <li>• Utkarsh Tiwari (KoinBX)</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl">
            <h4 className="font-black text-brand-blue uppercase text-xs tracking-widest mb-4">Key Recommendations</h4>
            <ul className="space-y-2 text-sm font-bold text-gray-600">
              <li>• Establish National Web3 Advisory Committee</li>
              <li>• Reform Tax Policies for Innovation</li>
              <li>• Clear Regulatory Framework for Assets</li>
              <li>• Leverage Blockchain for Public Infra</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl border-l-4 border-brand-yellow">
           <p className="font-medium italic leading-relaxed text-gray-800">
             "Stablecoins are becoming central to global financial discussions. For India, they present an opportunity to modernize cross-border payments, strengthen the rupee in digital trade, and build trust through on-chain transparency."
           </p>
           <p className="mt-4 text-xs font-black text-brand-blue">— VEDANG VATSA (S&P Global Market Intelligence Series Researcher)</p>
        </div>

        <p>
          As India advances toward becoming a digital superpower, Digital South Trust remains at the forefront, ensuring Web3 is accessible, inclusive, and transformative — for every citizen, student, and startup.
        </p>

        <div className="pt-8 mt-8 border-t border-gray-100 text-center">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Media Enquiries</p>
          <a href="mailto:contact@digitalsouth.co.in" className="text-brand-blue font-bold hover:underline">contact@digitalsouth.co.in</a>
        </div>
      </div>
    )
  }
];

export default function PressReleasePage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeRelease = PRESS_RELEASES[activeIdx];

  const handleNext = () => setActiveIdx((prev) => (prev + 1) % PRESS_RELEASES.length);
  const handlePrev = () => setActiveIdx((prev) => (prev - 1 + PRESS_RELEASES.length) % PRESS_RELEASES.length);

  return (
    <main className="min-h-screen bg-brand-blue/5 overflow-y-auto">
      <Navbar />
      
      <div className="pt-32 pb-48 container mx-auto px-6 max-w-6xl">
        {/* IBA Logo Header */}
        <header className="mb-20 text-center">
           <div className="inline-block mb-12">
              <Logo height={60} />
           </div>
           <h2 className="text-neutral-500 font-bold tracking-[0.2em] text-sm uppercase">Digital News Center</h2>
        </header>

        {/* High-Fidelity Doc Viewer */}
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden relative border border-gray-100">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRelease.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="p-8 lg:p-20"
            >
              {/* Central Heading */}
              <div className="text-center mb-16 max-w-4xl mx-auto">
                 <h1 className="text-3xl md:text-5xl font-black text-[#1b3c74] leading-[1.1] mb-8 tracking-tight">
                   {activeRelease.title}
                 </h1>
                 {activeRelease.subtitle && (
                    <p className="text-gray-500 font-bold text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto italic opacity-70">
                      {activeRelease.subtitle}
                    </p>
                 )}
                 <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-black text-[#1b3c74]/60 uppercase tracking-widest border-t border-b border-gray-50 py-5">
                   <div className="flex items-center">
                     <Newspaper className="w-4 h-4 mr-2 text-brand-blue" />
                     <span>PRESS RELEASE</span>
                   </div>
                   <span className="hidden md:block opacity-30">|</span>
                   <span>{activeRelease.location}</span>
                   <span className="hidden md:block opacity-30">|</span>
                   <span>{activeRelease.date}</span>
                 </div>
              </div>

              {/* Slider Content Preview Area (Rich Text) */}
              <div className="relative w-full max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden p-8 lg:p-12 mb-16 border border-gray-50 shadow-inner">
                  {activeRelease.content}
                  
                  {/* Square Navigation Buttons */}
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <button onClick={handlePrev} className="w-12 h-12 -ml-6 bg-white text-[#1b3c74] rounded-xl flex items-center justify-center shadow-xl border border-gray-100 hover:bg-brand-blue hover:text-white transition-all active:scale-95">
                      <ChevronLeft size={24} />
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <button onClick={handleNext} className="w-12 h-12 -mr-6 bg-white text-[#1b3c74] rounded-xl flex items-center justify-center shadow-xl border border-gray-100 hover:bg-brand-blue hover:text-white transition-all active:scale-95">
                      <ChevronRight size={24} />
                    </button>
                  </div>
              </div>

              {/* Tags Area */}
              {activeRelease.tags && (
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-4xl mx-auto text-brand-blue font-black text-sm mb-16">
                  {activeRelease.tags.map(tag => <span key={tag} className="hover:text-brand-yellow transition-colors cursor-default">{tag}</span>)}
                </div>
              )}

              {/* Navigation Indicators */}
              <div className="flex flex-col items-center pt-8 border-t border-gray-50">
                 <div className="flex space-x-3 mb-6">
                    {PRESS_RELEASES.map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => setActiveIdx(i)}
                        className={`h-2 rounded-full transition-all duration-500 ${activeIdx === i ? 'w-10 bg-[#1b3c74]' : 'w-2 bg-gray-200 hover:bg-gray-300'}`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                 </div>
                 <span className="text-gray-400 font-black text-sm uppercase tracking-widest">
                   Clipping {activeIdx + 1} of {PRESS_RELEASES.length}
                 </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Directory for Quick Access */}
        <div className="grid md:grid-cols-3 gap-8 mt-40">
           {PRESS_RELEASES.map((release, i) => (
             <button
               key={release.id}
               onClick={() => {
                 setActiveIdx(i);
                 window.scrollTo({ top: 200, behavior: 'smooth' });
               }}
               className={`p-10 rounded-[2.5rem] transition-all duration-500 group text-left border ${activeIdx === i ? 'bg-white border-brand-blue shadow-2xl scale-105' : 'bg-white/50 border-gray-200 hover:border-brand-blue/30'}`}
             >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-colors ${activeIdx === i ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-brand-blue/10 group-hover:text-brand-blue'}`}>
                   <Newspaper size={28} />
                </div>
                <h4 className={`font-black uppercase text-base leading-tight mb-4 transition-colors ${activeIdx === i ? 'text-[#1b3c74]' : 'text-gray-500'}`}>{release.title}</h4>
                <div className={`flex items-center text-xs font-black uppercase tracking-widest transition-all ${activeIdx === i ? 'text-brand-blue opacity-100' : 'text-gray-400 opacity-60 group-hover:opacity-100'}`}>
                  Open Document <ChevronRight size={14} className="ml-1" />
                </div>
             </button>
           ))}
        </div>

        {/* Links Footer */}
        <div className="w-full mt-32 pt-16 border-t font-black text-[#1b3c74] flex flex-col md:flex-row items-center justify-center gap-8 text-sm lg:text-base">
           <a href="https://www.digitalsouth.co.in" className="hover:text-brand-blue transition-colors flex items-center">
             <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow mr-3" />
             www.digitalsouth.co.in
           </a>
           <span className="hidden md:block opacity-20">|</span>
           <a href="https://www.nirmalacollegeonline.ac.in" className="hover:text-brand-blue transition-colors flex items-center">
             <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow mr-3" />
             www.nirmalacollegeonline.ac.in
           </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
