"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Globe, Send } from 'lucide-react';

// Custom X icon (formerly Twitter)
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function ContactSection() {
  return (
    <footer id="contact" className="relative font-sans">
      {/* Main Contact Section (Blue) */}
      <section className="bg-brand-blue py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between text-white">
          <div className="mb-16 lg:mb-0 w-full lg:w-1/2">
            {/* Logo area */}
            <div className="flex items-center space-x-4 mb-10">
              <div className="bg-white p-4 rounded-xl">
                 <div className="flex -space-x-1">
                    <div className="w-8 h-8 border-2 border-brand-blue rounded-full bg-white" />
                    <div className="w-8 h-8 border-2 border-brand-blue rounded-full bg-white" />
                    <div className="w-8 h-8 border-2 border-brand-blue rounded-full bg-white" />
                 </div>
              </div>
              <div className="h-12 w-px bg-white/20 mx-4" />
              <div className="text-2xl font-black uppercase tracking-tighter leading-none">
                Digital South <br />
                <span className="text-sm font-bold opacity-80 decoration-brand-yellow decoration-2 underline-offset-4 underline">Trust</span>
              </div>
            </div>
            
            <div className="space-y-4 text-2xl font-bold mb-12">
              <h3 className="text-sm uppercase tracking-[0.3em] opacity-60 mb-6">Connect with us</h3>
              <a href="mailto:contact@digitalsouth.co.in" className="flex items-center space-x-4 hover:text-brand-yellow transition-colors group">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-yellow">
                  <Mail size={20} />
                </div>
                <span>contact@digitalsouth.co.in</span>
              </a>
              <a href="https://www.digitalsouth.co.in" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 hover:text-brand-yellow transition-colors group">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-yellow">
                  <Globe size={20} />
                </div>
                <span>www.digitalsouth.co.in</span>
              </a>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm uppercase tracking-[0.3em] font-black opacity-80">SOCIAL</h3>
              <div className="flex flex-wrap gap-8 items-center">
                <a href="#" className="hover:text-brand-yellow transition-transform hover:-translate-y-1"><Facebook size={40} strokeWidth={1.5} /></a>
                <a href="#" className="hover:text-brand-yellow transition-transform hover:-translate-y-1"><XIcon /></a>
                <a href="#" className="hover:text-brand-yellow transition-transform hover:-translate-y-1"><Instagram size={40} strokeWidth={1.5} /></a>
                <a href="#" className="hover:text-brand-yellow transition-transform hover:-translate-y-1"><Youtube size={48} strokeWidth={1.5} /></a>
                <a href="#" className="hover:text-brand-yellow transition-transform hover:-translate-y-1"><Linkedin size={40} strokeWidth={1.5} fill="currentColor" /></a>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <h2 className="text-7xl md:text-9xl font-black uppercase leading-[0.85] text-white/90 text-right lg:text-right select-none pointer-events-none tracking-tighter">
              Contact <br /> Us
            </h2>
          </div>
        </div>
        
        {/* Subtle decorative background text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 transform -rotate-90 opacity-[0.03] text-[15rem] font-black pointer-events-none select-none">
          MISSION
        </div>
      </section>

      {/* Yellow Bottom Bar */}
      <section className="bg-brand-yellow py-8 border-t border-black/5">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <Facebook size={20} className="text-black cursor-pointer hover:scale-110 transition-transform" strokeWidth={2.5}/>
            <Instagram size={20} className="text-black cursor-pointer hover:scale-110 transition-transform" strokeWidth={2.5}/>
            <Linkedin size={20} className="text-black cursor-pointer hover:scale-110 transition-transform" strokeWidth={2.5}/>
            <div className="w-5 h-5 flex items-center justify-center text-black cursor-pointer hover:scale-110 transition-transform">
               <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </div>
            <Youtube size={20} className="text-black cursor-pointer hover:scale-110 transition-transform" strokeWidth={2.5}/>
          </div>
          
          <p className="text-black font-black uppercase tracking-tight mb-2 text-center text-sm md:text-base">
            India's leading Blockchain Education Trust
          </p>
          
          <p className="text-black/60 text-xs font-semibold uppercase tracking-widest text-center">
            Copyright &copy; {new Date().getFullYear()} Digital South - All Rights Reserved
          </p>
        </div>
      </section>
    </footer>
  );
}

