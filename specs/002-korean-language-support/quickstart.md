# Quick Start Guide: Adding Translations

**Audience**: Developers and Content Team
**Last Updated**: 2025-10-17

---

## For Developers: Adding New Translatable Content

### Step 1: Add Translation Keys to English File

Edit `/messages/en.json`:

```json
{
  "pages": {
    "newPage": {
      "hero": {
        "title": "Your New Feature",
        "description": "Description of the new feature",
        "cta": "Get Started"
      }
    }
  }
}
```

**Naming Convention**:
- Use camelCase for keys
- Structure hierarchically: `pages.pageName.section.element`
- Keep keys descriptive and self-documenting

---

### Step 2: Use Translation in Component

#### Server Component (Recommended for static content)

```typescript
import { getTranslations } from 'next-intl/server'

export default async function NewPage() {
  const t = await getTranslations('pages.newPage')

  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.description')}</p>
      <button>{t('hero.cta')}</button>
    </div>
  )
}
```

#### Client Component (for interactive content)

```typescript
'use client'

import { useTranslations } from 'next-intl'

export function InteractiveFeature() {
  const t = useTranslations('pages.newPage')

  return (
    <div>
      <h2>{t('hero.title')}</h2>
      <p>{t('hero.description')}</p>
    </div>
  )
}
```

---

### Step 3: Add Parameters (Optional)

For dynamic content with variables:

**English** (`en.json`):
```json
{
  "common": {
    "greeting": "Hello, {name}!",
    "itemCount": "You have {count} items"
  }
}
```

**Usage**:
```typescript
const t = useTranslations('common')

<p>{t('greeting', { name: userName })}</p>
<p>{t('itemCount', { count: 5 })}</p>
```

---

### Step 4: Notify Content Team

Create a PR with:
- [ ] New keys added to `en.json`
- [ ] Component using translations
- [ ] Tag content team for Korean translations
- [ ] Link to this quickstart guide

---

## For Content Team: Adding Korean Translations

### Step 1: Find Missing Translations

Run the validation script:

```bash
npm run validate:translations
```

Output shows missing Korean translations:
```
Missing translations in ko.json:
- pages.newPage.hero.title
- pages.newPage.hero.description
- pages.newPage.hero.cta
```

---

### Step 2: Add Korean Translations

Edit `/messages/ko.json`:

```json
{
  "pages": {
    "newPage": {
      "hero": {
        "title": "새로운 기능",
        "description": "새로운 기능에 대한 설명",
        "cta": "시작하기"
      }
    }
  }
}
```

**Translation Guidelines**:
- Maintain the same JSON structure as `en.json`
- Keep keys identical (only translate values)
- Preserve placeholders: `{name}`, `{count}`, etc.
- Match tone and formality level

---

### Step 3: Validate Structure

Run validation:

```bash
npm run validate:translations
```

Should show:
```
✅ All translations valid
✅ en.json and ko.json have matching keys
```

---

### Step 4: Test Translations

1. Start dev server: `npm run dev`
2. Navigate to http://localhost:3000/ko/new-page
3. Verify all text displays in Korean
4. Switch to English and verify

---

## Common Patterns

### Pattern 1: Pluralization

**English**:
```json
{
  "items": {
    "one": "1 item",
    "other": "{count} items"
  }
}
```

**Korean**:
```json
{
  "items": {
    "one": "항목 1개",
    "other": "항목 {count}개"
  }
}
```

**Usage**:
```typescript
t('items', { count: itemCount })
// count === 1 → "1 item" / "항목 1개"
// count > 1  → "5 items" / "항목 5개"
```

---

### Pattern 2: HTML in Translations

**English**:
```json
{
  "richText": "Read our <link>privacy policy</link>"
}
```

**Usage** (with next-intl rich text):
```typescript
t.rich('richText', {
  link: (children) => <a href="/privacy">{children}</a>
})
```

---

### Pattern 3: Nested Translations

**Structure**:
```json
{
  "pages": {
    "home": {
      "hero": { "title": "..." },
      "features": {
        "feature1": { "title": "...", "description": "..." },
        "feature2": { "title": "...", "description": "..." }
      }
    }
  }
}
```

**Usage**:
```typescript
const t = useTranslations('pages.home.features')

features.map((f, i) => (
  <div key={i}>
    <h3>{t(`feature${i + 1}.title`)}</h3>
    <p>{t(`feature${i + 1}.description`)}</p>
  </div>
))
```

---

## Validation & Testing

### Automated Validation

**Check for missing translations**:
```bash
npm run validate:translations
```

**Check JSON syntax**:
```bash
npm run lint:translations
```

**Type-check translation keys**:
```bash
npm run type-check
```

---

### Manual Testing Checklist

- [ ] All text displays in Korean on `/ko/*` routes
- [ ] All text displays in English on `/en/*` routes
- [ ] Language switcher works bidirectionally
- [ ] No layout shifts when switching languages
- [ ] Placeholder values correctly interpolated
- [ ] Long Korean text doesn't cause overflow
- [ ] Buttons and CTAs maintain proper sizing

---

## Troubleshooting

### Issue: "Missing translation" warning

**Symptom**: Console shows `Missing translation for key "..."`

**Solution**:
1. Check if key exists in `en.json`
2. Verify exact key path (case-sensitive)
3. Ensure JSON is valid (run `npm run lint:translations`)

---

### Issue: Korean text overflows container

**Symptom**: Korean text breaks layout or gets cut off

**Solution**:
1. Check if English translation has significantly fewer characters
2. Adjust container min-width or use ellipsis
3. Consider abbreviating Korean text

---

### Issue: Translation not updating after change

**Symptom**: Changes to JSON file don't appear on site

**Solution**:
1. Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)
2. Clear Next.js cache: `rm -rf .next && npm run dev`
3. Check file was saved correctly

---

## File Locations

```
/messages/
├── en.json              # English translations (source of truth)
├── ko.json              # Korean translations
└── _schema.json         # JSON schema for validation

/src/lib/i18n/
├── config.ts            # i18n configuration
├── constants.ts         # Locale constants
└── request.ts           # Server-side utilities

/src/components/layout/Header/
└── LanguageSwitcher.tsx # Language switcher component
```

---

## Support & Resources

- **Documentation**: `/specs/002-korean-language-support/`
- **API Contract**: `/specs/002-korean-language-support/contracts/locale-api.md`
- **Data Model**: `/specs/002-korean-language-support/data-model.md`
- **next-intl Docs**: https://next-intl-docs.vercel.app

---

**Quick Start Version**: 1.0.0
**Maintained By**: Development Team
