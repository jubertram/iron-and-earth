import { useTranslation } from 'react-i18next';

export default function Article({article}) {
  const { t, i18n } = useTranslation();
  return(
    <div className='article'>
      <a id={article.date}  className='anchor'></a>
      <h3>{article.title} - <span className="date">{article.date}</span></h3>
      <h4>{t('general.by')} {article.author}</h4>
      <div className="image">
      <img src={article.image} alt="article"/>
      </div>
      <p>{article.content}</p>
    </div>
  );
}
