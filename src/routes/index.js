import express from 'express';
import {createTweet,getTweet} from '../controllers/tweet-controller.js';


import {signUp,signIn} from '../controllers/user-controller.js'

import {toggleLike} from '../controllers/like-controller.js'

import { authenticate } from '../middlewares/authentication.js';

const router = express.Router();

router.post('/tweets',createTweet)
router.get('/gettweets/:id',getTweet)

router.post('/signUp',signUp)

router.post('/signIn',signIn)

router.post('/toggleLike/toggle',authenticate,toggleLike)



export default router;