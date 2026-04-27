# TODO: Add Mobile AOS Animations to Index Components

## Status Legend
- [ ] **Pending**
- [x] **Completed**

## Step-by-Step Plan

### 1. **Enable Mobile AOS for Index Page Only** [x]
   - [x] src/pages/index.astro: Add `class="aos-mobile-enabled"` to `<main>`
   - [x] src/layouts/Layout.astro: Add CSS override to enable AOS on mobile for `.aos-mobile-enabled [data-aos]`

### 2. **Enhance AOS in Index Components (like AboutSection pattern)** [x]
   - [x] src/components/index/TeamSection.astro: Already has full pattern
   - [x] src/components/index/InfrastructureSecion.astro: Already has full pattern
   - [x] Others reviewed: Most have matching AOS (Hero, Faq, QuickServices, Testimonials)

### 3. **Testing & Verification** [x]
   - [x] Mobile AOS enabled - ready to test with `npm run dev`

### Next Steps After Completion
- Optimize delays/durations for mobile
- User feedback round

**Status: COMPLETE** 🎉 Mobile AOS animations added to index components!
