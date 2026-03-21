"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/ContactSection";
import { motion } from "framer-motion";
import Image from "next/image";

const ACTIVITIES = [
  {
    title: "MoU with Kristu Jayanti University",
    description: "Establishing the Blockchain Center of Excellence to foster student innovation and R&D in decentralized technologies.",
    image: "/v1-images/rs=w_2320,h_1084.webp",
    category: "Strategic Partnership"
  },
  {
    title: "Blood Donation Camp 2024",
    description: "Mobilizing our volunteer network for community welfare and supporting local healthcare infrastructure through blood drives.",
    image: "/v1-images/rs=w_1160,h_630.webp",
    category: "Social Welfare"
  },
  {
    title: "Eco-Revival: Tree Plantation Drive",
    description: "Over 30+ drives across various college campuses to promote sustainability and environment awareness among the youth.",
    image: "/v1-images/download (3).webp",
    category: "Environment"
  },
  {
    title: "Institutional Collaboration Summit",
    description: "Bringing together academic leaders to align curriculum with the requirements of the global Web3 economy.",
    image: "/v1-images/rs=w_2320,h_1084 (1).webp",
    category: "Education"
  }
];

export default function TrustActivitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-6">
        <header className="mb-20 text-center">
          <span className="text-xs font-black text-brand-yellow uppercase tracking-[0.4em] mb-4 block">Our Impact</span>
          <h1 className="text-5xl md:text-7xl font-black text-brand-blue uppercase tracking-tight mb-8 leading-tight">Trust Activities</h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-500 font-medium">Documenting our commitment to social welfare, environmental sustainability, and educational excellence across Bharat.</p>
        </header>

        <div className="grid gap-24">
          {ACTIVITIES.map((activity, idx) => (
            <motion.div 
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group border-[12px] border-gray-50">
                   <Image 
                     src={activity.image}
                     alt={activity.title}
                     fill
                     className="object-cover group-hover:scale-105 transition-transform duration-1000"
                   />
                   <div className="absolute top-6 left-6 bg-brand-yellow text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                     {activity.category}
                   </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full space-y-6">
                 <h2 className="text-4xl font-black text-brand-blue uppercase leading-tight tracking-tight">{activity.title}</h2>
                 <p className="text-xl text-gray-600 leading-relaxed font-medium">{activity.description}</p>
                 <div className="h-1 w-24 bg-brand-yellow rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
