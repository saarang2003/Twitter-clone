import { response } from "express";
import { Tweet } from "../models/tweetSchema.js";
import { User } from "../models/userSchema.js";

export const createTweet = async(req,res) =>{
    try {
        const {description , id} = req.body;
        if(!description || !id){
            return res.status(401).json({
                message : "Fields are required",
                success : false
            });
        };

        const {user} = await User.findById(id).select("-password");
        await Tweet.create({
            description,
            userId:id,
            userDetails : user
        })

        return res.status(201).json({
            message : "Tweet created successfully",
            success : true,
        })
    } catch (error) {
        console.log(error);
    }
}


export const likeOrDislike = async(req,res) =>{
    try {
        const loggedInUserId = req.body.id;
        const tweetId = req.params.id;

        const tweet = await Tweet.findById(tweetId);

        if(tweet.like.includes(loggedInUserId)){
            await Tweet.findByIdAndUpdate(tweetId,{$pull :{like : loggedInUserId}});
            return res.status(200).json({
                message : "User disliked you tweet",
                success : true
            })

        }else{
            await Tweet.findByIdAndUpdate(tweetId , {$push :{like :loggedInUserId} });
            return res.status(200).json({
                message : "User liked you tweet",
                success : true
            })
        }


    } catch (error) {
        console.log(error);
    }
}




export const deleteTweet = async (req,res) =>{
    try {
        const {id} = req.params;
        await Tweet.findByIdAndDelete(id);
        
        return res.status(200).json({
            message : "Tweet deleted successfully",
            success : true
        })
    } catch (error) {
        console.log(error);
    }
}




export const getAllTweets = async (req, res) => {
    try {
        const id = req.params.id;
        const loggedInUser = await User.findById(id);
        if (!loggedInUser) {
            return res.status(404).json({
                message: "User not found",
                success: false
            });
        }

        const loggedInUserTweet = await Tweet.find({ userId: id });
        const followInUserTweet = await Promise.all(
            loggedInUser.following.map((otherUsersId) => {
                return Tweet.find({ userId: otherUsersId });
            })
        );

        const allTweets = loggedInUserTweet.concat(...followInUserTweet);

        return res.status(200).json({
            message: "Tweets fetched successfully",
            tweets: allTweets,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred",
            success: false
        });
    }
};

export const getFollowingTweets = async (req,res) =>{
    try {
        const id = req.params.id;
        const loggedInUser = await User.findById(id); 
        const followingUserTweet = await Promise.all(loggedInUser.following.map((otherUsersId)=>{
            return Tweet.find({userId:otherUsersId});
        }));
        return res.status(200).json({
            tweets:[].concat(...followingUserTweet)
        });
    } catch (error) {
        console.log(error);
    }
}
 