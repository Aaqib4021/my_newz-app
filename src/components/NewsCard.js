import React from "react";

const NewsCard = ({ newsinfo, themeName }) => {

  const { content, description, url, urlToImage, publishedAt } = newsinfo;
  const { name } = newsinfo?.source;

  return (
    
      <div
        className={`sm:w-[22rem] overflow-hidden p-3 rounded-lg  shadow-sm sm:ml-[18px] w-[15rem] ml-2 ${
          themeName === "Dark" ? "bg-neutral-800 text-white" : "bg-gray-50 text-black"
        }`}
      >
        <div className="w-full">
          <img
            src={urlToImage}
            alt="post-img"
            className="rounded-lg h-52 w-full"
          />
        </div>
        <div>
          <h1 className="font-semibold py-2 bg-gradient-to-r from-purple-400 to-orange-600 bg-clip-text text-transparent">
            {description}
          </h1>
          {content && (
            <p>
              {content.split("[")[0]}
            </p>
          )}
          <a href={url} className="text-blue-500 hover:underline">
            Read More
          </a>
          <div className="flex justify-between mt-2">
            <h5>{publishedAt.split("T")[0]}</h5>
            <h4>{name}</h4>
          </div>
        </div>
      </div>
  );
};

export default NewsCard;
