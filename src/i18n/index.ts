import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import fr from './locales/fr.json'

const STORAGE_KEY = 'language'

function readSavedLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function saveLanguage(language: string) {
  try {
    localStorage.setItem(STORAGE_KEY, language)
  } catch {
    return
  }
}

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    en: { translation: en },
  },
  lng: readSavedLanguage() === 'en' ? 'en' : 'fr',
  fallbackLng: 'fr',
  interpolation: { escapeValue: false },
})

document.documentElement.lang = i18n.language

i18n.on('languageChanged', (language) => {
  document.documentElement.lang = language
  saveLanguage(language)
})

export default i18n