"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function BookPromotion() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] bg-linear-to-r from-[#EA580C] to-[#C2410C] p-12 lg:p-20 text-white"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="flex justify-center">
              <motion.div
                whileHover={{ rotateY: 20, rotateX: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="relative w-64 lg:w-80 aspect-[3/4] rounded-2xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] overflow-hidden"
              >
                <img 
                  src="/images/book-cover-new.png" 
                  alt="Blockchain for Viksit Bharat Book Cover" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                Our book <span className="text-brand-yellow italic">Blockchain Viksit Bharat</span> is now on Amazon!
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed font-medium">
                Explore India’s Web3 roadmap and how blockchain can boost education, jobs, and inclusion by 2030. Get your copy today and be part of the revolution.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.amazon.in/dp/B0FRZH5X8Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-white text-[#EA580C] font-black rounded-2xl flex items-center gap-3 hover:scale-105 transition-all shadow-xl"
                >
                  <ShoppingCart className="w-6 h-6" /> BUY NOW
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
