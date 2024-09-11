import React, { useEffect, useState } from "react";
import NewsContainer from "./NewsContainer";
import { API_KEY } from "../utils/Constants";
import { useSelector } from "react-redux";

const Results = ({ themeName }) => {
  const [resultNews, setResultNews] = useState([]);
  const query = useSelector((store) => store.result.text);

  const fetchData = async () => {
    const jsonData = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&from=2024-08-11&sortBy=publishedAt&apiKey=4c4c22d6f4594e55b6d5a52e232de8e6`
    );
    const data = await jsonData.json();
    setResultNews(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <NewsContainer newsData={resultNews.articles} themeName={themeName} />
    </div>
  );
};

export default Results;
