"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ContactSection";
import { motion } from "framer-motion";
import { Heart, Trees, GraduationCap, Cross } from "lucide-react";

const CAUSES = [
  {
    title: "Environment",
    description: "Support our regional tree plantation drives and ecological restoration projects across industrial zones.",
    icon: Trees,
    color: "bg-green-600"
  },
  {
    title: "Education",
    description: "Contribute to blockchain education scholarships and the setup of regional centers of excellence.",
    icon: GraduationCap,
    color: "bg-brand-blue"
  },
  {
    title: "Health",
    description: "Help us organize blood donation camps and support local medical outreach programs in rural communities.",
    icon: Heart,
    color: "bg-red-600"
  }
];

export default function DonationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-32 pb-20 container mx-auto px-6 max-w-6xl">
        <header className="mb-20 text-center">
          <span className="text-xs font-black text-brand-yellow uppercase tracking-[0.4em] mb-4 block">Support Our Mission</span>
          <h1 className="text-5xl md:text-7xl font-black text-brand-blue uppercase leading-tight tracking-tight mb-8">
            Donations
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-500 font-medium pb-8 border-b border-gray-100">
            Your contributions fuel our community-driven initiatives. Join us in building a better, more sustainable future through technology and social impact.
          </p>
        </header>

        <section className="grid lg:grid-cols-3 gap-12 mb-32">
          {CAUSES.map((cause, idx) => (
             <motion.div
               key={cause.title}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               whileHover={{ y: -10 }}
               className="p-10 rounded-[3rem] bg-gray-50 border border-gray-200 flex flex-col items-center text-center group transition-all hover:border-brand-yellow hover:shadow-2xl"
             >
                <div className={`${cause.color} w-20 h-20 rounded-3xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                   <cause.icon size={40} />
                </div>
                <h3 className="text-2xl font-black text-brand-blue uppercase mb-4">{cause.title}</h3>
                <p className="text-gray-600 font-medium mb-12 flex-1">{cause.description}</p>
                <button className="w-full py-4 bg-black text-white rounded-2xl font-black uppercase tracking-widest hover:bg-brand-yellow hover:text-black transition-colors">
                  CHOOSE CAUSE
                </button>
             </motion.div>
          ))}
        </section>
      </div>

      <Footer />
    </main>
  );
}
