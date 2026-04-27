// src/scripts/blogFilter.ts
// Client-side blog filtering - FeaturedPost always visible

interface FilterConfig {
  filterBtns: NodeListOf<HTMLElement>;
  blogPosts: NodeListOf<HTMLElement>;
  noResults: HTMLElement | null;
  blogGrid: HTMLElement | null;
  showAllBtn: HTMLElement | null;
}

function initBlogFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn') as NodeListOf<HTMLElement>;
  const blogPosts = document.querySelectorAll('#blog-grid .blog-post') as NodeListOf<HTMLElement>;
  const noResults = document.getElementById('no-results') as HTMLElement | null;
  const blogGrid = document.getElementById('blog-grid') as HTMLElement | null;
  const showAllBtn = document.getElementById('show-all-btn') as HTMLElement | null;

  const config: FilterConfig = { filterBtns, blogPosts, noResults, blogGrid, showAllBtn };
  let currentFilter = 'all';

  // Filter buttons
  config.filterBtns.forEach(btn => {
    btn.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const category = (btn as HTMLElement).dataset.category || 'all';
      currentFilter = category;
      updateActiveFilter(btn);
      filterPosts(category, config);
    });
  });

  // Show all button
  if (config.showAllBtn) {
    config.showAllBtn.addEventListener('click', (e: Event) => {
      e.preventDefault();
      currentFilter = 'all';
      updateActiveFilter(config.filterBtns[0]);
      filterPosts('all', config);
    });
  }

  function updateActiveFilter(activeBtn: Element) {
    config.filterBtns.forEach(b => {
      b.classList.remove('bg-slate-900', 'text-white', 'shadow-xl', 'shadow-slate-200');
      b.classList.add('bg-slate-50', 'text-slate-500', 'hover:bg-white');
    });
    (activeBtn as HTMLElement).classList.add('bg-slate-900', 'text-white', 'shadow-xl', 'shadow-slate-200');
    (activeBtn as HTMLElement).classList.remove('bg-slate-50', 'text-slate-500');
  }

  function filterPosts(category: string, config: FilterConfig) {
    let visibleCount = 0;

    config.blogPosts.forEach(post => {
      const postCategory = post.dataset.category;
      if (category === 'all' || postCategory === category) {
        post.style.display = 'block';
        visibleCount++;
        // Reset animation
        post.classList.remove('active');
        // Re-observe for IntersectionObserver
        if (window.IntersectionObserver) {
          const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
              post.classList.add('active');
              observer.unobserve(post);
            }
          });
          observer.observe(post);
        }
      } else {
        post.style.display = 'none';
      }
    });

    // FeaturedPost ALWAYS visible - never hide
    const featuredSection = document.getElementById('featured-section');
    if (featuredSection) {
      featuredSection.style.display = 'block';
    }

    // No results logic
    if (config.noResults && config.blogGrid) {
      if (visibleCount === 0 && category !== 'all') {
        config.noResults.classList.remove('hidden');
        config.blogGrid.classList.add('hidden');
      } else {
        config.noResults.classList.add('hidden');
        config.blogGrid.classList.remove('hidden');
      }
    }
  }
}

export { initBlogFilter };

