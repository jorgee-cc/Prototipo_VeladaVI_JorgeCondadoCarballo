import { motion } from "motion/react";

const SPONSORS = [
  "SPOTIFY",
  "PRIME",
  "PLAYSTATION",
  "ALSA",
  "MAHOU",
  "G FUEL",
  "REVOLUT",
  "EL POZO"
];

// Combine to have enough content to fill the screen twice
const MARQUEE_ITEMS = [...SPONSORS, ...SPONSORS, ...SPONSORS, ...SPONSORS];

export function SponsorsSection() {
  return (
    <section className="relative py-24 bg-[#0A0A0C] border-y border-white/5 overflow-hidden flex flex-col items-center z-20">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-transparent to-[#0A0A0C] z-10 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center mb-16 relative z-20"
      >
        <p className="text-[#BF953F] font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-4">Partners Oficiales</p>
      </motion.div>

      {/* Marquee Container */}
      <div className="w-full relative flex overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          style={{ width: "max-content" }}
        >
          {MARQUEE_ITEMS.map((sponsor, index) => (
            <div 
              key={index}
              className="group/sponsor relative cursor-pointer px-12 md:px-24 flex items-center justify-center"
            >
              <span className="text-6xl md:text-8xl font-bold title-font text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 group-hover/sponsor:from-[#FCF6BA] group-hover/sponsor:to-[#BF953F] transition-all duration-500 hover:scale-110 drop-shadow-xl inline-block transform-gpu">
                {sponsor}
              </span>
              <div className="absolute -inset-4 bg-[#BF953F]/20 blur-xl opacity-0 group-hover/sponsor:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
