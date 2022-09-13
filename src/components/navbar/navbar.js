import React from "react";
import Search from "./Search";
import youtube from "../../images/download.png";
import search from "../../images/search.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="bg-slate-100 shadow-md">
        <div class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
          <Link to="/">
            
            <img class="h-10" src={`https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/05/youtube-logo.png?auto=format&q=60&fit=max&w=930`} alt="" />
            
          </Link>
          
          <div class="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
            <Search></Search>
            <img class="inline h-4 cursor-pointer" src={search} alt="Search" />
          </div>
          <Link
            to="/videos/add"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            + Add Video
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
