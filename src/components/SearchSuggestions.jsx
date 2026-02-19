import { useState, useEffect, useRef } from 'react';

// Icon component to prevent hydration mismatch
const Icon = ({ name, className = "w-4 h-4", ariaHidden = true, color }) => {
  const icons = {
    clock: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    x: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>,
    'trending-up': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
    layers: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    stethoscope: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>,
    'book-open': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    'file-text': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>,
    tag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>,
    hash: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/></svg>,
    'arrow-right': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>,
    'search-x': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><path d="m13.5 8.5-5 5"/><path d="m8.5 8.5 5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
    zap: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    search: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  };
  
  const icon = icons[name] || icons.search;
  
  if (color) {
    return <span style={{ color }}>{icon}</span>;
  }
  
  return icon;
};

// SearchSuggestions - Real-time search suggestions with categories and history
export default function SearchSuggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchHistory, setSearchHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  
  // Use refs to avoid stale closures in event listeners
  const suggestionsRef = useRef([]);
  const selectedIndexRef = useRef(-1);
  const isVisibleRef = useRef(false);
  const inputValueRef = useRef('');

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

  // Load search history from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('searchHistory');
        if (saved) {
          const parsed = JSON.parse(saved);
          // Keep only last 10 searches and filter out duplicates
          const unique = parsed.filter((item, index, self) => 
            index === self.findIndex((t) => t.query === item.query)
          ).slice(0, 10);
          setSearchHistory(unique);
        }
      } catch (e) {
        console.error('Error loading search history:', e);
      }
    }
  }, []);

  // Save search to history
  const saveToHistory = (query) => {
    if (!query || query.length < 2) return;
    
    const newEntry = {
      query: query.trim(),
      timestamp: Date.now(),
      type: 'history'
    };
    
    setSearchHistory(prev => {
      const filtered = prev.filter(h => h.query !== newEntry.query);
      const updated = [newEntry, ...filtered].slice(0, 10);
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('searchHistory', JSON.stringify(updated));
      }
      
      return updated;
    });
  };

  // Get search data from window

  const getSearchData = () => {
    if (typeof window !== 'undefined' && window.searchData) {
      return window.searchData;
    }
    return [];
  };

  // Get popular searches (simulated - in production would come from analytics)
  const getPopularSearches = () => {
    return [
      { query: 'vacunación', count: 150, type: 'popular' },
      { query: 'nutrición infantil', count: 120, type: 'popular' },
      { query: 'control de crecimiento', count: 95, type: 'popular' },
      { query: 'psicología', count: 80, type: 'popular' },
      { query: 'recién nacido', count: 75, type: 'popular' }
    ];
  };

  // Get trending searches (simulated)
  const getTrendingSearches = () => {
    return [
      { query: 'alergias', trend: '+25%', type: 'trending' },
      { query: 'desarrollo psicomotor', trend: '+15%', type: 'trending' },
      { query: 'alimentación complementaria', trend: '+12%', type: 'trending' }
    ];
  };

  // Expand search terms with basic synonyms
  const expandWithSynonyms = (term) => {
    const synonyms = {
      'bebe': ['bebé', 'recién nacido', 'infante'],
      'vacuna': ['vacunación', 'inmunización'],
      'medico': ['médico', 'doctor', 'pediatra'],
      'nutricion': ['nutrición', 'alimentación'],
      'desarrollo': ['crecimiento', 'evolución']
    };
    
    const expanded = [term];
    for (const [key, values] of Object.entries(synonyms)) {
      if (term.toLowerCase().includes(key)) {
        expanded.push(...values);
      }
    }
    return expanded;
  };

  // Generate suggestions from search data
  const generateSuggestions = (query) => {
    const searchTerm = query.toLowerCase().trim();
    const searchData = getSearchData();
    const expandedTerms = expandWithSynonyms(searchTerm);
    
    // Score and filter items
    const scoredItems = searchData.map(item => {
      let score = 0;
      const titleLower = item.title.toLowerCase();
      const categoryLower = item.category ? item.category.toLowerCase() : '';
      
      for (const term of expandedTerms) {
        if (titleLower === term) score += 100;
        else if (titleLower.startsWith(term)) score += 80;
        else if (titleLower.includes(term)) score += 60;
        if (categoryLower.includes(term)) score += 30;
      }
      
      // Boost by type
      if (item.type === 'service') score += 10;
      else if (item.type === 'blog') score += 5;
      
      return { ...item, score };
    }).filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12);

    // Categorize suggestions
    const categorized = {
      exact: [],
      services: [],
      blogs: [],
      pages: [],
      categories: [],
      tags: []
    };

    const seen = new Set();

    scoredItems.forEach(item => {
      if (seen.has(item.title)) return;
      seen.add(item.title);

      const titleLower = item.title.toLowerCase();
      
      // Categorize by match type and content type
      if (titleLower.includes(searchTerm)) {
        if (titleLower.startsWith(searchTerm)) {
          categorized.exact.push({ ...item, matchType: 'exact' });
        } else {
          if (item.type === 'service') categorized.services.push(item);
          else if (item.type === 'blog') categorized.blogs.push(item);
          else categorized.pages.push(item);
        }
      }

      // Add category suggestions
      if (item.category && !seen.has(`cat:${item.category}`)) {
        const catLower = item.category.toLowerCase();
        if (expandedTerms.some(t => catLower.includes(t))) {
          categorized.categories.push({
            title: item.category,
            type: 'category',
            category: item.category,
            url: `/busqueda?category=${encodeURIComponent(item.category)}&q=${encodeURIComponent(query)}`,
            icon: 'tag'
          });
          seen.add(`cat:${item.category}`);
        }
      }

      // Add tag suggestions
      if (item.tags) {
        item.tags.forEach(tag => {
          if (!seen.has(`tag:${tag}`) && expandedTerms.some(t => tag.toLowerCase().includes(t))) {
            categorized.tags.push({
              title: tag,
              type: 'tag',
              category: tag,
              url: `/busqueda?q=${encodeURIComponent(tag)}`,
              icon: 'hash'
            });
            seen.add(`tag:${tag}`);
          }
        });
      }
    });

    // Combine based on active category
    let finalSuggestions = [];
    
    if (activeCategory === 'all') {
      finalSuggestions = [
        ...categorized.exact.slice(0, 3),
        ...categorized.services.slice(0, 2),
        ...categorized.blogs.slice(0, 2),
        ...categorized.pages.slice(0, 2),
        ...categorized.categories.slice(0, 2),
        ...categorized.tags.slice(0, 2)
      ];
    } else if (activeCategory === 'services') {
      finalSuggestions = categorized.services;
    } else if (activeCategory === 'blogs') {
      finalSuggestions = categorized.blogs;
    } else if (activeCategory === 'pages') {
      finalSuggestions = categorized.pages;
    }

    return finalSuggestions.map(item => ({
      title: item.title,
      type: item.type,
      category: item.category,
      url: item.url,
      icon: getIconForType(item.type),
      matchType: item.matchType || 'partial'
    }));
  };

  // Get icon based on type
  const getIconForType = (type) => {
    const icons = {
      page: 'file-text',
      service: 'stethoscope',
      blog: 'book-open',
      category: 'tag',
      tag: 'hash',
      popular: 'trending-up',
      trending: 'zap',
      history: 'clock'
    };
    return icons[type] || 'search';
  };

  // Highlight matching text
  const highlightMatch = (text, query) => {
    if (!text || !query) return text;
    const expandedTerms = expandWithSynonyms(query.toLowerCase());
    let highlighted = text;
    
    for (const term of expandedTerms) {
      if (term.length < 2) continue;
      const regex = new RegExp(`(${escapeRegex(term)})`, 'gi');
highlighted = highlighted.replace(
  regex,
  '<mark class="bg-blue-50 text-blue-700 px-0.5 rounded">$1</mark>'
);
 }
    
    return highlighted;
  };

  // Escape regex special characters
  const escapeRegex = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  // Handle click on suggestion
  const handleSuggestionClick = (url, title) => {
    if (url) {
      // Save to history before navigating
      saveToHistory(title || inputValueRef.current);
      window.location.href = url;
    }
  };

  // Handle click outside
  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    const handleClickOutside = (e) => {
      const wrapper = document.getElementById('search-wrapper');
      if (wrapper && !wrapper.contains(e.target)) {
        setIsVisible(false);
        setSelectedIndex(-1);
        setShowHistory(false);
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
        setShowHistory(false);
      },
      show: () => {
        if (suggestionsRef.current.length > 0) {
          setIsVisible(true);
        }
      },
      clearHistory: () => {
        setSearchHistory([]);
        if (typeof window !== 'undefined') {
          localStorage.removeItem('searchHistory');
        }
      }
    };
    
    return () => {
      delete window.searchSuggestions;
    };
  }, []);

  // Listen to search input events from parent component
  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    
    const handleInput = (e) => {
      const query = e.target.value.trim();
      inputValueRef.current = query;
      
      if (!query || query.length < 2) {
        setSuggestions([]);
        setIsVisible(false);
        setSelectedIndex(-1);
        // Show history when input is focused but empty
        if (query.length === 0 && searchHistory.length > 0) {
          setShowHistory(true);
          setIsVisible(true);
        }
        return;
      }
      
      setShowHistory(false);
      const newSuggestions = generateSuggestions(query);
      setSuggestions(newSuggestions);
      setIsVisible(newSuggestions.length > 0);
      setSelectedIndex(-1);
    };

    const handleFocus = () => {
      const query = searchInput.value.trim();
      if (query.length === 0 && searchHistory.length > 0) {
        setShowHistory(true);
        setIsVisible(true);
      }
    };
    
    const handleKeyDown = (e) => {
      const currentSuggestions = suggestionsRef.current;
      const currentSelectedIndex = selectedIndexRef.current;
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (!isVisibleRef.current && currentSuggestions.length > 0) {
          setIsVisible(true);
        }
        setSelectedIndex(prev => {
          const newIndex = Math.min(prev + 1, currentSuggestions.length - 1);
          // Scroll into view if needed
          const element = document.querySelector(`[data-suggestion-index="${newIndex}"]`);
          if (element) {
            element.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          }
          return newIndex;
        });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => {
          const newIndex = Math.max(prev - 1, -1);
          const element = document.querySelector(`[data-suggestion-index="${newIndex}"]`);
          if (element) {
            element.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          }
          return newIndex;
        });
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (currentSelectedIndex >= 0 && currentSuggestions[currentSelectedIndex]) {
          const selected = currentSuggestions[currentSelectedIndex];
          saveToHistory(selected.title);
          window.location.href = selected.url;
        } else {
          // Save current query to history and submit
          saveToHistory(inputValueRef.current);
          const form = document.getElementById('search-form');
          if (form) form.submit();
        }
      } else if (e.key === 'Escape') {
        setIsVisible(false);
        setSelectedIndex(-1);
        setShowHistory(false);
        searchInput.blur();
      } else if (e.key === 'Tab' && isVisibleRef.current) {
        // Auto-complete with first suggestion if Tab is pressed
        if (currentSuggestions.length > 0 && currentSelectedIndex === -1) {
          e.preventDefault();
          const firstSuggestion = currentSuggestions[0];
          searchInput.value = firstSuggestion.title;
          setIsVisible(false);
        }
      }
    };
    
    searchInput.addEventListener('input', handleInput);
    searchInput.addEventListener('focus', handleFocus);
    searchInput.addEventListener('keydown', handleKeyDown);
    
    return () => {
      searchInput.removeEventListener('input', handleInput);
      searchInput.removeEventListener('focus', handleFocus);
      searchInput.removeEventListener('keydown', handleKeyDown);
    };
  }, [searchHistory, activeCategory]);

  // Get current input value for highlighting
  const getCurrentInputValue = () => {
    if (typeof document === 'undefined') return '';
    const searchInput = document.getElementById('search-input');
    return searchInput ? searchInput.value : '';
  };


  // Render history items
  const renderHistory = () => {
    if (!showHistory || searchHistory.length === 0) return null;
    
    return (
      <div className="suggestion-section">
        <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Búsquedas recientes</span>
        </div>
        {searchHistory.map((item, index) => (
          <div 
            key={`history-${index}`}
            className={`suggestion-item px-4 py-3 cursor-pointer border-b border-gray-100 last:border-0 ${index === selectedIndex ? 'selected' : ''}`}
            onClick={() => handleSuggestionClick(`/busqueda?q=${encodeURIComponent(item.query)}`, item.query)}
            onMouseEnter={() => setSelectedIndex(index)}
            data-suggestion-index={index}
            role="option"
            aria-selected={index === selectedIndex}
            style={{
              backgroundColor: index === selectedIndex ? '#E0F2FE' : 'transparent',
              borderLeft: index === selectedIndex ? '3px solid #38BDF8' : '3px solid transparent'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                <Icon name="clock" className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{item.query}</p>
                <p className="text-xs text-gray-500">
                  {new Date(item.timestamp).toLocaleDateString('es-ES', { 
                    day: 'numeric', 
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const updated = searchHistory.filter((_, i) => i !== index);
                  setSearchHistory(updated);
                  localStorage.setItem('searchHistory', JSON.stringify(updated));
                }}
                className="p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-gray-600"
                aria-label="Eliminar de historial"
              >
                <Icon name="x" className="w-4 h-4" />
              </button>
            </div>

          </div>
        ))}
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
          <button 
            onClick={() => {
              setSearchHistory([]);
              localStorage.removeItem('searchHistory');
            }}
            className="text-xs text-gray-500 hover:text-blue-600 transition-colors"
          >
            Limpiar historial
          </button>
        </div>
      </div>
    );
  };

  // Render popular searches when no input
  const renderPopularSearches = () => {
    if (!showHistory) return null;
    
    const popular = getPopularSearches();
    
    return (
      <div className="suggestion-section mt-2">
        <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Búsquedas populares</span>
        </div>
        <div className="p-3 flex flex-wrap gap-2">
          {popular.map((item, index) => (
            <button
              key={`popular-${index}`}
              onClick={() => handleSuggestionClick(`/busqueda?q=${encodeURIComponent(item.query)}`, item.query)}
              className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full text-sm transition-colors flex items-center gap-1.5"
            >
              <Icon name="trending-up" className="w-3 h-3" />
              {item.query}
            </button>

          ))}
        </div>
      </div>
    );
  };

  // Render category tabs
  const renderCategoryTabs = () => {
    if (showHistory) return null;
    
    const categories = [
      { id: 'all', label: 'Todo', icon: 'layers' },
      { id: 'services', label: 'Servicios', icon: 'stethoscope' },
      { id: 'blogs', label: 'Artículos', icon: 'book-open' },
      { id: 'pages', label: 'Páginas', icon: 'file-text' }
    ];
    
    return (
      <div className="flex items-center gap-1 px-3 py-2 bg-gray-50 border-b border-gray-100 overflow-x-auto">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              // Regenerate suggestions with new category
              const query = getCurrentInputValue();
              if (query.length >= 2) {
                const newSuggestions = generateSuggestions(query);
                setSuggestions(newSuggestions);
              }
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeCategory === cat.id 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-white text-gray-600 hover:bg-blue-50'
            }`}
          >
            <Icon name={cat.icon} className="w-3.5 h-3.5" />
            {cat.label}
          </button>

        ))}
      </div>
    );
  };

  return (
    <div 
      id="search-suggestions" 
      className={`search-suggestions ${isVisible ? '' : 'hidden'} absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50 max-h-96 overflow-y-auto`}
      style={{ animation: 'slideDown 0.2s ease-out' }}
      role="listbox"
      aria-label="Sugerencias de búsqueda"
    >
      {/* Category Tabs */}
      {renderCategoryTabs()}
      
      {/* History Section */}
      {renderHistory()}
      
      {/* Popular Searches */}
      {renderPopularSearches()}
      
      {/* Regular Suggestions */}
      {!showHistory && suggestions.length > 0 && (
        <div className="suggestions-list" id="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <div 
              key={`sugg-${index}`}
              className="suggestion-item px-4 py-3 cursor-pointer border-b border-gray-100 last:border-0"
              onClick={() => handleSuggestionClick(suggestion.url, suggestion.title)}
              onMouseEnter={() => setSelectedIndex(index)}
              role="option"
              aria-selected={index === selectedIndex}
              data-suggestion-index={index}
              style={{
                  transition: 'all 0.15s ease',
                  backgroundColor: index === selectedIndex ? '#E0F2FE' : 'transparent',
                  borderLeft: index === selectedIndex ? '3px solid #38BDF8' : '3px solid transparent'
                }}
            >
              <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  suggestion.matchType === 'exact' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'
                }`}>
                  <Icon name={suggestion.icon} className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p 
                    className="text-sm font-medium text-gray-900 truncate"
                    dangerouslySetInnerHTML={{ 
                      __html: highlightMatch(suggestion.title, getCurrentInputValue()) 
                    }}
                  />
                  {suggestion.category && (
                    <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                      <Icon name="tag" className="w-3 h-3" />
                      {suggestion.category}
                    </p>
                  )}
                </div>
                {suggestion.matchType === 'exact' && (
                  <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded">
                    Exacto
                  </span>
                )}
                <Icon name="arrow-right" className="w-4 h-4 text-gray-300" />

              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Empty State */}
      {!showHistory && suggestions.length === 0 && getCurrentInputValue().length >= 2 && (
        <div className="px-4 py-6 text-center">
          <Icon name="search-x" className="w-8 h-8 text-gray-300 mx-auto mb-2" />
          <p className="text-sm text-gray-500">No se encontraron sugerencias</p>
          <p className="text-xs text-gray-400 mt-1">Presiona Enter para buscar</p>
        </div>
      )}
      
      {/* Trending Footer */}
      {!showHistory && getCurrentInputValue().length === 0 && (
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Icon name="zap" className="w-3.5 h-3.5" color="#eab308" />
            <span>Tendencias:</span>

            {getTrendingSearches().slice(0, 3).map((trend, i) => (
              <button
                key={i}
                onClick={() => handleSuggestionClick(`/busqueda?q=${encodeURIComponent(trend.query)}`, trend.query)}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {trend.query}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
