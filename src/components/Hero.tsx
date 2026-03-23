"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowRight, Globe, Shield, Sparkles } from 'lucide-react';

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return <span>{displayText}</span>;
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-gradient">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-blue rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-brand-purple rounded-full blur-[100px] mix-blend-screen opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-48 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              <span className="text-xs font-bold text-white/90 tracking-wider">LATEST: BLOCKCHAIN VIKSIT BHARAT OUT NOW</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-8 text-balance tracking-tight"
            >
              Welcome to <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-white to-brand-yellow">Digital South</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 max-w-2xl mb-10 leading-relaxed font-bold uppercase tracking-tight"
            >
              India's Leading Blockchain Education Trust
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 bg-brand-blue text-white rounded-full font-bold text-lg hover:bg-brand-blue-deep transition-all flex items-center group shadow-xl shadow-brand-blue/20">
                Explore Initiatives
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Learn About Us
              </button>
            </motion.div>
          </div>

          {/* Layered Visuals / Interactive Card */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotateY: 0,
                y: [0, -20, 0] 
              }}
              transition={{ 
                duration: 1.2, 
                delay: 0.4,
                y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative aspect-square w-full max-w-[500px] mx-auto"
            >
              {/* Main Content Area */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl rounded-[40px] border border-white/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] overflow-hidden group">
              <div className="absolute inset-0 asset-placeholder mix-blend-overlay opacity-50 group-hover:scale-105 transition-transform duration-1000" />
                
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <Globe className="w-16 h-16 text-brand-cyan mb-6 animate-pulse" />
                  <h3 className="text-4xl font-black text-white mb-3 uppercase tracking-tighter">Global Impact</h3>
                  <p className="text-white/70 text-lg font-medium">Advancing decentralized technology for Bharat and beyond.</p>
                </div>
              </div>

              {/* Floating Badges (Meta Style) */}
              <motion.div
                animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 lg:-right-10 bg-white dark:bg-black/90 backdrop-blur-2xl p-5 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/10 flex items-center space-x-4 z-20"
              >
                <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-500">
                  <Shield size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-0.5">Trust Ranking</div>
                  <div className="text-base font-bold text-black dark:text-white">India's #1 NGO</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-6 lg:-left-12 bg-white dark:bg-black/90 backdrop-blur-2xl p-5 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/10 flex items-center space-x-4 z-20"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                  <Sparkles size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-0.5">Innovation</div>
                  <div className="text-base font-bold text-black dark:text-white">Web3 Leader</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
