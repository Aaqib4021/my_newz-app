import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addText } from "../utils/resultSlice";
import { Link } from "react-router-dom";

const Header = ({ themeName, setThemeName }) => {
  
  const dispatch = useDispatch();
  const query = useSelector((store) => store.result.text);
  // console.log(query);

  return (
    <div
      className={`flex flex-col md:flex-row sm:shadow-sm sm:fixed w-screen ${
        themeName === "Dark" ? "bg-neutral-800 text-white" : "bg-white text-black "
      }`}
    >
      <div>
        <img
          className="w-24 px-2 py-2 rounded-2xl h-16 ml-4 fixed "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVGQwL7H2oUIB2Ylixb4EBDKJpEGgT0FL1Q&s"
          alt="logo"
        />
      </div>

      <div>
        <ul className="sm:flex py-4 sm:ml-36 cursor-pointer font-semibold sm:mt-2 mt-12 ml-4">
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
          <Link to={`/${query}`}>
            <li
              className="px-2 hover:underline"
              onClick={(e) => {
                dispatch(addText(e.target.innerText));
              }}
            >
              Travel
            </li>
          </Link>
          <Link to={`/${query}`}>
            <li
              className="px-2 hover:underline"
              onClick={(e) => {
                dispatch(addText(e.target.innerText));
              }}
            >
              Entertainment
            </li>
          </Link>
          <Link to={`/${query}`}>
            <li
              className="px-2 hover:underline"
              onClick={(e) => {
                dispatch(addText(e.target.innerText));
              }}
            >
              Sports
            </li>
          </Link>
        </ul>
      </div>

      <input
        className={`px-4 h-8 sm:mt-6 rounded-full sm:ml-16 outline-none mr-[350px] ml-4 sm:mr-0 ${
          themeName === "Dark"
            ? "bg-gray-200 text-black"
            : "bg-gray-100 text-black "
        }`}
        type="text"
        placeholder="Search"
      />

      <div>
        <button
          className={`sm:mt-6 sm:ml-4 px-6 py-1 font-semibold rounded-lg mt-4 mb-2 ml-6  ${
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
