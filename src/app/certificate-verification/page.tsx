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
      if (email.includes("@")) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
        <header className="mb-20 text-center">
          <span className="text-xs font-black text-brand-yellow uppercase tracking-[0.4em] mb-4 block">Trust & Verification</span>
          <h1 className="text-5xl md:text-7xl font-black text-brand-blue uppercase leading-tight tracking-tight mb-8">
            Verify Certificate
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 font-medium">
            Immutable blockchain verification for FDP (Faculty Development Program) and student certification credentials.
          </p>
        </header>

        <section className="bg-gray-50 rounded-[3rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden ring-1 ring-gray-100">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
             <div className="flex flex-col items-center mb-12">
                <div className="w-20 h-20 rounded-3xl bg-brand-blue flex items-center justify-center text-white mb-6 shadow-xl animate-pulse">
                   <ShieldCheck size={36} />
                </div>
                <h2 className="text-3xl font-black text-brand-blue uppercase text-center mb-4">Verification Portal</h2>
                <p className="text-gray-500 font-bold text-center uppercase tracking-widest text-xs">Enter your registered email below</p>
             </div>

             <form onSubmit={handleVerify} className="space-y-6">
                <div className="relative group">
                   <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-brand-blue transition-colors" />
                   <input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="registered@email.com"
                     className="w-full pl-16 pr-8 py-6 rounded-2xl bg-white border border-gray-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none font-bold text-xl transition-all shadow-inner"
                     required
                   />
                </div>

                <button
                  type="submit"
                  disabled={isVerifying}
                  className="w-full py-6 bg-brand-blue text-white rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-blue/20 disabled:opacity-50 disabled:scale-100 flex items-center justify-center space-x-3"
                >
                  {isVerifying ? (
                    <>
                       <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                       <span>Verifying...</span>
                    </>
                  ) : (
                    <>
                       <Search className="w-5 h-5" />
                       <span>Verify Now</span>
                    </>
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
                       <h3 className="font-black uppercase tracking-tight text-xl mb-1">Certificate Found</h3>
                       <p className="font-medium text-green-700/80">Blockchain record verified: {email}. View full audit log.</p>
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
                       <h3 className="font-black uppercase tracking-tight text-xl mb-1">Record Not Found</h3>
                       <p className="font-medium text-red-700/80">Check your email address and try again. Contact support for help.</p>
                    </div>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
