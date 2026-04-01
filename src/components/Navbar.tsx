import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12",
        isScrolled ? "bg-deep-black/80 backdrop-blur-lg py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Menu */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="group flex items-center gap-3 text-white hover:text-gold transition-colors interactive"
        >
          <div className="flex flex-col gap-1.5">
            <span className="w-6 h-0.5 bg-current transition-transform group-hover:translate-x-1" />
            <span className="w-4 h-0.5 bg-current transition-transform group-hover:translate-x-2" />
            <span className="w-6 h-0.5 bg-current transition-transform group-hover:translate-x-1" />
          </div>
          <span className="hidden md:block text-xs uppercase tracking-widest font-medium">Menu</span>
        </button>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <h1 className="text-xl md:text-2xl font-bold tracking-tighter flex items-baseline gap-1">
            ELITE <span className="text-gold italic font-serif text-sm md:text-base">BarberShop& Spa</span>
          </h1>
        </div>

        {/* Right: CTA */}
        <div className="flex items-center gap-6">
          <a href="#" className="hidden md:block text-xs uppercase tracking-widest font-medium hover:text-gold transition-colors interactive">
            Location
          </a>
          <a 
            href="tel:+254706710739" 
            className="bg-gold text-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 interactive inline-block"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-deep-black z-[60] flex flex-col p-12"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white hover:text-gold transition-colors"
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col gap-8 mt-20">
              {['Home', 'Services', 'Experience', 'About', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  href="#"
                  className="text-4xl md:text-6xl font-bold hover:text-gold transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
