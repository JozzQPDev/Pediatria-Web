import { useState, useEffect, useCallback, useRef } from 'react';

// TestimonialsCarousel - React version with enhanced animations and controls
export default function TestimonialsCarousel({ testimonials = [] }) {


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState('next');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);
  const minSwipeDistance = 50;

  // Default testimonials if none provided
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
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
      autoPlayRef.current = setInterval(nextSlide, 5000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        setIsPaused(true);
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        setIsPaused(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Initialize Lucide icons when component mounts
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [currentIndex]);

  // Touch handlers for swipe

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
    
    setTimeout(() => setIsPaused(false), 1000);
  };

  const getSlideStyles = (index) => {
    const diff = index - currentIndex;
    const normalizedDiff = ((diff + totalItems) % totalItems);
    
    let translateX = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 1;
    
    if (normalizedDiff === 0) {
      // Current slide
      translateX = 0;
      scale = 1;
      opacity = 1;
      zIndex = 3;
    } else if (normalizedDiff === 1 || normalizedDiff === -totalItems + 1) {
      // Next slide
      translateX = 100;
      scale = 0.85;
      opacity = 0.5;
      zIndex = 2;
    } else if (normalizedDiff === totalItems - 1 || normalizedDiff === -1) {
      // Previous slide
      translateX = -100;
      scale = 0.85;
      opacity = 0.5;
      zIndex = 2;
    } else {
      // Hidden slides
      translateX = normalizedDiff > totalItems / 2 ? -200 : 200;
      scale = 0.7;
      opacity = 0;
      zIndex = 1;
    }
    
    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      opacity,
      zIndex,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
    };
  };

  // Render icons inline to avoid hydration mismatch
  const renderIcon = (name, className = "w-4 h-4") => {
    const icons = {
      star: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
      'chevron-left': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>,
      'chevron-right': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>,
      quote: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3"/></svg>,
      pause: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><rect width="4" height="16" x="6" y="4"/><rect width="4" height="16" x="14" y="4"/></svg>,
      play: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>
    };
    return icons[name] || null;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-300' : 'text-gray-300'}>
        {renderIcon('star', `w-4 h-4 ${i < rating ? 'text-yellow-300 fill-yellow-300' : 'text-gray-300'}`)}
      </span>
    ));
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-500 font-bold uppercase tracking-widest text-xs animate-bounce-soft">
              <span class="w-2 h-2 rounded-full bg-orange-400"></span>
             Testimonios
            </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 italic mb-4">
          Lo que dicen <br />
          <span className="text-orange-400 not-italic">nuestras familias</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Descubre por qué miles de familias confían en nosotros para el cuidado de sus pequeños
        </p>
      </div>

      {/* Carousel Container */}
      <div 
        ref={containerRef}
        className="relative max-w-6xl mx-auto px-4 md:px-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Navigation Arrows */}
        <button
          onClick={() => {
            prevSlide();
            setIsPaused(true);
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-pink-400 hover:shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-200"
          aria-label="Testimonio anterior"
        >
          {renderIcon('chevron-left', 'w-6 h-6')}
        </button>
        
        <button
          onClick={() => {
            nextSlide();
            setIsPaused(true);
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-pink-400 hover:shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-200"
          aria-label="Siguiente testimonio"
        >
          {renderIcon('chevron-right', 'w-6 h-6')}
        </button>

        {/* Slides Container */}
        <div className="relative h-100 md:h-87.5 overflow-hidden">
          {items.map((testimonial, index) => (
            <div
              key={index}
              className="absolute inset-0 flex items-center justify-center p-4"
              style={getSlideStyles(index)}
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 max-w-2xl w-full border border-gray-100">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Avatar */}
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-pink-200 shadow-lg">
                      <img
                        src={testimonial.image}
                        alt={`Foto de ${testimonial.name}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Quote icon */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-pink-300 rounded-full flex items-center justify-center shadow-lg">
                      {renderIcon('quote', 'w-5 h-5 text-white')}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Stars */}
                    <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                      {renderStars(testimonial.rating || 5)}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-gray-700 text-lg italic mb-4 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Author */}
                    <div>
                      <p className="font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-pink-400 font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                goToSlide(index);
                setIsPaused(true);
              }}
              className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-200 ${
                index === currentIndex
                  ? 'w-8 h-3 bg-pink-300'
                  : 'w-3 h-3 bg-gray-300 hover:bg-pink-200'
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-pink-400 transition-colors"
          >
            {isAutoPlaying ? (
              <>
                {renderIcon('pause', 'w-4 h-4')}
                <span>Pausar</span>
              </>
            ) : (
              <>
                {renderIcon('play', 'w-4 h-4')}
                <span>Reproducir</span>
              </>
            )}
          </button>
          {isAutoPlaying && !isPaused && (
            <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-pink-300 rounded-full animate-progress"
                style={{
                  animation: 'progress 5s linear infinite'
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Stats Section 
      <div className="max-w-4xl mx-auto mt-16 grid grid-cols-3 gap-8 text-center">
        <div className="p-4">
          <p className="text-3xl md:text-4xl font-bold text-pink-400">15k+</p>
          <p className="text-gray-600 text-sm mt-1">Familias atendidas</p>
        </div>
        <div className="p-4 border-x border-gray-200">
          <p className="text-3xl md:text-4xl font-bold text-pink-400">4.9</p>
          <p className="text-gray-600 text-sm mt-1">Calificación promedio</p>
        </div>
        <div className="p-4">
          <p className="text-3xl md:text-4xl font-bold text-pink-400">98%</p>
          <p className="text-gray-600 text-sm mt-1">Recomendarían</p>
        </div>
      </div>*/}

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        .animate-progress {
          animation: progress 5s linear infinite;
        }
      `}</style>
    </div>
  );
}
