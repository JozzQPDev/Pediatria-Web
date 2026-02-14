# Plan: Agregar Función de Búsqueda al Header

## 1. Information Gathered
- **Header Component**: `src/components/Header.astro` - contains top bar, main navigation (desktop), mobile menu
- **Searchable Content**:
  - Services: 6 services with title, shortDesc, category, features, benefits, FAQ
  - Blog Posts: 7 posts with title, excerpt, category, tags, author
  - Pages: Inicio, Nosotros, Servicios, Equipo, Blogs, Contacto
- **Styling**: Tailwind CSS + custom animations in global.css
- **Dependencies**: Lucide icons (already included)

## 2. Plan

### Step 1: Create Search Data File
- [ ] Create `src/data/searchData.js` - Export all searchable content (services, blog posts, pages)
- [ ] Include: title, description, url, type (service, blog, page)

### Step 2: Create Search Component
- [ ] Create `src/components/Search.astro` - Search input component with:
  - Search icon button
  - Expandable search modal/dropdown
  - Real-time search results
  - Keyboard navigation (Escape to close)
  - Click outside to close
  - Mobile responsive design

### Step 3: Integrate Search into Header
- [ ] Update `src/components/Header.astro`:
  - Add search button/icon in desktop header (near navigation)
  - Add search to mobile menu
  - Import and render Search component

### Step 4: Add Search Styles
- [ ] Add search-specific styles to `global.css` or component

### Step 5: Add Search Functionality
- [ ] Add JavaScript for:
  - Toggle search modal
  - Filter search results
  - Display results with links
  - Handle keyboard events (Enter, Escape, Arrow keys)

## 3. Dependent Files to Edit
- `src/components/Header.astro` - Add search UI
- `src/data/searchData.js` - NEW FILE - Searchable content
- `src/components/Search.astro` - NEW FILE - Search component
- `src/styles/global.css` - Add search styles (if needed)

## 4. Followup Steps
- Test search functionality on desktop
- Test search functionality on mobile
- Verify all search results link correctly
- Test keyboard accessibility
