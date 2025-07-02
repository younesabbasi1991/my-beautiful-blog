import axios from "axios";
import { useState, useEffect } from "react";
import ArticleGallary from "../components/articleGallary/AriticleGallary";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SingleArticle from "../components/singleArticle/SingleArticle";

function Articles() {
  const [articles, setAricles] = useState([]);
  useEffect(function () {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        setAricles(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="container">
          <ArticleGallary
            title="آخرین دل نوشته های من "
            shortTitle="اینجا چیزی رو از دست نمی دی ">
            {articles.map((el) => {
              return (
                <SingleArticle
                  key={el.id}
                  cat={el.category}
                  summary={el.summary}
                  date={el.date}
                  tumbnail={el.thumbnail}
                />
              );
            })}
          </ArticleGallary>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Articles;
