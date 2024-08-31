import React from "react";
import { CiHome } from "react-icons/ci";
import { FaHashtag } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { CiBookmark } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const LeftSidebar = () => {
  return (
    <div className ='w-[20%]'>
      <div>
        <div>
          <img
            className="ml-3"
            width={"40px"}
            src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?ga=GA1.1.2028247665.1720885063&semt=ais_hybrid"
            alt="twitter-logo"
          />
        </div>

        <div>
          <div>
            <div className="flex items-center py-2 px-4 hover:bg-gray-200 rounded-full hover:cursor-pointer">
              <CiHome className="flex items-center my-2 " />
              <h1 className="font-bold ml-2">Home </h1>
            </div>
          </div>

          <div>
            <div className="flex items-center py-2 px-4 hover:bg-gray-200 rounded-full hover:cursor-pointer ">
              <FaHashtag className="flex items-center my-2" />{" "}
              <h1 className="font-bold ml-2">Explore </h1>
            </div>
          </div>

          <div>
            <div className="flex items-center py-2 px-4 hover:bg-gray-200 rounded-full hover:cursor-pointer ">
              <CiBellOn className="flex items-center my-2 " />{" "}
              <h1 className="font-bold ml-2">Notification </h1>
            </div>
          </div>

          <div>
            <div className="flex items-center py-2 px-4 hover:bg-gray-200 rounded-full hover:cursor-pointer ">
              <RxAvatar className="flex items-center my-2 " />{" "}
              <h1 className="font-bold ml-2">Profile </h1>
            </div>
          </div>

          <div>
            <div className="flex items-center py-2 px-4 hover:bg-gray-200 rounded-full hover:cursor-pointer ">
              <CiBookmark className="flex items-center my-2 " />{" "}
              <h1 className="font-bold ml-2">Bookmarks </h1>
            </div>
          </div>

          <div>
            <div className="flex items-center py-2 px-4 hover:bg-gray-200 rounded-full hover:cursor-pointer ">
              <CiLogout className="flex items-center my-2 " />{" "}
              <h1 className="font-bold ml-2">Logout </h1>
            </div>
          </div>

          <button className="px-4 py-2 border-none text-md bg-[#1D9Bf0] w-full rounded-full text-white font-bold">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
