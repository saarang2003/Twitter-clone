import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import tweetSlice from './TweetSlice'

const store = configureStore({
    reducer:{
        user : userSlice,
        tweet : tweetSlice

    }
})

export default store;