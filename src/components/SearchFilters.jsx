import { useState, useEffect, useRef } from 'react';

// SearchFilters - React version with enhanced interactivity

export default function SearchFilters({ 
  currentType = '', 
  currentCategory = '', 
  currentSort = 'relevance',
  availableCategories = [],
  totalResults = 0 
}) {

  const [isSortOpen, setIsSortOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    type: currentType,
    category: currentCategory,
    sort: currentSort
  });
  
  const sortDropdownRef = useRef(null);

  const types = [
    { value: '', label: 'Todos', icon: 'layers' },
    { value: 'service', label: 'Servicios', icon: 'stethoscope' },
    { value: 'blog', label: 'Artículos', icon: 'book-open' },
    { value: 'page', label: 'Páginas', icon: 'file-text' }
  ];

  const sortOptions = [
    { value: 'relevance', label: 'Relevancia', icon: 'target' },
    { value: 'title', label: 'Nombre', icon: 'arrow-up-a-z' },
    { value: 'date', label: 'Fecha', icon: 'calendar' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(e.target)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsSortOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const buildUrl = (params) => {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        searchParams.set(key, value);
      } else {
        searchParams.delete(key);
      }
    });
    searchParams.set('page', '1');
    return `?${searchParams.toString()}`;
  };

  const handleTypeChange = (type) => {
    setActiveFilters(prev => ({ ...prev, type }));
    window.location.href = buildUrl({ ...activeFilters, type });
  };

  const handleCategoryChange = (category) => {
    setActiveFilters(prev => ({ ...prev, category }));
    window.location.href = buildUrl({ ...activeFilters, category });
  };

  const handleSortChange = (sort) => {
    setActiveFilters(prev => ({ ...prev, sort }));
    setIsSortOpen(false);
    window.location.href = buildUrl({ ...activeFilters, sort });
  };

  const removeFilter = (filterType) => {
    const newFilters = { ...activeFilters, [filterType]: filterType === 'sort' ? 'relevance' : '' };
    setActiveFilters(newFilters);
    window.location.href = buildUrl(newFilters);
  };

  const clearAllFilters = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const q = searchParams.get('q') || '';
    window.location.href = q ? `?q=${encodeURIComponent(q)}` : '?';
  };

  const getIconForType = (iconName) => {
    // Lucide icons will be initialized by the parent Astro component
    return <i data-lucide={iconName} className="w-3.5 h-3.5"></i>;
  };

  return (
    <div className="search-filters bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Filter by Type */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
          <span className="text-sm text-gray-500 shrink-0 font-medium">Tipo:</span>
          <div className="flex gap-2">
            {types.map(type => (
              <button
                key={type.value}
                onClick={() => handleTypeChange(type.value)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  activeFilters.type === type.value 
                    ? 'bg-pink-100 text-pink-700 ring-2 ring-pink-200' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {getIconForType(type.icon)}
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sort and Stats */}
        <div className="flex items-center justify-between lg:justify-end gap-4">
          {/* Results count */}
          {totalResults > 0 && (
            <span className="text-sm text-gray-500">
              {totalResults} resultado{totalResults !== 1 ? 's' : ''}
            </span>
          )}
          
          {/* Sort dropdown */}
          <div className="relative" ref={sortDropdownRef}>
            <button 
              type="button"
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-600 transition-colors cursor-pointer"
              aria-haspopup="listbox"
              aria-expanded={isSortOpen}
            >
              <i data-lucide="arrow-up-down" className="w-3.5 h-3.5"></i>
              <span>Ordenar</span>
              <i 
                data-lucide="chevron-down" 
                className={`w-3.5 h-3.5 transition-transform ${isSortOpen ? 'rotate-180' : ''}`}
              ></i>
            </button>
            
            {isSortOpen && (
              <div 
                className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-20"
                style={{ animation: 'slideDown 0.2s ease-out' }}
              >
                {sortOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => handleSortChange(option.value)}
                    className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors text-left ${
                      activeFilters.sort === option.value
                        ? 'bg-pink-50 text-pink-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <i data-lucide={option.icon} className="w-4 h-4"></i>
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Category Filter */}
      {availableCategories.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <span className="text-sm text-gray-500 shrink-0 font-medium">Categoría:</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleCategoryChange('')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  !activeFilters.category
                    ? 'bg-pink-100 text-pink-700 ring-1 ring-pink-200' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                Todas
              </button>
              {availableCategories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                    activeFilters.category === category
                      ? 'bg-pink-100 text-pink-700 ring-1 ring-pink-200' 
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Active filters display */}
      {(activeFilters.type || activeFilters.category || activeFilters.sort !== 'relevance') && (
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 flex-wrap">
          <span className="text-sm text-gray-500">Filtros activos:</span>
          
          {activeFilters.type && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-pink-50 text-pink-700 text-xs rounded-lg">
              {types.find(t => t.value === activeFilters.type)?.label}
              <button 
                onClick={() => removeFilter('type')}
                className="hover:text-pink-900"
                aria-label="Eliminar filtro de tipo"
              >
                <i data-lucide="x" className="w-3 h-3"></i>
              </button>
            </span>
          )}
          
          {activeFilters.category && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-lg">
              {activeFilters.category}
              <button 
                onClick={() => removeFilter('category')}
                className="hover:text-blue-900"
                aria-label="Eliminar filtro de categoría"
              >
                <i data-lucide="x" className="w-3 h-3"></i>
              </button>
            </span>
          )}
          
          {activeFilters.sort !== 'relevance' && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs rounded-lg">
              {sortOptions.find(s => s.value === activeFilters.sort)?.label}
              <button 
                onClick={() => removeFilter('sort')}
                className="hover:text-green-900"
                aria-label="Restablecer ordenamiento"
              >
                <i data-lucide="x" className="w-3 h-3"></i>
              </button>
            </span>
          )}
          
          <button 
            onClick={clearAllFilters}
            className="text-xs text-gray-400 hover:text-gray-600 underline ml-2"
          >
              Limpiar todos
          </button>
        </div>
      )}
    </div>
  );
}
