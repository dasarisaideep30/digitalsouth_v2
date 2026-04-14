"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowRight, Globe, Shield, Sparkles } from 'lucide-react';

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  if (!mounted) return null;

  return <span>{displayText}</span>;
};

export default function Hero() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen mesh-gradient" />;

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

          {/* Flagship Cinematic Globe Visual */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -25, 0] 
              }}
              transition={{ 
                duration: 1, 
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-full max-w-[600px] aspect-square flex justify-center items-center"
            >
              {/* Outer Glow effect */}
              <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-[100px] animate-pulse" />
              
              {/* Main Globe Container */}
              <div className="relative z-10 w-full h-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl rounded-[60px] border border-white/20 shadow-[0_48px_100px_-20px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                
                {/* Large Central Globe */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-brand-cyan/20 blur-3xl rounded-full scale-150 group-hover:bg-brand-yellow/20 transition-colors duration-1000" />
                  <Globe className="w-64 h-64 md:w-80 md:h-80 text-white opacity-90 drop-shadow-[0_0_30px_rgba(6,182,212,0.5)] animate-spin-slow" />
                  
                  {/* Digital Pulse Rings */}
                  <div className="absolute inset-0 border-2 border-brand-cyan/30 rounded-full scale-110 animate-ping opacity-20" />
                  <div className="absolute inset-0 border-2 border-brand-purple/20 rounded-full scale-125 animate-ping opacity-10 [animation-delay:1s]" />
                </div>

                <div className="absolute bottom-12 left-0 right-0 text-center px-10">
                   <div className="text-xs font-black text-brand-cyan uppercase tracking-[0.4em] mb-4">India to World</div>
                   <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Decentralized Bharat</h3>
                </div>
              </div>

              {/* Orbital Badges */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute -top-4 left-1/2 -ml-8 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-2xl rotate-[-360deg]">
                   <Shield className="text-green-500 w-8 h-8" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -ml-8 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-2xl rotate-[-360deg]">
                   <Sparkles className="text-brand-yellow w-8 h-8" />
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
