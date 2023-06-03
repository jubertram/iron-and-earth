import ArticlesList from '../components/ArticlesList';
import PostsNav from '../components/PostsNav';

export default function Post() {
  return(
    <>
    <PostsNav />
    <div className='container-posts'>
      <ArticlesList />
    </div>
    </>
  );
}
