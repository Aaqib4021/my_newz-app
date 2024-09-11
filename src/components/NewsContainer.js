import React from "react";
import NewsCard from "./NewsCard";

const NewsContainer = ({ newsData, themeName }) => {
  return (
    <div className= {`  ${
      themeName === "Dark" ? "bg-neutral-950 text-white" : "bg-white text-black "
    }`}>
      <h1 className="font-bold ml-6 text-3xl py-8 sm:mt-16 mt-0 sm:w-screen w-[240px]">Latest News around the world 🌎 is here.</h1>
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
