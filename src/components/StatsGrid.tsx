"use client";

import React from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Users, Trees, GraduationCap, Heart, Trophy, BookOpen } from "lucide-react";

interface CounterProps {
  from: number;
  to: number;
  suffix?: string;
}

const Counter = ({ from, to, suffix = "" }: CounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest).toLocaleString() + suffix;
  });
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });

  React.useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    } else {
      count.set(from);
    }
  }, [inView, count, to, from]);

  return <motion.div ref={ref} className="text-3xl font-extrabold mb-1 tracking-tight">{rounded}</motion.div>;
};

const STATS = [
  {
    label: "Volunteers",
    from: 0,
    to: 1090,
    suffix: "+",
    icon: Users,
    color: "bg-stat-red",
  },
  {
    label: "Tree Plantation Drives",
    from: 0,
    to: 30,
    suffix: "+",
    icon: Trees,
    color: "bg-stat-green",
  },
  {
    label: "Trained web3 professionals",
    from: 0,
    to: 173480,
    suffix: "+",
    icon: GraduationCap,
    color: "bg-stat-navy",
  },
  {
    label: "Blood Donation Camps",
    from: 0,
    to: 25,
    suffix: "+",
    icon: Heart,
    color: "bg-stat-teal",
  },
  {
    label: "Hackathons for Innovation",
    from: 0,
    to: 40,
    suffix: "+",
    icon: Trophy,
    color: "bg-stat-magenta",
  },
  {
    label: "Educational Programs",
    from: 0,
    to: 290,
    suffix: "+",
    icon: BookOpen,
    color: "bg-stat-brown",
  },
];

export default function StatsGrid() {
  return (
    <section className="section-padding bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-brand-blue mb-6 uppercase tracking-tight">Our Impact in Numbers</h2>
          <div className="h-2 w-24 bg-brand-yellow mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`${stat.color} p-10 rounded-[2.5rem] text-white flex items-center gap-8 shadow-2xl transition-all group`}
            >
              <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                <stat.icon className="w-10 h-10" />
              </div>
              <div className="flex flex-col">
                <Counter from={stat.from} to={stat.to} suffix={stat.suffix} />
                <div className="text-white/80 font-semibold leading-tight tracking-wide text-sm lg:text-base">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
