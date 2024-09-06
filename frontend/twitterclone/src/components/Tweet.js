import React from 'react';
import Avatar from 'react-avatar';
import { CiHeart } from "react-icons/ci";
import { FaRetweet } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";


const Tweet = ({tweet}) => {
  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex">
        <Avatar
          src="https://yt3.googleusercontent.com/ytc/AIdro_nHPtcYJhXXvNbaweojFDGidh9Hm6SJdHjGLmBuDUusX_U=s160-c-k-c0x00ffffff-no-rj"
          size="40"
          round={true}
        />
        <div className="ml-3 w-full">
          <div className="flex items-center">
            <h1 className="font-bold">{tweet?.userDetails[0].name}</h1>
            <p className="text-gray-500 text-sm ml-2">{`@tweet?.userDetails[0].username`}</p>
          </div>
          <p className="mt-1">{tweet?.description}</p>
        </div>
      </div>
      <div className='flex justify-between items-center my-2'>
            <div className='flex items-center'>
                <div className='p-2 hover:bg-green-100 rounded-full cursor-pointer'>
                <CiHeart size={'20px'}/>
                </div>
                <p className='ml-1'>{tweet?.like.length}</p>
            </div>
            <div className='flex items-center'>
                <div className='p-2 hover:bg-green-100 rounded-full cursor-pointer' >
                <FaRetweet  size={'20px'}/>
                </div>
                <p className='ml-1' >0</p>
            </div>
            <div className='flex items-center' >
                <div className='p-2 hover:bg-green-100 rounded-full cursor-pointer' >
                <CiBookmark  size={'20px'}/>
                </div>     
                <p className='ml-1' >0</p>
            </div>
        </div> 
    </div>
  );
}

export default Tweet;
