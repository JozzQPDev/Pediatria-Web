import { useState, useEffect, useRef } from 'react';

// SearchSuggestions - Real-time search suggestions dropdown
export default function SearchSuggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  // Use refs to avoid stale closures in event listeners
  const suggestionsRef = useRef([]);
  const selectedIndexRef = useRef(-1);
  const isVisibleRef = useRef(false);

  // Keep refs in sync with state
  useEffect(() => {
    suggestionsRef.current = suggestions;
  }, [suggestions]);

  useEffect(() => {
    selectedIndexRef.current = selectedIndex;
  }, [selectedIndex]);

  useEffect(() => {
    isVisibleRef.current = isVisible;
  }, [isVisible]);

  // Get search data from window
  const getSearchData = () => {
    if (typeof window !== 'undefined' && window.searchData) {
      return window.searchData;
    }
    return [
      { title: "Inicio", type: "page", url: "/", category: "General" },
      { title: "Nosotros", type: "page", url: "/nosotros", category: "General" },
      { title: "Servicios", type: "page", url: "/servicios", category: "General" },
      { title: "Equipo", type: "page", url: "/equipo", category: "General" },
      { title: "Blogs", type: "page", url: "/blogs", category: "General" },
      { title: "Contacto", type: "page", url: "/contacto", category: "General" },
      { title: "Control de Crecimiento", type: "service", url: "/servicios/control-crecimiento", category: "Crecimiento" },
      { title: "Vacunación Integral", type: "service", url: "/servicios/vacunacion-integral", category: "Vacunación" },
      { title: "Nutrición Infantil", type: "service", url: "/servicios/nutricion-infantil", category: "Nutrición" },
      { title: "Atención de Recién Nacidos", type: "service", url: "/servicios/atencion-recien-nacidos", category: "Recién Nacidos" },
      { title: "Psicología Infantil", type: "service", url: "/servicios/psicologia-infantil", category: "Psicología" },
      { title: "Nebulizaciones", type: "service", url: "/servicios/nebulizaciones", category: "Respiratorio" },
      { title: "La Importancia de la Vacunación Infantil", type: "blog", url: "/blog/importancia-vacunacion-infantil", category: "Vacunación" },
      { title: "Guía de Alimentación Complementaria", type: "blog", url: "/blog/alimentacion-complementaria", category: "Nutrición" },
      { title: "Hitos del Desarrollo Psicomotor", type: "blog", url: "/blog/desarrollo-psicomotor", category: "Desarrollo" },
      { title: "Cuidados Esenciales del Recién Nacido", type: "blog", url: "/blog/cuidado-recien-nacido", category: "Recién Nacidos" },
      { title: "Salud Emocional en la Infancia", type: "blog", url: "/blog/salud-emocional-infantil", category: "Psicología" },
      { title: "Prevención de Infecciones Respiratorias", type: "blog", url: "/blog/prevencion-respiratoria", category: "Respiratorio" },
      { title: "Guía Completa sobre Alergias en Niños", type: "blog", url: "/blog/alergias-infantiles", category: "Alergias" }
    ];
  };

  // Generate suggestions from search data
  const generateSuggestions = (query) => {
    const searchTerm = query.toLowerCase().trim();
    const searchData = getSearchData();
    
    const matches = searchData.filter(item => {
      return item.title.toLowerCase().includes(searchTerm) ||
             (item.category && item.category.toLowerCase().includes(searchTerm)) ||
             (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm)));
    }).slice(0, 8);
    
    return matches.map(item => ({
      title: item.title,
      type: item.type,
      category: item.category,
      url: item.url,
      icon: getIconForType(item.type)
    }));
  };

  // Get icon based on type
  const getIconForType = (type) => {
    const icons = {
      page: 'file-text',
      service: 'stethoscope',
      blog: 'book-open'
    };
    return icons[type] || 'search';
  };

  // Highlight matching text
  const highlightMatch = (text, query) => {
    if (!text) return '';
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };

  // Escape regex special characters
  const escapeRegex = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  // Handle click on suggestion
  const handleSuggestionClick = (url) => {
    if (url) {
      window.location.href = url;
    }
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      const wrapper = document.getElementById('search-wrapper');
      if (wrapper && !wrapper.contains(e.target)) {
        setIsVisible(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Expose functions globally for Search component
  useEffect(() => {
    window.searchSuggestions = {
      hide: () => {
        setIsVisible(false);
        setSelectedIndex(-1);
      },
      show: () => {
        if (suggestionsRef.current.length > 0) {
          setIsVisible(true);
        }
      }
    };
    
    return () => {
      delete window.searchSuggestions;
    };
  }, []);

  // Listen to search input events from parent component
  useEffect(() => {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    const handleInput = (e) => {
      const query = e.target.value.trim();
      
      if (!query || query.length < 2) {
        setSuggestions([]);
        setIsVisible(false);
        setSelectedIndex(-1);
        return;
      }
      
      const newSuggestions = generateSuggestions(query);
      setSuggestions(newSuggestions);
      setIsVisible(newSuggestions.length > 0);
      setSelectedIndex(-1);
    };
    
    const handleKeyDown = (e) => {
      const currentSuggestions = suggestionsRef.current;
      const currentSelectedIndex = selectedIndexRef.current;
      
      if (!currentSuggestions.length) return;
      
      switch(e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => Math.min(prev + 1, currentSuggestions.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => Math.max(prev - 1, -1));
          break;
        case 'Enter':
          e.preventDefault();
          if (currentSelectedIndex >= 0 && currentSuggestions[currentSelectedIndex]) {
            window.location.href = currentSuggestions[currentSelectedIndex].url;
          } else {
            const form = document.getElementById('search-form');
            if (form) form.submit();
          }
          break;
        case 'Escape':
          setIsVisible(false);
          setSelectedIndex(-1);
          break;
      }
    };
    
    searchInput.addEventListener('input', handleInput);
    searchInput.addEventListener('keydown', handleKeyDown);
    
    return () => {
      searchInput.removeEventListener('input', handleInput);
      searchInput.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Get current input value for highlighting
  const getCurrentInputValue = () => {
    const searchInput = document.getElementById('search-input');
    return searchInput ? searchInput.value : '';
  };

  return (
    <div 
      id="search-suggestions" 
      className={`search-suggestions ${isVisible ? '' : 'hidden'} absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50 max-h-80 overflow-y-auto`}
      style={{ animation: 'slideDown 0.2s ease-out' }}
    >
      <div className="suggestions-list" id="suggestions-list">
        {suggestions.map((suggestion, index) => (
          <div 
            key={index}
            className={`suggestion-item px-4 py-3 cursor-pointer border-b border-gray-100 last:border-0 ${index === selectedIndex ? 'selected' : ''}`}
            onClick={() => handleSuggestionClick(suggestion.url)}
            onMouseEnter={() => setSelectedIndex(index)}
            role="option"
            aria-selected={index === selectedIndex}
            style={{
              transition: 'all 0.15s ease',
              backgroundColor: index === selectedIndex ? '#fdf2f8' : 'transparent',
              borderLeft: index === selectedIndex ? '3px solid #ec4899' : '3px solid transparent'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center text-pink-500 shrink-0">
                <i data-lucide={suggestion.icon} className="w-4 h-4"></i>
              </div>
              <div className="flex-1 min-w-0">
                <p 
                  className="text-sm font-medium text-gray-900 truncate"
                  dangerouslySetInnerHTML={{ __html: highlightMatch(suggestion.title, getCurrentInputValue()) }}
                />
                {suggestion.category && (
                  <p className="text-xs text-gray-500 mt-0.5">
                    {suggestion.category}
                  </p>
                )}
              </div>
              <i data-lucide="arrow-right" className="w-4 h-4 text-gray-300"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
