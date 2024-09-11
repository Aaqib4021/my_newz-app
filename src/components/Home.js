import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Home = ({ themeName, setThemeName }) => {
  return (
    <div className="flex flex-col">
      <div>
        <Header themeName={themeName} setThemeName={setThemeName} />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
