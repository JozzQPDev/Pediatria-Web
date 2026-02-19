import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_CymLUfwh.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DyA1H_PA.mjs';
import { $ as $$Hero } from '../chunks/Hero_C2Q6SYSt.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Equipo = createComponent(($$result, $$props, $$slots) => {
  const doctores = [
    {
      name: "Dra. Elena Mart\xEDnez",
      role: "Pediatra Neonat\xF3loga",
      specialty: "L\xEDder de Cuidado del Reci\xE9n Nacido",
      image: "/images/medic-1.jpg",
      tags: ["Lactancia", "Prematuros"],
      linkedin: "https://linkedin.com/in/elena-martinez",
      email: "emartinez@clinica.com",
      // Colores (versiones pasteles):
      overlayFrom: "from-green-300/80",
      accentText: "text-green-400",
      accentRing: "focus-within:ring-green-300",
      accentHoverBg: "hover:bg-green-50",
      tagHoverText: "hover:text-green-400",
      borderAccent: "border-green-300",
      softBg: "bg-green-50/50"
    },
    {
      name: "Dr. Ricardo Santos",
      role: "Pediatra Especialista",
      specialty: "Crecimiento y Desarrollo",
      image: "/images/medic-2.jpg",
      tags: ["Nutrici\xF3n", "Adolescentes"],
      linkedin: "https://linkedin.com/in/ricardo-santos",
      email: "rsantos@clinica.com",
      overlayFrom: "from-blue-300/80",
      accentText: "text-blue-400",
      accentRing: "focus-within:ring-blue-300",
      accentHoverBg: "hover:bg-blue-50",
      tagHoverText: "hover:text-blue-400",
      borderAccent: "border-blue-300",
      softBg: "bg-blue-50/50"
    },
    {
      name: "Dra. Sof\xEDa Alva",
      role: "Odontopediatra",
      specialty: "Salud Bucal Infantil",
      image: "/images/medic-3.jpg",
      tags: ["Ortodoncia", "Prevenci\xF3n"],
      linkedin: "https://linkedin.com/in/sofia-alva",
      email: "salva@clinica.com",
      overlayFrom: "from-yellow-300/80",
      accentText: "text-yellow-500",
      accentRing: "focus-within:ring-yellow-300",
      accentHoverBg: "hover:bg-yellow-50",
      tagHoverText: "hover:text-yellow-500",
      borderAccent: "border-yellow-300",
      softBg: "bg-yellow-50/50"
    },
    {
      name: "Dr. Carlos Ruiz",
      role: "Psic\xF3logo Infantil",
      specialty: "Desarrollo Emocional",
      image: "/images/medic-4.jpg",
      tags: ["Conducta", "Terapia"],
      linkedin: "https://linkedin.com/in/carlos-ruiz",
      email: "cruiz@clinica.com",
      overlayFrom: "from-purple-300/80",
      accentText: "text-purple-400",
      accentRing: "focus-within:ring-purple-300",
      accentHoverBg: "hover:bg-purple-50",
      tagHoverText: "hover:text-purple-400",
      borderAccent: "border-purple-300",
      softBg: "bg-purple-50/50"
    }
  ];
  const beneficios = [
    {
      title: "Staff Colegiado",
      desc: "Especialistas certificados con a\xF1os de experiencia...",
      icon: "award",
      image: "/images/benefit-certified.jpg",
      overlayFrom: "from-green-300/90",
      iconColor: "text-green-400",
      ring: "focus-within:ring-green-300",
      descText: "text-green-50"
    },
    {
      title: "Atenci\xF3n Moderna",
      desc: "Equipamiento tecnol\xF3gico de \xFAltima generaci\xF3n...",
      icon: "sparkles",
      image: "/images/benefit-modern.jpg",
      overlayFrom: "from-blue-300/90",
      iconColor: "text-blue-400",
      ring: "focus-within:ring-blue-300",
      descText: "text-blue-50"
    },
    {
      title: "Enfoque Familiar",
      desc: "Entendemos que la salud de un ni\xF1o involucra...",
      icon: "users",
      image: "/images/benefit-family.jpg",
      overlayFrom: "from-purple-300/90",
      iconColor: "text-purple-400",
      ring: "focus-within:ring-purple-300",
      descText: "text-purple-50"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nuestro Equipo M\xE9dico", "description": "Conoce a los especialistas que conforman nuestro equipo m\xE9dico, dedicados a brindar el mejor cuidado a tus hijos. Profesionales certificados en pediatr\xEDa, odontolog\xEDa infantil y psicolog\xEDa infantil, comprometidos con la salud y bienestar de tu familia.", "data-astro-cid-eleh3l33": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Especialistas de Coraz\xF3n", "subtitle": "Profesionales certificados con un solo objetivo: el bienestar y la salud integral de tus hijos.", "backgroundImage": "/img/hero-equipo.jpg", "sideImage": "/img/hero-equipo.jpg", "data-astro-cid-eleh3l33": true })} ${maybeRenderHead()}<main class="main-section" data-astro-cid-eleh3l33> <span class="cloud cloud--1" aria-hidden="true" data-astro-cid-eleh3l33></span> <span class="cloud cloud--2" aria-hidden="true" data-astro-cid-eleh3l33></span> <span class="cloud cloud--3" aria-hidden="true" data-astro-cid-eleh3l33></span> <span class="cloud cloud--4" aria-hidden="true" data-astro-cid-eleh3l33></span> <span class="cloud cloud--5" aria-hidden="true" data-astro-cid-eleh3l33></span> <!-- Sección de doctores --> <section class="py-24 bg-white" data-astro-cid-eleh3l33> <div class="max-w-7xl mx-auto px-4" data-astro-cid-eleh3l33> <div class="text-center mb-16" data-astro-cid-eleh3l33> <!-- (Esto queda verde porque es título general, no por doctor) --> <span class="inline-block text-green-400 font-bold uppercase tracking-[0.3em] text-[11px] bg-green-50 px-4 py-2 rounded-lg mb-6" data-astro-cid-eleh3l33>
