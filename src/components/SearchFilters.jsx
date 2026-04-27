import { useState, useEffect, useRef } from 'react';

const Icon = ({ name, className = "w-4 h-4", ariaHidden = true }) => {
  // Mapeo de nombres Lucide/Genéricos a clases de Font Awesome 6
  const iconMap = {
    'layers': 'fa-solid fa-layer-group',
    'stethoscope': 'fa-solid fa-stethoscope',
    'book-open': 'fa-solid fa-book-medical',
    'file-text': 'fa-solid fa-file-lines',
    'sliders-horizontal': 'fa-solid fa-sliders',
    'arrow-up-down': 'fa-solid fa-sort',
    'chevron-down': 'fa-solid fa-chevron-down',
    'target': 'fa-solid fa-bullseye',
    'arrow-up-a-z': 'fa-solid fa-sort-alpha-down',
    'calendar': 'fa-solid fa-calendar-days',
    'trending-up': 'fa-solid fa-arrow-trend-up',
    'x': 'fa-solid fa-xmark',
    'tag': 'fa-solid fa-tag',
    'filter': 'fa-solid fa-filter-list'
  };

  const iconClass = iconMap[name] || 'fa-solid fa-question';

  return (
    <i 
      className={`${iconClass} ${className}`} 
      aria-hidden={ariaHidden ? "true" : "false"}
    ></i>
  );
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
    <div className="search-filters bg-white p-2 sm:p-4  mb-4 sm:mb-6 max-w-full max-h-screen overflow-y-auto">
      {/* Loading Overlay */}
      {showLoading && (
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center z-20 p-2 sm:p-4" role="status" aria-live="polite">
          <div className="flex items-center gap-2 text-pink-600 text-xs sm:text-sm">
            <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="font-medium">Actualizando...</span>
          </div>
        </div>
      )}

      {/* Main Controls - Fully responsive */}
      <div className="flex flex-col gap-3 mb-3 sm:mb-4">
        {/* Type Filters - Horizontal scrollable with custom scrollbar */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1.5 sm:pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent [-webkit-scrollbar:height=4px]" role="group" aria-label="Filtrar por tipo">
          <span className="text-xs sm:text-sm text-gray-500 shrink-0 font-medium whitespace-nowrap">Tipo:</span>
          <div className="flex gap-1 p-2 sm:gap-2 min-w-max">
            {types.map(type => (
              <button
                key={type.value}
                onClick={() => handleTypeChange(type.value)}
                className={`px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1 sm:gap-1.5 shrink-0 h-9 sm:h-auto ${
                  activeFilters.type === type.value 
                    ? 'bg-pink-100 text-pink-700 ring-2 ring-pink-200' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
                aria-pressed={activeFilters.type === type.value}
                aria-label={`Filtrar por ${type.label}`}
              >
                {getIconForType(type.icon)}
                <span className="hidden xs:inline">{type.label}</span>
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
          
         
        </div>
      </div>


      {/* Category Filter */}
      {availableCategories.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 overflow-x-auto pb-2" role="group" aria-label="Filtrar por categoría">
            <span className="text-sm text-gray-500 shrink-0 font-medium">Categoría:</span>
            <div className="flex gap-2 p-2">
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
      <div className="mt-6 pt-6 border-t border-slate-50">
        <div className="flex flex-col gap-4">
          
          {/* Header con botón de limpiar */}
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 font-medium">Fecha:</span>
            </div>
            
            {(activeFilters.dateFrom || activeFilters.dateTo) && (
              <button
                onClick={() => {
                  handleDateChange('dateFrom', '');
                  handleDateChange('dateTo', '');
                }}
                className="text-[10px] font-bold text-pink-500 hover:text-pink-600 transition-colors bg-pink-50 px-2 py-1 rounded-md"
                aria-label="Limpiar fechas"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Inputs de Fecha */}
          <div className="grid grid-cols-1 gap-2">
            <div className="relative group">
              <label htmlFor="date-from" className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400 uppercase tracking-tight pointer-events-none group-focus-within:text-pink-500 transition-colors">
                Desde
              </label>
              <input
                id="date-from"
                type="date"
                value={activeFilters.dateFrom}
                onChange={(e) => handleDateChange('dateFrom', e.target.value)}
                className="w-full pl-16 pr-4 py-3 text-xs font-medium bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/10 focus:border-pink-500 transition-all text-slate-600"
              />
            </div>

            <div className="relative group">
              <label htmlFor="date-to" className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400 uppercase tracking-tight pointer-events-none group-focus-within:text-pink-500 transition-colors">
                Hasta
              </label>
              <input
                id="date-to"
                type="date"
                value={activeFilters.dateTo}
                onChange={(e) => handleDateChange('dateTo', e.target.value)}
                className="w-full pl-16 pr-4 py-3 text-xs font-medium bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/10 focus:border-pink-500 transition-all text-slate-600"
              />
            </div>
          </div>

          {/* Tip visual sutil */}
          <p className="text-[9px] text-slate-400 px-1 italic">
            * Filtra artículos o citas médicas por antigüedad.
          </p>
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