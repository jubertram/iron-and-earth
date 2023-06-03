import Article from '../components/Article';
import { useTranslation } from 'react-i18next'


export default function Root() {
  const { t, i18n } = useTranslation();
  const articles = t('articles', { returnObjects: true });
  const lastArticle = articles[articles.length - 1];

  return (
    <>
      <div className='hero'>
        <h1>{t("hero.title")}</h1>
        <p>{t("hero.content")}</p>
      <a href="#last-post" className='btn first'>{t("hero.button")}</a>
      </div>

      <div id='last-post'></div>

      <div className='container-root'>
        <h2>{t('general.lastPost')}</h2>
        <Article article={lastArticle}/>
      </div>
    </>
  );
}
