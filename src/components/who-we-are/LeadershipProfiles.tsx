"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LEADERS = [
  {
    name: "Mr. Sudhakar Lakshmana Raja",
    role: "Managing Director",
    quote: "At Digital South Trust, our mission is to educate, empower, and elevate 100 million Indians through blockchain and emerging technologies.",
    photo: "/images/profile-sudhakar.png",
    linkedin: "https://www.linkedin.com/in/sudhakarlakshman",
    reverse: false
  },
  {
    name: "Mr. Lalith Krishnan H",
    role: "Director of Growth and Partnership",
    quote: "Partnerships create possibilities. By collaborating with institutions, innovators, and communities, we are accelerating blockchain adoption across India.",
    photo: "/images/profile-lalith-krishnan.png",
    linkedin: "https://www.linkedin.com/in/lalith-krishnan-h",
    reverse: true
  },
  {
    name: "Mr. Dileep Kumar",
    role: "Director of Operations",
    quote: "Technology should serve as a bridge to opportunity, ensuring that no one is left behind in the digital age.",
    photo: "/images/profile-dileep-kumar.png",
    linkedin: "https://www.linkedin.com/in/dileep-kumar-h-v-ph-d-a44115ab/",
    reverse: false
  }
];

export default function LeadershipProfiles() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-6xl font-black text-brand-blue mb-24">Leadership Profiles</h2>
        
        <div className="space-y-40">
          {LEADERS.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${leader.reverse ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Profile Photo */}
              <div className="lg:w-1/3 flex flex-col items-center">
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-gray-50 flex-shrink-0">
                  <Image
                    src={leader.photo}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-3xl font-black text-brand-blue">{leader.name}</h3>
                  <p className="text-xl font-bold text-gray-500 mt-2">{leader.role}</p>
                </div>
              </div>

              {/* Quote Content */}
              <div className="lg:w-2/3">
                <div className="bg-gray-100 rounded-[3rem] p-12 md:p-16 relative">
                  {/* Quote Icon from screenshot */}
                  <div className="absolute top-8 right-8 text-brand-blue opacity-20">
                    <svg className="w-16 h-16 fill-current" viewBox="0 0 448 512">
                      <path d="M0 216C0 149.7 53.7 96 120 96h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8c-39.8 0-72 32.2-72 72v24c0 13.3 10.7 24 24 24h56c30.9 0 56 25.1 56 56v80c0 30.9-25.1 56-56 56h-80c-30.9 0-56-25.1-56-56V216zm256 0c0-66.3 53.7-120 120-120h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8c-39.8 0-72 32.2-72 72v24c0 13.3 10.7 24 24 24h56c30.9 0 56 25.1 56 56v80c0 30.9-25.1 56-56 56h-80c-30.9 0-56-25.1-56-56V216z"/>
                    </svg>
                  </div>
                  
                  <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed mb-12 italic relative z-10">
                    "{leader.quote}"
                  </p>
                  
                  <motion.a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-3 px-8 py-4 bg-[#0A66C2] text-white rounded-full font-bold shadow-lg shadow-[#0A66C2]/20 transition-all"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn Profile</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
