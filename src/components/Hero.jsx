import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t, i18n } = useTranslation();
  return (
  <div className='hero'>
    <h1>{t("hero.title")}</h1>
    <p>{t("hero.content")}</p>
    <a href="#last-post" className='btn first'>{t("hero.button")}</a>
  </div>
  );
}
