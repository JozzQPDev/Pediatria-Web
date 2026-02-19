import { f as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, k as renderComponent, l as renderScript } from '../chunks/astro/server_CymLUfwh.mjs';
import 'piccolore';
import { a as siteConfig, $ as $$Layout } from '../chunks/Layout_DyA1H_PA.mjs';
import 'clsx';
/* empty css                                 */
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useCallback, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div id="myModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm justify-center items-center z-50 hidden animate-fadeIn overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="modal-title" data-astro-cid-mmc7otgs> <!-- Elementos decorativos de fondo --> <div class="absolute inset-0 overflow-hidden pointer-events-none" data-astro-cid-mmc7otgs> <div class="absolute -top-20 -left-20 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl animate-pulse" data-astro-cid-mmc7otgs></div> <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;" data-astro-cid-mmc7otgs></div> </div> <div class="relative z-10 bg-linear-to-br from-[#00A89E] via-[#00B5A7] to-[#00A89E] p-6 md:p-8 lg:p-10 rounded-4xl max-w-3xl w-full mx-4 shadow-2xl border border-white/20 animate-slideIn" data-astro-cid-mmc7otgs> <!-- Bot\xF3n de cierre mejorado --> <button id="closeModal" class="absolute -top-4 -right-4 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-[#FF4B5C] hover:scale-110 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold shadow-xl transition-all duration-300 z-50 border-2 border-white/30 backdrop-blur-sm focus:outline-none group" aria-label="Cerrar modal" type="button" data-astro-cid-mmc7otgs> <span class="group-hover:rotate-90 transition-transform duration-300" data-astro-cid-mmc7otgs>&times;</span> </button> <!-- Contenido principal --> <div class="flex flex-col lg:flex-row items-center gap-6 lg:gap-8" data-astro-cid-mmc7otgs> <!-- Imagen con marco decorativo --> <div class="shrink-0 relative" data-astro-cid-mmc7otgs> <div class="absolute inset-0 bg-white/30 rounded-3xl transform rotate-3 scale-105" data-astro-cid-mmc7otgs></div> <div class="relative bg-white/10 rounded-3xl p-2 backdrop-blur-sm" data-astro-cid-mmc7otgs> <img src="/images/welcome.png" alt="Imagen de bienvenida" class="w-40 h-40 md:w-48 md:h-48 lg:h-56 rounded-2xl object-cover shadow-lg" loading="lazy" data-astro-cid-mmc7otgs> </div> <!-- Badge decorativo (ANTES: \u2764\uFE0F) --> <div class="absolute -bottom-3 -right-3 bg-white text-[#00A89E] px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1" data-astro-cid-mmc7otgs> <i data-lucide="heart" class="w-4 h-4" data-astro-cid-mmc7otgs></i> <span data-astro-cid-mmc7otgs>#1 en Pedi\xE1trica</span> </div> </div> <!-- Texto y CTA --> <div class="text-center flex-1" data-astro-cid-mmc7otgs> <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4" data-astro-cid-mmc7otgs> <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse" data-astro-cid-mmc7otgs></span> <span class="text-white/90 text-sm font-medium" data-astro-cid-mmc7otgs>Atenci\xF3n disponible</span> </div> <h2 id="modal-title" class="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight" data-astro-cid-mmc7otgs>\n\xA1Bienvenido a <br data-astro-cid-mmc7otgs> <span class="text-white drop-shadow-lg" data-astro-cid-mmc7otgs>', '</span> </h2> <p class="text-white/90 md:text-lg leading-relaxed mb-6 max-w-md mx-auto" data-astro-cid-mmc7otgs> ', ' </p> <!-- Features highlights (ANTES: \u{1F476} \u{1F3E5} \u{1F49A}) --> <div class="flex flex-wrap justify-center gap-3 mb-6 md:mb-8" data-astro-cid-mmc7otgs> <div class="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full text-white/90 text-xs md:text-sm" data-astro-cid-mmc7otgs> <i data-lucide="baby" class="w-5 h-5" data-astro-cid-mmc7otgs></i> <span data-astro-cid-mmc7otgs>Cuidado infantil</span> </div> <div class="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full text-white/90 text-xs md:text-sm" data-astro-cid-mmc7otgs> <i data-lucide="hospital" class="w-5 h-5" data-astro-cid-mmc7otgs></i> <span data-astro-cid-mmc7otgs>Especialistas</span> </div> <div class="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full text-white/90 text-xs md:text-sm" data-astro-cid-mmc7otgs> <i data-lucide="heart-handshake" class="w-5 h-5" data-astro-cid-mmc7otgs></i> <span data-astro-cid-mmc7otgs>Amor + Profesionalismo</span> </div> </div> <button id="closeBtn" class="group relative bg-white text-[#00A89E] px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 overflow-hidden" type="button" data-astro-cid-mmc7otgs> <span class="relative z-10 flex items-center gap-2" data-astro-cid-mmc7otgs>\n\xA1Empezar!\n<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-mmc7otgs> <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-mmc7otgs></path> </svg> </span> <div class="absolute inset-0 bg-linear-to-r from-teal-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" data-astro-cid-mmc7otgs></div> </button> </div> <!-- Elementos decorativos del lado (ANTES: \u2B50 \u{1F49D} \u2728) --> <div class="hidden lg:flex flex-col items-center gap-4 animate-float text-white" data-astro-cid-mmc7otgs> <div class="opacity-30 hover:opacity-60 transition-opacity cursor-default" data-astro-cid-mmc7otgs> <i data-lucide="star" class="w-10 h-10" data-astro-cid-mmc7otgs></i> </div> <div class="opacity-20 hover:opacity-50 transition-opacity cursor-default" style="animation-delay: 0.5s;" data-astro-cid-mmc7otgs> <i data-lucide="gift" class="w-8 h-8" data-astro-cid-mmc7otgs></i> </div> <div class="opacity-15 hover:opacity-40 transition-opacity cursor-default" style="animation-delay: 1s;" data-astro-cid-mmc7otgs> <i data-lucide="sparkles" class="w-6 h-6" data-astro-cid-mmc7otgs></i> </div> </div> </div> <!-- Barra inferior con info de contacto --> <div class="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/20" data-astro-cid-mmc7otgs> <div class="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-white/80 text-xs md:text-sm" data-astro-cid-mmc7otgs> <a', ' target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 hover:text-white transition-colors" data-astro-cid-mmc7otgs> <!-- WhatsApp icon (ya era SVG) --> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-mmc7otgs> <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-mmc7otgs></path> </svg>\nCont\xE1ctanos\n</a> <span class="hidden md:inline text-white/40" data-astro-cid-mmc7otgs>|</span> <span class="flex items-center gap-1.5" data-astro-cid-mmc7otgs> <!-- Clock icon (ya era SVG) --> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-mmc7otgs> <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-mmc7otgs></path> </svg> ', " </span> </div> </div> </div> </div>  <script>\n  const modal = document.getElementById('myModal');\n  const closeBtn = document.getElementById('closeBtn');\n  const closeX = document.getElementById('closeModal');\n\n  const renderLucideIcons = () => {\n    // Lucide (CDN) expone window.lucide\n    if (typeof window !== 'undefined' && typeof window.lucide !== 'undefined') {\n      window.lucide.createIcons();\n    }\n  };\n\n  if (modal && closeBtn && closeX) {\n    const closeModal = () => {\n      modal.classList.add('animate-fadeOut');\n      setTimeout(() => {\n        modal.classList.add('hidden');\n        modal.classList.remove('flex');\n      }, 300);\n    };\n\n    // Muestra el modal en cada recarga\n    modal.classList.remove('hidden');\n    modal.classList.add('flex');\n\n    // Renderiza \xEDconos Lucide una vez que el modal est\xE1 en el DOM visible\n    renderLucideIcons();\n\n    // Enfocar CTA\n    closeBtn.focus();\n\n    // Cierre autom\xE1tico en 8 segundos\n    const autoCloseTimeout = setTimeout(() => {\n      closeModal();\n    }, 8000);\n\n    const handleClose = () => {\n      clearTimeout(autoCloseTimeout);\n      closeModal();\n    };\n\n    closeBtn.addEventListener('click', handleClose);\n    closeX.addEventListener('click', handleClose);\n\n    // Cierra con Escape\n    document.addEventListener('keydown', (e) => {\n      if (e.key === 'Escape') handleClose();\n    });\n\n    // Cerrar al hacer clic fuera del modal\n    modal.addEventListener('click', (e) => {\n      if (e.target === modal) handleClose();\n    });\n\n    // Por si Lucide carga tarde (CDN), reintenta un momento despu\xE9s\n    setTimeout(renderLucideIcons, 50);\n    setTimeout(renderLucideIcons, 250);\n  }\n<\/script>"])), maybeRenderHead(), siteConfig.name, siteConfig.tagline, addAttribute(siteConfig.contact.whatsappUrl, "href"), siteConfig.schedule.weekdays);
}, "C:/Astro Clinica Pedriatia/Pediatria-Web/src/components/Welcome.astro", void 0);

