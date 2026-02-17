// Search data for the header search functionality
// Aggregates content from services, blog posts, and pages

import { services } from "./services.js";
import { blogPosts } from "./blogPosts.js";

// Search configuration and constants
const SEARCH_CONFIG = {
  MIN_QUERY_LENGTH: 2,
  MAX_RESULTS: 20,
  FUZZY_THRESHOLD: 0.3,
  CACHE_DURATION: 5 * 60 * 1000, // 5 minutes
  WEIGHTS: {
    EXACT_TITLE: 100,
    TITLE_STARTS: 80,
    TITLE_CONTAINS: 60,
    SYNONYM_MATCH: 50,
    DESCRIPTION: 30,
    CATEGORY: 25,
    TAGS: 20,
    TYPE_BOOST_SERVICE: 8,
    TYPE_BOOST_BLOG: 5,
    TYPE_BOOST_PAGE: 2
  }
};

// Synonyms dictionary for pediatric terms
const SYNONYMS = {
  // Servicios
  'vacuna': ['vacunación', 'vacunas', 'inmunización', 'inmunizaciones'],
  'vacunacion': ['vacuna', 'vacunas', 'inmunización', 'inmunizaciones'],
  'vacunas': ['vacuna', 'vacunación', 'inmunización'],
  'crecimiento': ['desarrollo', 'talla', 'peso', 'estatura', 'altura'],
  'desarrollo': ['crecimiento', 'psicomotor', 'hitos', 'evolución'],
  'nutricion': ['alimentación', 'dieta', 'comida', 'nutrientes', 'alimentos'],
  'alimentacion': ['nutrición', 'dieta', 'comida', 'alimentos'],
  'psicologia': ['psicología', 'emocional', 'conducta', 'comportamiento', 'mental'],
  'nebulizacion': ['nebulización', 'inhalación', 'respiratorio', 'asma', 'bronquitis'],
  'recien nacido': ['neonato', 'neonatal', 'bebe', 'bebé', 'recién nacidos'],
  'bebe': ['bebé', 'recién nacido', 'infante', 'niño', 'niña'],
  'bebes': ['bebés', 'recién nacidos', 'infantes', 'niños'],
  'niño': ['niña', 'bebé', 'infante', 'menor', 'pediatría'],
  'niños': ['niñas', 'bebés', 'infantes', 'menores', 'pediatría'],
  'doctor': ['médico', 'doctora', 'pediatra', 'especialista'],
  'medico': ['doctor', 'médica', 'pediatra', 'especialista'],
  'clinica': ['clínica', 'consultorio', 'hospital', 'centro médico'],
  'cita': ['consulta', 'agenda', 'reserva', 'turno'],
  'consulta': ['cita', 'visita', 'revisión', 'chequeo'],
  'emergencia': ['urgencia', 'emergencias', 'urgencias', 'critical'],
  'fiebre': ['temperatura', 'calentura', 'febriles'],
  'tos': ['toser', 'respiratorio', 'catarro'],
  'dolor': ['malestar', 'doloroso', 'molestia'],
  'alergia': ['alergias', 'alérgico', 'alérgica', 'hipersensibilidad']
};

// Simple in-memory cache for search results
const searchCache = new Map();

// Search analytics for tracking popular queries
const searchAnalytics = {
  queries: new Map(),
  recordQuery(query, resultCount) {
    const normalized = query.toLowerCase().trim();
    const existing = this.queries.get(normalized);
    if (existing) {
      existing.count++;
      existing.lastUsed = Date.now();
      existing.avgResults = (existing.avgResults * (existing.count - 1) + resultCount) / existing.count;
    } else {
      this.queries.set(normalized, {
        query: normalized,
        count: 1,
        lastUsed: Date.now(),
        avgResults: resultCount
      });
    }
  },
  getPopularQueries(limit = 10) {
    return Array.from(this.queries.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, limit);
  },
  getRecentQueries(limit = 5) {
    return Array.from(this.queries.values())
      .sort((a, b) => b.lastUsed - a.lastUsed)
      .slice(0, limit);
  }
};


