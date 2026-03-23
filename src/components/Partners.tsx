"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const PARTNERS = [
  { name: "IBA", logo: "/images/partners/iba-new.png" },
  { name: "Kristu Jayanti", logo: "/images/partners/kristu-jayanti.png" },
  { name: "TN Police Academy", logo: "/images/partners/tn-police.png" },
  { name: "West Bengal Police", logo: "/images/partners/wb-police.png" },
  { name: "Okto", logo: "/images/partners/okto.png" },
  { name: "UCTalent", logo: "/images/partners/uctalent.png" },
  { name: "IQL", logo: "/images/partners/iql.png" },
  { name: "FSV Capital", logo: "/images/partners/fsv-capital.png" },
  { name: "Blockon", logo: "/images/partners/blockon.png" },
  { name: "Blocumen Studios", logo: "/images/partners/blocumen-studios.png" },
  { name: "VIT Chennai", logo: "/images/partners/vit-chennai.png" },
  { name: "SRM Institute", logo: "/images/partners/srm-institute.png" },
  { name: "Bharat Web3", logo: "/images/partners/bharat-web3.png" },
  { name: "Art of Blockchain", logo: "/images/partners/aob.png" },
  { name: "Daily Gurus", logo: "/images/partners/daily-gurus.png" },
  { name: "Jambo", logo: "/images/partners/jambo-new.png" },
  { name: "Nirmala College", logo: "/images/partners/nirmala-college.png" },
];

export default function Partners() {
  // Triple the list to ensure a seamless infinite animation without gaps
  const marqueeItems = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="py-24 bg-brand-yellow relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 mb-16">
        <h2 className="text-center text-4xl font-black text-brand-blue uppercase tracking-[0.3em]">Our Partners</h2>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative overflow-hidden group select-none">
        <motion.div
           initial={{ x: 0 }}
           animate={{
            x: ["0%", "-33.333%"],
          }}
          transition={{
            duration: 35, // Slightly faster to ensure perception of movement
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: 0.05,
          }}
          className="flex whitespace-nowrap gap-16 lg:gap-24 py-10 px-12"
        >
          {marqueeItems.map((partner, i) => (
            <motion.div
              key={`${partner.name}-${i}`}
              whileHover={{ scale: 1.25, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative flex-shrink-0 w-28 h-28 lg:w-40 lg:h-40 flex items-center justify-center cursor-pointer"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 112px, 160px"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Brand Overlay Elements */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-yellow to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-yellow to-transparent z-10" />

      {/* Animated background text */}
      <div className="absolute whitespace-nowrap opacity-[0.03] text-[10rem] font-black text-brand-blue bottom-0 pointer-events-none select-none">
        PARTNERSHIPS COLLABORATION ECOSYSTEM NETWORK PARTNERSHIPS
      </div>
    </section>
  );
}
