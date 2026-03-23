"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VisionMission() {
  return (
    <div className="bg-white">
      {/* Our Vision */}
      <section className="grid lg:grid-cols-2">
        <div className="p-12 md:p-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-black text-brand-blue mb-8">Our Vision</h2>
            <p className="text-2xl font-medium text-gray-700 leading-relaxed max-w-xl">
              To make India a global hub for blockchain talent by empowering people through digital education, innovation, and inclusive technology adoption.
            </p>
          </motion.div>
        </div>
        <div className="relative h-[400px] lg:h-auto min-h-[500px]">
          <Image
            src="/images/who_we_are_vision_final.png"
            alt="Our Vision"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Our Mission */}
      <section className="grid lg:grid-cols-2">
        <div className="relative h-[400px] lg:h-auto min-h-[500px] order-last lg:order-first">
          <Image
            src="/images/who_we_are_mission_final.png"
            alt="Our Mission"
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-brand-blue p-12 md:p-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-right"
          >
            <h2 className="text-6xl font-black text-white mb-8">Our Mission</h2>
            <p className="text-2xl font-medium text-white/90 leading-relaxed max-w-xl ml-auto">
              To empower 100 million Indians through education in blockchain technology, skill development, research, and financial literacy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
