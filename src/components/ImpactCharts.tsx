"use client";

import React from "react";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend 
} from "recharts";
import { motion } from "framer-motion";

const LINE_DATA = [
  { year: "2020", value: 11600 },
  { year: "2021", value: 18800 },
  { year: "2022", value: 23343 },
  { year: "2023", value: 22411 },
  { year: "2024", value: 23615 },
  { year: "2025", value: 27500 },
  { year: "2026*", value: 32000 },
];

const PIE_DATA = [
  { name: "Solana", value: 28.9, color: "#9945FF" },
  { name: "Polkadot/Kusama", value: 23.7, color: "#E6007A" },
  { name: "Ethereum", value: 13.4, color: "#627EEA" },
  { name: "Bitcoin", value: 9.3, color: "#F7931A" },
  { name: "BNB", value: 7.2, color: "#F3BA2F" },
  { name: "Others", value: 17.5, color: "#94A3B8" },
];

export default function ImpactCharts() {
  return (
    <section className="section-padding bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          
          {/* Line Chart Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-brand-blue mb-2">Global Blockchain Developers Growth</h3>
              <p className="text-gray-500">Total monthly active developers contributing to open-source projects (2020-2026)</p>
            </div>
            
            <div className="h-[450px] w-full bg-gray-50/50 rounded-[2.5rem] p-8 lg:p-12 border border-gray-100 shadow-xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={LINE_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: "#64748B", fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748B", fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: "16px", border: "none", boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#1b3c74" 
                    strokeWidth={4} 
                    dot={{ r: 6, fill: "#1b3c74", strokeWidth: 2, stroke: "#fff" }}
                    activeDot={{ r: 8, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Pie Chart Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-brand-blue mb-2">Top Blockchain Networks (2025)</h3>
              <p className="text-gray-500">Distribution of active developers across major ecosystems</p>
            </div>
            
            <div className="h-[450px] w-full bg-gray-50/50 rounded-[2.5rem] p-8 lg:p-12 border border-gray-100 shadow-xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={PIE_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {PIE_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
