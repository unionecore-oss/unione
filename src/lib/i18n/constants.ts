/**
 * i18n Constants
 *
 * Defines supported locales and related constants for internationalization.
 */

export const LOCALES = ['en', 'ko'] as const
export type LocaleCode = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: LocaleCode = 'en'

export const LOCALE_NAMES: Record<LocaleCode, string> = {
  en: 'English',
  ko: '한국어'
}

export const LOCALE_STORAGE_KEY = 'UNIONE_LOCALE_PREFERENCE'
export const LOCALE_COOKIE_NAME = 'NEXT_LOCALE'
export const LOCALE_COOKIE_MAX_AGE = 365 * 24 * 60 * 60 // 1 year in seconds
