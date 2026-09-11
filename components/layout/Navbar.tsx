'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Why PRAGATI', href: '#why-pragati' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Projects', href: '/projects' },
  { name: 'Impact', href: '#impact' },
  { name: 'About', href: '#about' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-200/60'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="flex items-center justify-between px-6 lg:px-10 max-w-7xl mx-auto h-16 lg:h-18"
        aria-label="Global"
      >
        {/* Brand */}
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md group"
          >
            <span className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-none group-hover:text-sky-700 transition-colors">
              प्रगति
            </span>
            <div className="h-6 w-px bg-slate-300 hidden sm:block" />
            <span className="hidden sm:block text-xs font-bold text-slate-500 uppercase tracking-[0.2em] leading-tight">
              PRAGATI
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-1">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-sky-600 rounded-lg hover:bg-sky-50/60 transition-all outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 hover:bg-sky-700 hover:shadow-sky-500/30 transition-all group"
          >
            Explore Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.35 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm lg:hidden"
            >
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-2xl font-black text-slate-900">प्रगति</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">PRAGATI</span>
                </Link>
                <button
                  type="button"
                  className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-8 flow-root">
                <div className="-my-6 divide-y divide-slate-100">
                  <div className="space-y-1 py-6">
                    {NAV_LINKS.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-4 py-3 text-base font-semibold text-slate-900 hover:bg-sky-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/projects"
                      className="flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-sky-700 transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Explore Projects
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
