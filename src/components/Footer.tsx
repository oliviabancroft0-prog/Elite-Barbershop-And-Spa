import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deep-black border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand & Social */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tighter">
              ELITE <span className="text-gold italic font-serif text-lg">& Spa</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Transforming everyday self-care into a confident, masculine ritual of precision, relaxation, and elevation.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-gold transition-colors interactive"><Facebook size={20} /></a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors interactive"><Instagram size={20} /></a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors interactive"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-gold">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join Our Team</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-gold">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex gap-3">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>UNIT A01, FIRST FLOOR, B.E ENERGY, PLOT 16 KANGUNDO ROAD, NJIRU KASARANI, NAIROBI</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+254 706 710 739</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <span>hello@elitebarbershop.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-gold">Stay Sharp</h4>
            <p className="text-sm text-white/60">Sign up for updates and exclusive offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border-b border-white/20 py-3 px-0 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gold hover:text-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-[10px] uppercase tracking-widest text-white/20">
            © 2026 Elite Barbershop & Spa. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
