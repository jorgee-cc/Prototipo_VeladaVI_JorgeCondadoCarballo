import { motion } from "motion/react";
import { Ticket, Menu } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-gradient-to-b from-[#0A0A0C] to-transparent backdrop-blur-sm"
    >
      <div className="flex items-center gap-4">
        <h1 className="text-3xl md:text-4xl text-white tracking-widest title-font m-0 leading-none" style={{ fontFamily: 'Anton' }}>L V D A 6</h1>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#combates" className="text-sm font-semibold text-white/70 hover:text-white transition-colors uppercase tracking-widest">Combates</a>
        <a href="#artistas" className="text-sm font-semibold text-white/70 hover:text-white transition-colors uppercase tracking-widest">Artistas</a>
        <a href="#info" className="text-sm font-semibold text-white/70 hover:text-white transition-colors uppercase tracking-widest">El Evento</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] hover:from-[#FCF6BA] hover:to-[#BF953F] text-[#0A0A0C] px-6 py-3 rounded-[2px] font-bold text-sm tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(191,149,63,0.3)]">
          <Ticket size={16} className="text-[#0A0A0C]" />
          <span>Entradas</span>
        </button>
        <button className="md:hidden text-white">
          <Menu size={28} />
        </button>
      </div>
    </motion.nav>
  );
}