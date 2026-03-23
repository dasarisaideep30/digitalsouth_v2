"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ContactSection";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShieldCheck, Mail, AlertCircle, CheckCircle2 } from "lucide-react";

export default function CertificateVerificationPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "verifying" | "success" | "error">("idle");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("verifying");
    setIsVerifying(true);

    // Mock verification
    setTimeout(() => {
      setIsVerifying(false);
      // In a real app, this would call a smart contract or a backend API
      if (email.includes("verified")) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-gray-50/50">
      <Navbar />

      <div className="pt-48 pb-48 container mx-auto px-6 max-w-5xl">
        <header className="mb-20 text-center">
          <span className="text-xs font-black text-brand-yellow uppercase tracking-[0.4em] mb-4 block">Credential Verification</span>
          <h1 className="text-5xl md:text-7xl font-black text-brand-blue uppercase leading-tight tracking-tighter mb-8">
            FDP Certificate <br className="md:hidden" /> Verification
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 font-medium">
            Blockchain-Powered Faculty Development Program Verification Portal.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 item-start">
           {/* Verification Card */}
           <section className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="relative z-10">
                 <div className="flex flex-col items-center mb-12">
                    <div className="w-20 h-20 rounded-3xl bg-brand-blue flex items-center justify-center text-white mb-6 shadow-xl">
                       <ShieldCheck size={36} />
                    </div>
                    <h2 className="text-3xl font-black text-brand-blue uppercase text-center mb-2">Verify Your Certificate</h2>
                    <p className="text-gray-400 font-bold text-center text-sm uppercase tracking-widest">Digital South Trust Verification System</p>
                 </div>

                 <form onSubmit={handleVerify} className="space-y-6">
                    <div className="space-y-2">
                       <label className="text-xs font-black text-brand-blue/40 uppercase tracking-widest ml-4">Email Address</label>
                       <div className="relative group">
                          <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="registered@email.com"
                            className="w-full pl-16 pr-8 py-6 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none font-bold text-xl transition-all"
                            required
                          />
                       </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isVerifying}
                      className="w-full py-6 bg-brand-blue text-white rounded-2xl font-black uppercase tracking-widest hover:bg-brand-yellow hover:text-black transition-all shadow-xl disabled:opacity-50 flex items-center justify-center space-x-3 active:scale-95"
                    >
                      {isVerifying ? (
                        <>
                           <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                           <span>Searching Blockchain...</span>
                        </>
                      ) : (
                        <span>Verify Certificate</span>
                      )}
                    </button>
                 </form>

                 <AnimatePresence>
                   {status === "success" && (
                     <motion.div
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       className="mt-12 p-8 rounded-3xl bg-green-50 border border-green-100 flex items-center space-x-6 text-green-800"
                     >
                        <CheckCircle2 className="w-12 h-12 flex-shrink-0" />
                        <div>
                           <h3 className="font-black uppercase tracking-tight text-xl mb-1">Authenticity Confirmed</h3>
                           <p className="font-medium text-green-700/80">Certificate for **{email}** found on the Polygon blockchain.</p>
                        </div>
                     </motion.div>
                   )}
                   {status === "error" && (
                     <motion.div
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       className="mt-12 p-8 rounded-3xl bg-red-50 border border-red-100 flex items-center space-x-6 text-red-800"
                     >
                        <AlertCircle className="w-12 h-12 flex-shrink-0" />
                        <div>
                           <h3 className="font-black uppercase tracking-tight text-xl mb-1">Verification Failed</h3>
                           <p className="font-medium text-red-700/80">No record found for this email. Please check and try again.</p>
                        </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
              </div>
           </section>

           {/* Info Side */}
           <section className="space-y-12 py-10">
              <div>
                 <h3 className="text-2xl font-black text-brand-blue uppercase mb-6 tracking-tight">About This Verification System</h3>
                 <div className="space-y-8">
                    <div className="flex gap-6">
                       <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue flex-shrink-0">
                          <CheckCircle2 size={24} />
                       </div>
                       <div>
                          <p className="font-black uppercase text-sm tracking-widest mb-2">Immutable Storage</p>
                          <p className="text-gray-500 font-medium">Certificates are permanently stored on the Polygon blockchain, ensuring they can never be altered or deleted.</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue flex-shrink-0">
                          <CheckCircle2 size={24} />
                       </div>
                       <div>
                          <p className="font-black uppercase text-sm tracking-widest mb-2">Unique Identity</p>
                          <p className="text-gray-500 font-medium">Each certificate is uniquely identified by the recipient's registered email address through a custom hashing algorithm.</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue flex-shrink-0">
                          <CheckCircle2 size={24} />
                       </div>
                       <div>
                          <p className="font-black uppercase text-sm tracking-widest mb-2">IPFS Integration</p>
                          <p className="text-gray-500 font-medium">Certificate images are stored on IPFS (InterPlanetary File System) for permanent, decentralized access from anywhere in the world.</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue flex-shrink-0">
                          <CheckCircle2 size={24} />
                       </div>
                       <div>
                          <p className="font-black uppercase text-sm tracking-widest mb-2">Public Audit</p>
                          <p className="text-gray-500 font-medium">Tamper-proof and verifiable by anyone, anytime—providing total transparency to employers and institutions.</p>
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
