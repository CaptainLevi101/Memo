import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";
export const getPosts=async (req,res)=>{
    try{
      const postMessages=await PostMessage.find(); //find me all post message 
    //  console.log(postMessages);
      return res.status(200).json(postMessages);
    }
    catch(error){
       res.status(404).json({'error': error});
    }
}
export const createPosts=async (req,res)=>{
    const post=req.body;
   
    const newPost=new PostMessage(post);
   
    try{
       await newPost.save();
       return res.status(200).json(newPost);
    }
    catch(error){
      
          return res.status(404).json({'error': error});
    }
    
}
export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  // Check if the provided _id is a valid ObjectId
  if (!mongoose.isValidObjectId(_id)) {
      return res.status(400).json({ error: 'Invalid ObjectId' });
  }

  try {
      // Corrected method name: findByIdAndUpdate
      const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });

      if (!updatedPost) {
          return res.status(404).json({ error: 'Post not found' });
      }

      res.json(updatedPost);
  } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the post.' });
  }
};


export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.isValidObjectId(_id)) {
      return res.status(400).json({ error: 'Invalid ObjectId' });
  }

  
      await PostMessage.findByIdAndRemove(_id);
      console.log('delete');
      res.json({ message: 'Post deleted successfully' });
  
};
export const likePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.isValidObjectId(_id)) {
      return res.status(400).json({ error: 'Invalid ObjectId' });
  }

  try {
    
      const post=await PostMessage.findById(_id);
      const updatedPost=await PostMessage.findByIdAndUpdate(_id,{likeCount:post.likeCount+1},{new:true})
      // console.log(post);
      if (!post) {
          return res.status(404).json({ error: 'Post not found' });
      }
      res.json(updatedPost);
  } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the post.' });
  }
};