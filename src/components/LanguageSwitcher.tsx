import { useTranslation } from 'react-i18next'

const languages = ['fr', 'en']

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation()

  return (
    <div role="group" aria-label={t('language.label')}>
      {languages.map((language) => (
        <button
          key={language}
          type="button"
          lang={language}
          aria-pressed={i18n.language === language}
          onClick={() => i18n.changeLanguage(language)}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  )
}