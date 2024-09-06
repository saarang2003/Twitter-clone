import React from 'react'
import Avatar from 'react-avatar';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useGetProfile from '../hooks/useGetProfile';

const Profile = () => {
    const {user , profile } = useSelector(store => store.user);
    const {id} = useParams();
    useGetProfile(id);

  return (
    <div className='w-[50%] border-l border-r border-gray-200'>
        <div>
            <div className='flex items-center py-2'>
                <Link to={"/"} className='p-2 rounded-full hover:cursor-pointer hover:bg-gray-100'>
                <IoIosArrowRoundBack/>
                </Link>

                <div className='ml-2'>
                <h1 className='font-bold text-lg'>{profile?.name}</h1>
                <p className='text-gray-500 text-sm' >10 post</p>
                </div>
                
            </div>
            <img src="https://pbs.twimg.com/profile_banners/1712811854378987520/1723127433/1500x500" alt="banner" />

            <div className='absolute top-52 ml-2 border-4 border-white rounded-full  '>
                <Avatar src='https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg' size='120' round ={true}/>
            </div>
            <div className='text-right m-4 '>
                <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400 ' >Edit Profile</button>
            </div>

            <div className='m-4'>
                <h1 className='font-bold text-xl'>{profile?.name}</h1>
                <p>{`@${profile?.username}`}</p>
            </div>

            <div className='m-4 text-sm'>
                <p>I code |  Massive Doer  |  Former Resource Collector</p>
            </div>
        </div>
    </div>
  )
}

export default Profile