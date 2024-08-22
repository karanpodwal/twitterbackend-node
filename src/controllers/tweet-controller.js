
import TweetService from '../services/tweet-service.js'

import upload from '../config/file-upload.js';

const tweetService = new TweetService();
const singleUploader = upload.single('image');

export const createTweet = async (req,res)=>{
    try{

        singleUploader(req,res,async function(err,data){
            if(err){
                 console.log(err)
            }
            console.log(req.file);
            const payload = {...req.body};
            payload.image = req.file.location;
            const response = await tweetService.create(payload);
            return res.status(201).json({
                success:true,
                message:'successfully create a tweet',
                data:response,
                err:{}
            });
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:'Error creating a tweet',
            data:{},
            err:error
        });
    }
}


export const getTweet = async (req,res)=>{
    try{

        const id = req.params.id;
        const response = await tweetService.getTweet(id);

        return res.status(201).json({
            success:true,
            message:'successfully fectched a tweet',
            data:response,
            err:{}
        });
    }catch(error){
        return res.status(500).json({
            success:false,
            message:'Error Encountered in getting tweet',
            data:{},
            err:error
        });
    }
}