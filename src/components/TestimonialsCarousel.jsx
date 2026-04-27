import { useEffect, useState } from 'react';

export default function MarqueeTestimonials() {
  const testimonials = [
    { name: "Lucía M.", role: "Madre", quote: "Excelente trato y mucha paciencia con mi bebé.", color: "border-pink-200", icon: "fa-heart" },
    { name: "Pedro G.", role: "Padre", quote: "Las instalaciones son de primer nivel, muy modernas.", color: "border-blue-200", icon: "fa-hospital" },
    { name: "Elena R.", role: "Madre", quote: "El sistema de citas por WhatsApp es súper rápido.", color: "border-orange-200", icon: "fa-bolt" },
    { name: "Marco S.", role: "Padre", quote: "Especialistas que realmente aman lo que hacen.", color: "border-purple-200", icon: "fa-face-smile" },
    { name: "Sofia T.", role: "Madre", quote: "Me encanta que tengan zona de juegos para los niños.", color: "border-emerald-200", icon: "fa-child-reaching" },
    { name: "Juan P.", role: "Padre", quote: "Diagnósticos precisos y seguimiento constante.", color: "border-cyan-200", icon: "fa-microscope" },
  ];

  // Duplicamos la lista para crear el efecto infinito
  const doubleTestimonials = [...testimonials, ...testimonials];

  return (
   <section className="py-1">
     
      <div className="relative flex flex-col gap-8">
        {/* Fila 1: Hacia la izquierda */}
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
          {doubleTestimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        {/* Fila 2: Hacia la derecha */}
        <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
          {doubleTestimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({ name, role, quote, color, icon }) {
  return (
    <div className={`w-[350px] mx-4 p-8 bg-white rounded-[2.5rem] border-2 ${color} shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group`}>
      <div className="flex items-start justify-between mb-6">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <i key={i} className="fa-solid fa-star text-[10px] text-yellow-400"></i>
          ))}
        </div>
        <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-colors">
          <i className={`fa-solid ${icon}`}></i>
        </div>
      </div>
      
      <p className="text-slate-600 font-medium mb-6 leading-relaxed italic">
        "{quote}"
      </p>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-400 text-xs">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">{name}</h4>
          <p className="text-[10px] text-slate-400 font-bold uppercase">{role}</p>
        </div>
      </div>
    </div>
  );
}