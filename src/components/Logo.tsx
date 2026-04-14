import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'white' | 'original';
  height?: number;
}

export default function Logo({ className, variant = 'original', height = 50 }: LogoProps) {
  return (
    <div 
      className={cn("flex items-center select-none", className)}
    >
      <Image 
        src="/logo.jpeg" 
        alt="Digital South Logo" 
        width={300} 
        height={height * 1.5}
        priority
        style={{ height: `${height}px`, width: 'auto' }}
        className="object-contain"
      />
    </div>
  );
}