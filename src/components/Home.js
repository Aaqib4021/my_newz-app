import React, { useEffect, useState } from "react";
import { API_KEY } from "../utils/Constants";
import Shimmer from "./Shimmer";
import NewsContainer from "./NewsContainer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Home = ({ themeName }) => {
  return (
    <div className="flex flex-col">
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
