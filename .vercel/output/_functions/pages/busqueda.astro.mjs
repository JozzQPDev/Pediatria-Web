import { e as createAstro, f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, h as addAttribute, n as Fragment, u as unescapeHTML } from '../chunks/astro/server_CymLUfwh.mjs';
import 'piccolore';
import { s as services, $ as $$Layout } from '../chunks/Layout_DyA1H_PA.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { b as blogPosts } from '../chunks/blogPosts_DWNms6e_.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const Icon = ({ name, className = "w-4 h-4", ariaHidden = true }) => {
  const icons = {
    layers: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
      /* @__PURE__ */ jsx("polyline", { points: "2 17 12 22 22 17" }),
      /* @__PURE__ */ jsx("polyline", { points: "2 12 12 17 22 12" })
    ] }),
    stethoscope: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("path", { d: "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" }),
      /* @__PURE__ */ jsx("path", { d: "M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" }),
      /* @__PURE__ */ jsx("circle", { cx: "20", cy: "10", r: "2" })
    ] }),
    "book-open": /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
      /* @__PURE__ */ jsx("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
    ] }),
    "file-text": /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      /* @__PURE__ */ jsx("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }),
      /* @__PURE__ */ jsx("path", { d: "M10 9H8" }),
      /* @__PURE__ */ jsx("path", { d: "M16 13H8" }),
      /* @__PURE__ */ jsx("path", { d: "M16 17H8" })
    ] }),
    "sliders-horizontal": /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("path", { d: "M10 5H3" }),
      /* @__PURE__ */ jsx("path", { d: "M12 19H3" }),
      /* @__PURE__ */ jsx("path", { d: "M14 3v4" }),
      /* @__PURE__ */ jsx("path", { d: "M16 17v4" }),
      /* @__PURE__ */ jsx("path", { d: "M21 12h-9" }),
      /* @__PURE__ */ jsx("path", { d: "M21 19h-5" }),
      /* @__PURE__ */ jsx("path", { d: "M21 5h-7" }),
      /* @__PURE__ */ jsx("path", { d: "M8 10v4" }),
      /* @__PURE__ */ jsx("path", { d: "M8 12H3" })
    ] }),
    "arrow-up-down": /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("path", { d: "m21 16-4 4-4-4" }),
      /* @__PURE__ */ jsx("path", { d: "M17 20V4" }),
      /* @__PURE__ */ jsx("path", { d: "m3 8 4-4 4 4" }),
      /* @__PURE__ */ jsx("path", { d: "M7 4v16" })
    ] }),
    "chevron-down": /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: /* @__PURE__ */ jsx("path", { d: "m6 9 6 6 6-6" }) }),
    target: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "6" }),
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "2" })
    ] }),
    "arrow-up-a-z": /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("path", { d: "m3 8 4-4 4 4" }),
      /* @__PURE__ */ jsx("path", { d: "M7 4v16" }),
      /* @__PURE__ */ jsx("path", { d: "M11 12h4" }),
      /* @__PURE__ */ jsx("path", { d: "M11 16h7" }),
      /* @__PURE__ */ jsx("path", { d: "M11 20h10" }),
      /* @__PURE__ */ jsx("path", { d: "M15 4h5" }),
      /* @__PURE__ */ jsx("path", { d: "M19 4v8" })
    ] }),
    calendar: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("path", { d: "M8 2v4" }),
      /* @__PURE__ */ jsx("path", { d: "M16 2v4" }),
      /* @__PURE__ */ jsx("rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }),
      /* @__PURE__ */ jsx("path", { d: "M3 10h18" })
    ] }),
    "trending-up": /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }),
      /* @__PURE__ */ jsx("polyline", { points: "16 7 22 7 22 13" })
    ] }),
    x: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("path", { d: "M18 6 6 18" }),
      /* @__PURE__ */ jsx("path", { d: "m6 6 12 12" })
    ] })
  };
  return icons[name] || null;
};
function SearchFilters({
  currentType = "",
  currentCategory = "",
  currentSort = "relevance",
  currentDateFrom = "",
  currentDateTo = "",
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
  const [advancedQuery, setAdvancedQuery] = useState("");
  const sortDropdownRef = useRef(null);
  const advancedRef = useRef(null);
  const types = [
    { value: "", label: "Todos", icon: "layers" },
    { value: "service", label: "Servicios", icon: "stethoscope" },
    { value: "blog", label: "Artículos", icon: "book-open" },
    { value: "page", label: "Páginas", icon: "file-text" }
  ];
  const sortOptions = [
    { value: "relevance", label: "Relevancia", icon: "target" },
    { value: "title", label: "Nombre", icon: "arrow-up-a-z" },
    { value: "date", label: "Fecha", icon: "calendar" },
    { value: "popularity", label: "Popularidad", icon: "trending-up" }
  ];
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setShowLoading(true), 200);
      return () => clearTimeout(timer);
    } else {
      setShowLoading(false);
    }
  }, [isLoading]);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(e.target)) {
        setIsSortOpen(false);
      }
      if (advancedRef.current && !advancedRef.current.contains(e.target)) {
        setIsAdvancedOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsSortOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);
  const buildUrl = (params) => {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([key, value]) => {
      if (value && value !== "relevance") {
        searchParams.set(key, value);
      } else {
        searchParams.delete(key);
      }
    });
    searchParams.set("page", "1");
    return `?${searchParams.toString()}`;
  };
  const buildAdvancedUrl = () => {
    if (!advancedQuery.trim()) return;
    const searchParams = new URLSearchParams();
    searchParams.set("q", advancedQuery.trim());
    searchParams.set("advanced", "true");
    return `/busqueda?${searchParams.toString()}`;
  };
  const handleTypeChange = (type) => {
    setActiveFilters((prev) => ({ ...prev, type }));
    window.location.href = buildUrl({ ...activeFilters, type });
  };
  const handleCategoryChange = (category) => {
    setActiveFilters((prev) => ({ ...prev, category }));
    window.location.href = buildUrl({ ...activeFilters, category });
  };
  const handleSortChange = (sort) => {
    setActiveFilters((prev) => ({ ...prev, sort }));
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
    const defaultValue = filterType === "sort" ? "relevance" : "";
    const newFilters = { ...activeFilters, [filterType]: defaultValue };
    setActiveFilters(newFilters);
    window.location.href = buildUrl(newFilters);
  };
  const clearAllFilters = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const q = searchParams.get("q") || "";
    setActiveFilters({
      type: "",
      category: "",
      sort: "relevance",
      dateFrom: "",
      dateTo: ""
    });
    window.location.href = q ? `?q=${encodeURIComponent(q)}` : "?";
  };
  const hasActiveFilters = activeFilters.type || activeFilters.category || activeFilters.sort !== "relevance" || activeFilters.dateFrom || activeFilters.dateTo;
  const getIconForType = (iconName) => {
    return /* @__PURE__ */ jsx(Icon, { name: iconName, className: "w-3.5 h-3.5" });
  };
  return /* @__PURE__ */ jsxs("div", { className: "search-filters bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-6 relative", children: [
    showLoading && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-20", role: "status", "aria-live": "polite", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-pink-600", children: [
      /* @__PURE__ */ jsxs("svg", { className: "animate-spin h-5 w-5", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", children: [
        /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
        /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Actualizando resultados..." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0", role: "group", "aria-label": "Filtrar por tipo", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500 shrink-0 font-medium", children: "Tipo:" }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: types.map((type) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => handleTypeChange(type.value),
            className: `px-3 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${activeFilters.type === type.value ? "bg-pink-100 text-pink-700 ring-2 ring-pink-200" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`,
            "aria-pressed": activeFilters.type === type.value,
            "aria-label": `Filtrar por ${type.label}`,
            children: [
              getIconForType(type.icon),
              type.label
            ]
          },
          type.value
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between lg:justify-end gap-3", children: [
        totalResults > 0 && /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-500", "aria-live": "polite", children: [
          totalResults,
          " resultado",
          totalResults !== 1 ? "s" : ""
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", ref: advancedRef, children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => setIsAdvancedOpen(!isAdvancedOpen),
              className: `flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors cursor-pointer ${isAdvancedOpen || advancedQuery ? "bg-purple-50 text-purple-700" : "bg-gray-50 hover:bg-gray-100 text-gray-600"}`,
              "aria-haspopup": "true",
              "aria-expanded": isAdvancedOpen,
              "aria-label": "Búsqueda avanzada",
              children: [
                /* @__PURE__ */ jsx(Icon, { name: "sliders-horizontal", className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Avanzado" })
              ]
            }
          ),
          isAdvancedOpen && /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-30 p-4",
              style: { animation: "slideDown 0.2s ease-out" },
              role: "dialog",
              "aria-label": "Opciones de búsqueda avanzada",
              children: /* @__PURE__ */ jsxs("form", { onSubmit: handleAdvancedSearch, className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "advanced-query", className: "block text-xs font-medium text-gray-700 mb-1", children: "Búsqueda con operadores" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "advanced-query",
                      type: "text",
                      value: advancedQuery,
                      onChange: (e) => setAdvancedQuery(e.target.value),
                      placeholder: 'vacuna AND niño NOT "efectos secundarios"',
                      className: "w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent",
                      "aria-describedby": "advanced-help"
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { id: "advanced-help", className: "text-xs text-gray-500 mt-1", children: "Usa AND, OR, NOT y comillas para frases exactas" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "submit",
                      className: "flex-1 bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      disabled: !advancedQuery.trim(),
                      children: "Buscar"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setAdvancedQuery(""),
                      className: "px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",
                      children: "Limpiar"
                    }
                  )
                ] })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", ref: sortDropdownRef, children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => setIsSortOpen(!isSortOpen),
              className: "flex items-center gap-2 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-600 transition-colors cursor-pointer",
              "aria-haspopup": "listbox",
              "aria-expanded": isSortOpen,
              "aria-label": "Opciones de ordenamiento",
              children: [
                /* @__PURE__ */ jsx(Icon, { name: "arrow-up-down", className: "w-3.5 h-3.5", ariaHidden: true }),
                /* @__PURE__ */ jsx("span", { children: "Ordenar" }),
                /* @__PURE__ */ jsx(
                  Icon,
                  {
                    name: "chevron-down",
                    className: `w-3.5 h-3.5 transition-transform ${isSortOpen ? "rotate-180" : ""}`,
                    ariaHidden: true
                  }
                )
              ]
            }
          ),
          isSortOpen && /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute right-0 top-full mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-20",
              style: { animation: "slideDown 0.2s ease-out" },
              role: "listbox",
              "aria-label": "Opciones de ordenamiento",
              children: sortOptions.map((option) => /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => handleSortChange(option.value),
                  className: `w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors text-left ${activeFilters.sort === option.value ? "bg-pink-50 text-pink-700 font-medium" : "text-gray-600 hover:bg-gray-50"}`,
                  role: "option",
                  "aria-selected": activeFilters.sort === option.value,
                  children: [
                    /* @__PURE__ */ jsx(Icon, { name: option.icon, className: "w-4 h-4", ariaHidden: true }),
                    option.label
                  ]
                },
                option.value
              ))
            }
          )
        ] })
      ] })
    ] }),
    availableCategories.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-4 pt-4 border-t border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 overflow-x-auto pb-2", role: "group", "aria-label": "Filtrar por categoría", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500 shrink-0 font-medium", children: "Categoría:" }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handleCategoryChange(""),
            className: `px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${!activeFilters.category ? "bg-pink-100 text-pink-700 ring-1 ring-pink-200" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`,
            "aria-pressed": !activeFilters.category,
            children: "Todas"
          }
        ),
        availableCategories.map((category) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handleCategoryChange(category),
            className: `px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${activeFilters.category === category ? "bg-pink-100 text-pink-700 ring-1 ring-pink-200" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`,
            "aria-pressed": activeFilters.category === category,
            "aria-label": `Filtrar por categoría ${category}`,
            children: category
          },
          category
        ))
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 pt-4 border-t border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500 font-medium", children: "Fecha:" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "date-from", className: "text-xs text-gray-500", children: "Desde:" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "date-from",
              type: "date",
              value: activeFilters.dateFrom,
              onChange: (e) => handleDateChange("dateFrom", e.target.value),
              className: "px-2 py-1 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500",
              "aria-label": "Fecha desde"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "date-to", className: "text-xs text-gray-500", children: "Hasta:" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "date-to",
              type: "date",
              value: activeFilters.dateTo,
              onChange: (e) => handleDateChange("dateTo", e.target.value),
              className: "px-2 py-1 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500",
              "aria-label": "Fecha hasta"
            }
          )
        ] }),
        (activeFilters.dateFrom || activeFilters.dateTo) && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              handleDateChange("dateFrom", "");
              handleDateChange("dateTo", "");
            },
            className: "text-xs text-gray-400 hover:text-gray-600 underline",
            "aria-label": "Limpiar filtros de fecha",
            children: "Limpiar fechas"
          }
        )
      ] })
    ] }) }),
    hasActiveFilters && /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 flex-wrap", "aria-label": "Filtros activos", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "Filtros activos:" }),
      activeFilters.type && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-1 bg-pink-50 text-pink-700 text-xs rounded-lg", children: [
        types.find((t) => t.value === activeFilters.type)?.label,
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => removeFilter("type"),
            className: "hover:text-pink-900 focus:outline-none focus:ring-2 focus:ring-pink-300 rounded",
            "aria-label": `Eliminar filtro de tipo ${types.find((t) => t.value === activeFilters.type)?.label}`,
            children: /* @__PURE__ */ jsx(Icon, { name: "x", className: "w-3 h-3", ariaHidden: true })
          }
        )
      ] }),
      activeFilters.category && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-lg", children: [
        activeFilters.category,
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => removeFilter("category"),
            className: "hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded",
            "aria-label": `Eliminar filtro de categoría ${activeFilters.category}`,
            children: /* @__PURE__ */ jsx(Icon, { name: "x", className: "w-3 h-3", ariaHidden: true })
          }
        )
      ] }),
      activeFilters.sort !== "relevance" && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs rounded-lg", children: [
        sortOptions.find((s) => s.value === activeFilters.sort)?.label,
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => removeFilter("sort"),
            className: "hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300 rounded",
            "aria-label": `Restablecer ordenamiento ${sortOptions.find((s) => s.value === activeFilters.sort)?.label}`,
            children: /* @__PURE__ */ jsx(Icon, { name: "x", className: "w-3 h-3", ariaHidden: true })
          }
        )
      ] }),
      (activeFilters.dateFrom || activeFilters.dateTo) && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-lg", children: [
        activeFilters.dateFrom && activeFilters.dateTo ? `${activeFilters.dateFrom} - ${activeFilters.dateTo}` : activeFilters.dateFrom ? `Desde ${activeFilters.dateFrom}` : `Hasta ${activeFilters.dateTo}`,
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              removeFilter("dateFrom");
              removeFilter("dateTo");
            },
            className: "hover:text-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded",
            "aria-label": "Eliminar filtro de rango de fechas",
            children: /* @__PURE__ */ jsx(Icon, { name: "x", className: "w-3 h-3", ariaHidden: true })
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: clearAllFilters,
          className: "text-xs text-gray-400 hover:text-gray-600 underline ml-2 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded px-1",
          "aria-label": "Limpiar todos los filtros",
          children: "Limpiar todos"
        }
      )
    ] })
  ] });
}

