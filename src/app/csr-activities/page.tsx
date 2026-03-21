"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ContactSection";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CSRActivitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-32 pb-20 container mx-auto px-6 max-w-6xl">
        <header className="mb-20 text-center">
          <span className="text-xs font-black text-brand-yellow uppercase tracking-[0.4em] mb-4 block">Social Responsibility</span>
          <h1 className="text-5xl md:text-7xl font-black text-brand-blue uppercase leading-tight tracking-tight mb-8">
            CSR Activities
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-500 font-medium">
            Empowering the underserved through financial literacy, digital inclusion, and community-driven research initiatives.
          </p>
        </header>

        <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-black text-brand-blue uppercase mb-6">Financial Literacy Awareness & Research</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium mb-8">
              Our flagship CSR program focuses on conducting workshops specifically aimed at rural populations and women. We aim to bridge the digital divide by providing foundational knowledge of digital finance, blockchain security, and economic empowerment.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-yellow/20 flex items-center justify-center text-brand-yellow font-bold text-xl">1</div>
                <p className="font-bold text-brand-blue uppercase tracking-wide">Rural Workshops</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-yellow/20 flex items-center justify-center text-brand-yellow font-bold text-xl">2</div>
                <p className="font-bold text-brand-blue uppercase tracking-wide">Women Empowerment</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-yellow/20 flex items-center justify-center text-brand-yellow font-bold text-xl">3</div>
                <p className="font-bold text-brand-blue uppercase tracking-wide">Community Research</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-gray-50">
              <Image 
                src="/v1-images/rs=w_984,h_1480.webp"
                alt="Infographic on Financial Literacy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
