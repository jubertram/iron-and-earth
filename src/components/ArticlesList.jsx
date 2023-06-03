import Article from './Article.jsx';
import { useTranslation } from 'react-i18next';

export default function ArticlesList() {
  const { t, i18n } = useTranslation();
  const articles = t('articles', { returnObjects: true });

  const list = articles.map(article =>
    <li key={article.id}><Article article={article} /></li>
  );

  return <ul>{list}</ul>
}
