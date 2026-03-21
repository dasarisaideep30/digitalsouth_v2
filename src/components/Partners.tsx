"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const PARTNERS = [
  { name: "IBA", logo: "/images/partners/iba.webp" },
  { name: "KJU", logo: "/images/partners/kju.webp" },
  { name: "TNPA", logo: "/images/partners/tnpa.webp" },
  { name: "Jambo", logo: "/images/partners/jambo.svg" },
  { name: "WBP", logo: "/images/partners/wbp.webp" },
  { name: "Blocumen", logo: "/images/partners/blocumen.webp" },
];

export default function Partners() {
  return (
    <section className="section-padding bg-brand-yellow relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-black text-brand-blue mb-20 uppercase tracking-[0.3em]">Our Partners</h2>
        
        <div className="relative flex items-center justify-between">
          <button className="hidden md:flex w-12 h-12 bg-white/20 rounded-full items-center justify-center hover:bg-white transition-all text-brand-blue">
            <ChevronLeft />
          </button>
          
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24">
            {PARTNERS.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="relative w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-brand-blue transition-all duration-300" />
              </motion.div>
            ))}
          </div>

          <button className="hidden md:flex w-12 h-12 bg-white/20 rounded-full items-center justify-center hover:bg-white transition-all text-brand-blue">
            <ChevronRight />
          </button>
        </div>
      </div>
      
      {/* Animated background text */}
      <div className="absolute whitespace-nowrap opacity-[0.03] text-[10rem] font-black text-brand-blue bottom-0 pointer-events-none select-none">
        PARTNERSHIPS COLLABORATION ECOSYSTEM NETWORK
      </div>
    </section>
  );
}
