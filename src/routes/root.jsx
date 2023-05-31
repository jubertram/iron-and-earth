import Post from '../components/Article';
import { articles } from '../data'

const lastArticle = articles[articles.length - 1];

export default function Root() {
  return (
    <>
      <div className='hero'>
        <h1>Welcome to my blog</h1>
        <p>I will post here psychology articles that I find interesting! I hope you'll enjoy. </p>
      <a href="#last-post" className='btn first'>Let's Go!</a>
      </div>

      <div id='last-post'></div>

      <div className='container'>
        <h2>Last Post:</h2>
        <Post article={lastArticle}/>
      </div>
    </>
  );
}
