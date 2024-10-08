import React, { useState } from 'react';
import axios from 'axios';
import { USER_API_END_POINT } from '../utils/constant';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from '../redux/userSlice';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // login
      try {
        const res = await axios.post(`${USER_API_END_POINT}/login`, { username, email, password }, {
          headers: {
            'Content-Type': "application/json"
          },
          withCredentials: true
        }); 
        dispatch(getUser(res?.data?.user));  
        if(res.data.success){
          toast.success(res.data.message);
          navigate("/");
          console.log(res)
        }
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
    } else {
      // signup
      try {
        const res = await axios.post(`${USER_API_END_POINT}/register`, { name, username, email, password }, {
          headers: {
            'Content-Type': "application/json"
          },
          withCredentials: true
        }); 
        if(res.data.success){
          toast.success(res.data.message);
          console.log(res)
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex items-center'>
        <div>
          <img
            className="ml-5"
            width={"180px"}
            src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?ga=GA1.1.2028247665.1720885063&semt=ais_hybrid"
            alt="twitter-logo"
          />
        </div>

        <div>
          <div className='my-5'>
            <h1 className='font-bold text-5xl'>Happening Now</h1>
          </div>
          <h1 className='mt-4 mb-2 text-2xl font-bold'>{isLogin ? 'Login' : 'Sign Up'}</h1>
          <form onSubmit={submitHandler} className='flex flex-col'>
            {!isLogin && (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Name'
                className='outline-blue-500 border border-gray-800 py-2 px-1 rounded-full my-1 font-semibold'
              />
            )}
            <input
              type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username'
                className='outline-blue-500 border border-gray-800 py-2 px-1 rounded-full my-1 font-semibold'
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              className='outline-blue-500 border border-gray-800 py-2 px-1 rounded-full my-1 font-semibold'
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              className='outline-blue-500 border border-gray-800 py-2 px-1 rounded-full my-1 font-semibold'
            />
            <button className='bg-[#1d9bf0] border-none py-2 my-4 rounded-full text-lg hover:bg-slate-400 text-white'>
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <h1>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span
              className='text-blue-500 cursor-pointer ml-1'
              onClick={toggleLogin}
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
