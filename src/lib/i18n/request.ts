import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { LOCALES, type LocaleCode } from './constants'

/**
 * Server-side i18n configuration
 * Called by next-intl for every request
 */
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale parameter is valid
  const validatedLocale = locale as string
  if (!LOCALES.includes(validatedLocale as LocaleCode)) {
    notFound()
  }

  return {
    locale: validatedLocale,
    messages: (await import(`../../../messages/${validatedLocale}.json`)).default,
  }
})
