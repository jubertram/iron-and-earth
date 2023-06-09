import { useTranslation } from "react-i18next";

export default function ArticlesNav(){
  const { t, i18n } = useTranslation();
  const articles = t('articles', { returnObjects: true });

  const links = articles.map(article =>
    <a href={`#${article.date}`} key={article.id}>{article.id + 1} - {article.title}</a>
  );

  return (
    <div className="posts-nav">
      <p>{t('general.summary')}</p>
      <nav>{links}</nav>
    </div>
  );
}
