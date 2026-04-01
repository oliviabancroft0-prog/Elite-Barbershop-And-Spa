import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const text1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]);

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Video */}
        <motion.div 
          style={{ scale: videoScale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <video 
            src="https://github.com/oliviabancroft0-prog/image/blob/main/7697576-hd_1080_1920_30fps.mp4?raw=true" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Cinematic Light Leak Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-deep-black z-20 pointer-events-none" />
        </motion.div>

        {/* Content Overlays */}
        <div className="relative z-30 h-full flex flex-col items-center justify-center px-6 text-center">
          <motion.div style={{ opacity: text1Opacity }} className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-5xl md:text-8xl font-bold max-w-4xl leading-tight">
              Master Your Style. <br />
              <span className="text-gold">Elevate Your Presence.</span>
            </h2>
            <p className="mt-8 text-sm md:text-base uppercase tracking-[0.3em] font-medium opacity-70">
              Premium grooming & wellness in Nairobi
            </p>
          </motion.div>

          <motion.div style={{ opacity: text2Opacity }} className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
              Precision haircuts, expert beard grooming, and luxurious spa treatments — <span className="text-gold">bookable in seconds.</span>
            </h2>
          </motion.div>

          <motion.div style={{ opacity: text3Opacity }} className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
              Zero compromise. Pure relaxation. <br />
              <span className="text-gold">The time and space your grooming ritual deserves.</span>
            </h2>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.5em] opacity-40">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}
