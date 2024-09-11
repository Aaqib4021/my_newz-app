import React, { useEffect, useState } from "react";
import NewsContainer from "./NewsContainer";
import { API_KEY } from "../utils/Constants";

const Results = ({themeName}) => {

  const [resultNews, setResultNews] = useState([]);

  const fetchData = async () => {
    const jsonData = await fetch(
      "https://newsapi.org/v2/everything?q=india+technology&from=2024-08-09&sortBy=publishedAt&apiKey=" +
        API_KEY
    );
    const data = await jsonData.json();
    console.log(data)
    setResultNews(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>
    <NewsContainer newsData={resultNews.articles} themeName={themeName} />
  </div>;
};

export default Results;
