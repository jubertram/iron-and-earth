import ArticlesList from '../components/ArticlesList';
import ArticlesNav from '../components/ArticlesNav';

export default function Posts() {
  return(
    <>
    <ArticlesNav />
    <div className='container-posts'>
      <ArticlesList />
    </div>
    </>
  );
}
