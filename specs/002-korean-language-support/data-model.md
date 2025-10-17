# Phase 1: Data Model

**Feature**: Korean Language Support
**Date**: 2025-10-17

## Overview

This document defines the data structures for managing language preferences, translations, and locale configuration in the UNIONE website's internationalization system.

---

## Entity 1: Locale

**Description**: Represents a supported language/region combination

**Attributes**:
- `code`: ISO 639-1 language code (e.g., "en", "ko")
- `name`: Human-readable language name in native script
- `direction`: Text direction ("ltr" for left-to-right)
- `isDefault`: Boolean indicating if this is the default locale

**TypeScript Definition**:
```typescript
type LocaleCode = 'en' | 'ko'

interface Locale {
  code: LocaleCode
  name: string        // "English" or "한국어"
  direction: 'ltr'    // Future-proof for RTL languages
  isDefault: boolean
}
```

**Instances**:
```typescript
const LOCALES: Locale[] = [
  { code: 'en', name: 'English', direction: 'ltr', isDefault: true },
  { code: 'ko', name: '한국어', direction: 'ltr', isDefault: false }
]

const DEFAULT_LOCALE: LocaleCode = 'en'
```

**Validation Rules**:
- `code` must be one of the defined LocaleCode union type
- At least one locale must have `isDefault: true`
- Only one locale can have `isDefault: true`

---

## Entity 2: Language Preference

**Description**: User's selected language choice, persisted across sessions

**Storage Location**: Browser localStorage
**Storage Key**: `UNIONE_LOCALE_PREFERENCE`

**Attributes**:
- `locale`: Selected locale code
- `timestamp`: When preference was last updated (ISO 8601 string)

**TypeScript Definition**:
```typescript
interface LanguagePreference {
  locale: LocaleCode
  timestamp: string  // ISO 8601 format
}
```

**Storage Format** (JSON in localStorage):
```json
{
  "locale": "ko",
  "timestamp": "2025-10-17T10:30:00.000Z"
}
```

**Validation Rules**:
- `locale` must be a valid LocaleCode
- `timestamp` must be a valid ISO 8601 string
- If invalid or missing, fall back to default locale ("en")

**State Transitions**:
```
[No Preference] --user selects language--> [Preference Stored]
[Preference Stored] --user changes language--> [Preference Updated]
[Preference Stored] --invalid data detected--> [Reset to Default]
```

---

## Entity 3: Translation Dictionary

**Description**: Hierarchical structure containing all translated text content

**Storage Location**: `/messages/{locale}.json` files
**Format**: Nested JSON with namespace-based organization

**Structure**:
```typescript
interface TranslationDictionary {
  common: CommonTranslations
  header: HeaderTranslations
  footer: FooterTranslations
  pages: PagesTranslations
}

interface CommonTranslations {
  loading: string
  error: string
  buttons: {
    submit: string
    cancel: string
    learnMore: string
  }
}

interface HeaderTranslations {
  navigation: {
    card: string
    platform: string
    aboutUs: string
  }
  cta: {
    launchApp: string
  }
  languageSwitcher: {
    label: string
    currentLanguage: string
  }
}

interface FooterTranslations {
  company: string
  legal: {
    privacyPolicy: string
    termsAndConditions: string
  }
  copyright: string
}

interface PagesTranslations {
  home: HomePageTranslations
  card: CardPageTranslations
  wallet: WalletPageTranslations
  // ... other pages
}

interface HomePageTranslations {
  hero: {
    title: string
    description: string
    cta: string
  }
  // ... other sections
}
```

