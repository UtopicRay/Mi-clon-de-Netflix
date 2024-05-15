import React from "react";
import logo from "../assets/logo.png";
import profile_img from "../assets/profile_img.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import caret_icon from "../assets/caret_icon.svg";
export default function Navbar() {
  return (
    <nav
      className="flex justify-between items-center p-5 z-10 fixed w-full bg-[linear-gradient(180deg,rbga(0,0,0,0.7) 10%,transparent)]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0,0,0,0.7) 10%,transparent)",
      }}
    >
      <div className="flex">
        <img src={logo} className="w-20" alt="logo de NexFlix"></img>
        <ul className="flex ml-10">
          <li className="mr-3 cursor-pointer">Home</li>
          <li className="mr-3 cursor-pointer">Tv Shows</li>
          <li className="mr-3 cursor-pointer">Movies</li>
          <li className="mr-3 cursor-pointer">New & Popular</li>
          <li className="mr-3 cursor-pointer">My List</li>
          <li>Browse by Langueges</li>
        </ul>
      </div>
      <div className="flex items-center gap-3 z-10">
        <img src={search_icon}></img>
        <p>Children</p>
        <img src={bell_icon} alt="" />
        <div className="flex z-1">
          <button
            id="dropdownAvatarNameButton"
            data-dropdown-toggle="dropdownAvatarName"
            className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0  dark:focus:ring-gray-700 dark:text-white"
            type="button"
          >
            <span className="sr-only">Open user menu</span>
            <img src={profile_img} alt="" />
            <p className="text-white mx-2">userName</p>
            <img src={caret_icon} alt="" />
          </button>
          <div
            id="dropdownAvatarName"
            className="z-10 hidden bg-gray-600  divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div className="truncate"> <a href="#" className="text-white hover:underline">Sing out</a></div>
            </div>
          </div>
          </div>
        </div>
    </nav>
  );
}
