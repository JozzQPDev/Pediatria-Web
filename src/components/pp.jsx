import { useState, useCallback, useRef, useEffect } from 'react';

export default function StackedTestimonials({ testimonials = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const defaultItems = [
    {
      name: "María López",
      role: "Madre de Sofía",
      quote: "La calidez humana de los doctores transformó el miedo de mi hija en sonrisas.",
      image: "/images/testimonial-1.jpg",
      tag: "Atención Cálida",
      bg: "bg-rose-50"
    },
    {
      name: "Carlos Ramírez",
      role: "Padre de Mateo",
      quote: "Tecnología que da tranquilidad. El diagnóstico fue rápido y muy preciso.",
      image: "/images/testimonial-2.jpg",
      tag: "Tecnología Médica",
      bg: "bg-blue-50"
    },
    {
      name: "Ana Torres",
      role: "Madre de Lucas",
      quote: "El mejor centro pediátrico. El seguimiento post-consulta es impecable.",
      image: "/images/testimonial-3.jpg",
      tag: "Seguimiento VIP",
      bg: "bg-emerald-50"
    }
  ];

  const items = testimonials.length > 0 ? testimonials : defaultItems;
  const total = items.length;

  const next = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LADO IZQUIERDO: CONTENIDO */}
        <div className="space-y-8" data-aos="fade-right">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 font-black uppercase tracking-[0.2em] text-[10px] mb-6">
              <i className="fa-solid fa-star text-orange-400"></i> Opiniones Reales
            </span>
            <h2 className="text-6xl font-black text-slate-900 leading-tight">
              Familias <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500 italic font-serif">Astro-Clinica</span>
            </h2>
          </div>

          <div className="relative h-48">
            {items.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                <p className="text-2xl text-slate-600 font-medium leading-relaxed italic">
                  "{item.quote}"
                </p>
                <div className="mt-6">
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter">{item.name}</h4>
                  <p className="text-pink-500 font-bold">{item.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Controles */}
          <div className="flex items-center gap-4 pt-8">
            <button onClick={prev} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button onClick={next} className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center hover:scale-110 transition-all shadow-xl shadow-slate-200">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            <div className="ml-4 h-[2px] w-24 bg-slate-100 relative">
                <div 
                  className="absolute h-full bg-pink-500 transition-all duration-500"
                  style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
                ></div>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: STACKED CARDS (3D EFFECT) */}
        <div className="relative h-125 flex items-center justify-center" data-aos="fade-left">
          {items.map((item, index) => {
            // Lógica de posición para el efecto stack
            const isAtFront = index === currentIndex;
            const isBehind = index === (currentIndex + 1) % total;
            const isFarBehind = index === (currentIndex + 2) % total;

            let styles = {
                opacity: 0,
                transform: "scale(0.8) translateX(100px)",
                zIndex: 0
            };

            if (isAtFront) {
                styles = { opacity: 1, transform: "scale(1) translateX(0) rotate(-3deg)", zIndex: 30 };
            } else if (isBehind) {
                styles = { opacity: 0.6, transform: "scale(0.9) translateX(40px) rotate(2deg)", zIndex: 20 };
            } else if (isFarBehind) {
                styles = { opacity: 0.3, transform: "scale(0.8) translateX(80px) rotate(5deg)", zIndex: 10 };
            }

            return (
              <div
                key={index}
                className={`absolute w-full max-w-sm aspect-4/5 rounded-[3rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-2xl border-4 border-white`}
                style={styles}
              >
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-lg">
                        {item.tag}
                    </span>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
            );
          })}
          
          {/* Decoración extra (Círculos flotantes) */}
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse [animation-delay:2s]"></div>
        </div>

      </div>
    </section>
  );
}