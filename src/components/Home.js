import React, { useEffect, useState } from "react";
import { API_KEY } from "../utils/Constants";
import Shimmer from "./Shimmer";
import NewsContainer from "./NewsContainer";
const Home = ({ themeName }) => {
  const [fetchedNews, setFetchedNews] = useState([]);

  const fetchData = async () => {
    const jsonData = await fetch(
      "https://newsapi.org/v2/everything?q=india&from=2024-08-09&sortBy=publishedAt&apiKey=" +
        API_KEY
    );
    const data = await jsonData.json();
    setFetchedNews(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return fetchedNews.length === 0 ? (
    <Shimmer />
  ) : (
    <div
      className={`${
        themeName === "Dark" ? "bg-black text-white" : "bg-white text-black"
      } pt-4`}
    >
      <NewsContainer newsData={fetchedNews.articles} themeName={themeName} />
    </div>
  );
};

export default Home;
