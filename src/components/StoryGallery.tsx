"use client";

import React, { useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY = [
  { id: 1, src: "/images/gallery/gallery-1.png", alt: "MoU signed between Digital South Trust and Kristu Jayanti University" },
  { id: 2, src: "/images/gallery/gallery-2.png", alt: "Policy Engagement — Karnataka" },
  { id: 3, src: "/images/gallery/gallery-3.png", alt: "Blockchain Forensics Training — Tamil Nadu Police" },
  { id: 4, src: "/images/gallery/gallery-4.png", alt: "Cryptocurrency Investigations Training — Tamil Nadu Police Academy" },
  { id: 5, src: "/images/gallery/gallery-5.png", alt: "Blockchain for Viksit Bharat book presentation" },
  { id: 6, src: "/images/gallery/gallery-6.png", alt: "Blockchain for Viksit Bharat book presented to Swamiji" },
  { id: 7, src: "/images/gallery/gallery-7.jpg", alt: "Tamil Nadu Police Academy — Five Days Capacity Building Course on Economic Offence Cases, Nov 2025" },
  { id: 8, src: "/images/gallery/gallery-8.jpg", alt: "Digital South at Integrated Cyber Crime Complex — Police Officers Training" },
  { id: 9, src: "/images/gallery/gallery-9.png", alt: "Digital South at Integrated Cyber Crime Complex — Professionals Training" },
  { id: 10, src: "/images/gallery/gallery-10.png", alt: "Web3 Industry Leaders submit policy recommendations to Parliament's Finance Committee — Viksit Bharat 2047" },
  { id: 11, src: "/images/gallery/gallery-11.png", alt: "Empowering West Bengal's Cyber Defenders — Online Session on Blockchain Innovation & Law Enforcement" },
  { id: 12, src: "/images/gallery/gallery-12.png", alt: "Nav Darpan Hindi newspaper coverage — Web3 policy recommendations submitted to Parliament's Finance Committee" },
  { id: 13, src: "/images/gallery/gallery-13.png", alt: "Digital South Trust delegation meets MP — Policy advocacy for Web3 & Viksit Bharat 2047" },
  { id: 14, src: "/images/gallery/gallery-14.jpg", alt: "Tamil newspaper coverage — Digital South Trust representatives present key Web3 recommendations to Parliament Finance Committee" },
  { id: 15, src: "/images/gallery/gallery-15.jpg", alt: "Digital South Trust — Outreach and consultation meeting" },
  { id: 16, src: "/images/gallery/gallery-16.png", alt: "Tirupur Digital South Trust — Petition submitted to MP K. Subbarayan at Kongu Mandalam" },
  { id: 17, src: "/images/gallery/gallery-17.jpg", alt: "Dhina Tamil newspaper — Digital South Trust consultative meeting in Tirupur & Coimbatore districts" },
  { id: 18, src: "/images/gallery/gallery-18.jpg", alt: "Digital South Trust delegation at Embassy of India, Tokyo — International outreach" },
  { id: 19, src: "/images/gallery/gallery-19.jpg", alt: "Digital South Trust at Embassy of India, Tokyo — Core team with diplomat" },
  { id: 20, src: "/images/gallery/gallery-20.png", alt: "Digital South Trust welfare camp held in Thiruvallur district — Tamil newspaper coverage" },
  { id: 21, src: "/images/gallery/gallery-21.png", alt: "Digital South Trust student outreach session — blockchain education for college students" },
  { id: 22, src: "/images/gallery/gallery-22.jpg", alt: "Tamil Talk newspaper — Digital South Trust tree-planting CSR drive in Vellore villages" },
  { id: 23, src: "/images/gallery/gallery-23.jpg", alt: "Digital South Trust smart classroom inauguration — rural school empowerment initiative" },
];

export default function StoryGallery() {
  // Triple the items for a smooth infinite loop
  const marqueeItems = [...GALLERY, ...GALLERY, ...GALLERY];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex items-center gap-4 text-brand-purple font-black tracking-[0.3em] text-xs mb-5 uppercase">
          <div className="w-12 h-[2px] bg-brand-purple" />
          OUR IMPACT
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-blue leading-tight tracking-tighter uppercase">
          Trust Activities
        </h2>
      </div>

      {/* Infinite Horizontal Scroller */}
      <div className="relative w-full overflow-hidden select-none group">
        <motion.div
          animate={{
            x: ["0%", "-33.333%"],
          }}
          transition={{
            duration: 45, // Slightly faster marquee for more energy
            repeat: Infinity,
            ease: "linear",
            delay: 0.15, // Ultra-fast 0.15s delay as requested
          }}
          className="flex whitespace-nowrap gap-6 lg:gap-8"
        >
          {marqueeItems.map((item, i) => (
            <motion.div
              key={`${item.id}-${i}`}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative flex-shrink-0 w-[300px] h-[200px] lg:w-[450px] lg:h-[300px] rounded-3xl overflow-hidden shadow-xl border border-gray-100 cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                 <p className="text-white text-xs font-bold leading-tight line-clamp-2">
                    {item.alt}
                 </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Edge Fades */}
        <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-white over via-white/50 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-white via-white/50 to-transparent z-20 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 mt-12 text-center">
        <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">
           Empowering communities through innovative education & outreach
        </p>
      </div>
    </section>
  );
}
