# Phase 0: Research & Technology Decisions

**Feature**: Korean Language Support
**Date**: 2025-10-17

## Research Questions

1. Which i18n library is best suited for Next.js 15 App Router?
2. How should we structure translation files for maintainability?
3. What's the best approach for locale detection and persistence?
4. How do we handle SEO for multilingual content?
5. What's the optimal strategy for preventing layout shift during language switching?

---

## Decision 1: i18n Library Selection

**Decision**: Use **next-intl** v3.x

**Rationale**:
- **Next.js 15 App Router Native Support**: Built specifically for Next.js App Router with full RSC (React Server Components) support
- **Type Safety**: First-class TypeScript support with automatic type inference for translation keys
- **Performance**: Server-side translations with zero client-side overhead for static content
- **Active Maintenance**: Actively maintained with Next.js 15 compatibility confirmed
- **Developer Experience**: Excellent DX with intuitive API and comprehensive documentation
- **Locale Routing**: Built-in support for `/[locale]/` routing pattern
- **Community Adoption**: Widely adopted in Next.js ecosystem with proven track record

**Alternatives Considered**:

| Library | Pros | Cons | Why Rejected |
|---------|------|------|--------------|
| react-i18next | Mature, widely used, large ecosystem | Not optimized for App Router, more client-side overhead, requires wrapper components | Designed for Pages Router, adds unnecessary complexity to RSC |
| next-translate | Simple API, popular | Limited App Router support, smaller community | Less active development for App Router, weaker TypeScript support |
| formatjs/react-intl | ICU message format, comprehensive | Complex setup, heavier bundle, overkill for 2 languages | Unnecessary complexity for simple text translations |
| Custom solution | Full control, minimal dependencies | High maintenance, reinventing wheel, no ecosystem | Time-consuming, error-prone, lacks battle-tested edge case handling |

---

## Decision 2: Translation File Structure

**Decision**: **Hierarchical JSON with namespace pattern**

**Format**:
```json
{
  "common": {
    "loading": "Loading...",
    "error": "An error occurred"
  },
  "header": {
    "navigation": {
      "card": "Card",
      "platform": "Platform",
      "aboutUs": "About Us"
    },
    "cta": {
      "launchApp": "Launch App"
    }
  },
  "pages": {
    "home": {
      "hero": {
        "title": "All Your Digital Assets, Your Smart Wallet",
        "description": "Manage your assets with ease..."
      }
    }
  }
}
```

**Rationale**:
- **Scalability**: Easy to locate and update translations by feature/component
- **Namespace Collision Prevention**: Hierarchical structure prevents key conflicts
- **IDE Support**: JSON provides autocomplete and validation in modern editors
- **Content Team Friendly**: Non-technical translators can understand structure
- **Type Safety**: next-intl generates TypeScript types from JSON structure
- **Partial Loading**: Namespaces enable code-splitting for large translation files

**Alternatives Considered**:
- **Flat structure**: Simple but causes key collision issues at scale
- **TypeScript files**: Better for developers but harder for content teams
- **YAML**: Human-friendly but requires parser, adds build complexity
- **Database-driven**: Enables runtime updates but adds infrastructure dependency

---

## Decision 3: Locale Detection & Persistence Strategy

**Decision**: **Middleware-based detection + localStorage persistence**

**Implementation Flow**:
1. **First Visit**: Middleware checks for stored locale in cookie (set from localStorage on client)
2. **No Stored Preference**: Default to English (as per spec Q1: A)
3. **User Switches Language**: Client updates localStorage → sets cookie → triggers route change
4. **Subsequent Visits**: Middleware reads cookie → redirects to correct `/[locale]/*` route

**Rationale**:
- **User Choice Precedence**: Explicitly selected language always takes priority (spec requirement)
- **Cross-Session Persistence**: localStorage survives browser restarts
- **SSR Compatibility**: Cookie enables server-side locale detection for first render
- **No Layout Shift**: Server knows locale before rendering, preventing flash of wrong language
- **Simple Implementation**: Leverages Next.js middleware for automatic locale routing

