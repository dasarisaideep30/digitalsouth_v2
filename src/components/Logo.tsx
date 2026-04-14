import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'white' | 'blue' | 'black' | 'original';
  scale?: number;
}

export default function Logo({ className, variant = 'original', scale = 1 }: LogoProps) {
  return (
    <div 
      className={cn("flex items-center gap-4 py-1", className)}
      style={{ transform: `scale(${scale})`, transformOrigin: 'left center' }}
    >
      {/* The Blue Box Logo Part */}
      <div className="relative bg-[#1b59a6] p-1 border-2 border-white flex flex-col justify-center items-center px-4 py-2 min-w-[200px] md:min-w-[240px] shadow-lg">
        {/* Inner white border effect */}
        <div className="absolute inset-1 border border-white pointer-events-none opacity-40" />
        
        <h1 className="text-white font-serif text-2xl md:text-3xl font-bold leading-none tracking-tight">
          Digital South
        </h1>
        <p className="text-white text-[7px] md:text-[8px] font-sans font-normal uppercase tracking-tight mt-1 opacity-90 whitespace-nowrap">
          South India's no.1 Blockchain Education Trust
        </p>
      </div>

      {/* The Chain Links */}
      <div className="flex items-center -space-x-1.5 md:-space-x-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative w-8 h-4 md:w-10 md:h-5 border-[2px] md:border-[3px] border-zinc-600 rounded-lg flex-shrink-0 bg-transparent rotate-12 bg-white/5 shadow-sm" />
        ))}
      </div>
    </div>
  );
}


