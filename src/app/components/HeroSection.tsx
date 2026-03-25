import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const fighter1X = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const fighter2X = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#0A0A0C]">
      {/* Background Dark Boxing Ring */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center transform-gpu"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1737381508529-a110d717d5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYm94aW5nJTIwcmluZ3xlbnwxfHx8fDE3NzQzNzc1MjV8MA&ixlib=rb-4.1.0&q=80&w=1920')`, scale }}
      />

      {/* Sparks Layer - Screen Blend Mode */}
      <div 
        className="absolute inset-0 z-10 opacity-30 bg-cover bg-center mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556608053-c8576bb0518d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwc3BhcmtzJTIwZGFya3xlbnwxfHx8fDE3NzQzNzc1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1920')` }}
      />
      
      {/* Smoke Layer - Screen Blend Mode */}
      <div 
        className="absolute inset-0 z-10 opacity-40 bg-cover bg-center mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1655942144741-f5cff077553a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9rZSUyMHRleHR1cmUlMjBkYXJrfGVufDF8fHx8MTc3NDM3NzUyOXww&ixlib=rb-4.1.0&q=80&w=1920')` }}
      />

      {/* Fighters Display */}
      <div className="absolute inset-0 z-20 flex items-end justify-between px-[-2rem] md:px-12 pb-0 opacity-80 pointer-events-none overflow-hidden">
        {/* Fighter Left */}
        <motion.div 
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ x: fighter1X }}
          className="relative h-[85vh] w-1/2 flex items-end justify-start transform-gpu"
        >
          {/* We use object-cover but position it bottom-left so the fighter looks like they are coming out of the corner */}
          <div className="relative w-full h-full max-w-[800px] aspect-[3/4]">
            <img 
              src="https://images.unsplash.com/photo-1620123804851-70e94c55e84a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hlciUyMHBvcnRyYWl0JTIwZGFya3xlbnwxfHx8fDE3NzQzNzc1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Fighter 1"
              className="absolute bottom-0 left-0 w-[120%] h-auto object-contain scale-x-[-1] drop-shadow-[10px_0_30px_rgba(0,0,0,0.8)]"
              style={{ filter: "contrast(1.2) brightness(0.8) grayscale(0.5) sepia(0.2) hue-rotate(-20deg) saturate(1.5)" }}
            />
          </div>
        </motion.div>

        {/* Fighter Right */}
        <motion.div 
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ x: fighter2X }}
          className="relative h-[85vh] w-1/2 flex items-end justify-end transform-gpu"
        >
          <div className="relative w-full h-full max-w-[800px] aspect-[3/4] flex justify-end">
            <img 
              src="https://images.unsplash.com/photo-1630996406379-4a5b229545d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWdodGVyJTIwcG9ydHJhaXQlMjBkYXJrfGVufDF8fHx8MTc3NDM3NzUzM3ww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Fighter 2"
              className="absolute bottom-0 right-[-10%] w-[120%] h-auto object-contain drop-shadow-[-10px_0_30px_rgba(0,0,0,0.8)]"
              style={{ filter: "contrast(1.2) brightness(0.8) grayscale(0.5) sepia(0.2) hue-rotate(-20deg) saturate(1.5)" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Shadow Vignette for Depth */}
      <div className="absolute inset-0 z-30 bg-gradient-to-t from-[#0A0A0C] via-transparent to-[#0A0A0C] opacity-90" />
      <div className="absolute inset-0 z-30 bg-gradient-to-r from-[#0A0A0C] via-transparent to-[#0A0A0C] opacity-80" />

      {/* Main Monumental Typography Container */}
      <motion.div 
        initial={{ y: 50, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        style={{ y: textY, opacity }}
        className="relative z-40 flex flex-col items-center justify-center text-center mt-20"
      >
        <p className="text-[#BF953F] font-bold tracking-[0.5em] uppercase text-sm md:text-lg mb-4 opacity-80">
          Ibai Llanos Presenta
        </p>
        <h1 
          className="text-7xl md:text-[10rem] lg:text-[14rem] text-transparent bg-clip-text bg-gradient-to-b from-[#FCF6BA] via-[#BF953F] to-[#71541a] leading-[0.8] mb-4 m-0 p-0 drop-shadow-2xl"
          style={{ fontFamily: 'Anton' }}
        >
          LA VELADA
        </h1>
        <div className="flex items-center gap-8 justify-center">
          <div className="h-[2px] w-12 md:w-32 bg-gradient-to-r from-transparent to-[#D91A2A]"></div>
          <h2 
            className="text-6xl md:text-8xl lg:text-[9rem] text-[#D91A2A] leading-none m-0 p-0"
            style={{ fontFamily: 'Anton' }}
          >
            DEL AÑO 6
          </h2>
          <div className="h-[2px] w-12 md:w-32 bg-gradient-to-l from-transparent to-[#D91A2A]"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="text-white/80 uppercase tracking-widest text-sm md:text-base border border-white/20 px-8 py-3 rounded-[2px] bg-black/40 backdrop-blur-md">
            Estadio Santiago Bernabéu
          </div>
          <div className="text-[#FCF6BA] uppercase tracking-widest text-sm md:text-base border border-[#BF953F]/40 px-8 py-3 rounded-[2px] bg-[#BF953F]/10 backdrop-blur-md">
            13 · Julio · 2026
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 z-50 flex flex-col items-center text-white/50 gap-2"
      >
        <span className="uppercase tracking-[0.3em] text-[10px] font-bold">Descubre el Evento</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={24} className="text-[#BF953F]" />
        </motion.div>
      </motion.div>
    </section>
  );
}