**Alternatives Considered**:
- **Browser locale auto-detection**: Rejected per spec (Q1: A - always start with English)
- **URL query parameters**: Fragile, pollutes URL, not SEO-friendly
- **Session storage**: Doesn't persist across browser restarts
- **Cookies only**: Works but localStorage provides better client-side API

---

## Decision 4: SEO Strategy for Multilingual Content

**Decision**: **Locale-based routing + hreflang tags**

**Implementation**:
- **URL Structure**: `/en/*` (English), `/ko/*` (Korean)
- **Default Locale**: `/` redirects to `/en` (canonical)
- **Hreflang Tags**: Automatic generation via next-intl metadata API
  ```html
  <link rel="alternate" hreflang="en" href="https://unione.com/en/card" />
  <link rel="alternate" hreflang="ko" href="https://unione.com/ko/card" />
  <link rel="alternate" hreflang="x-default" href="https://unione.com/en/card" />
  ```
- **HTML Lang Attribute**: Dynamically set based on active locale
- **Meta Description**: Translated for each language

**Rationale**:
- **Search Engine Discovery**: hreflang tells Google which language variant to show per region
- **Duplicate Content Prevention**: x-default prevents SEO penalties
- **Clean URLs**: Locale prefix makes language explicit and shareable
- **Crawl Efficiency**: Search engines can directly access each language version

---

## Decision 5: Zero Layout Shift Strategy

**Decision**: **Server-side rendering + CSS containment + font preloading**

**Techniques**:
1. **SSR All Text**: Translations rendered on server, eliminating client-side flash
2. **CSS Containment**: Use `contain: layout` on text containers to prevent reflow
3. **Fixed Container Heights**: Define min-height for dynamic content areas
4. **Font Preloading**: Preload fonts for both English and Korean to prevent FOIT/FOUT
5. **Bidirectional RTL Support (Future-proof)**: CSS logical properties for potential RTL languages

**Rationale**:
- **Zero CLS**: Prevents Cumulative Layout Shift (SC-005 requirement)
- **Performance**: No client-side translation loading delay
- **User Experience**: Instant language switch without visual disruption
- **Core Web Vitals**: Maintains good LCP and CLS scores for SEO

**Implementation Details**:
```typescript
// middleware.ts - Locale detection before render
export function middleware(request: NextRequest) {
  const locale = getLocaleFromCookieOrDefault(request)
  return NextResponse.rewrite(new URL(`/${locale}${request.nextUrl.pathname}`, request.url))
}

// layout.tsx - Preload fonts
export function generateMetadata({ params: { locale } }) {
  return {
    other: {
      'font-display': 'swap',
    },
  }
}
```

---

## Best Practices & Guidelines

### Translation Key Naming Convention
- **Format**: `namespace.section.element.property`
- **Examples**:
  - `header.navigation.card` → "Card"
  - `pages.home.hero.title` → "All Your Digital Assets..."
  - `common.buttons.submit` → "Submit"

### File Organization
```
messages/
├── en.json          # English translations (source of truth)
├── ko.json          # Korean translations
└── _schema.json     # JSON schema for validation (optional)
```

### Translation Workflow
1. Developer adds English key to `en.json`
2. CI/CD checks for missing Korean translations
3. Content team updates `ko.json`
4. Automated PR created with translation diff

### Error Handling
- **Missing Translation**: Fall back to English
- **Missing Namespace**: Log warning, show key name
- **Invalid Locale**: Redirect to default locale (`/en`)

---

## Implementation Checklist

- [ ] Install next-intl dependency
- [ ] Create `/src/lib/i18n/config.ts` with locale definitions
- [ ] Set up middleware for locale detection
- [ ] Create translation files (`en.json`, `ko.json`)
- [ ] Update Header component to use translated navigation
- [ ] Add hreflang meta tags
- [ ] Implement localStorage persistence
- [ ] Add E2E tests for language switching
- [ ] Create translation management documentation

---

**Research Status**: ✅ Complete
**Next Phase**: Phase 1 - Data Model & Contracts