**Example Data** (`en.json`):
```json
{
  "common": {
    "loading": "Loading...",
    "error": "An error occurred",
    "buttons": {
      "submit": "Submit",
      "cancel": "Cancel",
      "learnMore": "Learn More"
    }
  },
  "header": {
    "navigation": {
      "card": "Card",
      "platform": "Platform",
      "aboutUs": "About Us"
    },
    "cta": {
      "launchApp": "Launch App"
    },
    "languageSwitcher": {
      "label": "Select language",
      "currentLanguage": "Current language: {language}"
    }
  },
  "pages": {
    "home": {
      "hero": {
        "title": "All Your Digital Assets, Your Smart Wallet",
        "description": "Manage your assets with ease, protected by industry-leading security.",
        "cta": "Get Your Wallet"
      }
    }
  }
}
```

**Validation Rules**:
- All locale files (`en.json`, `ko.json`) must have identical key structure
- Translation values must be non-empty strings
- Placeholder syntax: `{variableName}` for dynamic content
- Missing translations trigger warning and fallback to English

---

## Entity 4: Locale Context

**Description**: Runtime state tracking current locale and providing translation utilities

**Scope**: Application-wide (via React Context)
**Provider**: Next.js App Router locale segment (`[locale]`)

**Attributes**:
- `currentLocale`: Active locale code
- `availableLocales`: Array of supported locales
- `translations`: Current locale's translation dictionary
- `t`: Translation function
- `switchLocale`: Function to change language

**TypeScript Definition**:
```typescript
interface LocaleContext {
  currentLocale: LocaleCode
  availableLocales: Locale[]
  t: (key: string, params?: Record<string, string>) => string
  switchLocale: (newLocale: LocaleCode) => Promise<void>
}
```

**Usage Example**:
```typescript
// In a React component
const { t, currentLocale, switchLocale } = useLocale()

// Translate text
const title = t('pages.home.hero.title')

// Translate with parameters
const greeting = t('common.greeting', { name: 'User' })

// Switch language
await switchLocale('ko')
```

---

## Relationships

```
┌─────────────────────┐
│      Locale         │
│  (Supported langs)  │
└──────────┬──────────┘
           │
           │ defines available options
           │
           ▼
┌─────────────────────┐        ┌──────────────────────┐
│ Language Preference │◄───────│   Locale Context     │
│   (User choice)     │  reads │  (Runtime state)     │
└──────────┬──────────┘        └──────────┬───────────┘
           │                              │
           │                              │
           │                              │ loads
           │                              ▼
           │                   ┌──────────────────────┐
           └──────────────────►│ Translation Dictionary│
             persists to       │    (JSON files)      │
                               └──────────────────────┘
```

**Relationships**:
1. **Locale → Language Preference**: Locale defines valid options for user preference
2. **Language Preference → Translation Dictionary**: User preference determines which translation file to load
3. **Translation Dictionary → Locale Context**: Loaded translations provided via context to components
4. **Locale Context → Language Preference**: Context updates preference when user switches language

---

## Data Flow

### 1. Initial Load (Server)
```
Request → Middleware → Check Cookie → Determine Locale → Load Translation JSON → SSR with correct locale
```

### 2. Language Switch (Client)
```
User clicks switch → switchLocale() → Update localStorage → Set cookie → Redirect to /[newLocale]/* → SSR with new locale
```

### 3. Translation Lookup
```
Component → t('key.path') → Locale Context → Translation Dictionary → Return translated string (or fallback)
```

---

## Fallback Strategy

**Priority Order**:
1. Requested locale translation (e.g., `ko.json`)
2. Default locale translation (`en.json`)
3. Translation key itself (as last resort)

**Example**:
```typescript
// If ko.json is missing a key:
t('pages.newFeature.title')
// 1. Check ko.json → not found
// 2. Check en.json → return English version
// 3. If also missing → return 'pages.newFeature.title'
```

---

## Type Safety

**Approach**: Generate TypeScript types from `en.json` (source of truth)

**Generated Type** (automatic via next-intl):
```typescript
type Messages = typeof import('./messages/en.json')

declare global {
  interface IntlMessages extends Messages {}
}
```

**Benefits**:
- Autocomplete for translation keys
- Compile-time error for invalid keys
- Refactoring safety (rename detection)

---

**Data Model Status**: ✅ Complete
**Next**: Contracts generation
