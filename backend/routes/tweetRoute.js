import express from "express";
import {Login, Register, logout} from "../controllers/userController.js";
import { createTweet, deleteTweet, getAllTweets, getFollowingTweets, likeOrDislike} from "../controllers/tweetController.js";
import isAuthenticated from "../config/auth.js"

const router = express.Router();

router.route("/create").post(isAuthenticated,createTweet);
router.route("/delete/:id").delete(isAuthenticated,deleteTweet);
router.route('/like/:id').put(isAuthenticated,likeOrDislike);
router.route('/getAllTweets/:id').get(isAuthenticated,getAllTweets);
router.route('/getFollowingTweet/:id').get(isAuthenticated,getFollowingTweets);


export default router;

