import { f as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_CymLUfwh.mjs';
import 'piccolore';
import { $ as $$Layout, s as services, a as siteConfig } from '../chunks/Layout_DyA1H_PA.mjs';
import { $ as $$Hero } from '../chunks/Hero_C2Q6SYSt.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  const colorClasses = {
    green: {
      bg: "bg-green-300",
      bgLight: "bg-green-50",
      text: "text-green-600",
      ring: "focus-visible:ring-green-300",
      gradient: "from-green-300 to-emerald-400"
    },
    blue: {
      bg: "bg-blue-300",
      bgLight: "bg-blue-50",
      text: "text-blue-600",
      ring: "focus-visible:ring-blue-300",
      gradient: "from-blue-300 to-cyan-400"
    },
    yellow: {
      bg: "bg-yellow-300",
      bgLight: "bg-yellow-50",
      text: "text-yellow-700",
      ring: "focus-visible:ring-yellow-300",
      gradient: "from-yellow-300 to-orange-400"
    },
    pink: {
      bg: "bg-pink-300",
      bgLight: "bg-pink-50",
      text: "text-pink-600",
      ring: "focus-visible:ring-pink-300",
      gradient: "from-pink-300 to-rose-400"
    },
    purple: {
      bg: "bg-purple-300",
      bgLight: "bg-purple-50",
      text: "text-purple-600",
      ring: "focus-visible:ring-purple-300",
      gradient: "from-purple-300 to-violet-400"
    },
    teal: {
      bg: "bg-teal-300",
      bgLight: "bg-teal-50",
      text: "text-teal-600",
      ring: "focus-visible:ring-teal-300",
      gradient: "from-teal-300 to-cyan-400"
    }
  };
  const getColors = (color) => colorClasses[color ?? "blue"] ?? colorClasses.blue;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nuestros Servicios M\xE9dicos | Especialidades", "description": "Conoce nuestras especialidades pedi\xE1tricas. Ya estamos atendiendo en nuestra nueva sede.", "data-astro-cid-wrzvmyuk": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Atenci\xF3n M\xE9dica Integral", "subtitle": "Especialidades pedi\xE1tricas con tecnolog\xEDa, experiencia y calidez humana.", "sideImage": "/img/hero-servicios.jpg", "data-astro-cid-wrzvmyuk": true })} ${maybeRenderHead()}<main class="main-section" data-astro-cid-wrzvmyuk> <span class="cloud cloud--1" aria-hidden="true" data-astro-cid-wrzvmyuk></span> <span class="cloud cloud--2" aria-hidden="true" data-astro-cid-wrzvmyuk></span> <span class="cloud cloud--3" aria-hidden="true" data-astro-cid-wrzvmyuk></span> <span class="cloud cloud--4" aria-hidden="true" data-astro-cid-wrzvmyuk></span> <span class="cloud cloud--5" aria-hidden="true" data-astro-cid-wrzvmyuk></span> <span class="cloud cloud--6" aria-hidden="true" data-astro-cid-wrzvmyuk></span> <span class="cloud cloud--7" aria-hidden="true" data-astro-cid-wrzvmyuk></span> <span class="cloud cloud--8" aria-hidden="true" data-astro-cid-wrzvmyuk></span> <span class="cloud cloud--9" aria-hidden="true" data-astro-cid-wrzvmyuk></span> <span class="cloud cloud--10" aria-hidden="true" data-astro-cid-wrzvmyuk></span> <span class="cloud cloud--11" aria-hidden="true" data-astro-cid-wrzvmyuk></span> <span class="cloud cloud--12" aria-hidden="true" data-astro-cid-wrzvmyuk></span> <section class="py-16 bg-white" aria-label="Listado de especialidades médicas" data-astro-cid-wrzvmyuk> <div class="max-w-7xl mx-auto px-4" data-astro-cid-wrzvmyuk> <header class="text-center mb-12 reveal" data-astro-cid-wrzvmyuk> <span class="inline-flex items-center gap-2 text-purple-600 font-bold uppercase tracking-[0.3em] text-[11px] bg-purple-50 px-4 py-2 rounded-full" data-astro-cid-wrzvmyuk>Nuestras Especialidades</span> <h2 class="mt-6 text-4xl md:text-6xl font-bold text-gray-900 leading-tight italic" data-astro-cid-wrzvmyuk>