function TestimonialsCarousel({ testimonials = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState("next");
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);
  const minSwipeDistance = 50;
  const defaultTestimonials = [
    {
      name: "María López",
      role: "Madre de Sofía (3 años)",
      quote: "La atención en la clínica es increíble. Mi hija se siente segura y los doctores son muy cariñosos.",
      image: "/images/testimonial-1.jpg",
      rating: 5
    },
    {
      name: "Carlos Ramírez",
      role: "Padre de Mateo (1 año)",
      quote: "Recomiendo esta clínica por su tecnología y calidez. Siempre nos sentimos en familia.",
      image: "/images/testimonial-2.jpg",
      rating: 5
    },
    {
      name: "Ana Torres",
      role: "Madre de Lucas (5 años)",
      quote: "El control de crecimiento de mi hijo ha sido perfecto. Profesionales de primera.",
      image: "/images/testimonial-3.jpg",
      rating: 5
    }
  ];
  const items = testimonials.length > 0 ? testimonials : defaultTestimonials;
  const totalItems = items.length;
  const nextSlide = useCallback(() => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);
  const prevSlide = useCallback(() => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);
  const goToSlide = (index) => {
    setDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
  };
  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
      autoPlayRef.current = setInterval(nextSlide, 5e3);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isPaused, nextSlide]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
        setIsPaused(true);
      } else if (e.key === "ArrowRight") {
        nextSlide();
        setIsPaused(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [currentIndex]);
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    setTimeout(() => setIsPaused(false), 1e3);
  };
  const getSlideStyles = (index) => {
    const diff = index - currentIndex;
    const normalizedDiff = (diff + totalItems) % totalItems;
    let translateX = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 1;
    if (normalizedDiff === 0) {
      translateX = 0;
      scale = 1;
      opacity = 1;
      zIndex = 3;
    } else if (normalizedDiff === 1 || normalizedDiff === -totalItems + 1) {
      translateX = 100;
      scale = 0.85;
      opacity = 0.5;
      zIndex = 2;
    } else if (normalizedDiff === totalItems - 1 || normalizedDiff === -1) {
      translateX = -100;
      scale = 0.85;
      opacity = 0.5;
      zIndex = 2;
    } else {
      translateX = normalizedDiff > totalItems / 2 ? -200 : 200;
      scale = 0.7;
      opacity = 0;
      zIndex = 1;
    }
    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      opacity,
      zIndex,
      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
    };
  };
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ jsx(
      "i",
      {
        "data-lucide": "star",
        className: `w-4 h-4 ${i < rating ? "text-yellow-300 fill-yellow-300" : "text-gray-300"}`
      },
      i
    ));
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 italic mb-4", children: [
        "Lo que dicen ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-orange-300 not-italic", children: "nuestras familias" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "Descubre por qué miles de familias confían en nosotros para el cuidado de sus pequeños" })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: containerRef,
        className: "relative max-w-6xl mx-auto px-4 md:px-12",
        onMouseEnter: () => setIsPaused(true),
        onMouseLeave: () => setIsPaused(false),
        onTouchStart,
        onTouchMove,
        onTouchEnd,
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                prevSlide();
                setIsPaused(true);
              },
              className: "absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-pink-400 hover:shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-200",
              "aria-label": "Testimonio anterior",
              children: /* @__PURE__ */ jsx("i", { "data-lucide": "chevron-left", className: "w-6 h-6" })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                nextSlide();
                setIsPaused(true);
              },
              className: "absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-pink-400 hover:shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-200",
              "aria-label": "Siguiente testimonio",
              children: /* @__PURE__ */ jsx("i", { "data-lucide": "chevron-right", className: "w-6 h-6" })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "relative h-100 md:h-87.5 overflow-hidden", children: items.map((testimonial, index) => /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 flex items-center justify-center p-4",
              style: getSlideStyles(index),
              children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl shadow-xl p-8 md:p-10 max-w-2xl w-full border border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative shrink-0", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-pink-200 shadow-lg", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: testimonial.image,
                      alt: `Foto de ${testimonial.name}`,
                      className: "w-full h-full object-cover",
                      loading: "lazy"
                    }
                  ) }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -right-2 w-10 h-10 bg-pink-300 rounded-full flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx("i", { "data-lucide": "quote", className: "w-5 h-5 text-white" }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center md:text-left", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center md:justify-start gap-1 mb-3", children: renderStars(testimonial.rating || 5) }),
                  /* @__PURE__ */ jsxs("blockquote", { className: "text-gray-700 text-lg italic mb-4 leading-relaxed", children: [
                    '"',
                    testimonial.quote,
                    '"'
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "font-bold text-gray-900 text-lg", children: testimonial.name }),
                    /* @__PURE__ */ jsx("p", { className: "text-pink-400 font-medium", children: testimonial.role })
                  ] })
                ] })
              ] }) })
            },
            index
          )) }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-3 mt-8", children: items.map((_, index) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                goToSlide(index);
                setIsPaused(true);
              },
              className: `transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-200 ${index === currentIndex ? "w-8 h-3 bg-pink-300" : "w-3 h-3 bg-gray-300 hover:bg-pink-200"}`,
              "aria-label": `Ir al testimonio ${index + 1}`,
              "aria-current": index === currentIndex ? "true" : "false"
            },
            index
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mt-4", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setIsAutoPlaying(!isAutoPlaying),
                className: "flex items-center gap-2 text-sm text-gray-500 hover:text-pink-400 transition-colors",
                children: isAutoPlaying ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("i", { "data-lucide": "pause", className: "w-4 h-4" }),
                  /* @__PURE__ */ jsx("span", { children: "Pausar" })
                ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("i", { "data-lucide": "play", className: "w-4 h-4" }),
                  /* @__PURE__ */ jsx("span", { children: "Reproducir" })
                ] })
              }
            ),
            isAutoPlaying && !isPaused && /* @__PURE__ */ jsx("div", { className: "w-16 h-1 bg-gray-200 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "h-full bg-pink-300 rounded-full animate-progress",
                style: {
                  animation: "progress 5s linear infinite"
                }
              }
            ) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        .animate-progress {
          animation: progress 5s linear infinite;
        }
      ` })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const quickServices = [
    {
      title: "Control de Crecimiento",
      icon: "baby",
      desc: "Seguimiento especializado del desarrollo f\xEDsico y motor de tu peque\xF1o.",
      image: "/images/service-growth.jpg",
      color: "bg-pink-300/30",
      // icono pastel
      hoverColor: "group-hover:bg-pink-300 group-hover:border-pink-200",
      // icono hover pastel
      buttonColor: "bg-pink-400/80",
      // botón pastel
      buttonHover: "hover:bg-pink-300",
      // botón hover pastel
      overlayColor: "from-pink-900/80 via-pink-900/40 to-transparent",
      // overlay
      cardColor: "bg-pink-50/30",
      // fondo tarjeta pastel
      cardHover: "hover:shadow-pink-200/50"
      // sombra hover tarjeta pastel
    },
    {
      title: "Vacunaci\xF3n Integral",
      icon: "syringe",
      desc: "Esquema completo de vacunas en un ambiente seguro y tranquilo.",
      image: "/images/service-vaccine.jpg",
      color: "bg-yellow-300/30",
      hoverColor: "group-hover:bg-yellow-300 group-hover:border-yellow-200",
      buttonColor: "bg-yellow-400/80",
      buttonHover: "hover:bg-yellow-300",
      overlayColor: "from-yellow-900/80 via-yellow-900/40 to-transparent",
      cardColor: "bg-yellow-50/30",
      cardHover: "hover:shadow-yellow-200/50"
    },
    {
      title: "Nutrici\xF3n Infantil",
      icon: "apple",
      desc: "Especialistas en crear h\xE1bitos saludables desde la primera infancia.",
      image: "/images/service-nutrition.jpg",
      color: "bg-green-300/30",
      hoverColor: "group-hover:bg-green-300 group-hover:border-green-200",
      buttonColor: "bg-green-400/80",
      buttonHover: "hover:bg-green-300",
      overlayColor: "from-green-900/80 via-green-900/40 to-transparent",
      cardColor: "bg-green-50/30",
      cardHover: "hover:shadow-green-200/50"
    },
    {
      title: "Urgencias 24h",
      icon: "ambulance",
      desc: "Atenci\xF3n m\xE9dica inmediata con protocolos de respuesta r\xE1pida.",
      image: "/images/service-emergency.jpg",
      color: "bg-blue-300/30",
      hoverColor: "group-hover:bg-blue-300 group-hover:border-blue-200",
      buttonColor: "bg-blue-400/80",
      buttonHover: "hover:bg-blue-300",
      overlayColor: "from-blue-900/80 via-blue-900/40 to-transparent",
      cardColor: "bg-blue-50/30",
      cardHover: "hover:shadow-blue-200/50"
    }
  ];
  const allBenefits = [
    {
      id: 0,
      title: "Infraestructura dise\xF1ada",
      subtitle: "para su bienestar",
      desc: [
        "Nuestra cl\xEDnica ofrece un entorno seguro, c\xE1lido y acogedor, especialmente dise\xF1ado para el desarrollo integral de los ni\xF1os desde sus primeros a\xF1os.",
        "Contamos con instalaciones modernas equipadas con tecnolog\xEDa m\xE9dica de vanguardia, consultorios pedi\xE1tricos adaptados y \xE1reas de espera amigables para reducir el estr\xE9s infantil.",
        "Cada espacio ha sido pensado para brindar comodidad tanto a los pacientes como a sus familias, promoviendo una experiencia tranquila y positiva.",
        "Aplicamos estrictos protocolos de bioseguridad, limpieza y control sanitario que garantizan una atenci\xF3n confiable, humana y de alta calidad en cada visita."
      ],
      image: "/images/clinica-home1.jpg"
    },
    {
      id: 1,
      title: "Infraestructura Moderna",
      subtitle: "con tecnolog\xEDa avanzada",
      desc: [
        "Ambientes cl\xEDnicos dise\xF1ados bajo est\xE1ndares internacionales de bioseguridad, higiene y confort.",
        "Equipamiento m\xE9dico moderno que permite diagn\xF3sticos precisos y tratamientos oportunos.",
        "Salas climatizadas, se\xF1alizaci\xF3n clara y accesibilidad pensada para ni\xF1os y padres.",
        "Mantenimiento constante y protocolos de limpieza permanente para la tranquilidad de su familia."
      ],
      image: "/images/clinic-1.jpg"
    },
    {
      id: 2,
      title: "Especialistas Certificados",
      subtitle: "atenci\xF3n confiable",
      desc: [
        "Staff m\xE9dico conformado por pediatras certificados y especialistas en cuidado infantil.",
        "Alta formaci\xF3n acad\xE9mica respaldada por experiencia cl\xEDnica y actualizaci\xF3n constante.",
        "Enfoque humano y emp\xE1tico en cada consulta, priorizando el bienestar emocional del ni\xF1o.",
        "Compromiso con una atenci\xF3n \xE9tica, profesional y personalizada para cada paciente."
      ],
      image: "/images/benefit-certified.jpg"
    },
    {
      id: 3,
      title: "Gesti\xF3n Digital",
      subtitle: "tr\xE1mites r\xE1pidos y f\xE1ciles",
      desc: [
        "Sistema de gesti\xF3n digital que optimiza tiempos y mejora la experiencia del paciente.",
        "Historias cl\xEDnicas electr\xF3nicas seguras y accesibles desde cualquier dispositivo.",
        "Agendamiento de citas en l\xEDnea y seguimiento m\xE9dico continuo.",
        "Acceso r\xE1pido a resultados, indicaciones y recomendaciones m\xE9dicas desde tu celular."
      ],
      image: "/images/value-innovation.jpg"
    }
  ];
  const testimonials = [
    {
      name: "Mar\xEDa L\xF3pez",
      role: "Madre de Sof\xEDa (3 a\xF1os)",
      quote: "La atenci\xF3n en la cl\xEDnica es incre\xEDble. Mi hija se siente segura y los doctores son muy cari\xF1osos.",
      image: "/images/testimonial-1.jpg"
    },
    {
      name: "Carlos Ram\xEDrez",
      role: "Padre de Mateo (1 a\xF1o)",
      quote: "Recomiendo esta cl\xEDnica por su tecnolog\xEDa y calidez. Siempre nos sentimos en familia.",
      image: "/images/testimonial-2.jpg"
    },
    {
      name: "Ana Torres",
      role: "Madre de Lucas (5 a\xF1os)",
      quote: "El control de crecimiento de mi hijo ha sido perfecto. Profesionales de primera.",
      image: "/images/testimonial-3.jpg"
    }
  ];
  const galleryImages = [
    "/images/clinic-1.jpg",
    "/images/clinic-2.jpg",
    "/images/clinic-3.jpg",
    "/images/clinic-4.jpg"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Inicio`, "description": `Bienvenido a nuestra cl\xEDnica pedi\xE1trica en ${siteConfig.location.city}, donde la salud y el bienestar de tus hijos son nuestra prioridad. Descubre un entorno seguro, moderno y acogedor dise\xF1ado para brindar atenci\xF3n m\xE9dica integral a los m\xE1s peque\xF1os de la casa. Con especialistas certificados, tecnolog\xEDa avanzada y un enfoque humano, ofrecemos servicios que acompa\xF1an cada etapa del crecimiento infantil. Tu tranquilidad comienza aqu\xED, en un lugar donde cada sonrisa cuenta.`, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, { "data-astro-cid-j7pv25f6": true })}  ${maybeRenderHead()}<section id="hero-parallax" class="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900 -mt-16 sm:-mt-20" data-astro-cid-j7pv25f6> <div class="absolute inset-0 z-0" id="carousel-bg" data-astro-cid-j7pv25f6> <div class="carousel-slide absolute inset-0 opacity-100 transition-opacity duration-1000" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-cover bg-center animate-ken-burns" style="background-image: url('/images/hero-pediatric.jpg');" data-astro-cid-j7pv25f6></div> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/benefit-modern.jpg');" data-astro-cid-j7pv25f6></div> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/contact-emergency.jpg');" data-astro-cid-j7pv25f6></div> </div> </div> <div class="absolute inset-0 z-10 pointer-events-none select-none" id="parallax-icons" data-astro-cid-j7pv25f6> <div class="absolute top-[15%] left-[10%] parallax-layer" data-speed="2" data-astro-cid-j7pv25f6> <i data-lucide="baby" class="w-16 h-16 text-yellow-200/40 animate-float" data-astro-cid-j7pv25f6></i> </div> <div class="absolute top-[20%] right-[15%] parallax-layer" data-speed="-3" data-astro-cid-j7pv25f6> <i class="bi bi-heart-fill text-4xl text-pink-300/30 animate-float-delayed" data-astro-cid-j7pv25f6></i> </div> <div class="absolute bottom-[20%] left-[15%] parallax-layer" data-speed="4" data-astro-cid-j7pv25f6> <i data-lucide="stethoscope" class="w-12 h-12 text-white/20 animate-float-slow -rotate-12" data-astro-cid-j7pv25f6></i> </div> <div class="absolute bottom-[25%] right-[10%] parallax-layer" data-speed="-2" data-astro-cid-j7pv25f6> <i class="bi bi-star-fill text-3xl text-yellow-100/30 animate-float" data-astro-cid-j7pv25f6></i> </div> </div> <div class="relative z-20 text-center text-white px-6 max-w-5xl mx-auto" data-astro-cid-j7pv25f6> <span class="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.2em] uppercase bg-white/10 backdrop-blur-md border border-white/20 rounded-full animate-fade-in" data-astro-cid-j7pv25f6> <i class="bi bi-shield-check text-yellow-200" data-astro-cid-j7pv25f6></i> Especialistas en pediatría
