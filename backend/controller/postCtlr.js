const Post = require("../model/post");
const cloudinary = require("../utils/Cloudinary");


const CreatePost = async(req, res)=>{
    console.log(req.body);

    const {Name, Description, Location, Contact, Image, user_id} = req.body

     const result = await cloudinary.uploader.upload(Image, {
      folder: 'posts',
     })
       console.log(result)

    try{  
       const NewUser = await Post.create({
        Name: Name,
        Description: Description,
        Location: Location,
        Contact: Contact,
        Image: result.url,
        user_id: user_id
       });
       res.status(200).json({NewUser});

    }catch(error){
       console.log(error)
    }
   
    
  }
  
  const GettingAllPosts = async(req, res)=>{
      await Post.find({}).then(
        posts => res.json(posts)
      )
    
  }
  
  module.exports={
      CreatePost,
      GettingAllPosts
  }