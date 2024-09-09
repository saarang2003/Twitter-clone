import React, { useState } from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import axios from "axios";
import Toast, { toast } from "react-hot-toast";
import { TWEET_API_END_POINT } from "../utils/constant.js";
import { useDispatch, useSelector } from "react-redux";
import { getRefresh } from "../redux/TweetSlice.js";

const CreateTweet = () => {
  const [description, setDescription] = useState("");
  const {user} = useSelector((store) => store.user);
  const dispatch = useDispatch();


  const submitHandler = async () => {
    try {
      const res = await axios.post(
        `${TWEET_API_END_POINT}/create`,
        { description, id: user?._id },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        dispatch(getRefresh());

      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setDescription("");
  };

  return (
    <div className="w-[100%]">
      <div>
        <div className="flex justify-evenly items-center border-b border-gray-200">
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
            <h1 className="font-semibold text-gray-600 text-lg">For You</h1>
          </div>
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
            <h1 className="font-semibold text-gray-600 text-lg">Following</h1>
          </div>
        </div>

        <div className="m-4">
          <div className="flex items-center">
            <div>
              <Avatar
                src="https://yt3.googleusercontent.com/ytc/AIdro_nHPtcYJhXXvNbaweojFDGidh9Hm6SJdHjGLmBuDUusX_U=s160-c-k-c0x00ffffff-no-rj"
                size="40"
                round={true}
              />
            </div>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full outline-none border-none text-lg ml-2"
              type="text"
              placeholder="What is happening"
            />
          </div>

          <div className="flex items-center justify-between py-4 border-b border-gray-300">
            <div>
              <CiImageOn />
            </div>
            <button
              onClick={submitHandler}
              className="bg-[#1d9bfd] px-4 py-1 text-lg text-white text-center border-none rounded-full"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