Atención clara, cercana <br data-astro-cid-wrzvmyuk> <span class="text-purple-400 not-italic" data-astro-cid-wrzvmyuk>y orientada a tu familia</span> </h2> <p class="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed" data-astro-cid-wrzvmyuk>
Conoce cada especialidad con información práctica y directa para tomar la mejor decisión y agendar tu cita en minutos.
</p> </header> <div class="space-y-10" data-astro-cid-wrzvmyuk> ${services.map((s, index) => {
    const colors = getColors(s.color);
    const reverse = index % 2 !== 0;
    return renderTemplate`<article${addAttribute(`relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-500 rounded-3xl reveal stagger-${index + 1}`, "class")}${addAttribute(`servicio-titulo-${index}`, "aria-labelledby")} data-astro-cid-wrzvmyuk> <div${addAttribute(`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${colors.gradient}`, "class")} aria-hidden="true" data-astro-cid-wrzvmyuk></div> <div${addAttribute(`grid lg:grid-cols-12 gap-5 ${reverse ? "lg:[&_.media]:order-1 lg:[&_.content]:order-2" : "lg:[&_.media]:order-2 lg:[&_.content]:order-1"}`, "class")} data-astro-cid-wrzvmyuk> <div class="media lg:col-span-5 relative min-h-85 lg:min-h-full" aria-hidden="true" data-astro-cid-wrzvmyuk> <img${addAttribute(s.image, "src")}${addAttribute(`Imagen representativa de ${s.title}`, "alt")} class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" data-astro-cid-wrzvmyuk> </div> <div class="content lg:col-span-7 p-7 sm:p-10" data-astro-cid-wrzvmyuk> <div class="flex items-center gap-3 mb-5" data-astro-cid-wrzvmyuk> <span${addAttribute(`w-12 h-12 rounded-2xl ${colors.bgLight} ${colors.text} flex items-center justify-center`, "class")} aria-hidden="true" data-astro-cid-wrzvmyuk> <i${addAttribute(s.icon, "data-lucide")} class="w-6 h-6" data-astro-cid-wrzvmyuk></i> </span> <div data-astro-cid-wrzvmyuk> <p class="text-xs font-extrabold tracking-wider uppercase text-gray-500"${addAttribute(`servicio-categoria-${index}`, "id")} data-astro-cid-wrzvmyuk> ${s.category || "Especialidad"} </p> <h3${addAttribute(`servicio-titulo-${index}`, "id")} class="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight" data-astro-cid-wrzvmyuk> ${s.title} </h3> </div> </div> <p class="text-gray-600 leading-relaxed first-letter:text-3xl first-letter:font-bold first-letter:mr-1" data-astro-cid-wrzvmyuk> ${s.shortDesc} </p> <div class="mt-6 flex flex-wrap gap-3" aria-label="Información adicional del servicio" data-astro-cid-wrzvmyuk> ${s.duration && renderTemplate`<span${addAttribute(`inline-flex items-center gap-2 ${colors.bgLight} px-4 py-2 rounded-2xl`, "class")} data-astro-cid-wrzvmyuk> <i data-lucide="clock"${addAttribute(`w-4 h-4 ${colors.text}`, "class")} aria-hidden="true" data-astro-cid-wrzvmyuk></i> <span class="text-sm font-medium text-gray-700" data-astro-cid-wrzvmyuk>${s.duration}</span> </span>`} ${s.schedule && renderTemplate`<span${addAttribute(`inline-flex items-center gap-2 ${colors.bgLight} px-4 py-2 rounded-2xl`, "class")} data-astro-cid-wrzvmyuk> <i data-lucide="calendar"${addAttribute(`w-4 h-4 ${colors.text}`, "class")} aria-hidden="true" data-astro-cid-wrzvmyuk></i> <span class="text-sm font-medium text-gray-700" data-astro-cid-wrzvmyuk>${s.schedule}</span> </span>`} ${s.doctor && renderTemplate`<span${addAttribute(`inline-flex items-center gap-2 ${colors.bgLight} px-4 py-2 rounded-2xl`, "class")} data-astro-cid-wrzvmyuk> <i data-lucide="user"${addAttribute(`w-4 h-4 ${colors.text}`, "class")} aria-hidden="true" data-astro-cid-wrzvmyuk></i> <span class="text-sm font-medium text-gray-700" data-astro-cid-wrzvmyuk>${s.doctor}</span> </span>`} </div> <div class="mt-8 flex flex-col sm:flex-row gap-3" data-astro-cid-wrzvmyuk> <a${addAttribute(`/servicios/${s.slug}`, "href")}${addAttribute(`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-white ${colors.bg} hover:opacity-90 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${colors.ring}`, "class")}${addAttribute(`Ver detalles de ${s.title}`, "aria-label")} data-astro-cid-wrzvmyuk>
Ver detalles
<i data-lucide="arrow-right" class="w-4 h-4" aria-hidden="true" data-astro-cid-wrzvmyuk></i> </a> <a${addAttribute(siteConfig.contact.whatsappUrl, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-gray-400 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-300"${addAttribute(`Agendar ${s.title} por WhatsApp`, "aria-label")} data-astro-cid-wrzvmyuk> <i class="bi bi-whatsapp text-lg" aria-hidden="true" data-astro-cid-wrzvmyuk></i>
Agendar
</a> </div> </div> </div> </article>`;
  })} </div> </div> </section> <!-- CTA --> <section class="py-16 bg-gray-50" data-astro-cid-wrzvmyuk> <div class="max-w-7xl mx-auto px-4" data-astro-cid-wrzvmyuk> <div class="relative overflow-hidden rounded-3xl shadow-2xl reveal" data-astro-cid-wrzvmyuk> <div class="absolute inset-0" data-astro-cid-wrzvmyuk> <img src="/img/hero-servicios.jpg" alt="" class="w-full h-full object-cover" loading="lazy" decoding="async" data-astro-cid-wrzvmyuk> <div class="absolute inset-0 bg-linear-to-br from-green-300/80 to-blue-300/80" data-astro-cid-wrzvmyuk></div> </div> <div class="relative z-10 px-6 py-14 sm:px-10 lg:px-20 text-center text-white" data-astro-cid-wrzvmyuk> <span class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em]" data-astro-cid-wrzvmyuk> <span class="relative flex h-2 w-2" data-astro-cid-wrzvmyuk> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-200 opacity-75" data-astro-cid-wrzvmyuk></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-white" data-astro-cid-wrzvmyuk></span> </span>