</span> <h1 class="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 animate-slide-up" data-astro-cid-j7pv25f6>
Atención pediátrica <br data-astro-cid-j7pv25f6> <span class="bg-linear-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent italic font-serif py-2" data-astro-cid-j7pv25f6>
con corazón
</span> </h1> <p class="text-xl md:text-2xl font-light mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-200" data-astro-cid-j7pv25f6>
Cuidamos lo que más amas con tecnología moderna y un trato <strong data-astro-cid-j7pv25f6>dulce y humano.</strong> </p> <div class="flex flex-col sm:flex-row gap-5 justify-center items-center animate-slide-up animation-delay-400" data-astro-cid-j7pv25f6> <a href="#" class="group relative bg-white text-pink-500 px-12 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_20px_50px_rgba(255,182,193,0.4)]" data-astro-cid-j7pv25f6> <span class="relative z-10 flex items-center gap-3" data-astro-cid-j7pv25f6> <i class="bi bi-whatsapp text-xl" data-astro-cid-j7pv25f6></i> Reservar Cita
</span> <div class="absolute inset-0 bg-linear-to-r from-transparent via-pink-100/50 to-transparent -translate-x-full group-hover:animate-shimmer" data-astro-cid-j7pv25f6></div> </a> <a href="#nosotros" class="px-10 py-5 rounded-2xl font-bold text-lg text-white border-2 border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all flex items-center gap-2" data-astro-cid-j7pv25f6> <i class="bi bi-info-circle" data-astro-cid-j7pv25f6></i> Conócenos
</a> </div> </div> </section> <main class="main-section overflow-hidden bg-white" data-astro-cid-j7pv25f6> <span class="cloud cloud--1" aria-hidden="true" data-astro-cid-j7pv25f6></span> <span class="cloud cloud--2" aria-hidden="true" data-astro-cid-j7pv25f6></span> <span class="cloud cloud--3" aria-hidden="true" data-astro-cid-j7pv25f6></span> <span class="cloud cloud--4" aria-hidden="true" data-astro-cid-j7pv25f6></span> <span class="cloud cloud--5" aria-hidden="true" data-astro-cid-j7pv25f6></span> <span class="cloud cloud--6" aria-hidden="true" data-astro-cid-j7pv25f6></span> <span class="cloud cloud--7" aria-hidden="true" data-astro-cid-j7pv25f6></span> <span class="cloud cloud--8" aria-hidden="true" data-astro-cid-j7pv25f6></span> <span class="cloud cloud--9" aria-hidden="true" data-astro-cid-j7pv25f6></span> <span class="cloud cloud--10" aria-hidden="true" data-astro-cid-j7pv25f6></span> <span class="cloud cloud--11" aria-hidden="true" data-astro-cid-j7pv25f6></span> <span class="cloud cloud--12" aria-hidden="true" data-astro-cid-j7pv25f6></span> <!-- Sección de servicios: Grid con imágenes y overlays --> <section class="relative overflow-hidden py-16 md:py-32 px-4" data-astro-cid-j7pv25f6> <!-- Este contenedor va encima de las nubes --> <div class="max-w-7xl mx-auto relative z-10" data-astro-cid-j7pv25f6> <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8" data-astro-cid-j7pv25f6> <div class="max-w-2xl" data-astro-cid-j7pv25f6> <h2 class="text-3xl md:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight" data-astro-cid-j7pv25f6>
Cuidado Integral <br data-astro-cid-j7pv25f6> <span class="bg-clip-text text-green-300 italic" data-astro-cid-j7pv25f6>Pediátrico</span> </h2> </div> <p class="text-gray-500 max-w-sm font-medium leading-relaxed text-sm md:text-base" data-astro-cid-j7pv25f6>
Especialidades médicas diseñadas para acompañar cada etapa del
            crecimiento de tus hijos.
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12" data-astro-cid-j7pv25f6> ${quickServices.map((service, index) => renderTemplate`<div${addAttribute(`group relative min-h-115 md:h-100 overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-700 hover:-translate-y-4 ${index % 2 !== 0 ? "lg:mt-8" : ""} ${service.cardColor} ${service.cardHover}`, "class")} role="article" data-astro-cid-j7pv25f6> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")} class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" data-astro-cid-j7pv25f6></div> <div class="absolute inset-0 p-6 md:p-8 flex flex-col justify-end transform transition-transform duration-500" data-astro-cid-j7pv25f6> <div${addAttribute(`w-12 h-12 md:w-16 md:h-16 ${service.color} backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6 border border-white/30 ${service.hoverColor} transition-all duration-500 shadow-xl`, "class")} data-astro-cid-j7pv25f6> <i${addAttribute(service.icon, "data-lucide")} class="w-6 h-6 md:w-8 md:h-8 group-hover:animate-pulse" aria-hidden="true" data-astro-cid-j7pv25f6></i> </div> <h3 class="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight" data-astro-cid-j7pv25f6> ${service.title} </h3> <p class="text-gray-200 text-sm leading-relaxed mb-4 md:mb-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-0 md:translate-y-4 group-hover:translate-y-0" data-astro-cid-j7pv25f6> ${service.desc} </p> <div class="overflow-hidden h-12 md:h-0 group-hover:h-12 transition-all duration-500" data-astro-cid-j7pv25f6> <a${addAttribute(`/servicios#${service.title.toLowerCase().replace(/\s+/g, "-")}`, "href")}${addAttribute(`inline-flex items-center gap-2 text-white font-bold text-sm ${service.buttonColor} ${service.buttonHover} px-4 md:px-6 py-2 md:py-3 rounded-xl backdrop-blur-sm transition-colors`, "class")} data-astro-cid-j7pv25f6>
Saber más
<i data-lucide="chevron-right" class="w-4 h-4" data-astro-cid-j7pv25f6></i> </a> </div> </div> </div>`)} </div> </div> </section> <section class="py-16 md:py-32 px-4 bg-gray-50 overflow-hidden" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto relative z-10" data-astro-cid-j7pv25f6> <div class="grid lg:grid-cols-2 gap-12 items-center" data-astro-cid-j7pv25f6> <div class="z-10 text-center lg:text-left" data-astro-cid-j7pv25f6> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 italic leading-tight" data-astro-cid-j7pv25f6> <span id="big-title" data-astro-cid-j7pv25f6>${allBenefits[0].title}</span> <br data-astro-cid-j7pv25f6> <span id="big-subtitle" class="text-blue-300 not-italic" data-astro-cid-j7pv25f6>${allBenefits[0].subtitle}</span> </h2> <div id="big-desc-container" class="mt-6 text-gray-600 text-lg md:text-xl font-medium max-w-2xl mx-auto lg:mx-0 space-y-4 transition-all duration-500" data-astro-cid-j7pv25f6> ${allBenefits[0].desc.map((p) => renderTemplate`<p class="fade-in" data-astro-cid-j7pv25f6>${p}</p>`)} </div> </div> <div class="relative mt-12 lg:mt-0" data-astro-cid-j7pv25f6> <div class="relative z-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video lg:aspect-square" data-astro-cid-j7pv25f6> <img id="big-image"${addAttribute(allBenefits[0].image, "src")} alt="Principal" class="w-full h-full object-cover transition-all duration-700" data-astro-cid-j7pv25f6> </div> <div class="relative mt-8 w-full z-20 lg:absolute lg:mt-0 lg:-right-40 lg:top-1/2 lg:-translate-y-1/2 lg:w-125" data-astro-cid-j7pv25f6> <ul id="cards-container" class="flex flex-col gap-6 w-full" data-astro-cid-j7pv25f6> ${allBenefits.slice(1).map((item) => renderTemplate`<li class="benefit-card flex gap-4 items-center bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/30 
                          transition-all duration-500 group cursor-pointer lg:w-max lg:ml-auto hover:lg:w-full overflow-hidden"${addAttribute(item.id, "data-id")}${addAttribute(JSON.stringify(item), "data-json")} data-astro-cid-j7pv25f6> <img${addAttribute(item.image, "src")} class="card-img w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover shrink-0" data-astro-cid-j7pv25f6> <div class="lg:max-w-0 lg:opacity-0 group-hover:lg:max-w-md group-hover:lg:opacity-100 transition-all duration-500" data-astro-cid-j7pv25f6> <div class="min-w-62.5 pl-2" data-astro-cid-j7pv25f6> <h4 class="card-title text-lg font-bold text-gray-900 mb-1" data-astro-cid-j7pv25f6> ${item.title} </h4> <p class="card-desc-preview text-gray-600 text-sm line-clamp-2 mb-1" data-astro-cid-j7pv25f6> ${item.desc[0]} </p> <span class="text-gray-600 text-[10px] font-bold uppercase tracking-widest" data-astro-cid-j7pv25f6>
