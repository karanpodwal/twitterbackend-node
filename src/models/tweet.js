import { ObjectId } from "bson";
import mongoose from "mongoose";



const tweetSchmea = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    likes:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Like"
            
        }
    ],
    noqfRetweets:{
      type:String
    },
    Comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    image:{
        type: String
    }
})


const Tweet = mongoose.model("Tweet", tweetSchmea);

export default Tweet;