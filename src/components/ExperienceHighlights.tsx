import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const panels = [
  {
    title: "Nowhere to go but Elite",
    subtitle: "Leave ordinary grooming behind and experience true luxury",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
    align: "left"
  },
  {
    title: "Sit back and enjoy",
    subtitle: "Exceptional results come standard with every visit. Exceptional relaxation is our specialty.",
    image: "https://images.unsplash.com/photo-1621605815841-2dddb7a69e3d?q=80&w=2070&auto=format&fit=crop",
    align: "right"
  },
  {
    title: "Crafted Daily",
    subtitle: "Imagine looking forward to your grooming appointment. Where confidence is crafted daily.",
    image: "https://images.unsplash.com/photo-1599351431247-f5793384895b?q=80&w=1974&auto=format&fit=crop",
    align: "left"
  }
];

export default function ExperienceHighlights() {
  return (
    <section className="bg-deep-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        {panels.map((panel, i) => (
          <Panel key={i} panel={panel} index={i} />
        ))}
      </div>
    </section>
  );
}

function Panel({ panel, index }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className={`min-h-screen flex flex-col md:flex-row items-center gap-12 py-24 ${panel.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
      <motion.div 
        style={{ opacity }}
        className="flex-1 space-y-8"
      >
        <span className="text-gold font-mono text-sm tracking-widest">0{index + 1} — EXPERIENCE</span>
        <h3 className="text-5xl md:text-7xl font-bold leading-tight">{panel.title}</h3>
        <p className="text-xl text-white/60 max-w-md leading-relaxed">
          {panel.subtitle}
        </p>
        <button className="group flex items-center gap-4 text-gold uppercase tracking-widest text-xs font-bold interactive">
          Discover the Experience
          <div className="w-8 h-px bg-gold transition-all group-hover:w-12" />
        </button>
      </motion.div>
      
      <div className="flex-1 relative aspect-[4/5] overflow-hidden">
        <motion.img 
          style={{ y }}
          src={panel.image} 
          alt={panel.title}
          className="absolute inset-0 w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent" />
      </div>
    </div>
  );
}
