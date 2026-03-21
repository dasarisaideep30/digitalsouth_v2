"use client";

import React from "react";
import { motion } from "framer-motion";

export default function JoinUs() {
  return (
    <section className="section-padding bg-black text-white overflow-hidden relative">
      {/* Visual background element */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 opacity-40 pointer-events-none">
         <img 
            src="/images/join-us.png" 
            alt="Join Us Background" 
            className="h-full w-full object-cover"
         />
         <div className="absolute inset-0 bg-linear-to-r from-transparent to-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="w-full max-w-xl mx-auto lg:max-w-none mb-12 lg:mb-0">
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
           >
              <img 
                 src="/images/join-us.png" 
                 alt="Digital South Community" 
                 className="w-full h-full object-cover"
              />
           </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight">
            Join Us — Be a <br />
            <span className="text-brand-yellow italic">Digital South</span> Volunteer.
          </h2>
          
          <div className="space-y-6 text-xl text-white/70 leading-relaxed font-light max-w-xl">
            <p>
              Make a real difference in your community by supporting initiatives like the Blockchain Center of Excellence India.
            </p>
            <p>
              Empower lives through education, technology, and awareness, particularly through Blockchain Education India and Blockchain Courses for Faculty.
            </p>
            <p>
              Join us in supporting health, environment, and cybersecurity missions across India. Together, let’s build a better, informed future with programs like the Blockchain FDP for Colleges.
            </p>
          </div>

          <motion.a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdWz2_pYAHBxGuYbnGH8VWrC4Fn2GE7nuC2spE1wjUkW6B1UQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 inline-block px-12 py-5 bg-white text-black font-black text-lg rounded-2xl hover:bg-brand-yellow transition-colors"
          >
            JOIN US
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
