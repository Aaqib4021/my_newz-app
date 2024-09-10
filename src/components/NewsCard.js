import React from "react";

const NewsCard = ({ newsinfo }) => {
  const { content, description, url, urlToImage, publishedAt } = newsinfo;
  const { name } = newsinfo?.source;
  return (
    <div className="w-[22rem] bg-zinc-800 overflow-hidden p-3 rounded-lg">
      <div className="w-full">
        <img src={urlToImage} alt="post-img" className="rounded-lg" />
      </div>
      <div>
        <h1 className="font-semibold py-2 bg-gradient-to-r from-purple-400 to-orange-600 bg-clip-text text-transparent">
          {description}
        </h1>
        {content && <p className="text-gray-300">{content.split("[")[0]}</p>}
        <a href={url} className="text-blue-500">
          Read More
        </a>
        <div className="flex justify-between">
          <h5>{publishedAt.split("T")[0]}</h5>
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
