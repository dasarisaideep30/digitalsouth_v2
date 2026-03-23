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
  const [active, setActive] = React.useState(0);
  const thumbRef = useRef<HTMLDivElement>(null);

  const next = useCallback(
    () => setActive((p) => (p + 1) % GALLERY.length),
    []
  );
  const prev = useCallback(
    () => setActive((p) => (p - 1 + GALLERY.length) % GALLERY.length),
    []
  );

  // Auto-advance every 4 seconds
  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next]);

  const isFirstRender = useRef(true);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (!thumbRef.current) return;
    
    // Skip scrolling on first render to prevent page jump
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const el = thumbRef.current.children[active] as HTMLElement;
    if (el) {
      const container = thumbRef.current;
      const scrollLeft = el.offsetLeft - container.offsetWidth / 2 + el.offsetWidth / 2;
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth"
      });
    }
  }, [active]);

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Section heading */}
        <div className="mb-12">
          <div className="flex items-center gap-4 text-brand-purple font-black tracking-[0.3em] text-xs mb-5 uppercase">
            <div className="w-12 h-[2px] bg-brand-purple" />
            OUR IMPACT
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-blue leading-tight tracking-tighter uppercase">
            Blockchain Education Trust Activities
          </h2>
        </div>

        {/* Main large image */}
        <div className="relative w-full rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.22)] bg-gray-100 mb-5"
          style={{ aspectRatio: "16/9" }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={GALLERY[active].src}
              alt={GALLERY[active].alt}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </AnimatePresence>

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slide counter pill */}
          <div className="absolute bottom-4 right-4 z-20 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-black tracking-widest">
            {String(active + 1).padStart(2, "0")} / {String(GALLERY.length).padStart(2, "0")}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div
          ref={thumbRef}
          className="flex gap-3 overflow-x-auto pb-2 scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {GALLERY.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className={`relative shrink-0 w-36 h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                active === i
                  ? "ring-3 ring-brand-blue scale-105 shadow-lg"
                  : "opacity-60 hover:opacity-90"
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-center"
              />
              {active === i && (
                <div className="absolute inset-0 ring-inset ring-2 ring-brand-blue rounded-xl pointer-events-none" />
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
