"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/ContactSection";
import { motion } from "framer-motion";
import { Shield, FileText, Lock, UserCheck, Heart, Info, CheckCircle2, ShieldAlert, Globe, Scale } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50/30">
      <Navbar />
      
      <div className="pt-40 pb-48 container mx-auto px-6 max-w-5xl">
        <header className="mb-24 text-center">
           <h1 className="text-5xl md:text-7xl font-black text-brand-blue uppercase leading-tight tracking-tighter mb-8">
             Privacy & Terms
           </h1>
           <p className="max-w-2xl mx-auto text-xl text-gray-500 font-medium leading-relaxed">
             Comprehensive guidelines governing data protection, donations, volunteering, and internships at Digital South Trust.
           </p>
        </header>

        <div className="space-y-24">
           {/* Section 1: Global Privacy Policy */}
           <section className="bg-white rounded-[3.5rem] p-10 lg:p-20 shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex items-center gap-6 mb-12 relative z-10">
                 <div className="w-16 h-16 rounded-3xl bg-brand-blue flex items-center justify-center text-white shadow-lg">
                    <Shield size={32} />
                 </div>
                 <h2 className="text-3xl md:text-4xl font-black text-brand-blue uppercase tracking-tight">Global Privacy Policy</h2>
              </div>
              
              <div className="prose prose-blue max-w-none space-y-12 text-gray-600 font-medium relative z-10">
                 <p className="text-lg leading-relaxed italic border-l-4 border-brand-blue pl-6 py-2 bg-brand-blue/5 rounded-r-xl">
                   At Digital South Trust, your privacy is important to us. This Privacy Policy explains how we collect, use, protect, and manage your personal information when you visit our website or engage with our programs, forms, and services.
                 </p>

                 <div className="grid md:grid-cols-2 gap-10">
                    <div>
                       <h3 className="text-xl font-black text-brand-blue uppercase mb-4 flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-brand-yellow" />
                         1. Personal Data Collection
                       </h3>
                       <ul className="space-y-3">
                          <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" /> Personal information like name, email, phone number, education details submitted via forms.</li>
                          <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" /> Technical data like IP address, device type, browser, and cookies to improve user experience.</li>
                          <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" /> Usage data related to visitor interactions with our website.</li>
                       </ul>
                    </div>
                    <div>
                       <h3 className="text-xl font-black text-brand-blue uppercase mb-4 flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-brand-yellow" />
                         2. Purpose of Data Use
                       </h3>
                       <ul className="space-y-2">
                          <li>• Communicate about programs and events</li>
                          <li>• Respond to queries and provide support</li>
                          <li>• Improve website performance and UX</li>
                          <li>• Conduct internal analysis and research</li>
                          <li>• Fulfill legal or regulatory obligations</li>
                       </ul>
                    </div>
                 </div>

                 <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100">
                       <h3 className="text-lg font-black text-brand-blue uppercase mb-3">3. Data Security</h3>
                       <p className="text-sm">We apply robust technical and organizational measures to protect your data from unauthorized access or misuse.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100">
                       <h3 className="text-lg font-black text-brand-blue uppercase mb-3">4. Cookies</h3>
                       <p className="text-sm">Cookies enhance experience and collect analytics. Users may disable them via browser settings.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100">
                       <h3 className="text-lg font-black text-brand-blue uppercase mb-3">5. Data Sharing</h3>
                       <p className="text-sm">We do not sell or rent your data. Shared only with trusted partners or authorities when required by law.</p>
                    </div>
                 </div>

                 <div className="grid md:grid-cols-2 gap-10 pt-10 border-t border-gray-100">
                    <div>
                       <h3 className="text-xl font-black text-brand-blue uppercase mb-4">6. Your Rights</h3>
                       <p>You can request access, correction, or deletion of your data. You may opt out of communications at any time by contacting us.</p>
                    </div>
                    <div>
                       <h3 className="text-xl font-black text-brand-blue uppercase mb-4">7. Children’s Privacy</h3>
                       <p>Our website is not intended for children under 13. We do not knowingly collect data from minors without parental consent.</p>
                    </div>
                 </div>

                 <div className="grid md:grid-cols-2 gap-10">
                    <div>
                       <h3 className="text-xl font-black text-brand-blue uppercase mb-4">8. Third-Party Links</h3>
                       <p>Our site may contain links to external websites. We are not responsible for their privacy practices or policies.</p>
                    </div>
                    <div>
                       <h3 className="text-xl font-black text-brand-blue uppercase mb-4">9. Policy Updates</h3>
                       <p>This Privacy Policy may be updated periodically. Changes will be posted on this page with a revised date.</p>
                    </div>
                 </div>

                 <div className="pt-12 mt-12 border-t-2 border-dashed border-gray-100">
                    <p className="text-xs font-black uppercase tracking-widest text-brand-blue/40 mb-4">Contact for Privacy Matters:</p>
                    <div className="flex flex-wrap gap-8 text-brand-blue font-bold">
                       <div className="flex items-center gap-2">📧 <span>contact@digitalsouth.co.in</span></div>
                       <div className="flex items-center gap-2">🌐 <span>www.digitalsouth.co.in</span></div>
                       <div className="flex items-center gap-2">📞 <span>+91 8073053680</span></div>
                    </div>
                 </div>
              </div>
           </section>

           {/* Section 2: Program Terms */}
           <section className="bg-white rounded-[3.5rem] p-10 lg:p-20 shadow-xl border border-gray-100">
              <div className="flex items-center gap-6 mb-12">
                 <div className="w-16 h-16 rounded-3xl bg-brand-yellow flex items-center justify-center text-black shadow-lg">
                    <FileText size={32} />
                 </div>
                 <h2 className="text-3xl md:text-4xl font-black text-brand-blue uppercase tracking-tight">Program Terms & Conditions</h2>
              </div>
              
              <p className="text-gray-400 font-bold mb-12 uppercase tracking-[0.2em] text-sm">For Online Programs, Events, or Meetings</p>
              
              <div className="grid md:grid-cols-2 gap-12 text-gray-600 font-medium">
                 <div className="space-y-8">
                    <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100">
                       <h4 className="font-black text-brand-blue uppercase mb-4 flex items-center gap-3">
                         <div className="w-2 h-2 bg-brand-blue rounded-full" />
                         1. Registration & Access
                       </h4>
                       <ul className="text-sm space-y-3 list-disc pl-5 font-bold text-gray-500">
                          <li>Successful payment and detail submission required.</li>
                          <li>Exclusive to registered participants; sharing prohibited.</li>
                          <li>Sessions are live only; no recordings provided.</li>
                          <li>Keep updated via WhatsApp and Email.</li>
                       </ul>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100">
                       <h4 className="font-black text-brand-blue uppercase mb-4 flex items-center gap-3">
                         <div className="w-2 h-2 bg-brand-blue rounded-full" />
                         2. Conduct & Certification
                       </h4>
                       <ul className="text-sm space-y-3 list-disc pl-5 font-bold text-gray-500">
                          <li>Respectful behavior mandatory during sessions.</li>
                          <li>100% attendance required for certificates.</li>
                          <li>Certification may take up to 3 weeks post-program.</li>
                          <li>Removing disruptive participants without refund.</li>
                       </ul>
                    </div>
                 </div>
                 <div className="space-y-8">
                    <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100">
                       <h4 className="font-black text-brand-blue uppercase mb-4 flex items-center gap-3">
                         <div className="w-2 h-2 bg-brand-blue rounded-full" />
                         3. Refund & Cancellations
                       </h4>
                       <ul className="text-sm space-y-3 list-disc pl-5 font-bold text-gray-500">
                          <li>Payments are non-refundable unless session is cancelled by us.</li>
                          <li>Digital South reserves right to reschedule at any time.</li>
                          <li>Participants will be informed of major changes.</li>
                       </ul>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-brand-blue text-white shadow-2xl">
                       <h4 className="font-black text-brand-yellow uppercase mb-4 flex items-center gap-3">
                         <ShieldAlert size={20} className="text-brand-yellow" />
                         Educational Disclaimer
                       </h4>
                       <p className="text-sm font-bold leading-relaxed italic opacity-90">
                         "The course is for educational purposes only. We do not promote cryptocurrency buying, selling, or trading. Participants must do their own research before making financial decisions."
                       </p>
                    </div>
                 </div>
              </div>

              <div className="mt-16 grid md:grid-cols-2 gap-12">
                 <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100">
                    <h4 className="font-black text-brand-blue uppercase mb-4">4. Intellectual Property</h4>
                    <p className="text-sm font-bold text-gray-500 italic">All training materials and content are the property of Digital South Trust. Reuse, sharing, or copying without permission is prohibited.</p>
                 </div>
                 <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100">
                    <h4 className="font-black text-brand-blue uppercase mb-4">5. Limitation of Liability</h4>
                    <p className="text-sm font-bold text-gray-500 italic">We are not liable for any personal, technical, or financial loss. Not responsible for delays due to natural disasters or system failures (Force Majeure).</p>
                 </div>
              </div>
           </section>

           {/* Section 3: Donations & Volunteers */}
           <div className="grid lg:grid-cols-2 gap-12">
              <section className="bg-white rounded-[3.5rem] p-10 lg:p-16 shadow-xl border border-gray-100 flex flex-col">
                 <div className="flex items-center gap-4 mb-10">
                    <Heart className="text-red-500 w-8 h-8" />
                    <h2 className="text-2xl font-black text-brand-blue uppercase tracking-tight">Donation Terms</h2>
                 </div>
                 <div className="space-y-8 text-sm text-gray-500 font-bold flex-1">
                    <p className="p-6 bg-red-50 rounded-2xl text-red-700 font-black border border-red-100">All donations are voluntary and non-refundable. Please review all details before proceeding.</p>
                    <div className="space-y-4">
                       <div className="flex gap-3 items-start">
                          <CheckIcon className="text-brand-blue mt-0.5 shrink-0" />
                          <span>Provisionally approved under **Section 80G** of the IT Act. (AY 2025–26 to AY 2027–28)</span>
                       </div>
                       <div className="flex gap-3 items-start">
                          <CheckIcon className="text-brand-blue mt-0.5 shrink-0" />
                          <span>Donations used for Rural Education, Environment, and Health awareness.</span>
                       </div>
                       <div className="flex gap-3 items-start">
                          <CheckIcon className="text-brand-blue mt-0.5 shrink-0" />
                          <span>Official receipts emailed post-payment from secure gateways.</span>
                       </div>
                    </div>
                 </div>
              </section>

              <section className="bg-white rounded-[3.5rem] p-10 lg:p-16 shadow-xl border border-gray-100 flex flex-col">
                 <div className="flex items-center gap-4 mb-10">
                    <UserCheck className="text-green-500 w-8 h-8" />
                    <h2 className="text-2xl font-black text-brand-blue uppercase tracking-tight">Volunteer Terms</h2>
                 </div>
                 <div className="space-y-6 text-sm text-gray-500 font-bold flex-1">
                    <ul className="space-y-6">
                       <li className="flex gap-4 items-start">
                          <CheckIcon className="text-green-500 mt-0.5 shrink-0" />
                          <div>
                            <span className="block text-brand-blue font-black uppercase text-xs mb-1">Educational Role</span>
                            Strictly prohibited from promoting financial or investment activities related to cryptocurrencies.
                          </div>
                       </li>
                       <li className="flex gap-4 items-start">
                          <CheckIcon className="text-green-500 mt-0.5 shrink-0" />
                          <div>
                            <span className="block text-brand-blue font-black uppercase text-xs mb-1">Non-Profit Focus</span>
                            Focus on sharing industry trends, job opportunities, and government R&D schemes.
                          </div>
                       </li>
                       <li className="flex gap-4 items-start">
                          <CheckIcon className="text-green-500 mt-0.5 shrink-0" />
                          <div>
                            <span className="block text-brand-blue font-black uppercase text-xs mb-1">No Fundraising</span>
                            Volunteers cannot collect funds under Digital South name. Unauthorized fundraising results in legal action.
                          </div>
                       </li>
                       <li className="flex gap-4 items-start">
                          <CheckIcon className="text-green-500 mt-0.5 shrink-0" />
                          <div>
                            <span className="block text-brand-blue font-black uppercase text-xs mb-1">No Employment Claim</span>
                            Volunteering does not create an employment relationship. No salary or benefits provided.
                          </div>
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
                    <div className="w-16 h-16 rounded-3xl bg-white text-brand-blue flex items-center justify-center shadow-2xl">
                       <Lock size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Internship Terms</h2>
                 </div>
                 
                 <div className="grid md:grid-cols-2 gap-12 font-medium">
                    <div className="space-y-10">
                       <div className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10">
                          <h4 className="font-black text-brand-yellow uppercase mb-3 flex items-center gap-2">
                             <Scale size={18} />
                             IP & Evaluation
                          </h4>
                          <p className="text-white/70 text-sm leading-relaxed">Projects reviewed based on quality and usability. All research and materials created remain organization IP for educational purposes.</p>
                       </div>
                       <div className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10">
                          <h4 className="font-black text-brand-yellow uppercase mb-3 flex items-center gap-2">
                             <Globe size={18} />
                             Revenue Sharing
                          </h4>
                          <p className="text-white/70 text-sm leading-relaxed">Eligible projects generating revenue through actual user adoption may apply for sharing based on mutually agreed terms (not guaranteed).</p>
                       </div>
                    </div>
                    <div className="space-y-10">
                       <div className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10">
                          <h4 className="font-black text-brand-yellow uppercase mb-3 flex items-center gap-2">
                             <FileText size={18} />
                             Registration Fees
                          </h4>
                          <p className="text-white/70 text-sm leading-relaxed">Program fees are non-refundable once registration is confirmed. Certification depends on successful task completion and project submission.</p>
                       </div>
                       <div className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10">
                          <h4 className="font-black text-brand-yellow uppercase mb-3 flex items-center gap-2">
                             <UserCheck size={18} />
                             Code of Conduct
                          </h4>
                          <p className="text-white/70 text-sm leading-relaxed">Professional behavior required. Violation of policies or misconduct leads to immediate removal from the internship program without certificate.</p>
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

// Custom simple check icon
const CheckIcon = ({ className }: { className: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="4" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