Agenda tu visita hoy
</span> <h2 class="mt-6 text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight italic" data-astro-cid-wrzvmyuk>
Tu tranquilidad comienza <br data-astro-cid-wrzvmyuk> <span class="not-italic text-yellow-100 font-bold" data-astro-cid-wrzvmyuk>con una cita médica</span> </h2> <p class="mt-6 text-white/90 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-medium" data-astro-cid-wrzvmyuk>
Nuestros especialistas están listos para recibirte. Agenda por WhatsApp y recibe atención prioritaria.
</p> <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center" data-astro-cid-wrzvmyuk> <a${addAttribute(siteConfig.contact.whatsappUrl, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-3 bg-white text-green-600 px-8 py-4 rounded-2xl font-bold hover:bg-green-50 hover:scale-105 transition-all shadow-xl active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-600" aria-label="Reservar cita por WhatsApp" data-astro-cid-wrzvmyuk> <i class="bi bi-whatsapp text-xl" aria-hidden="true" data-astro-cid-wrzvmyuk></i>
Agendar por WhatsApp
</a> <a href="/contacto" class="inline-flex items-center justify-center gap-3 bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/30 transition-all border border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-400" aria-label="Ver ubicación" data-astro-cid-wrzvmyuk> <i data-lucide="map-pin" class="w-5 h-5" aria-hidden="true" data-astro-cid-wrzvmyuk></i>
Ver ubicación
</a> </div> <div class="pointer-events-none absolute top-8 right-8 animate-bounce-soft" data-astro-cid-wrzvmyuk> <i data-lucide="heart" class="w-10 h-10 text-yellow-200" aria-hidden="true" data-astro-cid-wrzvmyuk></i> </div> <div class="pointer-events-none absolute bottom-8 left-8 animate-bounce-soft animation-delay-500" data-astro-cid-wrzvmyuk> <i data-lucide="star" class="w-8 h-8 text-yellow-200" aria-hidden="true" data-astro-cid-wrzvmyuk></i> </div> <div class="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl opacity-60" data-astro-cid-wrzvmyuk></div> <div class="pointer-events-none absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full -ml-20 -mb-20 blur-2xl opacity-40" data-astro-cid-wrzvmyuk></div> </div> </div> </div> </section> </main> ` })}  ${renderScript($$result, "C:/Astro Clinica Pedriatia/Pediatria-Web/src/pages/servicios.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Astro Clinica Pedriatia/Pediatria-Web/src/pages/servicios.astro", void 0);

const $$file = "C:/Astro Clinica Pedriatia/Pediatria-Web/src/pages/servicios.astro";
const $$url = "/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Servicios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