// Pages data
const pages = [
  {
    slug: "",
    title: "Inicio",
    description: "Página principal de la Clínica Pediátrica - Especialistas en la salud y bienestar de tus hijos en Ayacucho",
    type: "page",
    url: "/"
  },
  {
    slug: "nosotros",
    title: "Nosotros",
    description: "Conoce más sobre nosotros - Nuestra clínica, misión, visión y valores",
    type: "page",
    url: "/nosotros"
  },
  {
    slug: "servicios",
    title: "Servicios",
    description: "Todos nuestros servicios pediátricos: control de crecimiento, vacunación, nutrición, psicología y más",
    type: "page",
    url: "/servicios"
  },
  {
    slug: "equipo",
    title: "Equipo",
    description: "Conoce a nuestro equipo de especialistas pediatricos",
    type: "page",
    url: "/equipo"
  },
  {
    slug: "blogs",
    title: "Blogs",
    description: "Artículos y consejos sobre salud infantil, desarrollo y cuidado de tus hijos",
    type: "page",
    url: "/blogs"
  },
  {
    slug: "contacto",
    title: "Contacto",
    description: "Contáctanos para más información o para agendar una cita",
    type: "page",
    url: "/contacto"
  }
];

// Transform services for search
const servicesData = services.map(service => ({
  slug: service.slug,
  title: service.title,
  description: service.shortDesc,
  category: service.category,
  type: "service",
  url: `/servicios/${service.slug}`
}));

// Transform blog posts for search
const blogPostsData = blogPosts.map(post => ({
  slug: post.slug,
  title: post.title,
  description: post.excerpt,
  category: post.category,
  tags: post.tags,
  type: "blog",
  url: `/blog/${post.slug}`
}));

// Combine all search data
export const searchData = [
  ...pages,
  ...servicesData,
  ...blogPostsData
];

// Expand search terms with synonyms
function expandWithSynonyms(terms) {
  const expanded = new Set(terms);
  
  for (const term of terms) {
    for (const [key, values] of Object.entries(SYNONYMS)) {
      if (term.includes(key) || key.includes(term)) {
        values.forEach(synonym => expanded.add(synonym));
        expanded.add(key);
      }
    }
  }
  
  return Array.from(expanded);
}

// Calculate relevance score for a search result with dynamic weights
function calculateRelevance(item, searchTerms, originalQuery) {
  let score = 0;
  const titleLower = item.title.toLowerCase();
  const descLower = item.description.toLowerCase();
  const categoryLower = item.category ? item.category.toLowerCase() : '';
  const tagsLower = item.tags ? item.tags.map(t => t.toLowerCase()) : [];
  
  // Expand terms with synonyms for better matching
  const expandedTerms = expandWithSynonyms(searchTerms);
  
  for (const term of expandedTerms) {
    // Title matches (highest weight)
    if (titleLower === term) score += SEARCH_CONFIG.WEIGHTS.EXACT_TITLE;
    else if (titleLower.startsWith(term)) score += SEARCH_CONFIG.WEIGHTS.TITLE_STARTS;
    else if (titleLower.includes(term)) score += SEARCH_CONFIG.WEIGHTS.TITLE_CONTAINS;
    
    // Synonym matches
    if (!searchTerms.includes(term) && titleLower.includes(term)) {
      score += SEARCH_CONFIG.WEIGHTS.SYNONYM_MATCH;
    }
    
    // Description matches (medium weight)
    if (descLower.includes(term)) score += SEARCH_CONFIG.WEIGHTS.DESCRIPTION;
    
    // Category matches
    if (categoryLower.includes(term)) score += SEARCH_CONFIG.WEIGHTS.CATEGORY;
    
    // Tags matches
    if (tagsLower.some(tag => tag.includes(term))) score += SEARCH_CONFIG.WEIGHTS.TAGS;
  }
  
  // Boost by type priority with configurable weights
  if (item.type === 'service') score += SEARCH_CONFIG.WEIGHTS.TYPE_BOOST_SERVICE;
  else if (item.type === 'blog') score += SEARCH_CONFIG.WEIGHTS.TYPE_BOOST_BLOG;
  else if (item.type === 'page') score += SEARCH_CONFIG.WEIGHTS.TYPE_BOOST_PAGE;
  
  // Bonus for exact phrase match in title
  if (originalQuery.length > 3 && titleLower.includes(originalQuery.toLowerCase())) {
    score += 25;
  }
  
  // Bonus for word proximity (if multiple words match closely)
  if (searchTerms.length > 1) {
    const titleWords = titleLower.split(/\s+/);
    let proximityBonus = 0;
    for (let i = 0; i < titleWords.length - 1; i++) {
      if (expandedTerms.some(t => titleWords[i].includes(t)) && 
          expandedTerms.some(t => titleWords[i + 1].includes(t))) {
        proximityBonus += 10;
      }
    }
    score += Math.min(proximityBonus, 30); // Cap at 30
  }
  
  return score;
}


