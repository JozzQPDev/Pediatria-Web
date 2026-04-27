export function initHeader() {
  const elements = {
    menuBtn:        document.getElementById("menu-btn"),
    closeBtn:       document.getElementById("close-menu"),
    mobileMenu:     document.getElementById("mobile-menu"),
    mobileOverlay:  document.getElementById("mobile-overlay"),
    servicesToggle: document.getElementById("mobile-services-toggle"),
    servicesList:   document.getElementById("mobile-services-list"),
    servicesChevron:document.getElementById("mobile-services-chevron"),
    header:         document.getElementById("main-header"),
    logo:           document.getElementById("main-logo"),
    topBar:         document.getElementById("top-bar"),
    topBarMobile:   document.getElementById("top-bar-mobile"),
  };

  let isMenuOpen = false;

  const toggleMenu = (open: boolean) => {
    if (isMenuOpen === open) return;
    isMenuOpen = open;
    const { mobileMenu, mobileOverlay, menuBtn } = elements;
    if (!mobileMenu || !mobileOverlay || !menuBtn) return;

    if (open) {
      mobileMenu.classList.remove("translate-x-full");
      mobileOverlay.classList.remove("hidden");
      mobileOverlay.setAttribute("aria-hidden", "false");
      mobileMenu.setAttribute("aria-hidden", "false");
      setTimeout(() => mobileOverlay.classList.add("opacity-100"), 10);
      document.body.style.overflow = "hidden";
      menuBtn.setAttribute("aria-expanded", "true");
    } else {
      mobileMenu.classList.add("translate-x-full");
      mobileOverlay.classList.remove("opacity-100");
      mobileOverlay.setAttribute("aria-hidden", "true");
      mobileMenu.setAttribute("aria-hidden", "true");
      setTimeout(() => mobileOverlay.classList.add("hidden"), 500);
      document.body.style.overflow = "";
      menuBtn.setAttribute("aria-expanded", "false");
    }
  };

  const toggleServices = () => {
    const { servicesToggle, servicesList, servicesChevron } = elements;
    if (!servicesToggle || !servicesList) return;
    const expanded = servicesToggle.getAttribute("aria-expanded") === "true";
    servicesList.classList.toggle("hidden", expanded);
    servicesList.classList.toggle("flex", !expanded);
    servicesToggle.setAttribute("aria-expanded", String(!expanded));
    servicesChevron?.classList.toggle("rotate-180", !expanded);
  };

  elements.menuBtn?.addEventListener("click", () => toggleMenu(true));
  elements.closeBtn?.addEventListener("click", () => toggleMenu(false));
  elements.mobileOverlay?.addEventListener("click", () => toggleMenu(false));
  elements.servicesToggle?.addEventListener("click", toggleServices);

  elements.mobileMenu?.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => toggleMenu(false))
  );

  let ticking = false;
  const handleScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      const { header, logo, topBar, topBarMobile } = elements;
      if (!header) return;
      const scrolled = window.scrollY > 80;

      header.classList.toggle("header-scrolled", scrolled);

      if (topBar) {
        topBar.style.maxHeight = scrolled ? "0" : "40px";
        topBar.style.opacity  = scrolled ? "0" : "1";
        topBar.style.padding  = scrolled ? "0" : "";
      }
      if (topBarMobile) {
        topBarMobile.style.maxHeight = scrolled ? "0" : "30px";
        topBarMobile.style.opacity   = scrolled ? "0" : "1";
        topBarMobile.style.padding   = scrolled ? "0" : "";
      }
      if (logo) {
        logo.classList.toggle("h-24", !scrolled);
        logo.classList.toggle("h-16",  scrolled);
      }
      ticking = false;
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
}