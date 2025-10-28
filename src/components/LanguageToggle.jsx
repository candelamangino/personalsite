import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-toggle">
      <button
        className={`language-toggle__button ${i18n.language === 'en' ? 'is-active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button
        className={`language-toggle__button ${i18n.language === 'es' ? 'is-active' : ''}`}
        onClick={() => changeLanguage('es')}
      >
        ES
      </button>
    </div>
  );
}