... Ver más
</span> </div> </div> </li>`)} </ul> </div> </div> </div> </div> </section> <section class="py-28 px-8 bg-white" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "TestimonialsCarousel", TestimonialsCarousel, { "testimonials": testimonials.map((t) => ({ ...t, rating: 5 })), "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Astro Clinica Pedriatia/Pediatria-Web/src/components/TestimonialsCarousel.jsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </section> <!-- Galería de la clínica: Grid de imágenes --> <section class="py-24 px-4 bg-[#A7B39F]" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto" data-astro-cid-j7pv25f6> <div class="text-center mb-16" data-astro-cid-j7pv25f6> <h2 class="text-4xl md:text-6xl font-extrabold text-white italic mt-2" data-astro-cid-j7pv25f6>
Nuestra <span class="bg-[#E8D5B7] bg-clip-text text-transparent" data-astro-cid-j7pv25f6>clínica</span> </h2> </div> <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-150" data-astro-cid-j7pv25f6> ${galleryImages.map((image, index) => renderTemplate`<div${addAttribute(`group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer gallery-item
                ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}
                ${index === 1 ? "md:col-span-2 md:row-span-1" : ""}
              `, "class")} data-astro-cid-j7pv25f6> <img${addAttribute(image, "src")}${addAttribute(`Instalaci\xF3n ${index + 1}`, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" data-astro-cid-j7pv25f6> <div class="absolute bottom-4 left-4 z-20 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" data-astro-cid-j7pv25f6> <span class="bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20 cursor-pointer view-btn" data-astro-cid-j7pv25f6>
Ver ambiente
</span> </div> </div>`)} </div> </div> </section> <!-- Sección de CTA: Imagen de fondo con overlay --> <section class="py-32 px-4" data-astro-cid-j7pv25f6> <div class="max-w-6xl mx-auto relative rounded-[3rem] p-12 lg:p-24 text-center text-white overflow-hidden group" data-astro-cid-j7pv25f6> <div id="cta-parallax-bg" class="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-500 ease-out" style="background-image: url('/images/service-psychology.jpg');" data-astro-cid-j7pv25f6></div> <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-20" data-astro-cid-j7pv25f6> <i data-lucide="sparkles" class="absolute top-10 left-10 w-12 h-12 animate-pulse" data-astro-cid-j7pv25f6></i> <i data-lucide="stethoscope" class="absolute bottom-10 right-20 w-16 h-16 rotate-12" data-astro-cid-j7pv25f6></i> </div> <div class="relative z-10" data-astro-cid-j7pv25f6> <span class="inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-6 animate-bounce-slow" data-astro-cid-j7pv25f6>
Estamos listos para ayudarte
</span> <h2 class="text-5xl md:text-7xl font-bold mb-8 italic tracking-tighter leading-tight" data-astro-cid-j7pv25f6>
Tu tranquilidad <br data-astro-cid-j7pv25f6> <span class="text-yellow-300 not-italic drop-shadow-md" data-astro-cid-j7pv25f6>empieza aquí</span> </h2> <p class="text-white/90 text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed" data-astro-cid-j7pv25f6>
Agenda una consulta hoy mismo en
<span class="text-white font-bold underline decoration-yellow-300 underline-offset-4" data-astro-cid-j7pv25f6>${siteConfig.location.city}</span>
y brinda a tus hijos la atención que merecen.
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center items-center" data-astro-cid-j7pv25f6> <a${addAttribute(siteConfig.contact.whatsappUrl, "href")} target="_blank" class="cta-btn-primary group/btn bg-white text-green-700 px-12 py-5 rounded-2xl font-black text-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all flex items-center gap-3 active:scale-95" data-astro-cid-j7pv25f6> <i class="bi bi-whatsapp text-2xl group-hover/btn:rotate-12 transition-transform" data-astro-cid-j7pv25f6></i>
Reservar Cita
</a> <a${addAttribute(`tel:${siteConfig.contact.phone}`, "href")} class="group/btn px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/40 backdrop-blur-sm hover:bg-white hover:text-green-700 transition-all flex items-center gap-3 active:scale-95" data-astro-cid-j7pv25f6> <i data-lucide="phone-call" class="w-5 h-5 group-hover/btn:animate-tada" data-astro-cid-j7pv25f6></i>
Llamar Ahora
</a> </div> </div> </div> </section> </main> ` })}  ${renderScript($$result, "C:/Astro Clinica Pedriatia/Pediatria-Web/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "C:/Astro Clinica Pedriatia/Pediatria-Web/src/pages/index.astro?astro&type=script&index=1&lang.ts")}`;
}, "C:/Astro Clinica Pedriatia/Pediatria-Web/src/pages/index.astro", void 0);

const $$file = "C:/Astro Clinica Pedriatia/Pediatria-Web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
