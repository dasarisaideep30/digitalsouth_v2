"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../Logo';

export default function WhoWeAreHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-brand-blue pt-48 pb-12">
      {/* Network / Plexus-style background effect with vibrant colors */}
      <div className="absolute inset-0 bg-blue-600/10" />
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500 rounded-full blur-[120px] mix-blend-screen opacity-50" />
      </div>

      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Add some random lines/dots to simulate the plexus in the screenshot */}
          <circle cx="200" cy="300" r="2" fill="white" />
          <circle cx="500" cy="100" r="2" fill="white" />
          <circle cx="800" cy="400" r="2" fill="white" />
          <circle cx="400" cy="700" r="2" fill="white" />
          <line x1="200" y1="300" x2="500" y2="100" stroke="white" strokeWidth="0.5" />
          <line x1="500" y1="100" x2="800" y2="400" stroke="white" strokeWidth="0.5" />
          <line x1="800" y1="400" x2="400" y2="700" stroke="white" strokeWidth="0.5" />
          <line x1="400" y1="700" x2="200" y2="300" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-12 md:p-16 shadow-2xl text-center relative overflow-hidden"
        >
          {/* Decorative background element like in screenshot 4 */}
          <div className="absolute right-0 top-0 w-64 h-full bg-brand-blue/5 -skew-x-12 transform translate-x-32" />
          
          <div className="relative z-10">
              <div className="flex justify-center mb-6">
                 <Logo height={120} />
              </div>
             <p className="text-xl md:text-2xl font-bold text-brand-blue/80 max-w-2xl mx-auto leading-tight italic">
               To Make India the Blockchain Talent Capital of the World
             </p>
          </div>
        </motion.div>
      </div>
      
      {/* Down arrow indicator from screenshot 4 (small triangle/arrow) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" transform="rotate(180 10 10)" />
        </svg>
      </div>
    </section>
  );
}
