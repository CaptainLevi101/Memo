import express from 'express';
import {getPosts,createPosts} from'../controllers/postController.js';
const router=express.Router();
router.post('/',createPosts);
router.get('/',getPosts);
export default router;