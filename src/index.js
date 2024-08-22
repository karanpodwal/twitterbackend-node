import express from 'express';
import {connect} from './config/database.js';
import router from './routes/index.js';
// import TweetRepository from './repository/tweet-repository.js'
import bodyParser from 'body-parser';
import passport from 'passport';
import { passportAuth } from './middlewares/jwt-middleware.js';
const app = express();



//middlwares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
passportAuth(passport);

app.use("/api",router);

app.listen(3000,async()=>{
    console.log('Server started on port 3000');
    // Connect to MongoDB database
    connect();
    console.log("mogodb connection established")

    // Tweet.create({
    //     content:"This is my first tweet",
    //     likes:10,
    //     noqfRetweets:5,
    //     Comment:"This is my first comment"
    // })

    // Hashtag.create({
    //     text:"travel",
    //     tweets:['66c57d5136be0d778c3330f3']
    // })

    // const tweetRepo = new TweetRepository();

    // let tweets = await tweetRepo.getAllTweets();

    // console.log(tweets);
})

