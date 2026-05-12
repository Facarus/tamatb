import { translations, defaultLocale, locales, type Locale } from './translations'

export function getLocaleFromUrl(url: URL): Locale {
  const [, locale] = url.pathname.split('/')
  if (locales.includes(locale as Locale)) {
    return locale as Locale
  }
  return defaultLocale
}

export function useTranslations(locale: Locale) {
  return translations[locale]
}

export function getLocalizedPath(path: string, locale: Locale): string {
  // Remove any existing locale prefix
  const cleanPath = path.replace(/^\/(en|es|zh)/, '') || '/'

  // Default locale (en) uses root path
  if (locale === defaultLocale) {
    return cleanPath
  }

  // Other locales get prefixed
  return `/${locale}${cleanPath === '/' ? '' : cleanPath}`
}

export function getAlternateLinks(currentPath: string) {
  // Remove existing locale prefix
  const cleanPath = currentPath.replace(/^\/(en|es|zh)/, '') || '/'

  return locales.map(locale => ({
    locale,
    href: getLocalizedPath(cleanPath, locale),
  }))
}

export { translations, defaultLocale, locales, type Locale }
