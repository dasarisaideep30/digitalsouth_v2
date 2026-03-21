"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Clock } from 'lucide-react';
import Image from 'next/image';

const articles = [
  {
    id: 1,
    category: "Media Coverage",
    title: "Digital South Trust's Vision for India's Global Blockchain Leadership",
    excerpt: "Major coverage of our founder's roadmap for a decentralized Bharat and the 'Block by Block, College by College' initiative.",
    readTime: "6 MIN READ",
    date: "OCT 28, 2025",
    link: "/press-release",
    type: "Press",
    image: "/v1-images/rs=w_984,h_900.webp"
  },
  {
    id: 2,
    category: "Eco Initiative",
    title: "Empowering Rural Communities through Sustainable Progress",
    excerpt: "Tamil and English weekly coverage of our community-driven tree plantation and literacy drives in the southern region.",
    readTime: "4 MIN READ",
    date: "AUG 30, 2025",
    link: "/trust-activities",
    type: "Impact",
    image: "/v1-images/download (3).webp"
  },
  {
    id: 3,
    category: "Tech Symposium",
    title: "Regional Blockchain Awareness Summit at Sri Ramakrishna College",
    excerpt: "Documenting the successful collaboration and knowledge sharing session on digital transformation for modern students.",
    readTime: "5 MIN READ",
    date: "AUG 15, 2025",
    link: "/trust-activities",
    type: "Event",
    image: "/v1-images/download.webp"
  }
];

export default function EditorialGrid() {
  return (
    <section id="news" className="section-padding bg-gray-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 dark:border-white/10 pb-12">
          <div className="max-w-2xl">
            <span className="text-sm font-black text-brand-purple uppercase tracking-[0.3em] mb-4 block">The Latest</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black dark:text-white leading-[1.1] tracking-tighter">
              Sharing our progress <br className="hidden lg:block" /> with the community
            </h2>
          </div>
          <button className="hidden md:flex items-center space-x-2 text-brand-blue font-black group px-6 py-3 rounded-full hover:bg-brand-blue/5 transition-colors">
            <span className="uppercase tracking-widest text-xs">Explore all news</span>
            <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {articles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className="group flex flex-col premium-card overflow-hidden hover:shadow-[0_30px_60px_-12px_rgba(0,100,224,0.15)] ring-1 ring-black/5 dark:ring-white/5"
            >
              <div className="aspect-[16/10] w-full relative overflow-hidden">
                <Image 
                  src={article.image} 
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 bg-white/90 dark:bg-black/90 backdrop-blur-xl px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue shadow-lg">
                  {article.category}
                </div>
              </div>

              <div className="p-10 flex flex-col flex-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center text-gray-400 text-[10px] font-black tracking-widest uppercase">
                    <Clock className="w-3.5 h-3.5 mr-1.5 text-brand-blue" />
                    {article.readTime}
                  </div>
                  <span className="text-gray-300 dark:text-white/10 text-xs">•</span>
                  <div className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{article.date}</div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-black text-black dark:text-white mb-4 group-hover:text-brand-blue transition-colors leading-tight tracking-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 flex-1 leading-relaxed font-medium">
                  {article.excerpt}
                </p>

                <a 
                  href={article.link}
                  className="inline-flex items-center text-xs font-black text-black dark:text-white group/link uppercase tracking-widest"
                >
                  <span className="border-b-2 border-brand-blue/30 pb-1 group-hover/link:border-brand-blue group-hover/link:pb-1.5 transition-all duration-300">Read more</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Re-using ArrowRight internally
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  );
}
