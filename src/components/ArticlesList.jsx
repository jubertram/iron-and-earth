import {articles} from "../data.js";
import Article from './Article.jsx';

export default function ArticlesList() {
  const list = articles.map(article =>
    <li><Article article={article} key={article.id}/></li>
  );
  return <ul>{list}</ul>
}
