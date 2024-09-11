import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Results from "./Results";

const Body = ({ themeName }) => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home themeName={themeName}  />,
    },
    {
      path: "/results",
      element: <Results themeName={themeName}/>,
    },
  ]);

  return (
    <div>
      <RouterProvider themeName={themeName} router={appRouter} />
    </div>
  );
};

export default Body;
