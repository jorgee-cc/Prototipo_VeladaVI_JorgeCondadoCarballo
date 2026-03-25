import { motion } from "motion/react";
import { Calendar, MapPin, Users, Ticket, PlayCircle } from "lucide-react";

export function EventInfoSection() {
  const INFO_ITEMS = [
    {
      icon: <MapPin className="text-[#BF953F] mb-4" size={32} />,
      title: "Recinto Histórico",
      desc: "Estadio Santiago Bernabéu, Madrid. Capacidad ampliada para 80.000 espectadores en la noche más épica del streaming."
    },
    {
      icon: <Calendar className="text-[#BF953F] mb-4" size={32} />,
      title: "Fecha Oficial",
      desc: "Sábado 13 de Julio de 2026. Apertura de puertas: 17:00 CET. Inicio de retransmisión: 19:00 CET."
    },
    {
      icon: <Users className="text-[#BF953F] mb-4" size={32} />,
      title: "Aforo y Entradas",
      desc: "Venta oficial habilitada el 15 de Mayo. Diferentes categorías VIP, Palcos de Honor y Grada General."
    },
    {
      icon: <PlayCircle className="text-[#BF953F] mb-4" size={32} />,
      title: "Retransmisión",
      desc: "En directo y en exclusiva mundial a través del canal de Twitch de Ibai. Récord mundial esperado: 4M+ de espectadores concurrentes."
    }
  ];

  return (
    <section id="info" className="w-full bg-[#121212] py-32 px-6 md:px-12 relative border-t border-white/5">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1655942144741-f5cff077553a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9rZSUyMHRleHR1cmUlMjBkYXJrfGVufDF8fHx8MTc3NDM3NzUyOXww&ixlib=rb-4.1.0&q=80&w=1920')] bg-cover bg-center opacity-5 mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
        {/* Left Content - Typography */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex flex-col items-start text-left"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[#D91A2A]" />
            <p className="text-[#D91A2A] font-bold tracking-[0.3em] uppercase text-xs">Información del Evento</p>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-white to-[#a0a0b0] leading-[0.9] m-0 mb-8 title-font">
            UNA NOCHE <br />
            PARA LA HISTORIA
          </h2>
          <p className="text-[#a0a0b0] text-base md:text-lg leading-relaxed font-light max-w-xl mb-12" style={{ fontFamily: 'Inter' }}>
            La Velada del Año 6 no es solo un evento de boxeo, es el pináculo del entretenimiento digital. Un choque titánico donde creadores de contenido, artistas internacionales y un estadio monumental se fusionan para redefinir los límites del espectáculo en vivo.
          </p>

          <button className="flex items-center gap-3 bg-transparent border-2 border-[#BF953F] hover:bg-[#BF953F] text-[#BF953F] hover:text-[#0A0A0C] px-8 py-4 rounded-[2px] font-bold text-sm tracking-[0.2em] uppercase transition-all duration-300">
            <Ticket size={20} />
            Conseguir Accesos
          </button>
        </motion.div>

        {/* Right Content - Grid Data */}
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {INFO_ITEMS.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-[#0A0A0C] border border-white/5 p-8 rounded-[4px] hover:border-[#BF953F]/30 hover:bg-[#1a1a1f] transition-all duration-500 group"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-500 origin-left">
                {item.icon}
              </div>
              <h4 className="text-white text-lg font-bold tracking-widest uppercase mb-3 title-font">{item.title}</h4>
              <p className="text-[#717182] text-sm leading-relaxed" style={{ fontFamily: 'Inter' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}