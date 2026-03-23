"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ContactSection";
import { motion } from "framer-motion";
import { GraduationCap, Trees, Heart, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

const CAUSES = [
  {
    title: "Education",
    description: "Empowering rural students with tools for tomorrow.",
    icon: GraduationCap,
    details: [
      "Improve school infrastructure",
      "Provide internet connectivity",
      "Offer stationery and learning materials",
      "Create awareness through school wall art"
    ]
  },
  {
    title: "Environment",
    description: "Build a greener, cleaner future.",
    icon: Trees,
    details: [
      "Tree plantation drives",
      "Eco-awareness campaigns",
      "Village beautification through wall paintings"
    ]
  },
  {
    title: "Health",
    description: "Every life matters.",
    icon: Heart,
    details: [
      "Blood donation camps",
      "Basic health awareness programs",
      "Community wellness drives",
      "Organ donations"
    ]
  }
];

export default function DonationsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-48 pb-48 container mx-auto px-6 max-w-6xl">
        <header className="mb-24 text-center">
          <span className="text-xs font-black text-brand-yellow uppercase tracking-[0.4em] mb-6 block">Support Our Mission</span>
          <h1 className="text-5xl md:text-8xl font-black text-brand-blue uppercase leading-tight tracking-tighter mb-8">
            Choose a Cause <br /> to Support
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 font-medium">
            Make a Difference. One Donation at a Time. Select the area closest to your heart.
          </p>
        </header>

        <section className="grid lg:grid-cols-3 gap-12 mb-40">
          {CAUSES.map((cause, idx) => (
             <motion.div
               key={cause.title}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 flex flex-col group hover:border-brand-yellow transition-all duration-500"
             >
                <div className="w-20 h-20 rounded-3xl bg-brand-blue flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                   <cause.icon size={32} />
                </div>
                <h3 className="text-3xl font-black text-brand-blue uppercase mb-4">{cause.title}</h3>
                <p className="text-gray-500 font-bold mb-10">{cause.description}</p>
                
                <div className="space-y-4 mb-12 flex-1">
                   <p className="text-xs font-black text-brand-blue/40 uppercase tracking-widest mb-4">Your donation helps us:</p>
                   {cause.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-3">
                         <div className="mt-1 w-4 h-4 rounded-full bg-brand-yellow flex items-center justify-center flex-shrink-0">
                            <ArrowRight size={10} className="text-black" />
                         </div>
                         <span className="text-sm font-bold text-gray-600">{detail}</span>
                      </div>
                   ))}
                </div>

                <a 
                  href="https://rzp.io/l/digitalsouth" 
                  target="_blank" 
                  className="w-full py-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest hover:bg-brand-yellow hover:text-black transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                   Contribute
                </a>
             </motion.div>
          ))}
        </section>

        {/* Why Donate Section */}
        <section className="bg-brand-blue rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden mb-40">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
           
           <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <span className="text-xs font-black text-brand-yellow uppercase tracking-[0.4em] mb-6 block">The Impact</span>
                 <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-8">Why Donate?</h2>
                 <p className="text-2xl font-bold italic text-white/80 leading-relaxed mb-10 border-l-4 border-brand-yellow pl-8">
                   &quot;Your contribution is more than a donation — It&apos;s an investment in India&apos;s digital and sustainable future.&quot;
                 </p>
                 <p className="text-gray-300 font-medium text-lg">
                   Every rupee you donate helps bring education, technology, and opportunity to the places that need them most. From rural schools to blood donation camps, your support fuels the journey of a digitally stronger nation.
                 </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-[3rem] p-12 border border-white/10">
                 <h3 className="text-xl font-black uppercase mb-8">We Fund & Organize:</h3>
                 <ul className="space-y-6">
                    {[
                      "Rural School Development & Infrastructure",
                      "Internet Access for Underprivileged Students",
                      "School Wall Art & Awareness Painting",
                      "Tree Plantation & Eco-Awareness",
                      "Crypto Scam & Cybersecurity Awareness",
                      "Life-saving Blood Donation Camps"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-4 text-white/80 font-bold">
                         <CheckCircle2 size={24} className="text-brand-yellow flex-shrink-0" />
                         <span>{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
        </section>

        {/* Legal & Transparency */}
        <section className="max-w-4xl mx-auto text-center">
           <div className="inline-flex items-center gap-4 px-8 py-4 bg-white border border-gray-100 rounded-full shadow-xl mb-12">
              <ShieldCheck className="text-brand-blue" size={32} />
              <span className="text-lg font-black text-brand-blue uppercase tracking-tight">100% Legal & Transparent</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-black text-brand-blue uppercase mb-8">Compliance & Certification</h2>
           <p className="text-xl text-gray-500 font-medium leading-relaxed mb-12">
             We are fully compliant with Indian laws and hold both **80G** and **12A** certifications, ensuring your donations are eligible for tax exemption under the Indian Income Tax Act.
           </p>
           
           <div className="p-12 rounded-[3.5rem] bg-brand-yellow text-black">
              <h3 className="text-2xl font-black uppercase mb-4">Together, we can build a more informed, empowered, and compassionate India.</h3>
              <p className="font-bold mb-10 opacity-70 italic font-serif">&quot;Our journey continues, fueled by your love and support.&quot;</p>
              <a 
                href="https://rzp.io/l/digitalsouth" 
                target="_blank"
                className="inline-flex items-center gap-3 px-12 py-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl"
              >
                Get Involved <ArrowRight size={20} />
              </a>
           </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
