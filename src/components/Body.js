import React, { useEffect, useState } from "react";
import { API_KEY } from "../utils/Constants";
import NewsContainer from "./NewsContainer";
import Shimmer from "./Shimmer";

const Body = ({themeName}) => {
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

  // if (fetchedNews.length === 0) return;

  return fetchedNews.length === 0 ? <Shimmer/> : (
    <div className={`${themeName === "Dark" ? "bg-black text-white" : "bg-white text-black"} pt-4`}>
      <h1 className="font-bold ml-6 text-3xl">News around the world 🌎</h1>
      <NewsContainer newsData={fetchedNews.articles} themeName={themeName} />
    </div>
  );
};

export default Body;
