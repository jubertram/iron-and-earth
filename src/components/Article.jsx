export default function Article({article}) {
  return(
    <div className='article'>
      <h3>{article.title} - <span className="date">{article.date}</span></h3>
      <h4>by {article.author}</h4>
      <div className="image">
      <img src={article.image} alt="article"/>
      </div>
      <p>{article.content}</p>
    </div>
  );
}
