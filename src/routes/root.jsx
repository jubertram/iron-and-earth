import Article from '../components/Article';
import Hero from '../components/Hero.jsx'
import { useTranslation } from 'react-i18next'


export default function Root() {
  const { t, i18n } = useTranslation();
  const articles = t('articles', { returnObjects: true });
  const lastArticle = articles[articles.length - 1];

  return (
    <>
      <Hero />
      <div id='last-post'></div>

      <div className='container-root'>
        <h2>{t('general.lastPost')}</h2>
        <Article article={lastArticle}/>
      </div>
    </>
  );
}
