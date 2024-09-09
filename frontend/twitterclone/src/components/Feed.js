import React from 'react'
import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { useSelector } from 'react-redux'


const Feed = () => {
  const {tweets} = useSelector(store => store.tweet)
  return (
    <div className ='w-[50%] border border-gray-200' >
      <div>
      <CreateTweet/>
      {
        tweets?.map((tweet) =><Tweet key={tweet?._id} tweet={tweet}/>)
      }
      </div>
    </div>
  )
}

export default Feed