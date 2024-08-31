import React from 'react'
import CreateTweet from './CreateTweet'
import Tweet from './Tweet'

const Feed = () => {
  return (
    <div className ='w-[50%] border border-gray-200' >
      <div>
      <CreateTweet/>
      <Tweet/>
      <Tweet/>
      <Tweet/>
      <Tweet/>
      </div>
    </div>
  )
}

export default Feed