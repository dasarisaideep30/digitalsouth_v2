"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const navItems = [
  { name: 'HOME', href: '/', hasDropdown: false },
  { name: 'WHO WE ARE', href: '/who-we-are', hasDropdown: false },
  { 
    name: 'COURSES OFFERED', 
    href: '/courses', 
    hasDropdown: true,
    dropdownItems: [
      { name: 'COE BLOCKCHAIN TECHNOLOGY', href: 'https://portfoliobygraphiaura.my.canva.site/digital-south-blockchain-diploma-program' },
      { name: 'BLOCKCHAIN FOUNDATIONS', href: 'https://portfoliobygraphiaura.my.canva.site/digital-south-online-certification-programs' },
      { name: 'DIPLOMA IN BLOCKCHAIN', href: 'https://portfoliobygraphiaura.my.canva.site/diploma-in-blockchain-technology-in-distance-education-webpage' }
    ]
  },
  { 
    name: 'TRUST & NEWS', 
    href: '#', 
    hasDropdown: true,
    dropdownItems: [
      { name: 'TRUST ACTIVITIES', href: '/trust-activities' },
      { name: 'PRESS RELEASE', href: '/press-release' }
    ]
  },
  { name: 'RESEARCH PAPERS', href: '/research', hasDropdown: false },
  { 
    name: 'MORE', 
    href: '#', 
    hasDropdown: true,
    dropdownItems: [
      { name: 'CSR ACTIVITIES', href: '/csr-activities' },
      { name: 'DONATIONS', href: '/donations' },
      { name: 'JOIN US', href: 'https://docs.google.com/forms/d/e/1FAIpQLSdWz2_pYAHBxGuYbnGH8VWrC4Fn2GE7nuC2spE1wjUkW6B1UQ/viewform' },
      { name: 'WHITE PAPER', href: '/white-paper' },
      { name: 'CERTIFICATE VERIFICATION', href: '/certificate-verification' },
      { name: 'PRIVACY POLICY', href: '/privacy-policy' }
    ]
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          "bg-brand-blue/95 backdrop-blur-xl border-white/10 py-3 shadow-2xl"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo variant="white" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center py-4 text-xs xl:text-sm font-semibold tracking-wider transition-colors hover:text-brand-yellow",
                    isScrolled ? "text-white/90" : "text-white/80"
                  )}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-3 h-3 ml-1 opacity-80 transition-transform group-hover:-rotate-180" />}
                </Link>

                {/* Desktop Dropdown */}
                {item.dropdownItems && (
                  <div className={cn(
                    "absolute top-full pt-2 w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0",
                    item.name === 'MORE' ? "right-0" : "left-0"
                  )}>
                    <div className="bg-brand-blue border border-white/5 py-4 flex flex-col shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden backdrop-blur-xl">
                      {item.dropdownItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="px-6 py-3 text-sm font-medium tracking-wide text-white/90 hover:text-brand-yellow hover:bg-white/5 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className={cn("w-6 h-6", isScrolled ? "text-black dark:text-white" : "text-white")} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-blue/98 backdrop-blur-2xl p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <Logo variant="white" />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 border border-gray-200 dark:border-white/10 rounded-full"
              >
                <X className="w-6 h-6 dark:text-white" />
              </button>
            </div>
            
            <div className="flex flex-col space-y-6 overflow-y-auto pb-6">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col space-y-4">
                  <Link
                    href={item.href}
                    onClick={() => !item.dropdownItems && setIsMobileMenuOpen(false)}
                    className="text-xl md:text-2xl font-bold text-white flex justify-between items-center"
                  >
                    {item.name}
                    {item.hasDropdown ? (
                      <ChevronDown className="w-6 h-6 text-brand-yellow" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-brand-yellow" />
                    )}
                  </Link>
                  
                  {/* Mobile Dropdown Options */}
                  {item.dropdownItems && (
                     <div className="flex flex-col space-y-4 pl-4 border-l-2 border-brand-yellow/30 ml-2">
                       {item.dropdownItems.map((subItem) => (
                         <Link
                           key={subItem.name}
                           href={subItem.href}
                           onClick={() => setIsMobileMenuOpen(false)}
                           className="text-lg font-medium tracking-wide text-white/80 hover:text-brand-yellow"
                         >
                           {subItem.name}
                         </Link>
                       ))}
                     </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <Link
                href="#join"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full block text-center py-4 bg-brand-blue text-white rounded-xl font-bold text-lg"
              >
                Join the Revolution
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

