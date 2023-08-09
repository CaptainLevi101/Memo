import PostMessage from "../models/postMessage.js";
export const getPosts=async (req,res)=>{
    try{
      const postMessages=await PostMessage.find(); //find me all post message 
      console.log(postMessages);
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
           res.PostMessage({'error': error});
    }
    
}