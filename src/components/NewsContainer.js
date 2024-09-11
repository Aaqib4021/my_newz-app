import React from "react";
import NewsCard from "./NewsCard";

const NewsContainer = ({ newsData, themeName }) => {
  // console.log(newsData);
  return (
    <div>
      <h1 className="font-bold ml-6 text-3xl mt-4">News around the world 🌎</h1>
      <div className="p-4 flex flex-wrap gap-12">
        {newsData &&
          newsData.map((news, index) => (
            <NewsCard key={index} newsinfo={news} themeName={themeName} />
          ))}
      </div>
    </div>
  );
};

export default NewsContainer;