// Highlight search terms in text
export function highlightText(text, query) {
  if (!query || !text) return text;
  
  const terms = query.toLowerCase().trim().split(/\s+/).filter(t => t.length > 0);
  let highlighted = text;
  
  for (const term of terms) {
    const regex = new RegExp(`(${escapeRegex(term)})`, 'gi');
    highlighted = highlighted.replace(regex, '<mark class="bg-yellow-200 text-gray-900 px-1 rounded">$1</mark>');
  }
  
  return highlighted;
}

// Escape special regex characters
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Calculate Levenshtein distance for fuzzy matching (optimized)
function levenshteinDistance(str1, str2) {
  const s1 = str1.toLowerCase();
  const s2 = str2.toLowerCase();
  
  if (s1 === s2) return 0;
  if (s1.length === 0) return s2.length;
  if (s2.length === 0) return s1.length;
  
  // Use two rows instead of full matrix for memory efficiency
  let prevRow = new Array(s2.length + 1);
  let currRow = new Array(s2.length + 1);
  
  for (let j = 0; j <= s2.length; j++) {
    prevRow[j] = j;
  }
  
  for (let i = 1; i <= s1.length; i++) {
    currRow[0] = i;
    for (let j = 1; j <= s2.length; j++) {
      const cost = s1.charAt(i - 1) === s2.charAt(j - 1) ? 0 : 1;
      currRow[j] = Math.min(
        prevRow[j] + 1,      // deletion
        currRow[j - 1] + 1,  // insertion
        prevRow[j - 1] + cost // substitution
      );
    }
    [prevRow, currRow] = [currRow, prevRow];
  }
  
  return prevRow[s2.length];
}

// Fuzzy match check with improved algorithm
function fuzzyMatch(text, query, threshold = SEARCH_CONFIG.FUZZY_THRESHOLD) {
  if (!text || !query) return false;
  const textLower = text.toLowerCase();
  const queryLower = query.toLowerCase();
  
  // Direct inclusion
  if (textLower.includes(queryLower)) return true;
  
  // Check for expanded synonyms
  const querySynonyms = expandWithSynonyms([queryLower]);
  for (const synonym of querySynonyms) {
    if (textLower.includes(synonym)) return true;
  }
  
  // Check for typos (Levenshtein distance) only for queries > 3 chars
  if (query.length > 3) {
    const maxDistance = Math.max(1, Math.floor(query.length * threshold));
    
    // Quick check: if length difference is too big, skip
    if (Math.abs(textLower.length - queryLower.length) > maxDistance * 2) {
      // Check word by word instead
      const words = textLower.split(/\s+/);
      for (const word of words) {
        if (Math.abs(word.length - queryLower.length) <= maxDistance * 2 &&
            word.length > 3 &&
            levenshteinDistance(word, queryLower) <= maxDistance) {
          return true;
        }
      }
      return false;
    }
    
    if (levenshteinDistance(textLower, queryLower) <= maxDistance) return true;
    
    // Check word by word for longer texts
    const words = textLower.split(/\s+/);
    for (const word of words) {
      if (word.length > 3 && levenshteinDistance(word, queryLower) <= Math.floor(query.length * 0.4)) {
        return true;
      }
    }
  }
  
  // Check for partial matches (substring fuzzy match)
  if (query.length > 4) {
    for (let i = 0; i <= textLower.length - query.length; i++) {
      const substring = textLower.substr(i, query.length + 2);
      if (levenshteinDistance(substring, queryLower) <= 1) {
        return true;
      }
    }
  }
  
  return false;
}

