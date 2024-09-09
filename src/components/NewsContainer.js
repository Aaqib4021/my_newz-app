import React from "react";
import NewsCard from "./NewsCard";

const NewsContainer = ({ newsData }) => {
  // console.log(newsData);
  return (
    <div className="p-4 flex flex-wrap gap-12">
      {newsData.map((news, index) => (
        <NewsCard key={index} newsinfo={news} />
      ))}
    </div>
  );
};

export default NewsContainer;
