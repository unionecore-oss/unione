# Locale API Contract

## Overview

This document defines the client-side API for managing language preferences and locale state in the UNIONE website.

---

## Storage API

### LocalStorage Contract

**Key**: `UNIONE_LOCALE_PREFERENCE`

**Value Format**:
```typescript
{
  "locale": "en" | "ko",
  "timestamp": "2025-10-17T10:30:00.000Z"
}
```

**Operations**:

#### 1. Save Locale Preference

```typescript
function saveLocalePreference(locale: LocaleCode): void

// Example
saveLocalePreference('ko')
// → Writes to localStorage['UNIONE_LOCALE_PREFERENCE']
```

**Side Effects**:
- Writes to localStorage
- Sets cookie `NEXT_LOCALE` for SSR
- Updates timestamp

**Error Handling**:
- If localStorage unavailable (privacy mode): Fall back to cookie only
- If write fails: Log error, continue with in-memory state

---

#### 2. Get Locale Preference

```typescript
function getLocalePreference(): LocaleCode | null

// Example
const locale = getLocalePreference()
// → Returns 'ko' | 'en' | null
```

**Return Values**:
- `LocaleCode`: If valid preference exists
- `null`: If no preference stored or invalid data

**Validation**:
- Checks if stored locale is in `SUPPORTED_LOCALES`
- Validates timestamp format
- Returns `null` for corrupt data

---

#### 3. Clear Locale Preference

```typescript
function clearLocalePreference(): void

// Example
clearLocalePreference()
// → Removes from localStorage and cookies
```

**Side Effects**:
- Removes localStorage item
- Removes cookie
- Next load will use default locale

---

## Translation API

### Translation Function

```typescript
function t(key: string, params?: Record<string, string | number>): string

// Examples
t('header.navigation.card')
// → "Card"

t('common.greeting', { name: 'User' })
// → "Hello, User!"

t('footer.copyright', { year: 2025 })
// → "© 2025 UNIONE Technology Limited"
```

**Parameters**:
- `key`: Dot-notation path to translation (e.g., `pages.home.hero.title`)
- `params`: (Optional) Variables to interpolate into the translation

**Return Value**:
- Translated string with parameters replaced
- Falls back to English if current locale missing
- Returns key itself as last resort

**Error Handling**:
- Missing key: Log warning, return English version or key
- Invalid params: Ignore invalid params, use defaults

---

### Locale Switcher API

```typescript
async function switchLocale(newLocale: LocaleCode): Promise<void>

// Example
await switchLocale('ko')
// → Updates preference, navigates to /ko/*
```

**Flow**:
1. Validate `newLocale` is supported
2. Save to localStorage
3. Set cookie for SSR
4. Navigate to new locale route (e.g., `/ko/current-path`)

**Error Handling**:
- Invalid locale: Throw error `Error('Unsupported locale: {locale}')`
- Storage failure: Continue with navigation, log warning

---

## Hook API

### useLocale Hook

```typescript
interface LocaleContextValue {
  currentLocale: LocaleCode
  availableLocales: Locale[]
  t: (key: string, params?: Record<string, string | number>) => string
  switchLocale: (newLocale: LocaleCode) => Promise<void>
}

function useLocale(): LocaleContextValue

// Example usage in component
function LanguageSwitcher() {
  const { currentLocale, availableLocales, switchLocale } = useLocale()

  return (
    <select
      value={currentLocale}
      onChange={(e) => switchLocale(e.target.value as LocaleCode)}
    >
      {availableLocales.map(locale => (
        <option key={locale.code} value={locale.code}>
          {locale.name}
        </option>
      ))}
    </select>
  )
}
```

---

## Middleware API

### Locale Detection

**Route**: All routes (`/*`)

**Middleware Logic**:
```typescript
export function middleware(request: NextRequest) {
  const locale = getLocaleFromRequest(request)

  // If accessing root or without locale prefix
  if (!hasLocalePrefix(request.nextUrl.pathname)) {
    return NextResponse.redirect(
      new URL(`/${locale}${request.nextUrl.pathname}`, request.url)
    )
  }

  return NextResponse.next()
}

function getLocaleFromRequest(request: NextRequest): LocaleCode {
  // Priority order:
  // 1. Cookie (from previous user selection)
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (isValidLocale(cookieLocale)) return cookieLocale

  // 2. Default locale
  return DEFAULT_LOCALE // 'en'
}
```

**Matcher Config**:
```typescript
export const config = {
  matcher: [
    // Match all pathnames except for
    // - /api routes
    // - /_next (Next.js internals)
    // - /_static (inside /public)
    // - all items inside /public
    '/((?!api|_next|_static|.*\\..*|favicon.ico).*)',
  ],
}
```

---

## Cookie API

### Locale Cookie

**Name**: `NEXT_LOCALE`
**Value**: `LocaleCode` ("en" | "ko")
**Max Age**: 365 days
**Path**: `/`
**SameSite**: `lax`
**HttpOnly**: `false` (needs client-side access)

**Set Cookie** (Client-side):
```typescript
function setLocaleCookie(locale: LocaleCode): void {
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`
}
```

**Read Cookie** (Server-side):
```typescript
// In middleware or Server Component
const locale = cookies().get('NEXT_LOCALE')?.value ?? DEFAULT_LOCALE
```

---

## Error Responses

### Client-Side Errors

**Invalid Locale Code**:
```typescript
Error: Unsupported locale: "fr"
// Thrown when trying to switch to unsupported language
```

**Missing Translation Key**:
```typescript
Warning: Missing translation for key "pages.unknown.title" in locale "ko"
// Logged to console, returns fallback
```

**Storage Quota Exceeded**:
```typescript
Warning: Failed to save locale preference to localStorage: QuotaExceededError
// Logged to console, continues with cookie-based fallback
```

---

## Type Definitions

```typescript
// /src/types/i18n.types.ts

export type LocaleCode = 'en' | 'ko'

export interface Locale {
  code: LocaleCode
  name: string
  direction: 'ltr'
  isDefault: boolean
}

export interface LanguagePreference {
  locale: LocaleCode
  timestamp: string
}

export interface LocaleContextValue {
  currentLocale: LocaleCode
  availableLocales: Locale[]
  t: (key: string, params?: Record<string, string | number>) => string
  switchLocale: (newLocale: LocaleCode) => Promise<void>
}

// Auto-generated from en.json
export type Messages = typeof import('@/messages/en.json')
```

---

## Constants

```typescript
// /src/lib/i18n/constants.ts

export const LOCALES: Locale[] = [
  { code: 'en', name: 'English', direction: 'ltr', isDefault: true },
  { code: 'ko', name: '한국어', direction: 'ltr', isDefault: false }
]

export const DEFAULT_LOCALE: LocaleCode = 'en'

export const LOCALE_STORAGE_KEY = 'UNIONE_LOCALE_PREFERENCE'
export const LOCALE_COOKIE_NAME = 'NEXT_LOCALE'
export const LOCALE_COOKIE_MAX_AGE = 365 * 24 * 60 * 60 // 1 year in seconds
```

---

**Contract Version**: 1.0.0
**Last Updated**: 2025-10-17