// Check if query is an exact phrase search (wrapped in quotes)
function isExactPhraseSearch(query) {
  return /^".+"$/.test(query.trim());
}

// Extract exact phrase from quoted query
function extractExactPhrase(query) {
  const match = query.trim().match(/^"(.+)"$/);
  return match ? match[1] : query;
}


// Generate cache key from query and options
function generateCacheKey(query, options) {
  return `${query.toLowerCase().trim()}_${JSON.stringify(options)}`;
}

// Clear expired cache entries
function clearExpiredCache() {
  const now = Date.now();
  for (const [key, entry] of searchCache.entries()) {
    if (now - entry.timestamp > SEARCH_CONFIG.CACHE_DURATION) {
      searchCache.delete(key);
    }
  }
}

// Helper function to search with improved algorithm
export function searchContent(query, options = {}) {
  if (!query || query.length < SEARCH_CONFIG.MIN_QUERY_LENGTH) return [];
  
  // Check for exact phrase search
  const isExactPhrase = isExactPhraseSearch(query);
  const searchQuery = isExactPhrase ? extractExactPhrase(query) : query;
  
  const { 
    limit = SEARCH_CONFIG.MAX_RESULTS, 
    fuzzy = true, 
    sortBy = 'relevance',
    filters = {},
    useCache = true
  } = options;
  
  // Check cache first
  if (useCache) {
    clearExpiredCache();
    const cacheKey = generateCacheKey(searchQuery, { fuzzy, sortBy, filters });
    const cached = searchCache.get(cacheKey);
    if (cached && (Date.now() - cached.timestamp < SEARCH_CONFIG.CACHE_DURATION)) {
      // Record analytics even for cached results
      searchAnalytics.recordQuery(searchQuery, cached.results.length);
      return cached.results.slice(0, limit);
    }
  }
  
  const searchTerm = searchQuery.toLowerCase().trim();
  const searchTerms = isExactPhrase 
    ? [searchTerm] 
    : searchTerm.split(/\s+/).filter(t => t.length > 0);
  
  let results = searchData.filter(item => {
    // Apply type filter
    if (filters.type && item.type !== filters.type) return false;
    
    // Apply category filter
    if (filters.category && item.category !== filters.category) return false;
    
    // Apply date range filter if provided
    if (filters.dateFrom && item.date) {
      if (new Date(item.date) < new Date(filters.dateFrom)) return false;
    }
    if (filters.dateTo && item.date) {
      if (new Date(item.date) > new Date(filters.dateTo)) return false;
    }
    
    // For exact phrase search, require exact match
    if (isExactPhrase) {
      const exactMatch = item.title.toLowerCase().includes(searchTerm) ||
                        item.description.toLowerCase().includes(searchTerm);
      return exactMatch;
    }
    
    // Search matching with fuzzy logic
    const titleMatch = fuzzy 
      ? fuzzyMatch(item.title, searchTerm) 
      : item.title.toLowerCase().includes(searchTerm);
    
    const descMatch = fuzzy
      ? fuzzyMatch(item.description, searchTerm)
      : item.description.toLowerCase().includes(searchTerm);
    
    const categoryMatch = item.category && (
      fuzzy 
        ? fuzzyMatch(item.category, searchTerm)
        : item.category.toLowerCase().includes(searchTerm)
    );
    
    const tagsMatch = item.tags && item.tags.some(tag => {
      const tagLower = tag.toLowerCase();
      return fuzzy 
        ? fuzzyMatch(tag, searchTerm)
        : tagLower.includes(searchTerm);
    });
    
    return titleMatch || descMatch || categoryMatch || tagsMatch;
  });
  
  // Calculate relevance scores with original query for phrase bonus
  results = results.map(item => ({
    ...item,
    relevanceScore: calculateRelevance(item, searchTerms, searchTerm),
    highlightedTitle: highlightText(item.title, searchQuery),
    highlightedDescription: highlightText(item.description, searchQuery),
    isExactPhraseMatch: isExactPhrase
  }));
  
  // Sort results
  if (sortBy === 'relevance') {
    results.sort((a, b) => b.relevanceScore - a.relevanceScore);
  } else if (sortBy === 'title') {
    results.sort((a, b) => a.title.localeCompare(b.title, 'es', { sensitivity: 'base' }));
  } else if (sortBy === 'date' && results[0]?.date) {
    results.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortBy === 'popularity') {
    results.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
  }
  
  // Cache results
  if (useCache) {
    const cacheKey = generateCacheKey(searchQuery, { fuzzy, sortBy, filters });
    searchCache.set(cacheKey, {
      results: results,
      timestamp: Date.now()
    });
  }
  
  // Record analytics
  searchAnalytics.recordQuery(searchQuery, results.length);
  
  return results.slice(0, limit);
}


