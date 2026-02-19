import { f as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_CymLUfwh.mjs';
import 'piccolore';
import { $ as $$Layout, a as siteConfig } from '../chunks/Layout_DyA1H_PA.mjs';
import { $ as $$Hero } from '../chunks/Hero_C2Q6SYSt.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  const colorClasses = {
    blue: {
      ring: "focus-within:ring-blue-300",
      from: "from-blue-300",
      fromWithOpacity: "from-blue-300/80",
      text100: "text-blue-50",
      text600: "text-blue-400"
    },
    pink: {
      ring: "focus-within:ring-pink-300",
      from: "from-pink-300",
      fromWithOpacity: "from-pink-300/80",
      text100: "text-pink-50",
      text600: "text-pink-400"
    },
    green: {
      ring: "focus-within:ring-green-300",
      from: "from-green-300",
      fromWithOpacity: "from-green-300/80",
      text100: "text-green-50",
      text600: "text-green-400"
    },
    purple: {
      ring: "focus-within:ring-purple-300",
      from: "from-purple-300",
      fromWithOpacity: "from-purple-300/80",
      text100: "text-purple-50",
      text600: "text-purple-400"
    }
  };
  const valores = [
    {
      title: "Innovaci\xF3n M\xE9dica",
      desc: "Equipamiento de \xFAltima generaci\xF3n para diagn\xF3sticos precisos desde el primer d\xEDa.",
      icon: "microscope",
      image: "/images/value-innovation.jpg",
      color: "blue"
    },
    {
      title: "Trato Humano",
      desc: "Un entorno dise\xF1ado para que los ni\xF1os se sientan en confianza, como en casa.",
      icon: "heart",
      image: "/images/value-care.jpg",
      color: "pink"
    },
    {
      title: "Seguridad Infantil",
      desc: "Instalaciones bajo est\xE1ndares internacionales de seguridad pedi\xE1trica.",
      icon: "shield-check",
      image: "/images/value-safety.jpg",
      color: "green"
    },
    {
      title: "Compromiso Familiar",
      desc: "Acompa\xF1amos a los padres en cada etapa del desarrollo de sus hijos.",
      icon: "users",
      image: "/images/value-family.jpg",
      color: "purple"
    }
  ];
  const nosotrosvm = {
    vision: "Ser el hogar de salud donde cada ni\xF1o crezca sano, pleno y feliz, transformando la experiencia m\xE9dica en un momento de confianza y bienestar para toda la familia.",
    mision: `En ${siteConfig.name}, brindamos atenci\xF3n pedi\xE1trica integral de excelencia, combinando calidez humana con tecnolog\xEDa avanzada. Nos dedicamos a proteger la salud infantil en un entorno dise\xF1ado para que los m\xE1s peque\xF1os se sientan seguros, comprendidos y cuidados.`
  };
  const galleryImages = [
    "/images/clinic-4.jpg",
    "/images/clinic-5.jpg",
    "/images/clinic-6.jpg"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sobre Nosotros", "description": "Conoce la historia, misi\xF3n y visi\xF3n de nuestra cl\xEDnica pedi\xE1trica. Descubre c\xF3mo cuidamos de tus hijos con amor y profesionalismo.", "data-astro-cid-noeej2nj": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Un nuevo concepto en salud infantil", "subtitle": "Abrimos nuestras puertas para ofrecer a tu familia la atenci\xF3n m\xE9dica que siempre so\xF1aste: moderna, humana y especializada.", "backgroundImage": "/img/hero-nosotros.jpg", "sideImage": "/img/hero-nosotros.jpg", "data-astro-cid-noeej2nj": true })}  ${maybeRenderHead()}<main class="main-section" data-astro-cid-noeej2nj> <span class="cloud cloud--1" aria-hidden="true" data-astro-cid-noeej2nj></span> <span class="cloud cloud--2" aria-hidden="true" data-astro-cid-noeej2nj></span> <span class="cloud cloud--3" aria-hidden="true" data-astro-cid-noeej2nj></span> <span class="cloud cloud--4" aria-hidden="true" data-astro-cid-noeej2nj></span> <span class="cloud cloud--5" aria-hidden="true" data-astro-cid-noeej2nj></span> <section class="py-24 bg-white overflow-hidden" data-astro-cid-noeej2nj> <div class="max-w-7xl mx-auto px-4" data-astro-cid-noeej2nj> <div class="grid lg:grid-cols-2 gap-16 items-center" data-astro-cid-noeej2nj> <div class="relative reveal-left" data-astro-cid-noeej2nj> <div class="absolute -top-10 -left-10 w-64 h-64 bg-pink-100 rounded-full blur-3xl" data-astro-cid-noeej2nj></div> <div class="relative z-10" data-astro-cid-noeej2nj> <img src="images/clinic-prinspl.jpg" alt="Nuestra nueva clínica" class="rounded-3xl shadow-2xl border border-gray-100" loading="lazy" data-astro-cid-noeej2nj> <div class="absolute -bottom-6 -right-6 bg-pink-300 p-8 rounded-3xl text-white z-20 shadow-xl animate-bounce-soft" data-astro-cid-noeej2nj> <p class="text-xs font-bold uppercase tracking-widest opacity-80 mb-1" data-astro-cid-noeej2nj>Estamos listos</p> <p class="text-2xl font-bold" data-astro-cid-noeej2nj>¡Te Esperamos!</p> </div> </div> </div> <div class="space-y-8 reveal-right" data-astro-cid-noeej2nj> <div data-astro-cid-noeej2nj> <span class="text-pink-400 font-bold uppercase tracking-widest text-sm animate-bounce-soft inline-block" data-astro-cid-noeej2nj>Nuestro Propósito</span> <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight italic" data-astro-cid-noeej2nj>
