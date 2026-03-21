"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const focusAreas = [
  {
    id: "01",
    title: "Governance",
    description: "Developing transparent, blockchain-based governance frameworks to enhance public service delivery and administrative efficiency in Bharat.",
    tags: ["Policy", "Transparency", "E-Governance"]
  },
  {
    id: "02",
    title: "Healthcare",
    description: "Leveraging decentralized ledgers for secure patient data management, supply chain tracking for pharmaceuticals, and interoperable health records.",
    tags: ["HealthTech", "Security", "Data Privacy"]
  },
  {
    id: "03",
    title: "Higher Education",
    description: "Empowering universities with blockchain-verified credentials, decentralized learning platforms, and transparent academic records.",
    tags: ["EdTech", "Verification", "MoUs"]
  },
  {
    id: "04",
    title: "AI/Web3 Integration",
    description: "Exploring the convergence of Artificial Intelligence and Web3 technologies to build resilient, autonomous, and decentralized digital ecosystems.",
    tags: ["Artificial Intelligence", "Web3", "Innovation"]
  }
];

export default function ResearchAreas() {
  const [activeId, setActiveId] = useState<string | null>("01");

  return (
    <section id="research" className="section-padding bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Title Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em] mb-4 block">How We Innovate</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight mb-6">
              Advancing the state of Decentralization
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              We leverage research, infrastructure, and product innovation to push the boundaries of Web3 for a more connected world.
            </p>
            <div className="mt-10">
              <button className="px-6 py-3 bg-brand-blue text-white rounded-full font-bold hover:bg-brand-blue-deep transition-all">
                View All Research
              </button>
            </div>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-8 border-t border-gray-100 dark:border-white/10">
            {focusAreas.map((area) => (
              <div 
                key={area.id}
                className="border-b border-gray-100 dark:border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setActiveId(activeId === area.id ? null : area.id)}
                  className="w-full py-8 flex items-center justify-between group text-left"
                >
                  <div className="flex items-center space-x-12">
                    <span className="text-2xl font-bold text-gray-300 dark:text-gray-700 group-hover:text-brand-blue transition-colors">
                      {area.id}.
                    </span>
                    <span className="text-2xl font-bold text-black dark:text-white group-hover:pl-4 transition-all duration-300">
                      {area.title}
                    </span>
                  </div>
                  <div className={cn(
                    "w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center transition-all",
                    activeId === area.id ? "bg-brand-blue border-brand-blue rotate-45" : ""
                  )}>
                    <Plus className={cn("w-5 h-5", activeId === area.id ? "text-white" : "text-black dark:text-white")} />
                  </div>
                </button>

                <AnimatePresence>
                  {activeId === area.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                    >
                      <div className="pb-10 pl-6 lg:pl-[104px] pr-6 lg:pr-12">
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                          {area.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {area.tags.map(tag => (
                            <span key={tag} className="px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