// Get search suggestions based on partial query with categories
export function getSearchSuggestions(query, limit = 8) {
  if (!query || query.length < SEARCH_CONFIG.MIN_QUERY_LENGTH) return [];
  
  const searchTerm = query.toLowerCase().trim();
  const expandedTerms = expandWithSynonyms([searchTerm]);
  
  // Get matching items with scoring
  const scoredMatches = searchData.map(item => {
    let score = 0;
    const titleLower = item.title.toLowerCase();
    const categoryLower = item.category ? item.category.toLowerCase() : '';
    const tagsLower = item.tags ? item.tags.map(t => t.toLowerCase()) : [];
    
    // Check against expanded terms (including synonyms)
    for (const term of expandedTerms) {
      if (titleLower.includes(term)) score += 10;
      if (titleLower.startsWith(term)) score += 20;
      if (categoryLower.includes(term)) score += 5;
      if (tagsLower.some(tag => tag.includes(term))) score += 3;
    }
    
    // Boost by type
    if (item.type === 'service') score += 3;
    else if (item.type === 'blog') score += 2;
    
    return { item, score };
  }).filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit * 2); // Get more for categorization
  
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
  
  scoredMatches.forEach(({ item }) => {
    if (seen.has(item.title)) return;
    seen.add(item.title);
    
    const titleLower = item.title.toLowerCase();
    
    // Categorize
    if (titleLower.includes(searchTerm)) {
      if (titleLower.startsWith(searchTerm)) {
        categorized.exact.push(item);
      } else {
        if (item.type === 'service') categorized.services.push(item);
        else if (item.type === 'blog') categorized.blogs.push(item);
        else categorized.pages.push(item);
      }
    }
    
    // Add category suggestion
    if (item.category && !seen.has(item.category)) {
      const catLower = item.category.toLowerCase();
      if (expandedTerms.some(t => catLower.includes(t))) {
        categorized.categories.push({
          title: item.category,
          type: 'category',
          category: item.category,
          url: `/busqueda?category=${encodeURIComponent(item.category)}&q=${encodeURIComponent(query)}`
        });
        seen.add(item.category);
      }
    }
    
    // Add tag suggestions
    if (item.tags) {
      item.tags.forEach(tag => {
        if (!seen.has(tag) && expandedTerms.some(t => tag.toLowerCase().includes(t))) {
          categorized.tags.push({
            title: tag,
            type: 'tag',
            category: tag,
            url: `/busqueda?q=${encodeURIComponent(tag)}`
          });
          seen.add(tag);
        }
      });
    }
  });
  
  // Combine and limit results
  const suggestions = [
    ...categorized.exact.slice(0, 3),
    ...categorized.services.slice(0, 2),
    ...categorized.blogs.slice(0, 2),
    ...categorized.pages.slice(0, 2),
    ...categorized.categories.slice(0, 2),
    ...categorized.tags.slice(0, 2)
  ].slice(0, limit);
  
  return suggestions.map(item => ({
    title: item.title,
    type: item.type,
    category: item.category,
    url: item.url,
    icon: getIconForType(item.type)
  }));
}

