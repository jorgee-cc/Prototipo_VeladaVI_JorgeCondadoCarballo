import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef } from "react";

const MATCHUPS = [
  {
    id: 1,
    fighter1: {
      name: "Fernanfloo",
      country: "MX",
      image: "/luchador1.webp" 
    },
    fighter2: {
      name: "Plex",
      country: "ES",
      image: "/luchador2.webp"
    },
    weightClass: "85 KG",
    color: "#ff003c"
  },
  {
    id: 2,
    fighter1: {
      name: "Illojuan",
      country: "MX",
      image: ""
    },
    fighter2: {
      name: "TheGrefg",
      country: "ES",
      image: ""
    },
    weightClass: "75 KG",
    color: "#00e5ff"
  }
];

function ImmersiveMatchup({ matchup }: { matchup: typeof MATCHUPS[0] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(containerRef, { once: true, margin: "-15%" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // OPTIMIZACIÓN: Aceleración GPU estricta para el Parallax
  const bgTextY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-black border-b border-white/10"
    >
      {/* 1. NOMBRES GIGANTES EN NEÓN (Capa separada por hardware) */}
      <motion.div 
        style={{ y: bgTextY, willChange: "transform" }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none overflow-hidden select-none z-0 transform-gpu"
      >
        <h2 
          className="text-[18vw] leading-none title-font whitespace-nowrap -ml-32 opacity-30 transform-gpu"
          style={{
            color: "transparent",
            WebkitTextStroke: `2px ${matchup.color}`, // OPTIMIZADO: Trazo más fino, menos cálculo
            textShadow: `0 0 20px ${matchup.color}`, // OPTIMIZADO: Solo 1 capa de brillo de fondo
          }}
        >
          {matchup.fighter1.name}
        </h2>
        <h2 
          className="text-[18vw] leading-none title-font whitespace-nowrap ml-32 opacity-30 transform-gpu"
          style={{
            color: "transparent",
            WebkitTextStroke: `2px ${matchup.color}`,
            textShadow: `0 0 20px ${matchup.color}`,
          }}
        >
          {matchup.fighter2.name}
        </h2>
      </motion.div>

      {/* Resplandor central (Estático para evitar repaints) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] rounded-full blur-[100px] opacity-20 pointer-events-none transform-gpu"
        style={{ backgroundColor: matchup.color, willChange: "opacity" }}
      />

      <div className="relative z-10 w-full h-full max-w-[1920px] mx-auto flex items-end justify-between">
        
        {/* === PELEADOR 1 (Izquierda) === */}
        <motion.div 
          initial={{ x: "-20vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: "-20vw", opacity: 0 }}
          transition={{ type: "spring", stiffness: 30, damping: 20, mass: 2.5 }}
          className="relative w-1/2 h-full flex flex-col justify-end items-start transform-gpu will-change-transform will-change-opacity"
        >
          {/* Imagen OPTIMIZADA (Sin drop-shadow CSS) */}
          <div className="absolute bottom-0 left-0 w-full md:w-[110%] h-[90%] origin-bottom-left pointer-events-none z-10">
            {/* Brillo simulado detrás de la imagen por hardware, mucho más ligero que drop-shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: `inset 0 -50px 100px -50px ${matchup.color}` }} />
            <img 
              src={matchup.fighter1.image} 
              alt={matchup.fighter1.name}
              className="w-full h-full object-contain object-bottom hover:scale-105 transition-transform duration-500 transform-gpu"
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative z-20 mb-16 md:mb-32 ml-6 md:ml-16 transform-gpu will-change-transform"
          >
            <p className="text-white/80 text-xs md:text-sm tracking-[0.4em] font-bold uppercase mb-2">
              {matchup.fighter1.country}
            </p>
            <h3 
              className="text-5xl md:text-7xl lg:text-[8rem] text-white title-font leading-[0.85] uppercase"
              style={{
                textShadow: `0 0 10px #fff, 0 0 30px ${matchup.color}` // OPTIMIZADO: 2 capas en lugar de 4
              }}
            >
              {matchup.fighter1.name.split(" ").map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h3>
          </motion.div>
        </motion.div>

        {/* === EL CHOQUE "VS" (Centro) === */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
          <motion.div
            initial={{ scale: 3, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 3, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="w-20 h-20 md:w-28 md:h-28 bg-black border-2 rounded-full flex items-center justify-center relative transform-gpu will-change-transform"
            style={{ 
              borderColor: matchup.color,
              boxShadow: `0 0 20px ${matchup.color}, inset 0 0 15px ${matchup.color}` 
            }}
          >
            <span 
              className="text-3xl md:text-5xl title-font italic pr-1 text-white"
              style={{ textShadow: `0 0 10px #fff, 0 0 20px ${matchup.color}` }}
            >
              VS
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-6 border px-4 py-1.5 rounded-sm bg-black/80 backdrop-blur-md transform-gpu will-change-transform"
            style={{ 
              borderColor: matchup.color,
              boxShadow: `0 0 10px ${matchup.color}40` 
            }}
          >
            <span 
              className="text-white text-xs md:text-sm tracking-[0.3em] font-bold"
              style={{ textShadow: `0 0 10px ${matchup.color}` }}
            >
              {matchup.weightClass}
            </span>
          </motion.div>
        </div>

        {/* === PELEADOR 2 (Derecha) === */}
        <motion.div 
          initial={{ x: "20vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: "20vw", opacity: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
          className="relative w-1/2 h-full flex flex-col justify-end items-end text-right transform-gpu will-change-transform will-change-opacity"
        >
           <div className="absolute bottom-0 right-0 w-full md:w-[110%] h-[90%] origin-bottom-right pointer-events-none z-10">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: `inset 0 -50px 100px -50px ${matchup.color}` }} />
            <img 
              src={matchup.fighter2.image} 
              alt={matchup.fighter2.name}
              className="w-full h-full object-contain object-bottom hover:scale-105 transition-transform duration-500 transform -scale-x-100 transform-gpu"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative z-20 mb-16 md:mb-32 mr-6 md:mr-16 transform-gpu will-change-transform"
          >
            <p className="text-white/80 text-xs md:text-sm tracking-[0.4em] font-bold uppercase mb-2">
              {matchup.fighter2.country}
            </p>
            <h3 
              className="text-5xl md:text-7xl lg:text-[8rem] text-white title-font leading-[0.85] uppercase"
              style={{
                textShadow: `0 0 10px #fff, 0 0 30px ${matchup.color}`
              }}
            >
              {matchup.fighter2.name.split(" ").map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h3>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}

export function MatchupsSection() {
  return (
    <section id="combates" className="w-full bg-black relative">
      <div className="w-full py-20 flex flex-col items-center justify-center text-center bg-black relative z-20">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#D91A2A] font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-4 transform-gpu"
          style={{ textShadow: "0 0 10px rgba(217,26,42,0.8)" }}
        >
          La Cartelera
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl text-white leading-none uppercase m-0 p-0 title-font transform-gpu"
          style={{ textShadow: "0 0 20px #BF953F" }}
        >
          Main Card
        </motion.h2>
      </div>

      <div className="w-full flex flex-col">
        {MATCHUPS.map((matchup) => (
          <ImmersiveMatchup key={matchup.id} matchup={matchup} />
        ))}
      </div>
    </section>
  );
}