"use client";

import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, BookOpen, Users } from "lucide-react";

const NEWS_ITEMS = [
  {
    id: 1,
    tag: "Online Course",
    title: "Stay tuned – next batch dates will be revealed shortly.",
    subtitle: "Online Blockchain Certificate Program",
    description:
      "Learn Blockchain, Crypto, and Indian Regulations — with expert live sessions & Q&A.",
    ctaText: "ENROLL NOW",
    ctaHref: "https://portfoliobygraphiaura.my.canva.site/digital-south-online-certification-programs",
    isDonate: false,
    cardBg: "#1E3A8A",
    accentColor: "#3B82F6",
    imagePosition: "center",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: 2,
    tag: "New Launch",
    title: "Launched New",
    subtitle: "Diploma in Blockchain Technology",
    description:
      "Unlock new career opportunities and become a blockchain expert with our practical, industry-led diploma program - jointly offered by Nirmala College for Women and Digital South Trust.",
    ctaText: "ENROLL NOW",
    ctaHref: "https://portfoliobygraphiaura.my.canva.site/diploma-in-blockchain-technology-in-distance-education-webpage",
    isDonate: false,
    cardBg: "#0F766E",
    accentColor: "#14B8A6",
    imagePosition: "top center",
    image: "/images/students-group.png",
  },
  {
    id: 3,
    tag: "Support Us",
    title: "Support Our Cause",
    subtitle: "Digital South Donations",
    description:
      "Help us empower education, environment, and digital progress. Every contribution makes a difference.",
    ctaText: "DONATE NOW",
    ctaHref: "https://digitalsouth.co.in/donations",
    isDonate: true,
    cardBg: "#BE123C",
    accentColor: "#FB7185",
    imagePosition: "center",
    image: "/images/donate-plant.png",
  },
];

export function NewsCarousel() {
  const [active, setActive] = React.useState(0);

  const next = useCallback(() => setActive((prev) => (prev + 1) % NEWS_ITEMS.length), []);
  const prev = useCallback(() => setActive((prev) => (prev - 1 + NEWS_ITEMS.length) % NEWS_ITEMS.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-black text-brand-yellow uppercase tracking-[0.3em] mb-3 block">
              LATEST UPDATES
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-blue uppercase leading-tight tracking-tight">
              What's New <span className="text-brand-yellow">@</span> Digital South
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 shrink-0">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative h-[420px] md:h-[460px]">
          <AnimatePresence mode="wait">
            {NEWS_ITEMS.map((item, index) =>
              index === active ? (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ type: "spring", damping: 24, stiffness: 140 }}
                  className="absolute inset-0"
                >
                  <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.2)] flex flex-col md:flex-row">

                    {/* Left: coloured text panel */}
                    <div
                      className="md:w-[52%] p-10 lg:p-14 flex flex-col justify-between text-white relative overflow-hidden shrink-0"
                      style={{ backgroundColor: item.cardBg }}
                    >
                      {/* Decorative blobs */}
                      <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-20 pointer-events-none" style={{ backgroundColor: item.accentColor }} />
                      <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full opacity-10 pointer-events-none" style={{ backgroundColor: item.accentColor }} />

                      <div className="relative z-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-black uppercase tracking-[0.2em] mb-6 text-white">
                          {item.tag}
                        </span>

                        {/* Yellow title */}
                        <h3 className="text-2xl lg:text-3xl font-black mb-3 leading-tight" style={{ color: "#FEF08A" }}>
                          {item.title}
                        </h3>

                        {item.subtitle && (
                          <p className="text-white font-black text-xl lg:text-2xl mb-4 leading-snug">
                            {item.subtitle}
                          </p>
                        )}

                        <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-10">
                          {item.description}
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="relative z-10">
                        <a
                          href={item.ctaHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-black text-sm uppercase tracking-widest rounded-xl hover:scale-105 hover:bg-neutral-800 transition-all shadow-xl w-fit"
                        >
                          {item.isDonate && <Heart className="w-4 h-4 fill-current" />}
                          {item.ctaText}
                        </a>
                      </div>
                    </div>

                    {/* Right: image panel */}
                    <div className="md:w-[48%] relative min-h-[200px] md:min-h-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ objectPosition: item.imagePosition }}
                      />
                    </div>

                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center mt-10 gap-3">
          {NEWS_ITEMS.map((ni, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-2.5 rounded-full transition-all duration-500"
              style={{
                width: active === i ? "2.5rem" : "0.625rem",
                backgroundColor: active === i ? ni.cardBg : "#d1d5db",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
