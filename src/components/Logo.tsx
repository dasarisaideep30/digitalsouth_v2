import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'white' | 'blue' | 'black';
  showText?: boolean;
}

export default function Logo({ className, variant = 'white', showText = true }: LogoProps) {
  const color = {
    white: 'text-white',
    blue: 'text-brand-blue',
    black: 'text-black',
  }[variant];

  const strokeColor = {
    white: 'white',
    blue: '#1b3c74', // brand-blue
    black: 'black',
  }[variant];

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      {/* SVG Interlocking Circles */}
      <svg
        width="48"
        height="24"
        viewBox="0 0 48 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <circle cx="12" cy="12" r="10" stroke={strokeColor} strokeWidth="2.5" />
        <circle cx="24" cy="12" r="10" stroke={strokeColor} strokeWidth="2.5" />
        <circle cx="36" cy="12" r="10" stroke={strokeColor} strokeWidth="2.5" />
      </svg>

      {showText && (
        <div className={cn("flex flex-col leading-none", color)}>
          <span className="text-xl font-black uppercase tracking-tight">Digital South</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Trust</span>
        </div>
      )}
    </div>
  );
}
