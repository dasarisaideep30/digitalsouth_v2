"use client";

import React from 'react';
import { motion } from 'framer-motion';

const GOALS = [
  "Promote blockchain education and awareness across South India.",
  "Collaborate with government bodies, educational institutions, and Industry leaders.",
  "Strengthen cybersecurity awareness and financial literacy.",
  "Empower women, youth, and rural communities through emerging technologies.",
  "Encourage innovation, research, and startup development in Web3."
];

const OBJECTIVES = [
  "Conduct training programs, workshops, and seminars on blockchain and emerging technologies.",
  "Build a strong ecosystem connecting students, developers, institutions, and policymakers.",
  "Promote responsible adoption of Web3 technologies for real-world problem solving.",
  "Support digital empowerment and regional innovation across South India."
];

export default function GoalsObjectives() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-gray-100 rounded-[5rem] p-16 md:p-24 grid lg:grid-cols-2 gap-20">
          
          {/* Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl font-black text-brand-blue mb-12">Goals</h2>
            <ul className="space-y-6">
              {GOALS.map((goal, idx) => (
                <li key={idx} className="flex items-start space-x-4">
                  <span className="mt-2 w-2 h-2 rounded-full bg-brand-blue flex-shrink-0" />
                  <span className="text-xl font-medium text-gray-700 leading-relaxed">{goal}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Objectives */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-right"
          >
            <h2 className="text-6xl font-black text-brand-blue mb-12">Objectives</h2>
            <ul className="space-y-6">
              {OBJECTIVES.map((objective, idx) => (
                <li key={idx} className="flex items-start justify-end space-x-4">
                  <span className="text-xl font-medium text-gray-700 leading-relaxed text-right">{objective}</span>
                  <span className="mt-2 w-2 h-2 rounded-full bg-brand-blue flex-shrink-0" />
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
