# Implementation Plan: Korean Language Support

**Branch**: `002-korean-language-support` | **Date**: 2025-10-17 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-korean-language-support/spec.md`

## Summary

Implement internationalization (i18n) for the UNIONE website to support Korean language alongside the default English. Users will be able to switch between English and Korean using a language switcher in the header, with their preference persisted using browser localStorage. All user-facing text will be translated, maintaining identical layouts and functionality across both languages.

## Technical Context

**Language/Version**: TypeScript 5, Next.js 15.5.4 (App Router)
**Primary Dependencies**: next-intl (i18n for Next.js App Router), React 19.1
**Storage**: Browser localStorage for language preference persistence
**Testing**: Playwright (E2E tests for language switching), React Testing Library (component tests)
**Target Platform**: Web (modern browsers with localStorage support)
**Project Type**: Web application (frontend-only modification)
**Performance Goals**: Language switch in under 2 seconds, zero layout shift on language change
**Constraints**: Must maintain 100% feature parity between languages, zero CLS during switch
**Scale/Scope**: 2 languages (English, Korean), all pages and components across the site

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Core Principles Compliance

✅ **I. Clean Code Principles**
- i18n implementation will follow single responsibility principle
- Translation keys will be self-documenting
- Language context logic will be separated from UI components

✅ **II. No Hard Coding**
- All text content will be extracted to translation files (no hardcoded strings)
- Language codes and storage keys will be defined as constants
- Configuration will be centralized in i18n config file

✅ **III. Code Reusability**
- Will use existing next-intl library (proven i18n solution)
- Translation utilities will be reusable across all components
- Language switcher component will be reusable

✅ **IV. Clear Variable Naming**
- Translation keys: descriptive, hierarchical (e.g., `header.navigation.card`)
- Variables: `currentLocale`, `availableLocales`, `translations`
- Functions: `switchLanguage`, `getTranslation`, `saveLocalePreference`

✅ **V. Consistent Coding Style**
- Follow existing Next.js App Router patterns
- Match current component structure (imports → types → component → exports)
- Use TypeScript for type-safe translations

✅ **VI. Production-Grade Quality**
- Fallback to English for missing translations
- Error boundaries for translation failures
- Accessibility: language attributes on HTML elements
- SEO: proper hreflang tags for language variants

### Development Standards Compliance

✅ **Technology Stack**: Uses approved stack (Next.js 15.5.4, TypeScript 5, Tailwind CSS 4)
✅ **Code Organization**: Follows existing `/src/components/layout` for language switcher
✅ **File Naming**: PascalCase for components (`LanguageSwitcher.tsx` already exists)
✅ **Testing**: E2E tests with Playwright, component tests with React Testing Library

### Quality Assurance

- **Performance**: Language switch under 2 seconds (SC-001)
- **Accessibility**: ARIA labels for language switcher, lang attribute updates
- **Code Review**: Zero ESLint errors, TypeScript strict mode compliance

### Gates Status

🟢 **PASSED** - No constitution violations detected. Feature aligns with all core principles and standards.

## Project Structure

### Documentation (this feature)

```
specs/002-korean-language-support/
├── plan.md              # This file
├── research.md          # Phase 0: i18n library comparison and best practices
├── data-model.md        # Phase 1: Translation structure and locale data model
├── quickstart.md        # Phase 1: Developer guide for adding new translations
├── contracts/           # Phase 1: Translation file schema and API contracts
└── tasks.md             # Phase 2: Implementation tasks (created by /speckit.tasks)
```

### Source Code (repository root)

```
src/
├── app/
│   ├── [locale]/            # NEW: Locale-based routing (en, ko)
│   │   ├── layout.tsx       # Locale-specific layout wrapper
│   │   └── .../             # All existing pages moved under [locale]
│   └── middleware.ts        # NEW: Locale detection and routing
│
├── components/
│   ├── layout/
│   │   └── Header/
│   │       └── LanguageSwitcher.tsx  # MODIFY: Enhanced with next-intl
│   └── providers/
│       └── I18nProvider.tsx  # NEW: Client-side i18n context
│
├── lib/
│   ├── i18n/
│   │   ├── config.ts        # NEW: i18n configuration
│   │   ├── request.ts       # NEW: Server-side i18n utilities
│   │   └── constants.ts     # NEW: Language constants (LOCALES, DEFAULT_LOCALE)
│   └── utils/
│       └── localStorage.ts  # MODIFY: Add locale persistence helpers
│
├── messages/                # NEW: Translation files
│   ├── en.json             # English translations
│   └── ko.json             # Korean translations
│
└── types/
    └── i18n.types.ts       # NEW: TypeScript definitions for translations
```

**Structure Decision**: Extends existing Next.js App Router structure with locale-based routing (`/[locale]/*`). Chose next-intl's recommended App Router pattern with middleware for automatic locale detection. Translation files separated from source code for easier management by content team.

## Complexity Tracking

*No violations - this section is empty*

---

**Status**: ✅ Ready for Phase 0 (Research)
**Next Command**: Proceed to Phase 0 research generation