// Get icon based on type
function getIconForType(type) {
  const icons = {
    page: 'file-text',
    service: 'stethoscope',
    blog: 'book-open',
    category: 'tag',
    tag: 'hash'
  };
  return icons[type] || 'search';
}

// Get popular searches from analytics
export function getPopularSearches(limit = 6) {
  return searchAnalytics.getPopularQueries(limit).map(q => q.query);
}

// Get recent searches from analytics
export function getRecentSearches(limit = 5) {
  return searchAnalytics.getRecentQueries(limit).map(q => q.query);
}

// Get search statistics
export function getSearchStats() {
  return {
    totalQueries: searchAnalytics.queries.size,
    popular: searchAnalytics.getPopularQueries(10),
    recent: searchAnalytics.getRecentQueries(5),
    cacheSize: searchCache.size
  };
}

// Clear search cache manually
export function clearSearchCache() {
  searchCache.clear();
}

// Advanced search with boolean operators
export function advancedSearch(query, options = {}) {
  if (!query || query.length < SEARCH_CONFIG.MIN_QUERY_LENGTH) return [];
  
  // Parse boolean operators
  const andTerms = [];
  const orTerms = [];
  const notTerms = [];
  
  // Extract quoted phrases
  const phrases = [];
  let processedQuery = query.replace(/"([^"]+)"/g, (match, phrase) => {
    phrases.push(phrase);
    return ` __PHRASE${phrases.length - 1}__ `;
  });
  
  // Parse operators
  const tokens = processedQuery.split(/\s+/);
  let currentOp = 'AND';
  
  for (const token of tokens) {
    if (token.toUpperCase() === 'AND') {
      currentOp = 'AND';
    } else if (token.toUpperCase() === 'OR') {
      currentOp = 'OR';
    } else if (token.toUpperCase() === 'NOT') {
      currentOp = 'NOT';
    } else if (token.startsWith('__PHRASE')) {
      const phraseIndex = parseInt(token.replace('__PHRASE', '').replace('__', ''));
      const phrase = phrases[phraseIndex];
      if (currentOp === 'NOT') notTerms.push(phrase);
      else if (currentOp === 'OR') orTerms.push(phrase);
      else andTerms.push(phrase);
    } else if (token.length > 0) {
      if (currentOp === 'NOT') notTerms.push(token);
      else if (currentOp === 'OR') orTerms.push(token);
      else andTerms.push(token);
    }
  }
  
  // Search with boolean logic
  return searchContent(query, {
    ...options,
    useCache: false // Don't cache complex queries
  }).filter(item => {
    const text = `${item.title} ${item.description} ${item.category || ''}`.toLowerCase();
    
    // Must have all AND terms
    for (const term of andTerms) {
      if (!text.includes(term.toLowerCase())) return false;
    }
    
    // Must have at least one OR term (if any specified)
    if (orTerms.length > 0) {
      const hasOrTerm = orTerms.some(term => text.includes(term.toLowerCase()));
      if (!hasOrTerm) return false;
    }
    
    // Must NOT have any NOT terms
    for (const term of notTerms) {
      if (text.includes(term.toLowerCase())) return false;
    }
    
    return true;
  });
}



// Get all unique categories for filtering
export function getSearchCategories() {
  const categories = new Set();
  
  searchData.forEach(item => {
    if (item.category) {
      categories.add(item.category);
    }
    categories.add(item.type);
  });
  
  return Array.from(categories);
}
