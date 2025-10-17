import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { LOCALES, type LocaleCode } from './constants'

/**
 * Server-side i18n configuration
 * Called by next-intl for every request
 */
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale parameter is valid
  if (!LOCALES.includes(locale as LocaleCode)) {
    notFound()
  }

  return {
    messages: (await import(`../../../messages/${locale}.json`)).default,
  }
})
