import Post from '../components/Article';
import { articles } from '../data'

const lastArticle = articles[articles.length - 1];

export default function Root() {
  return (
    <div className='container'>
    <h1>Welcome to my website</h1>

    <h2>Last Post</h2>
    <Post article={lastArticle}/>
    </div>
  );
}
