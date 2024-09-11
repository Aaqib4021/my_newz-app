import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addText } from "../utils/resultSlice";
import { Link } from "react-router-dom";

const Header = ({ themeName, setThemeName }) => {
  const dispatch = useDispatch();
  const query = useSelector((store) => store.result.text);
  console.log(query);

  return (
    <div
      className={`flex shadow-2xl  ${
        themeName === "Dark" ? "bg-black text-white" : "bg-white text-black "
      }`}
    >
      <div>
        <img
          className="w-20 px-2 py-2 rounded-2xl h-16 ml-4"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVGQwL7H2oUIB2Ylixb4EBDKJpEGgT0FL1Q&s"
          alt="logo"
        />
      </div>

      <div>
        <ul className="flex py-4 ml-16 cursor-pointer font-semibold ">
          <Link to={"/"}>
            <li
              className="px-2 hover:underline"
              onClick={() => {
                dispatch(addText(""));
              }}
            >
              Home
            </li>
          </Link>
          <Link to={`/${query}`}>
            <li
              className="px-2 hover:underline"
              onClick={(e) => {
                dispatch(addText(e.target.innerText));
              }}
            >
              Science
            </li>
          </Link>
          <Link to={`/${query}`}>
            <li
              className="px-2 hover:underline"
              onClick={(e) => {
                dispatch(addText(e.target.innerText));
              }}
            >
              Technology
            </li>
          </Link>
          <Link to={`/${query}`}>
            <li
              className="px-2 hover:underline"
              onClick={(e) => {
                dispatch(addText(e.target.innerText));
              }}
            >
              International
            </li>
          </Link>
          <Link to={`/${query}`}>
            <li
              className="px-2 hover:underline"
              onClick={(e) => {
                dispatch(addText(e.target.innerText));
              }}
            >
              Stocks
            </li>
          </Link>
        </ul>
      </div>

      <input
        className={`px-4 h-8 mt-4 rounded-full ml-16 outline-none  ${
          themeName === "Dark"
            ? "bg-gray-200 text-black"
            : "bg-gray-100 text-black "
        }`}
        type="text"
        placeholder="Search"
      />

      <div>
        <button
          className={`mt-4  ml-4 px-6 py-4 font-semibold text-white rounded-lg ${
            themeName === "Dark"
              ? "bg-white text-black"
              : "bg-black text-white "
          }`}
          onClick={() => {
            themeName === "Dark" ? setThemeName("Light") : setThemeName("Dark");
          }}
        >
          {themeName}
        </button>
      </div>
    </div>
  );
};

export default Header;
