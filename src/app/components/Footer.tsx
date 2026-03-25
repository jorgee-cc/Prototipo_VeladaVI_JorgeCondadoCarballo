import { Twitch, Youtube, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0C] pt-24 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* Central Logo */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-[#FCF6BA] to-[#BF953F] tracking-widest title-font mb-4 m-0 leading-none drop-shadow-[0_0_20px_rgba(191,149,63,0.3)]">
            LVDA 6
          </h1>
          <p className="text-white/40 tracking-[0.5em] text-xs uppercase font-bold mt-2">
            La Velada del Año
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-8 mb-16">
          <a href="#" className="text-white/40 hover:text-[#BF953F] hover:-translate-y-1 transition-all duration-300">
            <Twitch size={24} />
          </a>
          <a href="#" className="text-white/40 hover:text-[#BF953F] hover:-translate-y-1 transition-all duration-300">
            <Youtube size={24} />
          </a>
          <a href="#" className="text-white/40 hover:text-[#BF953F] hover:-translate-y-1 transition-all duration-300">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-white/40 hover:text-[#BF953F] hover:-translate-y-1 transition-all duration-300">
            <Twitter size={24} />
          </a>
        </div>

        {/* Links Grid */}
        <div className="w-full max-w-2xl border-t border-white/5 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-xs tracking-widest font-bold uppercase text-white/40">
          <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Contacto</a>
          <a href="#" className="hover:text-white transition-colors">Prensa</a>
        </div>

        {/* Copyright */}
        <div className="mt-20 text-center text-white/20 text-[10px] tracking-widest uppercase flex flex-col gap-2">
          <span>© 2026 Jorge Condado. Todos los derechos reservados.</span>
          <span>Desarrollado por JORGE CONDADO CARBALLO</span>
        </div>
      </div>
    </footer>
  );
}