import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ArticleGallary from "../components/articleGallary/AriticleGallary";
import SingleArticle from "../components/singleArticle/SingleArticle";
import SliderOne from "../components/sliderone/SliderOne";

function Home() {
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
          <SliderOne />
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <ArticleGallary
            title="من و انعکاس وجودم "
            shortTitle="برای آن که نوشتن، تنها جایی است که در آن هم رها میکنم و هم پیدا میشوم">
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

export default Home;
