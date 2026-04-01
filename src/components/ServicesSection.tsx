import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const services = [
  { id: 'haircut', name: 'Hair Cut', image: 'https://images.unsplash.com/photo-1593702295094-2825854b0f3b?q=80&w=2070&auto=format&fit=crop' },
  { id: 'beard', name: 'Beard Cut', image: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1974&auto=format&fit=crop' },
  { id: 'colour', name: 'Colour', image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1974&auto=format&fit=crop' },
  { id: 'manicure', name: 'Manicure', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1974&auto=format&fit=crop' },
  { id: 'pedicure', name: 'Pedicure', image: 'https://images.unsplash.com/photo-1519415510236-855911993ee0?q=80&w=2070&auto=format&fit=crop' },
  { id: 'facial', name: 'Facial', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop' },
  { id: 'massage', name: 'Swedish Massage', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop' },
  { id: 'aromatherapy', name: 'Aromatherapy', image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop' },
  { id: 'deeptissue', name: 'Deep Tissue', image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop' },
  { id: 'headmassage', name: 'Head Massage', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop' },
];

const allServices = [
  "Hair Cut", "Beard Cut", "Colour", "Cut & File", "Children Cut", "Infant",
  "Manicure (Normal with Polish)", "Pedicure (Normal with Polish)", "Face Scrub",
  "Facial", "Body Scrub", "Swedish Massage", "Aromatherapy Massage", "Reflexology",
  "Deep Tissue", "Stretching", "Manicure Gel", "Pedicure Gel", "Head Massage", "Back Massage"
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="bg-charcoal py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Sticky Nav */}
        <div className="lg:col-span-4 space-y-12">
          <div className="sticky top-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              With services like this, there’s <span className="text-gold">nowhere to go but Elite.</span>
            </h2>
            
            <div className="flex flex-col gap-4 max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar">
              {allServices.map((serviceName) => {
                const isMain = services.find(s => s.name === serviceName);
                return (
                  <button
                    key={serviceName}
                    onMouseEnter={() => {
                      const found = services.find(s => s.name === serviceName);
                      if (found) setActiveService(found);
                    }}
                    className={cn(
                      "text-left text-lg md:text-xl transition-all duration-300 interactive",
                      activeService.name === serviceName ? "text-gold translate-x-4 font-bold" : "text-white/40 hover:text-white"
                    )}
                  >
                    {serviceName}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Dynamic Content */}
        <div className="lg:col-span-8 relative aspect-video lg:aspect-auto lg:h-[80vh] overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img 
                src={activeService.image} 
                alt={activeService.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-12 left-12 right-12">
                <motion.h4 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-6xl font-bold"
                >
                  {activeService.name}
                </motion.h4>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 text-white/60 max-w-md"
                >
                  Experience the pinnacle of grooming excellence with our signature {activeService.name.toLowerCase()} treatment.
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
