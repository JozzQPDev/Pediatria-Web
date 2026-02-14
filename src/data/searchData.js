// Search data for the header search functionality
// Aggregates content from services, blog posts, and pages

import { services } from "./services.js";
import { blogPosts } from "./blogPosts.js";

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

// Calculate relevance score for a search result
function calculateRelevance(item, searchTerms) {
  let score = 0;
  const titleLower = item.title.toLowerCase();
  const descLower = item.description.toLowerCase();
  const categoryLower = item.category ? item.category.toLowerCase() : '';
  const tagsLower = item.tags ? item.tags.map(t => t.toLowerCase()) : [];
  
  for (const term of searchTerms) {
    // Title matches (highest weight)
    if (titleLower === term) score += 100; // Exact match
    else if (titleLower.startsWith(term)) score += 80; // Starts with
    else if (titleLower.includes(term)) score += 60; // Contains
    
    // Description matches (medium weight)
    if (descLower.includes(term)) score += 30;
    
    // Category matches (lower weight)
    if (categoryLower.includes(term)) score += 20;
    
    // Tags matches (lower weight)
    if (tagsLower.some(tag => tag.includes(term))) score += 15;
  }
  
  // Boost by type priority: services > blog > pages
  if (item.type === 'service') score += 5;
  else if (item.type === 'blog') score += 3;
  
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

// Calculate Levenshtein distance for fuzzy matching
function levenshteinDistance(str1, str2) {
  const matrix = [];
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[str2.length][str1.length];
}

// Fuzzy match check
function fuzzyMatch(text, query, threshold = 0.3) {
  if (!text || !query) return false;
  const textLower = text.toLowerCase();
  const queryLower = query.toLowerCase();
  
  // Direct inclusion
  if (textLower.includes(queryLower)) return true;
  
  // Check for typos (Levenshtein distance)
  if (query.length > 3) {
    const maxDistance = Math.floor(query.length * threshold);
    // Check query against text and text against query
    if (levenshteinDistance(textLower, queryLower) <= maxDistance) return true;
    
    // Check word by word
    const words = textLower.split(/\s+/);
    for (const word of words) {
      if (word.length > 3 && levenshteinDistance(word, queryLower) <= Math.floor(query.length * 0.4)) {
        return true;
      }
    }
  }
  
  return false;
}

// Helper function to search with improved algorithm
export function searchContent(query, options = {}) {
  if (!query || query.length < 2) return [];
  
  const { 
    limit = 20, 
    fuzzy = true, 
    sortBy = 'relevance',
    filters = {}
  } = options;
  
  const searchTerm = query.toLowerCase().trim();
  const searchTerms = searchTerm.split(/\s+/).filter(t => t.length > 0);
  
  let results = searchData.filter(item => {
    // Apply type filter
    if (filters.type && item.type !== filters.type) return false;
    
    // Apply category filter
    if (filters.category && item.category !== filters.category) return false;
    
    // Search matching
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
  
  // Calculate relevance scores
  results = results.map(item => ({
    ...item,
    relevanceScore: calculateRelevance(item, searchTerms),
    highlightedTitle: highlightText(item.title, query),
    highlightedDescription: highlightText(item.description, query)
  }));
  
  // Sort results
  if (sortBy === 'relevance') {
    results.sort((a, b) => b.relevanceScore - a.relevanceScore);
  } else if (sortBy === 'title') {
    results.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === 'date' && results[0]?.date) {
    results.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  
  return results.slice(0, limit);
}

// Get search suggestions based on partial query
export function getSearchSuggestions(query, limit = 5) {
  if (!query || query.length < 2) return [];
  
  const searchTerm = query.toLowerCase().trim();
  
  // Get matching items
  const matches = searchData.filter(item => {
    return item.title.toLowerCase().includes(searchTerm) ||
           (item.category && item.category.toLowerCase().includes(searchTerm)) ||
           (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm)));
  });
  
  // Extract unique suggestions
  const suggestions = new Set();
  
  matches.forEach(item => {
    // Add title if it matches
    if (item.title.toLowerCase().includes(searchTerm)) {
      suggestions.add(item.title);
    }
    
    // Add category
    if (item.category) {
      suggestions.add(item.category);
    }
    
    // Add matching tags
    if (item.tags) {
      item.tags.forEach(tag => {
        if (tag.toLowerCase().includes(searchTerm)) {
          suggestions.add(tag);
        }
      });
    }
  });
  
  return Array.from(suggestions).slice(0, limit);
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
