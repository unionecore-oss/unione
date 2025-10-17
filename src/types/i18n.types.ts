import type { LocaleCode } from '@/lib/i18n/constants'

/**
 * Language preference stored in localStorage
 */
export interface LanguagePreference {
  locale: LocaleCode
  timestamp: string // ISO 8601 format
}

/**
 * Locale metadata
 */
export interface Locale {
  code: LocaleCode
  name: string
  direction: 'ltr'
  isDefault: boolean
}

/**
 * Auto-generated type from messages/en.json
 * This will be updated when translation files are created
 */
export type Messages = typeof import('../../messages/en.json')

type IntlMessagesType = Messages

declare global {
  // Using type alias to avoid empty interface error
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends IntlMessagesType {}
}
