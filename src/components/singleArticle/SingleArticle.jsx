
import style from "./SingleArticle.module.css";
import news3 from "./news-3.jpg";
function SingleArticle({
  id,
  title,
  cat,
  date,
  tumbnail,
  readingTime,
  summary,
}) {
  return (
    <div className={style.singleArticle}>
      <div className={style.hero} style={{ backgroundImage: `url(${tumbnail})`}}>
        <span> {cat}</span>
      </div>
      <div className={style.content}>
        <span>{date}</span>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default SingleArticle;
