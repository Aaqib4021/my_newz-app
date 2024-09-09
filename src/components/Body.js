import React, { useEffect, useState } from "react";
import { API_KEY } from "../utils/Constants";
import NewsContainer from "./NewsContainer";

const Body = () => {
  const [fetchedNews, setFetchedNews] = useState([]);

  const fetchData = async () => {
    const jsonData = await fetch(
      "https://newsapi.org/v2/everything?q=india&us&russia&from=2024-08-09&sortBy=publishedAt&apiKey=" +
        API_KEY
    );
    const data = await jsonData.json();
    setFetchedNews(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (fetchedNews.length === 0) return;

  return (
    <div className="text-white">
      <h1>Top News</h1>
      <NewsContainer newsData={fetchedNews.articles} />
    </div>
  );
};

export default Body;