// Search data for the header search functionality
// Aggregates content from services, blog posts, and pages


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
const searchData = [
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
function highlightText(text, query) {
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
function searchContent(query, options = {}) {
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

// Advanced search with boolean operators
function advancedSearch(query, options = {}) {
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
function getSearchCategories() {
  const categories = new Set();
  
  searchData.forEach(item => {
    if (item.category) {
      categories.add(item.category);
    }
    categories.add(item.type);
  });
  
  return Array.from(categories);
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://localhost:4321");
const prerender = false;
const $$Busqueda = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Busqueda;
  const url = new URL(Astro2.request.url);
  const query = url.searchParams.get("q") || "";
  const typeFilter = url.searchParams.get("type") || "";
  const categoryFilter = url.searchParams.get("category") || "";
  const sortBy = url.searchParams.get("sort") || "relevance";
  const dateFrom = url.searchParams.get("dateFrom") || "";
  const dateTo = url.searchParams.get("dateTo") || "";
  const isAdvanced = url.searchParams.get("advanced") === "true";
  const currentPage = parseInt(url.searchParams.get("page") || "1", 10);
  const viewMode = url.searchParams.get("view") || "list";
  const itemsPerPage = 12;
  const searchOptions = {
    limit: 100,
    // Get more for pagination
    fuzzy: true,
    sortBy,
    filters: {
      ...typeFilter && { type: typeFilter },
      ...categoryFilter && { category: categoryFilter },
      ...dateFrom && { dateFrom },
      ...dateTo && { dateTo }
    }
  };
  let allResults = [];
  try {
    if (isAdvanced && query) {
      allResults = advancedSearch(query, searchOptions);
    } else if (query) {
      allResults = searchContent(query, searchOptions);
    }
  } catch (error) {
    console.error("Search error:", error);
    allResults = [];
  }
  const totalResults = allResults.length;
  const totalPages = Math.ceil(totalResults / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const results = allResults.slice(startIndex, startIndex + itemsPerPage);
  const buildPageUrl = (page) => {
    const params = new URLSearchParams(url.searchParams);
    params.set("page", page.toString());
    return `?${params.toString()}`;
  };
  const allCategories = getSearchCategories().filter(
    (cat) => !["page", "service", "blog"].includes(cat)
  );
  const typeIcons = {
    page: "file-text",
    service: "stethoscope",
    blog: "book-open"
  };
  const typeLabels = {
    page: "P\xE1gina",
    service: "Servicio",
    blog: "Art\xEDculo"
  };
  const typeColors = {
    page: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
      badge: "bg-blue-100 text-blue-700",
      gradient: "from-blue-500 to-blue-600"
    },
    service: {
      bg: "bg-green-50",
      text: "text-green-600",
      border: "border-green-200",
      badge: "bg-green-100 text-green-700",
      gradient: "from-green-500 to-green-600"
    },
    blog: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-200",
      badge: "bg-purple-100 text-purple-700",
      gradient: "from-purple-500 to-purple-600"
    }
  };
  function getResultImage(result) {
    if (result.type === "service") {
      const serviceImages = {
        "control-crecimiento": "/images/service-growth.jpg",
        "vacunacion-integral": "/images/service-vaccine.jpg",
        "nutricion-infantil": "/images/service-nutrition.jpg",
        "atencion-recien-nacidos": "/images/service-newborn.jpg",
        "psicologia-infantil": "/images/service-psychology.jpg",
        "nebulizaciones": "/images/service-nebulization.jpg"
      };
      return serviceImages[result.slug] || "/images/clinic-1.jpg";
    }
    if (result.type === "blog") {
      const blogImages = {
        "importancia-vacunacion-infantil": "/images/service-vaccine.jpg",
        "alimentacion-complementaria": "/images/service-nutrition.jpg",
        "desarrollo-psicomotor": "/images/service-growth.jpg",
        "cuidado-recien-nacido": "/images/service-newborn.jpg",
        "salud-emocional-infantil": "/images/service-psychology.jpg",
        "prevencion-respiratoria": "/images/service-nebulization.jpg",
        "alergias-infantiles": "/images/service-vaccine.jpg"
      };
      return blogImages[result.slug] || "/images/clinic-1.jpg";
    }
    return "/images/clinica-home.jpg";
  }
  const popularSearches = ["vacunaci\xF3n", "nutrici\xF3n", "desarrollo", "reci\xE9n nacido", "control", "psicolog\xEDa"];
  const getVisiblePages = (current, total) => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;
    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || i >= current - delta && i <= current + delta) {
        range.push(i);
      }
    }
    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }
    return rangeWithDots;
  };
  const visiblePages = getVisiblePages(currentPage, totalPages);
  return renderTemplate(_a || (_a = __template(["", "  <script>\n  // Focus search input on page load if there's a query\n  document.addEventListener('DOMContentLoaded', function() {\n    const searchInput = document.getElementById('main-search-input');\n    const urlParams = new URLSearchParams(window.location.search);\n    const query = urlParams.get('q');\n    \n    if (query && searchInput) {\n      // Place cursor at the end of the text\n      const length = searchInput.value.length;\n      searchInput.setSelectionRange(length, length);\n      searchInput.focus();\n    }\n\n    // Smooth scroll to results if coming from pagination\n    const page = urlParams.get('page');\n    if (page && page !== '1') {\n      const resultsSection = document.querySelector('.search-filters');\n      if (resultsSection) {\n        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });\n      }\n    }\n  });\n\n  // Keyboard navigation for pagination\n  document.addEventListener('keydown', function(e) {\n    // Only if not in an input\n    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;\n    \n    const urlParams = new URLSearchParams(window.location.search);\n    let currentPage = parseInt(urlParams.get('page') || '1', 10);\n    \n    if (e.key === 'ArrowLeft' && e.altKey) {\n      // Previous page\n      if (currentPage > 1) {\n        urlParams.set('page', (currentPage - 1).toString());\n        window.location.href = '?' + urlParams.toString();\n      }\n    } else if (e.key === 'ArrowRight' && e.altKey) {\n      // Next page\n      const totalPages = parseInt(document.querySelector('[data-total-pages]')?.dataset.totalPages || '1', 10);\n      if (currentPage < totalPages) {\n        urlParams.set('page', (currentPage + 1).toString());\n        window.location.href = '?' + urlParams.toString();\n      }\n    }\n  });\n<\/script>"])), renderComponent($$result, "Layout", $$Layout, { "title": query ? `Resultados para "${query}" | Cl\xEDnica Pedi\xE1trica` : "B\xFAsqueda | Cl\xEDnica Pedi\xE1trica", "data-astro-cid-wrmxgw5v": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-section min-h-screen  from-gray-50 via-white to-pink-50/30 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden" data-astro-cid-wrmxgw5v> <!-- Decorative elements --> <span class="cloud cloud--1" aria-hidden="true" data-astro-cid-wrmxgw5v></span> <span class="cloud cloud--2" aria-hidden="true" data-astro-cid-wrmxgw5v></span> <span class="cloud cloud--3" aria-hidden="true" data-astro-cid-wrmxgw5v></span> <span class="cloud cloud--4" aria-hidden="true" data-astro-cid-wrmxgw5v></span> <span class="cloud cloud--5" aria-hidden="true" data-astro-cid-wrmxgw5v></span> <span class="cloud cloud--6" aria-hidden="true" data-astro-cid-wrmxgw5v></span> <span class="cloud cloud--7" aria-hidden="true" data-astro-cid-wrmxgw5v></span> <span class="cloud cloud--8" aria-hidden="true" data-astro-cid-wrmxgw5v></span> <span class="cloud cloud--9" aria-hidden="true" data-astro-cid-wrmxgw5v></span> <span class="cloud cloud--10" aria-hidden="true" data-astro-cid-wrmxgw5v></span> <span class="cloud cloud--11" aria-hidden="true" data-astro-cid-wrmxgw5v></span> <span class="cloud cloud--12" aria-hidden="true" data-astro-cid-wrmxgw5v></span> <div class="max-w-5xl mx-auto relative z-10" data-astro-cid-wrmxgw5v> <!-- Header de Búsqueda --> <div class="text-center mb-10" data-astro-cid-wrmxgw5v> <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 mb-6" data-astro-cid-wrmxgw5v> <i data-lucide="sparkles" class="w-4 h-4 text-pink-500" data-astro-cid-wrmxgw5v></i> <span class="text-sm text-gray-600" data-astro-cid-wrmxgw5v>Búsqueda inteligente</span> </div> <h1 class="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-gray-900 via-pink-600 to-gray-900" data-astro-cid-wrmxgw5v> ${query ? "Resultados de b\xFAsqueda" : "\xBFQu\xE9 est\xE1s buscando?"} </h1> <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto" data-astro-cid-wrmxgw5v> ${query ? `Encontramos ${totalResults} resultado${totalResults !== 1 ? "s" : ""} para tu b\xFAsqueda` : "Encuentra servicios, art\xEDculos y informaci\xF3n sobre la salud de tus hijos"} </p> <!-- Formulario de Búsqueda Mejorado --> <form action="/busqueda" method="GET" class="max-w-2xl mx-auto relative group" data-astro-cid-wrmxgw5v> <div class="relative flex items-center" data-astro-cid-wrmxgw5v> <div class="absolute left-4 text-gray-400 group-focus-within:text-pink-500 transition-colors" data-astro-cid-wrmxgw5v> <i data-lucide="search" class="w-5 h-5" data-astro-cid-wrmxgw5v></i> </div> <input type="text" name="q"${addAttribute(query, "value")} placeholder="Buscar servicios, artículos, información..." class="w-full pl-12 pr-32 py-4 rounded-2xl border border-gray-200 shadow-lg shadow-gray-200/50 focus:outline-none text-lg transition-all" autocomplete="off" id="main-search-input" data-astro-cid-wrmxgw5v> <button type="submit" class="absolute right-2 bg-linear-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5" data-astro-cid-wrmxgw5v>
Buscar
</button> </div> <!-- Búsquedas populares --> ${!query && renderTemplate`<div class="mt-4 flex flex-wrap justify-center gap-2" data-astro-cid-wrmxgw5v> <span class="text-sm text-gray-500" data-astro-cid-wrmxgw5v>Populares:</span> ${popularSearches.map((term) => renderTemplate`<a${addAttribute(`/busqueda?q=${encodeURIComponent(term)}`, "href")} class="text-sm px-3 py-1 bg-white/80 hover:bg-pink-50 text-gray-600 hover:text-pink-600 rounded-full border border-gray-200 hover:border-pink-200 transition-all" data-astro-cid-wrmxgw5v> ${term} </a>`)} </div>`} </form> </div> <!-- Filtros (solo cuando hay búsqueda) --> ${query && renderTemplate`${renderComponent($$result2, "SearchFilters", SearchFilters, { "currentType": typeFilter, "currentCategory": categoryFilter, "currentSort": sortBy, "currentDateFrom": dateFrom, "currentDateTo": dateTo, "availableCategories": allCategories, "totalResults": totalResults, "isLoading": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Astro Clinica Pedriatia/Pediatria-Web/src/components/SearchFilters.jsx", "client:component-export": "default", "data-astro-cid-wrmxgw5v": true })}`} <!-- View Toggle and Results Info --> ${query && totalResults > 0 && renderTemplate`<div class="flex items-center justify-between mb-4 px-1" data-astro-cid-wrmxgw5v> <p class="text-sm text-gray-500" data-astro-cid-wrmxgw5v>
Mostrando ${startIndex + 1}-${Math.min(startIndex + itemsPerPage, totalResults)} de ${totalResults} resultados
${isAdvanced && renderTemplate`<span class="ml-2 text-purple-600 font-medium" data-astro-cid-wrmxgw5v>(Búsqueda avanzada)</span>`} </p> <div class="flex items-center gap-2" data-astro-cid-wrmxgw5v> <span class="text-sm text-gray-500 hidden sm:inline" data-astro-cid-wrmxgw5v>Vista:</span> <div class="flex bg-gray-100 rounded-lg p-1" data-astro-cid-wrmxgw5v> <a${addAttribute(`?${new URLSearchParams({ ...Object.fromEntries(url.searchParams), view: "list" })}`, "href")}${addAttribute(`p-1.5 rounded-md transition-colors ${viewMode === "list" ? "bg-white shadow-sm text-pink-600" : "text-gray-500 hover:text-gray-700"}`, "class")} aria-label="Vista de lista"${addAttribute(viewMode === "list", "aria-pressed")} data-astro-cid-wrmxgw5v> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-wrmxgw5v><line x1="8" y1="6" x2="21" y2="6" data-astro-cid-wrmxgw5v></line><line x1="8" y1="12" x2="21" y2="12" data-astro-cid-wrmxgw5v></line><line x1="8" y1="18" x2="21" y2="18" data-astro-cid-wrmxgw5v></line><line x1="3" y1="6" x2="3.01" y2="6" data-astro-cid-wrmxgw5v></line><line x1="3" y1="12" x2="3.01" y2="12" data-astro-cid-wrmxgw5v></line><line x1="3" y1="18" x2="3.01" y2="18" data-astro-cid-wrmxgw5v></line></svg> </a> <a${addAttribute(`?${new URLSearchParams({ ...Object.fromEntries(url.searchParams), view: "grid" })}`, "href")}${addAttribute(`p-1.5 rounded-md transition-colors ${viewMode === "grid" ? "bg-white shadow-sm text-pink-600" : "text-gray-500 hover:text-gray-700"}`, "class")} aria-label="Vista de grid"${addAttribute(viewMode === "grid", "aria-pressed")} data-astro-cid-wrmxgw5v> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-wrmxgw5v><rect x="3" y="3" width="7" height="7" data-astro-cid-wrmxgw5v></rect><rect x="14" y="3" width="7" height="7" data-astro-cid-wrmxgw5v></rect><rect x="14" y="14" width="7" height="7" data-astro-cid-wrmxgw5v></rect><rect x="3" y="14" width="7" height="7" data-astro-cid-wrmxgw5v></rect></svg> </a> </div> </div> </div>`} <!-- Resultados - List View --> ${query && totalResults > 0 && viewMode === "list" && renderTemplate`<div class="space-y-4" data-astro-cid-wrmxgw5v> ${results.map((result, index) => {
    const colors = typeColors[result.type];
    const image = getResultImage(result);
    const isEven = index % 2 === 0;
    const actualIndex = startIndex + index;
    return renderTemplate`<a${addAttribute(result.url, "href")} class="group block bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-pink-200 transition-all duration-300 transform hover:-translate-y-1"${addAttribute(`animation-delay: ${index * 50}ms`, "style")}${addAttribute(actualIndex, "data-result-index")} data-astro-cid-wrmxgw5v> <div${addAttribute(`flex flex-col sm:flex-row gap-4 ${isEven ? "" : "sm:flex-row-reverse"}`, "class")} data-astro-cid-wrmxgw5v> <!-- Imagen --> <div class="sm:w-48 shrink-0" data-astro-cid-wrmxgw5v> <div class="relative aspect-video sm:aspect-square rounded-xl overflow-hidden bg-gray-100" data-astro-cid-wrmxgw5v> <img${addAttribute(image, "src")}${addAttribute(result.title, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" decoding="async" data-astro-cid-wrmxgw5v> <div${addAttribute(`absolute top-2 left-2 px-2 py-1 rounded-lg text-xs font-medium ${colors.badge} backdrop-blur-sm bg-opacity-90`, "class")} data-astro-cid-wrmxgw5v> <span class="flex items-center gap-1" data-astro-cid-wrmxgw5v> <i${addAttribute(typeIcons[result.type], "data-lucide")} class="w-3 h-3" data-astro-cid-wrmxgw5v></i> ${typeLabels[result.type]} </span> </div> </div> </div> <!-- Contenido --> <div class="flex-1 min-w-0 flex flex-col" data-astro-cid-wrmxgw5v> <div class="flex items-start justify-between gap-3 mb-2" data-astro-cid-wrmxgw5v> <h2 class="text-xl font-semibold text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-2" data-astro-cid-wrmxgw5v> ${result.highlightedTitle ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(result.highlightedTitle)}` })}` : result.title} </h2> <div${addAttribute(`shrink-0 w-10 h-10 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center group-hover:scale-110 transition-transform`, "class")} data-astro-cid-wrmxgw5v> <i${addAttribute(typeIcons[result.type], "data-lucide")} class="w-5 h-5" data-astro-cid-wrmxgw5v></i> </div> </div> <p class="text-gray-600 text-sm sm:text-base line-clamp-2 mb-3 grow" data-astro-cid-wrmxgw5v> ${result.highlightedDescription ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(result.highlightedDescription)}` })}` : result.description} </p> <div class="flex items-center justify-between mt-auto pt-3 border-t border-gray-100" data-astro-cid-wrmxgw5v> <div class="flex items-center gap-3 text-sm text-gray-500" data-astro-cid-wrmxgw5v> ${result.category && renderTemplate`<span class="flex items-center gap-1 px-2 py-1 bg-gray-50 rounded-lg" data-astro-cid-wrmxgw5v> <i data-lucide="tag" class="w-3.5 h-3.5" data-astro-cid-wrmxgw5v></i> ${result.category} </span>`} ${result.relevanceScore && sortBy === "relevance" && renderTemplate`<span class="flex items-center gap-1 text-xs" data-astro-cid-wrmxgw5v> <i data-lucide="target" class="w-3.5 h-3.5" data-astro-cid-wrmxgw5v></i> ${Math.min(100, Math.round(result.relevanceScore / 2))}% match
</span>`} </div> <span class="flex items-center gap-1 text-pink-600 font-medium text-sm group-hover:gap-2 transition-all" data-astro-cid-wrmxgw5v>
Ver más
<i data-lucide="arrow-right" class="w-4 h-4" data-astro-cid-wrmxgw5v></i> </span> </div> </div> </div> </a>`;
  })} </div>`} <!-- Resultados - Grid View --> ${query && totalResults > 0 && viewMode === "grid" && renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-astro-cid-wrmxgw5v> ${results.map((result, index) => {
    const colors = typeColors[result.type];
    const image = getResultImage(result);
    const actualIndex = startIndex + index;
    return renderTemplate`<a${addAttribute(result.url, "href")} class="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-pink-200 transition-all duration-300 transform hover:-translate-y-1"${addAttribute(`animation-delay: ${index * 30}ms`, "style")}${addAttribute(actualIndex, "data-result-index")} data-astro-cid-wrmxgw5v> <!-- Imagen --> <div class="relative aspect-video overflow-hidden bg-gray-100" data-astro-cid-wrmxgw5v> <img${addAttribute(image, "src")}${addAttribute(result.title, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" decoding="async" data-astro-cid-wrmxgw5v> <div${addAttribute(`absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-medium ${colors.badge} backdrop-blur-sm bg-opacity-90`, "class")} data-astro-cid-wrmxgw5v> <span class="flex items-center gap-1" data-astro-cid-wrmxgw5v> <i${addAttribute(typeIcons[result.type], "data-lucide")} class="w-3 h-3" data-astro-cid-wrmxgw5v></i> ${typeLabels[result.type]} </span> </div> </div> <!-- Contenido --> <div class="p-4" data-astro-cid-wrmxgw5v> <h2 class="text-lg font-semibold text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-2 mb-2" data-astro-cid-wrmxgw5v> ${result.highlightedTitle ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(result.highlightedTitle)}` })}` : result.title} </h2> <p class="text-gray-600 text-sm line-clamp-2 mb-3" data-astro-cid-wrmxgw5v> ${result.highlightedDescription ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(result.highlightedDescription)}` })}` : result.description} </p> <div class="flex items-center justify-between pt-3 border-t border-gray-100" data-astro-cid-wrmxgw5v> ${result.category && renderTemplate`<span class="flex items-center gap-1 text-xs text-gray-500 px-2 py-1 bg-gray-50 rounded-lg" data-astro-cid-wrmxgw5v> <i data-lucide="tag" class="w-3 h-3" data-astro-cid-wrmxgw5v></i> ${result.category} </span>`} <span class="flex items-center gap-1 text-pink-600 font-medium text-sm ml-auto" data-astro-cid-wrmxgw5v>
Ver más
<i data-lucide="arrow-right" class="w-4 h-4" data-astro-cid-wrmxgw5v></i> </span> </div> </div> </a>`;
  })} </div>`} <!-- Pagination --> ${query && totalPages > 1 && renderTemplate`<nav class="mt-8 flex items-center justify-center gap-2" aria-label="Paginación de resultados" data-astro-cid-wrmxgw5v> <!-- Previous Page --> ${currentPage > 1 ? renderTemplate`<a${addAttribute(buildPageUrl(currentPage - 1), "href")} class="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200 transition-colors" aria-label="Página anterior" data-astro-cid-wrmxgw5v> <i data-lucide="chevron-left" class="w-5 h-5" data-astro-cid-wrmxgw5v></i> </a>` : renderTemplate`<span class="p-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-300 cursor-not-allowed" aria-disabled="true" data-astro-cid-wrmxgw5v> <i data-lucide="chevron-left" class="w-5 h-5" data-astro-cid-wrmxgw5v></i> </span>`} <!-- Page Numbers --> <div class="flex items-center gap-1" data-astro-cid-wrmxgw5v> ${visiblePages.map((page, idx) => page === "..." ? renderTemplate`<span class="px-3 py-2 text-gray-400" data-astro-cid-wrmxgw5v>...</span>` : renderTemplate`<a${addAttribute(buildPageUrl(page), "href")}${addAttribute(`min-w-10 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-center ${currentPage === page ? "bg-pink-500 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200"}`, "class")}${addAttribute(`P\xE1gina ${page}`, "aria-label")}${addAttribute(currentPage === page ? "page" : void 0, "aria-current")} data-astro-cid-wrmxgw5v> ${page} </a>`)} </div> <!-- Next Page --> ${currentPage < totalPages ? renderTemplate`<a${addAttribute(buildPageUrl(currentPage + 1), "href")} class="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200 transition-colors" aria-label="Página siguiente" data-astro-cid-wrmxgw5v> <i data-lucide="chevron-right" class="w-5 h-5" data-astro-cid-wrmxgw5v></i> </a>` : renderTemplate`<span class="p-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-300 cursor-not-allowed" aria-disabled="true" data-astro-cid-wrmxgw5v> <i data-lucide="chevron-right" class="w-5 h-5" data-astro-cid-wrmxgw5v></i> </span>`} </nav>`} <!-- Pagination Info --> ${query && totalPages > 1 && renderTemplate`<p class="text-center text-sm text-gray-500 mt-4" data-astro-cid-wrmxgw5v>
Página ${currentPage} de ${totalPages} </p>`} <!-- Estado vacío - Sin resultados --> ${query && totalResults === 0 && renderTemplate`<div class="text-center py-16 px-4" data-astro-cid-wrmxgw5v> <div class="w-32 h-32 mx-auto mb-8 relative" data-astro-cid-wrmxgw5v> <div class="absolute inset-0 bg-linear-to-br from-red-100 to-pink-100 rounded-full animate-pulse" data-astro-cid-wrmxgw5v></div> <div class="relative w-full h-full flex items-center justify-center" data-astro-cid-wrmxgw5v> <i data-lucide="search-x" class="w-16 h-16 text-red-400" data-astro-cid-wrmxgw5v></i> </div> </div> <h2 class="text-2xl font-bold text-gray-900 mb-3" data-astro-cid-wrmxgw5v>
No se encontraron resultados
</h2> <p class="text-gray-500 max-w-md mx-auto mb-8 text-lg" data-astro-cid-wrmxgw5v>
No encontramos resultados para "<span class="font-semibold text-gray-700 bg-yellow-100 px-1 rounded" data-astro-cid-wrmxgw5v>${query}</span>".
${isAdvanced && renderTemplate`<span class="block mt-2 text-sm" data-astro-cid-wrmxgw5v>Intenta simplificar tu búsqueda avanzada o verifica los operadores booleanos.</span>`} </p> ${isAdvanced && renderTemplate`<div class="bg-purple-50 rounded-2xl p-4 mb-6 max-w-lg mx-auto border border-purple-100" data-astro-cid-wrmxgw5v> <h4 class="font-medium text-purple-900 mb-2 text-sm" data-astro-cid-wrmxgw5v>Sintaxis de búsqueda avanzada:</h4> <ul class="text-sm text-purple-700 space-y-1 text-left" data-astro-cid-wrmxgw5v> <li data-astro-cid-wrmxgw5v><code class="bg-purple-100 px-1 rounded" data-astro-cid-wrmxgw5v>AND</code> - Ambos términos deben estar presentes</li> <li data-astro-cid-wrmxgw5v><code class="bg-purple-100 px-1 rounded" data-astro-cid-wrmxgw5v>OR</code> - Al menos uno de los términos</li> <li data-astro-cid-wrmxgw5v><code class="bg-purple-100 px-1 rounded" data-astro-cid-wrmxgw5v>NOT</code> - Excluye términos</li> <li data-astro-cid-wrmxgw5v><code class="bg-purple-100 px-1 rounded" data-astro-cid-wrmxgw5v>"frase exacta"</code> - Busca la frase completa</li> </ul> </div>`} <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-lg mx-auto" data-astro-cid-wrmxgw5v> <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2" data-astro-cid-wrmxgw5v> <i data-lucide="lightbulb" class="w-5 h-5 text-yellow-500" data-astro-cid-wrmxgw5v></i>
Sugerencias:
</h3> <div class="flex flex-wrap justify-center gap-2" data-astro-cid-wrmxgw5v> ${popularSearches.map((suggestion) => renderTemplate`<a${addAttribute(`/busqueda?q=${encodeURIComponent(suggestion)}`, "href")} class="px-4 py-2 bg-gray-50 hover:bg-pink-50 text-gray-700 hover:text-pink-700 rounded-xl transition-colors border border-gray-200 hover:border-pink-200" data-astro-cid-wrmxgw5v> ${suggestion} </a>`)} </div> </div> <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4" data-astro-cid-wrmxgw5v> <a href="/busqueda" class="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium" data-astro-cid-wrmxgw5v> <i data-lucide="arrow-left" class="w-4 h-4" data-astro-cid-wrmxgw5v></i>
Volver a la búsqueda
</a> ${!isAdvanced && renderTemplate`<a${addAttribute(`/busqueda?q=${encodeURIComponent(query)}&advanced=true`, "href")} class="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium" data-astro-cid-wrmxgw5v> <i data-lucide="sparkles" class="w-4 h-4" data-astro-cid-wrmxgw5v></i>
Intentar búsqueda avanzada
</a>`} </div> </div>`} <!-- Error State --> ${query && !results && renderTemplate`<div class="text-center py-16 px-4" data-astro-cid-wrmxgw5v> <div class="w-24 h-24 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center" data-astro-cid-wrmxgw5v> <i data-lucide="alert-circle" class="w-12 h-12 text-red-500" data-astro-cid-wrmxgw5v></i> </div> <h2 class="text-xl font-bold text-gray-900 mb-2" data-astro-cid-wrmxgw5v>Error en la búsqueda</h2> <p class="text-gray-500 mb-4" data-astro-cid-wrmxgw5v>Hubo un problema al procesar tu búsqueda. Por favor, intenta nuevamente.</p> <button onclick="window.location.reload()" class="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors" data-astro-cid-wrmxgw5v>
Reintentar
</button> </div>`} <!-- Estado inicial - Sin búsqueda --> ${!query && renderTemplate`<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12" data-astro-cid-wrmxgw5v> <!-- Categorías destacadas --> <a href="/servicios" class="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all text-center relative overflow-hidden" data-astro-cid-wrmxgw5v> <div class="absolute inset-0 bg-linear-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" data-astro-cid-wrmxgw5v></div> <div class="relative" data-astro-cid-wrmxgw5v> <div class="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform shadow-sm" data-astro-cid-wrmxgw5v> <i data-lucide="stethoscope" class="w-8 h-8" data-astro-cid-wrmxgw5v></i> </div> <h3 class="text-lg font-semibold text-gray-900 mb-2" data-astro-cid-wrmxgw5v>Servicios</h3> <p class="text-sm text-gray-500" data-astro-cid-wrmxgw5v>Descubre todos nuestros servicios pediátricos especializados</p> <div class="mt-4 flex items-center justify-center gap-1 text-green-600 font-medium text-sm group-hover:gap-2 transition-all" data-astro-cid-wrmxgw5v>
Explorar <i data-lucide="arrow-right" class="w-4 h-4" data-astro-cid-wrmxgw5v></i> </div> </div> </a> <a href="/blogs" class="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all text-center relative overflow-hidden" data-astro-cid-wrmxgw5v> <div class="absolute inset-0 bg-linear-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" data-astro-cid-wrmxgw5v></div> <div class="relative" data-astro-cid-wrmxgw5v> <div class="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform shadow-sm" data-astro-cid-wrmxgw5v> <i data-lucide="book-open" class="w-8 h-8" data-astro-cid-wrmxgw5v></i> </div> <h3 class="text-lg font-semibold text-gray-900 mb-2" data-astro-cid-wrmxgw5v>Artículos</h3> <p class="text-sm text-gray-500" data-astro-cid-wrmxgw5v>Lee consejos y artículos sobre salud infantil y desarrollo</p> <div class="mt-4 flex items-center justify-center gap-1 text-purple-600 font-medium text-sm group-hover:gap-2 transition-all" data-astro-cid-wrmxgw5v>
Leer <i data-lucide="arrow-right" class="w-4 h-4" data-astro-cid-wrmxgw5v></i> </div> </div> </a> <a href="/contacto" class="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all text-center relative overflow-hidden" data-astro-cid-wrmxgw5v> <div class="absolute inset-0 bg-linear-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" data-astro-cid-wrmxgw5v></div> <div class="relative" data-astro-cid-wrmxgw5v> <div class="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shadow-sm" data-astro-cid-wrmxgw5v> <i data-lucide="message-circle" class="w-8 h-8" data-astro-cid-wrmxgw5v></i> </div> <h3 class="text-lg font-semibold text-gray-900 mb-2" data-astro-cid-wrmxgw5v>Contacto</h3> <p class="text-sm text-gray-500" data-astro-cid-wrmxgw5v>¿Tienes preguntas? Contáctanos y te ayudaremos</p> <div class="mt-4 flex items-center justify-center gap-1 text-blue-600 font-medium text-sm group-hover:gap-2 transition-all" data-astro-cid-wrmxgw5v>
Escribir <i data-lucide="arrow-right" class="w-4 h-4" data-astro-cid-wrmxgw5v></i> </div> </div> </a> </div>`} </div> </main> ` }));
}, "C:/Astro Clinica Pedriatia/Pediatria-Web/src/pages/busqueda.astro", void 0);

const $$file = "C:/Astro Clinica Pedriatia/Pediatria-Web/src/pages/busqueda.astro";
const $$url = "/busqueda";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Busqueda,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
