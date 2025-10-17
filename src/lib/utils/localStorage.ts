import { LOCALE_STORAGE_KEY } from '@/lib/i18n/constants'
import type { LocaleCode } from '@/lib/i18n/constants'
import type { LanguagePreference } from '@/types/i18n.types'

/**
 * localStorage helpers for language preference
 */

/**
 * Get stored language preference from localStorage
 * @returns LanguagePreference or null if not found
 */
export function getStoredLocale(): LanguagePreference | null {
  if (typeof window === 'undefined') return null

  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (!stored) return null

    const parsed = JSON.parse(stored) as LanguagePreference
    return parsed
  } catch (error) {
    console.error('Failed to parse stored locale:', error)
    return null
  }
}

/**
 * Store language preference in localStorage
 * @param locale - The locale code to store
 */
export function setStoredLocale(locale: LocaleCode): void {
  if (typeof window === 'undefined') return

  try {
    const preference: LanguagePreference = {
      locale,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(preference))
  } catch (error) {
    console.error('Failed to store locale:', error)
  }
}

/**
 * Remove stored language preference from localStorage
 */
export function clearStoredLocale(): void {
  if (typeof window === 'undefined') return

  try {
    localStorage.removeItem(LOCALE_STORAGE_KEY)
  } catch (error) {
    console.error('Failed to clear stored locale:', error)
  }
}
