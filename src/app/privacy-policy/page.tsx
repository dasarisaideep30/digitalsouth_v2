"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/ContactSection";
import { motion } from "framer-motion";
import { Shield, FileText, Lock, UserCheck, Heart, Info } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50/30">
      <Navbar />
      
      <div className="pt-40 pb-48 container mx-auto px-6 max-w-5xl">
        <header className="mb-24 text-center">
           <h1 className="text-5xl md:text-7xl font-black text-brand-blue uppercase leading-tight tracking-tighter mb-8">
             Privacy & Terms
           </h1>
           <p className="max-w-2xl mx-auto text-xl text-gray-500 font-medium">
             Comprehensive guidelines governing data protection, donations, volunteering, and internships at Digital South Trust.
           </p>
        </header>

        <div className="space-y-24">
           {/* Section 1: Global Privacy Policy */}
           <section className="bg-white rounded-[3rem] p-10 lg:p-20 shadow-xl border border-gray-100">
              <div className="flex items-center gap-6 mb-12">
                 <div className="w-16 h-16 rounded-3xl bg-brand-blue flex items-center justify-center text-white">
                    <Shield size={32} />
                 </div>
                 <h2 className="text-3xl md:text-4xl font-black text-brand-blue uppercase">Global Privacy Policy</h2>
              </div>
              
              <div className="prose prose-blue max-w-none space-y-12 text-gray-600 font-medium">
                 <div>
                    <h3 className="text-xl font-black text-brand-blue uppercase mb-4">1. Personal Data Collection</h3>
                    <ul className="list-disc pl-6 space-y-2">
                       <li>Personal info like name, email, phone, education details submitted via forms.</li>
                       <li>Technical data: IP address, device type, browser, and cookies for user experience.</li>
                       <li>Usage data related to website interaction.</li>
                    </ul>
                 </div>
                 <div>
                    <h3 className="text-xl font-black text-brand-blue uppercase mb-4">2. Purpose of Data Use</h3>
                    <ul className="list-disc pl-6 space-y-2">
                       <li>Program communication and event updates.</li>
                       <li>Responding to queries and support.</li>
                       <li>Website performance and UX improvement.</li>
                       <li>Internal analysis and research.</li>
                       <li>Legal and regulatory compliance.</li>
                    </ul>
                 </div>
                 <div>
                    <h3 className="text-xl font-black text-brand-blue uppercase mb-4">3. Data Security</h3>
                    <p>We apply robust technical and organizational measures to protect your data from unauthorized access or misuse.</p>
                 </div>
                 <div className="grid md:grid-cols-2 gap-8">
                    <div>
                       <h3 className="text-xl font-black text-brand-blue uppercase mb-4">4. Cookies</h3>
                       <p>Cookies enhance experience and collect analytics. Users may disable them via browser settings.</p>
                    </div>
                    <div>
                       <h3 className="text-xl font-black text-brand-blue uppercase mb-4">5. Data Sharing</h3>
                       <p>We do not sell or rent your data. Shared only with trusted partners or authorities when required by law.</p>
                    </div>
                 </div>
                 <div className="pt-8 border-t border-gray-50">
                    <p className="text-xs font-black uppercase tracking-widest text-brand-blue/40">Contact for Privacy Matters:</p>
                    <p className="text-brand-blue font-bold">📧 contact@digitalsouth.co.in | 🌐 www.digitalsouth.co.in</p>
                 </div>
              </div>
           </section>

           {/* Section 2: Program Terms */}
           <section className="bg-white rounded-[3rem] p-10 lg:p-20 shadow-xl border border-gray-100">
              <div className="flex items-center gap-6 mb-12">
                 <div className="w-16 h-16 rounded-3xl bg-brand-yellow flex items-center justify-center text-black">
                    <FileText size={32} />
                 </div>
                 <h2 className="text-3xl md:text-4xl font-black text-brand-blue uppercase">Program Terms & Conditions</h2>
              </div>
              
              <p className="text-gray-400 font-bold mb-12 uppercase tracking-widest text-sm">For Online Programs, Events, or Meetings</p>
              
              <div className="grid md:grid-cols-2 gap-12 text-gray-600 font-medium">
                 <div className="space-y-6">
                    <div className="p-8 rounded-[2rem] bg-gray-50">
                       <h4 className="font-black text-brand-blue uppercase mb-3">Registration & Access</h4>
                       <ul className="text-sm space-y-2 list-disc pl-4">
                          <li>Successful payment and detail submission required.</li>
                          <li>Exclusive to registered participants; sharing prohibited.</li>
                          <li>Sessions are live only; no recordings provided.</li>
                       </ul>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-gray-50">
                       <h4 className="font-black text-brand-blue uppercase mb-3">Conduct & Certification</h4>
                       <ul className="text-sm space-y-2 list-disc pl-4">
                          <li>Respectful behavior mandatory.</li>
                          <li>100% attendance required for certificates.</li>
                          <li>Certification may take up to 3 weeks post-program.</li>
                       </ul>
                    </div>
                 </div>
                 <div className="space-y-6">
                    <div className="p-8 rounded-[2rem] bg-gray-50">
                       <h4 className="font-black text-brand-blue uppercase mb-3">Refunds & Changes</h4>
                       <ul className="text-sm space-y-2 list-disc pl-4">
                          <li>Payments are non-refundable unless session is cancelled by us.</li>
                          <li>Digital South reserves right to reschedule at any time.</li>
                       </ul>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-gray-50">
                       <h4 className="font-black text-brand-blue uppercase mb-3">Educational Disclaimer</h4>
                       <p className="text-sm italic">"Course is for educational purposes only. We do not promote cryptocurrency trading. Do your own research before financial decisions."</p>
                    </div>
                 </div>
              </div>
           </section>

           {/* Section 3: Donations & Volunteers */}
           <div className="grid lg:grid-cols-2 gap-12">
              <section className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-100">
                 <div className="flex items-center gap-4 mb-10">
                    <Heart className="text-red-500" />
                    <h2 className="text-2xl font-black text-brand-blue uppercase">Donation Terms</h2>
                 </div>
                 <div className="space-y-6 text-sm text-gray-500 font-bold">
                    <p className="p-4 bg-red-50 rounded-xl text-red-700">All donations are voluntary and non-refundable.</p>
                    <ul className="space-y-4">
                       <li className="flex gap-3">
                          <CheckCircle2 size={16} className="text-brand-blue mt-1" />
                          <span>Provisionally approved under **Section 80G** of the IT Act.</span>
                       </li>
                       <li className="flex gap-3">
                          <CheckCircle2 size={16} className="text-brand-blue mt-1" />
                          <span>Donations used for Rural Education, Environment, and Health.</span>
                       </li>
                       <li className="flex gap-3">
                          <CheckCircle2 size={16} className="text-brand-blue mt-1" />
                          <span>Official receipts emailed post-payment.</span>
                       </li>
                    </ul>
                 </div>
              </section>

              <section className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-100">
                 <div className="flex items-center gap-4 mb-10">
                    <UserCheck className="text-green-500" />
                    <h2 className="text-2xl font-black text-brand-blue uppercase">Volunteer Terms</h2>
                 </div>
                 <div className="space-y-6 text-sm text-gray-500 font-bold">
                    <ul className="space-y-4">
                       <li className="flex gap-3">
                          <CheckCircle2 size={16} className="text-brand-blue mt-1" />
                          <span>Role is for awareness and educational purpose only.</span>
                       </li>
                       <li className="flex gap-3">
                          <CheckCircle2 size={16} className="text-brand-blue mt-1" />
                          <span>Strictly prohibited from promoting financial investments.</span>
                       </li>
                       <li className="flex gap-3">
                          <CheckCircle2 size={16} className="text-brand-blue mt-1" />
                          <span>No financial authority or employment claim created.</span>
                       </li>
                       <li className="flex gap-3">
                          <CheckCircle2 size={16} className="text-brand-blue mt-1" />
                          <span>Unauthorized fundraising leads to immediate legal action.</span>
                       </li>
                    </ul>
                 </div>
              </section>
           </div>

           {/* Section 4: Internship */}
           <section className="bg-brand-blue rounded-[4rem] p-10 lg:p-20 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[100px]" />
              <div className="relative z-10">
                 <div className="flex items-center gap-6 mb-12">
                    <div className="w-16 h-16 rounded-3xl bg-white text-brand-blue flex items-center justify-center">
                       <Lock size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase">Internship Terms</h2>
                 </div>
                 
                 <div className="grid md:grid-cols-2 gap-12 font-medium">
                    <div className="space-y-8">
                       <div>
                          <h4 className="font-black text-brand-yellow uppercase mb-2">Project Evaluation & IP</h4>
                          <p className="text-white/70">Projects reviewed based on quality and usability. All research and materials created remain organization IP for educational purposes.</p>
                       </div>
                       <div>
                          <h4 className="font-black text-brand-yellow uppercase mb-2">Revenue Sharing</h4>
                          <p className="text-white/70">Eligible projects generating revenue through adoption may apply for revenue sharing based on mutually agreed terms (not guaranteed).</p>
                       </div>
                    </div>
                    <div className="space-y-8">
                       <div>
                          <h4 className="font-black text-brand-yellow uppercase mb-2">Registration Fees</h4>
                          <p className="text-white/70">Program fees are non-refundable once registration is confirmed. Certification depends on successful task completion.</p>
                       </div>
                       <div>
                          <h4 className="font-black text-brand-yellow uppercase mb-2">Code of Conduct</h4>
                          <p className="text-white/70">Professional behavior required. Violation of policies leads to immediate removal without certificate.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}

// Helper component for lists
const CheckCircle2 = ({ size, className }: { size: number, className: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
