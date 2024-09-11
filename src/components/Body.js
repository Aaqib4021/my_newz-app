import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Results from "./Results";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Header from "./Header";
import NewsContainer from "./NewsContainer";
import Shimmer from "./Shimmer";

const Body = ({ themeName, setThemeName }) => {

  const query = useSelector((store) => store.result.text);
  const [fetchedNews, setFetchedNews] = useState([]);

  const fetchData = async () => {

    const jsonData = await fetch(
      "https://newsapi.org/v2/everything?q=india&from=2024-08-11&sortBy=publishedAt&apiKey=4c4c22d6f4594e55b6d5a52e232de8e6"
    );

    const data = await jsonData.json();
    setFetchedNews(data);
  };

  useEffect(() => {
    if(query){
      fetchData();
    }
  }, [query]);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home themeName={themeName} setThemeName={setThemeName} />,
      children: [
        {
          path: "/",
          element: (
            <NewsContainer
              newsData={fetchedNews.articles}
              themeName={themeName}
              setThemeName={setThemeName}
            />
          ),
        },
        {
          path: `/${query}`,
          element: (
            <Results themeName={themeName} setThemeName={setThemeName} />
          ),
        },
      ],
    },
  ]);

  return fetchedNews === 0 ? <Shimmer/> : (
    <div>
      <RouterProvider router={appRouter}>
        <Header themeName={themeName} setThemeName={setThemeName} />
        <Home themeName={themeName} setThemeName={setThemeName} />
      </RouterProvider>
    </div>
  );
};

export default Body;
