import React from "react";
import NewsCard from "./NewsCard";
import Shimmer from "./Shimmer";

const NewsContainer = ({ newsData, themeName }) => {
  // console.log(newsData);
  return  (
    <div className="p-4 flex flex-wrap gap-12">
      {newsData.map((news, index) => (
        <NewsCard key={index} newsinfo={news} themeName={themeName} />
      ))}
    </div>
  );
};

export default NewsContainer;
