import { useState, useEffect, useRef } from 'react';

// Icon component to prevent hydration mismatch
const Icon = ({ name, className = "w-4 h-4", ariaHidden = true }) => {
  const icons = {
    layers: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    stethoscope: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>,
    'book-open': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    'file-text': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>,
    'sliders-horizontal': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/></svg>,
    'arrow-up-down': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/></svg>,
    'chevron-down': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><path d="m6 9 6 6 6-6"/></svg>,
    target: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    'arrow-up-a-z': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M11 12h4"/><path d="M11 16h7"/><path d="M11 20h10"/><path d="M15 4h5"/><path d="M19 4v8"/></svg>,
    calendar: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>,
    'trending-up': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
    x: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={ariaHidden}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  };
  
  return icons[name] || null;
};

// SearchFilters - React version with enhanced interactivity and advanced filters


export default function SearchFilters({ 
  currentType = '', 
  currentCategory = '', 
  currentSort = 'relevance',
  currentDateFrom = '',
  currentDateTo = '',
  availableCategories = [],
  totalResults = 0,
  isLoading = false,
  onAdvancedSearch = null
}) {


  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    type: currentType,
    category: currentCategory,
    sort: currentSort,
    dateFrom: currentDateFrom,
    dateTo: currentDateTo
  });
  
  const [advancedQuery, setAdvancedQuery] = useState('');
  
  const sortDropdownRef = useRef(null);
  const advancedRef = useRef(null);


  const types = [
    { value: '', label: 'Todos', icon: 'layers' },
    { value: 'service', label: 'Servicios', icon: 'stethoscope' },
    { value: 'blog', label: 'Artículos', icon: 'book-open' },
    { value: 'page', label: 'Páginas', icon: 'file-text' }
  ];

  const sortOptions = [
    { value: 'relevance', label: 'Relevancia', icon: 'target' },
    { value: 'title', label: 'Nombre', icon: 'arrow-up-a-z' },
    { value: 'date', label: 'Fecha', icon: 'calendar' },
    { value: 'popularity', label: 'Popularidad', icon: 'trending-up' }
  ];

  // Loading delay for better UX
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setShowLoading(true), 200);
      return () => clearTimeout(timer);
    } else {
      setShowLoading(false);
    }
  }, [isLoading]);


  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(e.target)) {
        setIsSortOpen(false);
      }
      if (advancedRef.current && !advancedRef.current.contains(e.target)) {
        setIsAdvancedOpen(false);
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
      if (value && value !== 'relevance') { // Don't include default sort
        searchParams.set(key, value);
      } else {
        searchParams.delete(key);
      }
    });
    searchParams.set('page', '1');
    return `?${searchParams.toString()}`;
  };

  const buildAdvancedUrl = () => {
    if (!advancedQuery.trim()) return;
    const searchParams = new URLSearchParams();
    searchParams.set('q', advancedQuery.trim());
    searchParams.set('advanced', 'true');
    return `/busqueda?${searchParams.toString()}`;
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

  const handleDateChange = (dateType, value) => {
    const newFilters = { ...activeFilters, [dateType]: value };
    setActiveFilters(newFilters);
    window.location.href = buildUrl(newFilters);
  };

  const handleAdvancedSearch = (e) => {
    e.preventDefault();
    const url = buildAdvancedUrl();
    if (url) {
      if (onAdvancedSearch) {
        onAdvancedSearch(advancedQuery.trim());
      } else {
        window.location.href = url;
      }
    }
  };

  const removeFilter = (filterType) => {
    const defaultValue = filterType === 'sort' ? 'relevance' : '';
    const newFilters = { ...activeFilters, [filterType]: defaultValue };
    setActiveFilters(newFilters);
    window.location.href = buildUrl(newFilters);
  };


  const clearAllFilters = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const q = searchParams.get('q') || '';
    setActiveFilters({
      type: '',
      category: '',
      sort: 'relevance',
      dateFrom: '',
      dateTo: ''
    });
    window.location.href = q ? `?q=${encodeURIComponent(q)}` : '?';
  };

  const hasActiveFilters = activeFilters.type || activeFilters.category || 
    activeFilters.sort !== 'relevance' || activeFilters.dateFrom || activeFilters.dateTo;


  const getIconForType = (iconName) => {
    return <Icon name={iconName} className="w-3.5 h-3.5" />;
  };


  return (
    <div className="search-filters bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-6 relative">
      {/* Loading Overlay */}
      {showLoading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-20" role="status" aria-live="polite">
          <div className="flex items-center gap-2 text-pink-600">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-sm font-medium">Actualizando resultados...</span>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Filter by Type */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0" role="group" aria-label="Filtrar por tipo">
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
                aria-pressed={activeFilters.type === type.value}
                aria-label={`Filtrar por ${type.label}`}
              >
                {getIconForType(type.icon)}
                {type.label}
              </button>
            ))}
          </div>
        </div>


        {/* Sort, Advanced, and Stats */}
        <div className="flex items-center justify-between lg:justify-end gap-3">
          {/* Results count */}
          {totalResults > 0 && (
            <span className="text-sm text-gray-500" aria-live="polite">
              {totalResults} resultado{totalResults !== 1 ? 's' : ''}
            </span>
          )}
          
          {/* Advanced Search Toggle */}
          <div className="relative" ref={advancedRef}>
            <button 
              type="button"
              onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
                isAdvancedOpen || advancedQuery 
                  ? 'bg-purple-50 text-purple-700' 
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-600'
              }`}
              aria-haspopup="true"
              aria-expanded={isAdvancedOpen}
              aria-label="Búsqueda avanzada"
            >
              <Icon name="sliders-horizontal" className="w-3.5 h-3.5" />

              <span className="hidden sm:inline">Avanzado</span>
            </button>
            
            {isAdvancedOpen && (
              <div 
                className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-30 p-4"
                style={{ animation: 'slideDown 0.2s ease-out' }}
                role="dialog"
                aria-label="Opciones de búsqueda avanzada"
              >
                <form onSubmit={handleAdvancedSearch} className="space-y-3">
                  <div>
                    <label htmlFor="advanced-query" className="block text-xs font-medium text-gray-700 mb-1">
                      Búsqueda con operadores
                    </label>
                    <input
                      id="advanced-query"
                      type="text"
                      value={advancedQuery}
                      onChange={(e) => setAdvancedQuery(e.target.value)}
                      placeholder='vacuna AND niño NOT "efectos secundarios"'
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      aria-describedby="advanced-help"
                    />
                    <p id="advanced-help" className="text-xs text-gray-500 mt-1">
                      Usa AND, OR, NOT y comillas para frases exactas
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                      disabled={!advancedQuery.trim()}
                    >
                      Buscar
                    </button>
                    <button
                      type="button"
                      onClick={() => setAdvancedQuery('')}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors"
                    >
                      Limpiar
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
          
          {/* Sort dropdown */}
          <div className="relative" ref={sortDropdownRef}>
            <button 
              type="button"
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-600 transition-colors cursor-pointer"
              aria-haspopup="listbox"
              aria-expanded={isSortOpen}
              aria-label="Opciones de ordenamiento"
            >
              <Icon name="arrow-up-down" className="w-3.5 h-3.5" ariaHidden={true} />
              <span>Ordenar</span>
              <Icon 
                name="chevron-down" 
                className={`w-3.5 h-3.5 transition-transform ${isSortOpen ? 'rotate-180' : ''}`}
                ariaHidden={true}
              />

            </button>
            
            {isSortOpen && (
              <div 
                className="absolute right-0 top-full mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-20"
                style={{ animation: 'slideDown 0.2s ease-out' }}
                role="listbox"
                aria-label="Opciones de ordenamiento"
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
                    role="option"
                    aria-selected={activeFilters.sort === option.value}
                  >
                    <Icon name={option.icon} className="w-4 h-4" ariaHidden={true} />

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
          <div className="flex items-center gap-2 overflow-x-auto pb-2" role="group" aria-label="Filtrar por categoría">
            <span className="text-sm text-gray-500 shrink-0 font-medium">Categoría:</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleCategoryChange('')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  !activeFilters.category
                    ? 'bg-pink-100 text-pink-700 ring-1 ring-pink-200' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
                aria-pressed={!activeFilters.category}
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
                  aria-pressed={activeFilters.category === category}
                  aria-label={`Filtrar por categoría ${category}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Date Range Filter */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-sm text-gray-500 font-medium">Fecha:</span>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <label htmlFor="date-from" className="text-xs text-gray-500">Desde:</label>
              <input
                id="date-from"
                type="date"
                value={activeFilters.dateFrom}
                onChange={(e) => handleDateChange('dateFrom', e.target.value)}
                className="px-2 py-1 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                aria-label="Fecha desde"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="date-to" className="text-xs text-gray-500">Hasta:</label>
              <input
                id="date-to"
                type="date"
                value={activeFilters.dateTo}
                onChange={(e) => handleDateChange('dateTo', e.target.value)}
                className="px-2 py-1 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                aria-label="Fecha hasta"
              />
            </div>
            {(activeFilters.dateFrom || activeFilters.dateTo) && (
              <button
                onClick={() => {
                  handleDateChange('dateFrom', '');
                  handleDateChange('dateTo', '');
                }}
                className="text-xs text-gray-400 hover:text-gray-600 underline"
                aria-label="Limpiar filtros de fecha"
              >
                Limpiar fechas
              </button>
            )}
          </div>
        </div>
      </div>


      {/* Active filters display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 flex-wrap" aria-label="Filtros activos">
          <span className="text-sm text-gray-500">Filtros activos:</span>
          
          {activeFilters.type && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-pink-50 text-pink-700 text-xs rounded-lg">
              {types.find(t => t.value === activeFilters.type)?.label}
              <button 
                onClick={() => removeFilter('type')}
                className="hover:text-pink-900 focus:outline-none focus:ring-2 focus:ring-pink-300 rounded"
                aria-label={`Eliminar filtro de tipo ${types.find(t => t.value === activeFilters.type)?.label}`}
              >
                <Icon name="x" className="w-3 h-3" ariaHidden={true} />
              </button>

            </span>
          )}
          
          {activeFilters.category && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-lg">
              {activeFilters.category}
              <button 
                onClick={() => removeFilter('category')}
                className="hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
                aria-label={`Eliminar filtro de categoría ${activeFilters.category}`}
              >
                <Icon name="x" className="w-3 h-3" ariaHidden={true} />
              </button>

            </span>
          )}
          
          {activeFilters.sort !== 'relevance' && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs rounded-lg">
              {sortOptions.find(s => s.value === activeFilters.sort)?.label}
              <button 
                onClick={() => removeFilter('sort')}
                className="hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300 rounded"
                aria-label={`Restablecer ordenamiento ${sortOptions.find(s => s.value === activeFilters.sort)?.label}`}
              >
                <Icon name="x" className="w-3 h-3" ariaHidden={true} />
              </button>

            </span>
          )}
          
          {(activeFilters.dateFrom || activeFilters.dateTo) && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-lg">
              {activeFilters.dateFrom && activeFilters.dateTo 
                ? `${activeFilters.dateFrom} - ${activeFilters.dateTo}`
                : activeFilters.dateFrom 
                  ? `Desde ${activeFilters.dateFrom}`
                  : `Hasta ${activeFilters.dateTo}`}
              <button 
                onClick={() => {
                  removeFilter('dateFrom');
                  removeFilter('dateTo');
                }}
                className="hover:text-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded"
                aria-label="Eliminar filtro de rango de fechas"
              >
                <Icon name="x" className="w-3 h-3" ariaHidden={true} />
              </button>

            </span>
          )}
          
          <button 
            onClick={clearAllFilters}
            className="text-xs text-gray-400 hover:text-gray-600 underline ml-2 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded px-1"
            aria-label="Limpiar todos los filtros"
          >
            Limpiar todos
          </button>
        </div>
      )}
    </div>
  );
}
