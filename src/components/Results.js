import React, { useEffect, useState } from "react";
import NewsContainer from "./NewsContainer";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer"

const Results = ({ themeName }) => {

  const [resultNews, setResultNews] = useState([]);
  const query = useSelector((store) => store.result.text);

  const fetchData = async () => {

    const jsonData = await fetch(
      `https://newsapi.org/v2/everything?q=india+${query}&from=2024-08-11&sortBy=publishedAt&apiKey=4c4c22d6f4594e55b6d5a52e232de8e6`
    );

    const data = await jsonData.json();
    setResultNews(data);
  };

  useEffect(() => {
    fetchData();
  }, [query]);
  return resultNews.length === 0 ? <Shimmer/> : (
    <div>
      <NewsContainer newsData={resultNews.articles} themeName={themeName} />
    </div>
  );
};

export default Results;