Nuestro Equipo
</span> <h2 class="text-4xl md:text-6xl font-bold text-gray-900 italic leading-tight" data-astro-cid-eleh3l33>
Profesionales Dedicados <br data-astro-cid-eleh3l33> <span class="text-green-400 not-italic" data-astro-cid-eleh3l33>al Cuidado Infantil</span> </h2> </div> <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10" data-astro-cid-eleh3l33> ${doctores.map((doc) => renderTemplate`<div${addAttribute([
    "group focus-within:ring-2 rounded-3xl",
    doc.accentRing
  ], "class:list")} role="article"${addAttribute(`Perfil de ${doc.name}`, "aria-label")} data-astro-cid-eleh3l33> <div class="relative overflow-hidden rounded-3xl mb-6 shadow-xl border border-gray-100 bg-gray-200 aspect-4/5" data-astro-cid-eleh3l33> <img${addAttribute(doc.image, "src")}${addAttribute(`Foto de ${doc.name}`, "alt")} class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale-20 group-hover:grayscale-0" loading="lazy" data-astro-cid-eleh3l33> <div${addAttribute([
    "absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-8",
    doc.overlayFrom
  ], "class:list")} data-astro-cid-eleh3l33> <div class="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300" data-astro-cid-eleh3l33> <a${addAttribute(doc.linkedin, "href")} target="_blank" rel="noopener noreferrer"${addAttribute([
    "w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all focus:ring-2",
    doc.accentText,
    doc.accentHoverBg
  ], "class:list")}${addAttribute(`LinkedIn de ${doc.name}`, "aria-label")} data-astro-cid-eleh3l33> <i data-lucide="linkedin" class="w-5 h-5" aria-hidden="true" data-astro-cid-eleh3l33></i> </a> <a${addAttribute(`mailto:${doc.email}`, "href")}${addAttribute([
    "w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all focus:ring-2",
    doc.accentText,
    doc.accentHoverBg
  ], "class:list")}${addAttribute(`Email de ${doc.name}`, "aria-label")} data-astro-cid-eleh3l33> <i data-lucide="mail" class="w-5 h-5" aria-hidden="true" data-astro-cid-eleh3l33></i> </a> </div> </div> </div> <div class="text-center lg:text-left" data-astro-cid-eleh3l33> <h3 class="text-2xl font-bold text-gray-900 mb-1" data-astro-cid-eleh3l33>${doc.name}</h3> <p${addAttribute(["font-bold text-sm mb-4 uppercase tracking-wide", doc.accentText], "class:list")} data-astro-cid-eleh3l33> ${doc.role} </p> <div${addAttribute(["p-4 rounded-2xl mb-5", doc.softBg], "class:list")} data-astro-cid-eleh3l33> <p${addAttribute(["text-gray-600 text-sm leading-relaxed italic border-l-2 pl-3", doc.borderAccent], "class:list")} data-astro-cid-eleh3l33>
"${doc.specialty}"
</p> </div> <div class="flex flex-wrap gap-2 justify-center lg:justify-start" data-astro-cid-eleh3l33> ${doc.tags.map((tag) => renderTemplate`<span${addAttribute([
    "px-3 py-1 bg-gray-100 text-gray-500 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-gray-200 transition-colors",
    doc.accentHoverBg,
    doc.tagHoverText
  ], "class:list")} data-astro-cid-eleh3l33> ${tag} </span>`)} </div> </div> </div>`)} </div> <!-- Sección de beneficios --> <div class="mt-32 grid md:grid-cols-3 gap-12 border-t border-gray-100 pt-20" data-astro-cid-eleh3l33> ${beneficios.map((ben) => renderTemplate`<div${addAttribute([
    "group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer focus-within:ring-2",
    ben.ring
  ], "class:list")} role="article"${addAttribute(`Beneficio: ${ben.title}`, "aria-label")} data-astro-cid-eleh3l33> <img${addAttribute(ben.image, "src")}${addAttribute(`Imagen de ${ben.title}`, "alt")} class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" data-astro-cid-eleh3l33> <div${addAttribute([
    "absolute inset-0 bg-linear-to-t to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6",
    ben.overlayFrom
  ], "class:list")} data-astro-cid-eleh3l33> <div${addAttribute(["w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 group-hover:animate-bounce", ben.iconColor], "class:list")} data-astro-cid-eleh3l33> <i${addAttribute(ben.icon, "data-lucide")} class="w-8 h-8" aria-hidden="true" data-astro-cid-eleh3l33></i> </div> <h4 class="text-xl font-bold text-white mb-2" data-astro-cid-eleh3l33>${ben.title}</h4> <p${addAttribute(["text-sm leading-relaxed", ben.descText], "class:list")} data-astro-cid-eleh3l33>${ben.desc}</p> </div> </div>`)} </div> </div> </section> </main> ` })} `;
}, "C:/Astro Clinica Pedriatia/Pediatria-Web/src/pages/equipo.astro", void 0);

const $$file = "C:/Astro Clinica Pedriatia/Pediatria-Web/src/pages/equipo.astro";
const $$url = "/equipo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Equipo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
