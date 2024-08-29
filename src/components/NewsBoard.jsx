import React from "react";
import NewsItems from "./NewsItems";

export default function NewsBoard() {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    const myUrl =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=af4e234953db46f887631bcebb9b0021";

    const fetchData = async () => {
      const response = await fetch(myUrl);
      const data = await response.json();

      setArticles(data.articles);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge text-bg-danger">News</span>
      </h2>

      <div className="d-flex justify-content-center flex-wrap align-items-center my-3 mb-3 py-3 px-3">
        {articles.map((article, index) => {
          return <NewsItems article={article} key={index} />;
        })}
      </div>
    </div>
  );
}