Diseñamos la clínica <br data-astro-cid-noeej2nj> <span class="text-pink-400 not-italic" data-astro-cid-noeej2nj>que tus hijos merecen</span> </h2> </div> <p class="text-lg text-gray-600 leading-relaxed animate-slide-up" style="animation-delay: 0.2s;" data-astro-cid-noeej2nj>
La <strong data-astro-cid-noeej2nj>${siteConfig.name}</strong> nace con el objetivo 
              de ser el centro de referencia en salud infantil. 
              Priorizamos la seguridad y el bienestar emocional 
              en cada uno de nuestros espacios.
</p> <div class="grid grid-cols-3 gap-4" data-astro-cid-noeej2nj> ${galleryImages.map((image, index) => renderTemplate`<img${addAttribute(image, "src")}${addAttribute(`Vista de la cl\xEDnica ${index + 1}`, "alt")} class="rounded-2xl shadow-lg hover:scale-105 transition-transform reveal stagger-\${index + 1}" loading="lazy" data-astro-cid-noeej2nj>`)} </div> </div> </div> </div> </section> <!-- Sección de Visión y Misión --> <section class="py-2 bg-linear-to-br via-white to-pink-50/30" data-astro-cid-noeej2nj> <div class="max-w-7xl mx-auto px-4" data-astro-cid-noeej2nj> <div class="text-center mb-16 reveal" data-astro-cid-noeej2nj> <span class="text-pink-400 font-bold uppercase tracking-widest text-sm animate-bounce-soft inline-block" data-astro-cid-noeej2nj>Nuestra Esencia</span> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mt-4 tracking-tight italic" data-astro-cid-noeej2nj>Visión y Misión</h2> </div> <div class="grid md:grid-cols-2 gap-8" data-astro-cid-noeej2nj> <!-- Visión --> <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 reveal hover-lift border border-pink-200" data-astro-cid-noeej2nj> <div class="flex flex-row items-center gap-4" data-astro-cid-noeej2nj> <div class="w-16 h-16 bg-pink-200 rounded-2xl flex items-center justify-center text-pink-400 group-hover:animate-bounce" data-astro-cid-noeej2nj> <i data-lucide="eye" class="w-8 h-8" aria-hidden="true" data-astro-cid-noeej2nj></i> </div> <h3 class="text-2xl font-bold text-gray-900" data-astro-cid-noeej2nj>Visión</h3> </div> <p class="text-gray-600 leading-relaxed text-lg mt-6" data-astro-cid-noeej2nj>${nosotrosvm.vision}</p> </div> <!-- Misión --> <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 reveal hover-lift border border-pink-200" style="animation-delay: 0.2s;" data-astro-cid-noeej2nj> <div class="flex flex-row items-center gap-4" data-astro-cid-noeej2nj> <div class="w-16 h-16 bg-pink-200 rounded-2xl flex items-center justify-center text-pink-400 group-hover:animate-bounce" data-astro-cid-noeej2nj> <i data-lucide="target" class="w-8 h-8" aria-hidden="true" data-astro-cid-noeej2nj></i> </div> <h3 class="text-2xl font-bold text-gray-900" data-astro-cid-noeej2nj>Misión</h3> </div> <p class="text-gray-600 leading-relaxed text-lg mt-6" data-astro-cid-noeej2nj>${nosotrosvm.mision}</p> </div> </div> </div> </section> <!-- Sección de valores: Cards con imágenes y overlays --> <section class="py-24 bg-gray-50 rounded-t-3xl lg:rounded-t-5xl" data-astro-cid-noeej2nj> <div class="max-w-7xl mx-auto px-4" data-astro-cid-noeej2nj> <div class="text-center mb-16 reveal" data-astro-cid-noeej2nj> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight italic" data-astro-cid-noeej2nj>¿Por qué confiar <br data-astro-cid-noeej2nj><span class="text-pink-400 not-italic" data-astro-cid-noeej2nj>en nosotros?</span></h2> <p class="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed" data-astro-cid-noeej2nj>Combinamos excelencia médica con un entorno cálido y profesional.</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-noeej2nj> ${valores.map((v, index) => {
    const colors = colorClasses[v.color];
    return renderTemplate`<div${addAttribute(`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer focus-within:ring-2 ${colors.ring} reveal stagger-${index + 1} hover-lift card-shine`, "class")} role="article"${addAttribute(`Valor: ${v.title}`, "aria-label")} data-astro-cid-noeej2nj> <img${addAttribute(v.image, "src")}${addAttribute(`Imagen de ${v.title}`, "alt")} class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" data-astro-cid-noeej2nj> <div${addAttribute(`absolute inset-0 bg-linear-to-t ${colors.fromWithOpacity} to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6`, "class")} data-astro-cid-noeej2nj> <div${addAttribute(`w-14 h-14 bg-white rounded-2xl flex items-center justify-center ${colors.text600} mb-4 group-hover:animate-bounce`, "class")} data-astro-cid-noeej2nj> <i${addAttribute(v.icon, "data-lucide")} class="w-7 h-7" aria-hidden="true" data-astro-cid-noeej2nj></i> </div> <h3 class="text-xl font-bold text-white mb-2" data-astro-cid-noeej2nj>${v.title}</h3> <p${addAttribute(`${colors.text100} text-sm`, "class")} data-astro-cid-noeej2nj>${v.desc}</p> </div> </div>`;
  })} </div> <div class="mt-20 text-center reveal" data-astro-cid-noeej2nj> <p class="text-gray-500 mb-6" data-astro-cid-noeej2nj>Conoce cómo podemos cuidar de tus hijos</p> <a href="/servicios" class="inline-flex items-center gap-2 text-pink-400 font-bold text-lg hover:gap-4 hover:text-pink-500 transition-all animate-float" aria-label="Explorar especialidades" data-astro-cid-noeej2nj>
Explorar nuestras especialidades
<i data-lucide="arrow-right" class="w-6 h-6" aria-hidden="true" data-astro-cid-noeej2nj></i> </a> </div> </div> </section> </main> ` })} ${renderScript($$result, "C:/Astro Clinica Pedriatia/Pediatria-Web/src/pages/nosotros.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Astro Clinica Pedriatia/Pediatria-Web/src/pages/nosotros.astro", void 0);

const $$file = "C:/Astro Clinica Pedriatia/Pediatria-Web/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Nosotros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
