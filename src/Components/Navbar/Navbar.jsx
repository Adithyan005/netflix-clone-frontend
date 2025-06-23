import React, { useState } from "react";
import name from "../../assets/name.png";
import { IoClose, IoOpen, IoSearchOutline } from "react-icons/io5";
import icon from "../../assets/icon.jpg";
import bell from "../../assets/bell.png";
import drop from "../../assets/drop.png";
import { IoMdMenu } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isprofiledrop, setisprofiledrop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoviedrop, setisMoviedrop] = useState(false);
  const [isMobileMovieDrop, setIsMobileMovieDrop] = useState(false);
  const navigate = useNavigate();

  const toggledrop = () => {
    setisprofiledrop(!isprofiledrop);
  };

  const togglemenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileMovieDrop = () => {
    setIsMobileMovieDrop(!isMobileMovieDrop);
  };

  const handlelogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="bg-transparent text-white font-stylish">
      <div className="md:flex md:justify-between md:items-center flex justify-between items-center me-3">
        <div className="px-2 md:flex md:justify-start md:items-center md:gap-6 md:ml-10">
          <img src={name} alt="" className="w-[20vw] md:w-24" />
          <div className="hidden md:flex md:gap-6 md:items-center">
            <a href="#">Home</a>
            <a href="#">TV Shows</a>
            <div
              className="hidden md:flex md:gap-1 md:items-center"
              onMouseEnter={() => setisMoviedrop(true)}
              onMouseLeave={() => setisMoviedrop(false)}
            >
              <a href="#">Movies</a>
              <img src={drop} alt="" className="w-3" />
              {isMoviedrop && (
                <div className="text-white flex flex-col absolute top-14 left-[28vw] bg-black rounded-md">
                  <a
                    href="/bk"
                    className="hover:bg-blue px-4  text-sm py-2 rounded-md"
                  >
                    Blockbuster
                  </a>
                  <a
                    href="/onlyflix"
                    className="hover:bg-blue text-sm px-4 py-2 rounded-md"
                  >
                    Only on Netflix
                  </a>
                </div>
              )}
            </div>
            <a href="#">New & Popular</a>
            <a href="#">My List</a>
            <a href="#">Browse by Languages</a>
          </div>
        </div>

        <div className="md:flex  md:justify-center md:items-center md:gap-5 md:mr-10 flex gap-3 justify-end items-center">
          <IoSearchOutline />
          <p>Children</p>
          <img src={bell} alt="" className="w-5 md:w-6" />
          <div
            className="flex justify-center items-center gap-1 relative"
            onMouseEnter={() => setisprofiledrop(true)}
            onMouseLeave={() => setisprofiledrop(false)}
          >
            <img
              src={icon}
              alt=""
              className="w-7 md:w-8 rounded-md md:rounded-md"
            />
            <img src={drop} alt="" className="w-3 md:w-4" />
            {isprofiledrop && (
              <div className="md:flex md:flex-col md:absolute md:shadow-lg md:bg-black md:text-white md:rounded-md md:top-8 md:left-2 md:z-10 flex flex-col absolute shadow-lg rounded-md bg-black text-white top-8 ">
                <a
                  href=""
                  className="block hover:bg-blue text-sm px-2 py-1 rounded-md"
                >
                  Profile
                </a>
                <a
                  href=""
                  className="block hover:bg-blue text-sm px-2 py-1 rounded-md"
                >
                  Settings
                </a>
                <a
                  href=""
                  className="block hover:bg-blue text-sm px-2 py-1 rounded-md"
                  onClick={handlelogout}
                >
                  Logout
                </a>
              </div>
            )}
          </div>
          <div className="text-xl md:hidden">
            <IoMdMenu onClick={togglemenu}>
              {isMenuOpen ? <IoClose /> : <IoOpen />}
            </IoMdMenu>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-3 p-4 bg-black text-white justify-center ">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            TV Shows
          </a>

          <div>
      <div onClick={toggleMobileMovieDrop} className="flex items-center justify-start  hover:text-gray-400 cursor-pointer">
        <span>Movies</span>
        <img src={drop} alt="" className="w-3 ml-2" />
      </div>
      {isMobileMovieDrop && (
        <div className="flex flex-col gap-2 ml-4 mt-2">
          <a href="/bk" className="hover:bg-blue rounded-md py-2 px-2 text-sm">Blockbuster</a>
          <a href="/onlyflix" className="hover:bg-blue rounded-md py-2 px-2  text-sm">Only on Netflix</a>
        </div>
      )}
    </div>
          <a href="#" className="hover:text-gray-400">
            New & Popular
          </a>
          <a href="#" className="hover:text-gray-400">
            My List
          </a>
          <a href="#" className="hover:text-gray-400">
            Browse by Languages
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
