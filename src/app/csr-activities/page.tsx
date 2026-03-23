"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ContactSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { Coins, ShieldAlert, HeartPulse, Users, Droplets } from "lucide-react";

const CSR_SECTIONS = [
  {
    title: "Financial Literacy Awareness & Research",
    icon: Coins,
    image: "/images/csr/csr-1.webp",
    alt: "Increasing stacks of gold coins illustrating financial literacy growth from start to goal",
    content: (
      <div className="space-y-6">
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          We conduct targeted workshops and awareness campaigns to educate rural populations on essential financial practices, contributing to our mission of empowering rural India. Our research-driven approach, which includes cybersecurity research, helps us identify knowledge gaps, local financial behaviors, and community-specific challenges. Based on this data, we design customized learning modules that resonate with each region’s unique needs.
        </p>
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          From digital banking and UPI transactions to budgeting, savings, and avoiding digital scams, our health and wellness programs aim to equip every household with the practical knowledge needed to achieve financial literacy awareness, resist exploitation, and ultimately attain financial independence. By turning insights into action, we ensure our programs create measurable, lasting impact in rural economies.
        </p>
      </div>
    )
  },
  {
    title: "Cybersecurity Research & Awareness",
    icon: ShieldAlert,
    image: "/images/csr/csr-2.webp",
    alt: "Five men in an office exchanging documents, one in police uniform",
    content: (
      <div className="space-y-6">
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          In today’s digital age, protecting personal data is just as crucial as gaining access to digital tools. At Digital South Trust, we adopt a research-driven approach to understand the unique cybersecurity challenges faced by rural communities, which is part of our broader mission of empowering rural India. Based on our cybersecurity research, we design and deliver tailored awareness programs across villages and schools, including initiatives like blood donation camps that promote health and wellness.
        </p>
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          Through interactive sessions, we educate citizens about cyber hygiene, online safety, fraud prevention, and financial literacy awareness, ensuring they are well-equipped to navigate the digital landscape. By working closely with local stakeholders and continuously analyzing real-world threats, we build cyber-resilient communities where technology becomes a tool for empowerment—not a risk.
        </p>
      </div>
    )
  },
  {
    title: "Health & Wellness: Diabetes, Neurology, and Yoga",
    icon: HeartPulse,
    image: "/images/csr/csr-3.webp",
    alt: "Doctor examining a young boy with his father nearby in an outdoor setting",
    content: (
      <div className="space-y-6">
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          We organize regular health and wellness programs, including blood donation camps, with a focus on diabetes management, neurological awareness, and preventive healthcare in rural communities. These initiatives are supported by collaborations with medical institutions, wellness experts, and research organizations to ensure evidence-based practices and outcomes.
        </p>
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          Our programs explore the connection between human habits, lifestyle choices, and long-term health risks, particularly in underserved regions where awareness is limited. By combining scientific insight with traditional Indian wellness systems, we offer a holistic approach to healing, empowering rural India to take proactive steps towards better health.
        </p>
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          Certified doctors, neurologists, and yoga practitioners deliver practical guidance, helping individuals take charge of their health through sustainable changes. We emphasize early detection, routine health monitoring, and mind-body balance, while also promoting financial literacy awareness and cybersecurity research in our educational outreach. Our goal is to build a healthier, more aware India—village by village.
        </p>
      </div>
    )
  },
  {
    title: "Empowering Rural India",
    icon: Users,
    image: "/images/csr/csr-4.webp",
    alt: "A group of people with their hands together",
    content: (
      <div className="space-y-6">
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          We strengthen rural economies by supporting Self-Help Groups (SHGs), enabling women to collectively save, access microfinance, and build sustainable livelihoods. Our initiatives include health and wellness programs that enhance community well-being alongside empowering rural India through targeted skill development programs. We equip women with vocational and digital skills to become entrepreneurs and community leaders.
        </p>
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          Additionally, we provide comprehensive skill training for rural youth, preparing them for employment in sectors like agriculture, technology, and small-scale industries, while also promoting financial literacy awareness to ensure informed economic decisions. We foster entrepreneurship by creating incubation hubs and training centers that help rural innovators turn ideas into viable businesses. In collaboration with local partners and government bodies, we ensure scalable and sustainable rural development initiatives.
        </p>
      </div>
    )
  },
  {
    title: "Digital South Blood Donations",
    icon: Droplets,
    image: "/images/csr/csr-5.webp",
    alt: "Community event with people gathered around informational booths on blockchain and cryptocurrency",
    content: (
      <div className="space-y-6">
        <p className="text-xl text-gray-600 font-bold text-brand-blue uppercase tracking-widest">Every life matters — and your contribution can save one.</p>
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          At Digital South, we believe that true impact begins with compassion. With 16+ successful blood donation camps conducted across communities, we’ve been able to touch hundreds of lives and inspire collective action. Our health and wellness programs are designed to support those in need, particularly in empowering rural India.
        </p>
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          Join hands with us. Support, volunteer, or help us organize more blood donation drives — because saving lives is the noblest act of all. Together, we can also promote financial literacy awareness and contribute to cybersecurity research to create a safer and more informed community.
        </p>
      </div>
    )
  }
];

export default function CSRActivitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-48 pb-48 container mx-auto px-6 max-w-6xl">
        <header className="mb-24 text-center">
          <span className="text-xs font-black text-brand-yellow uppercase tracking-[0.4em] mb-6 block">Social Responsibility</span>
          <h1 className="text-5xl md:text-8xl font-black text-brand-blue uppercase leading-[0.9] tracking-tighter mb-10">
            CSR <br className="md:hidden" /> Activities
          </h1>
          <div className="h-1.5 w-32 bg-brand-yellow mx-auto rounded-full mb-10" />
          <p className="max-w-3xl mx-auto text-xl text-gray-500 font-medium italic">
            "Transforming rural Bharat through technology, awareness, and compassionate action."
          </p>
        </header>

        <div className="space-y-32">
          {CSR_SECTIONS.map((section, idx) => (
             <motion.section 
               key={section.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}
             >
               <div className="lg:w-1/2 w-full space-y-10">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-3xl bg-brand-blue flex items-center justify-center text-white shadow-xl">
                       <section.icon size={32} />
                    </div>
                    <div className="h-px flex-1 bg-gray-100" />
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black text-brand-blue uppercase leading-tight tracking-tight">
                    {section.title}
                  </h2>
                  
                  {section.content}
               </div>
               
               <div className="lg:w-1/2 w-full">
                  <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[16px] border-gray-50 group">
                    <Image 
                      src={section.image}
                      alt={section.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay" />
                  </div>
               </div>
             </motion.section>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
