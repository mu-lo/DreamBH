const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require("../model/user");

//creat user account
const RegisterUser = async(req, res)=>{

  try{
    console.log(req.body)  
    const salt = bcrypt.genSaltSync(10);
    const HashPassword = bcrypt.hashSync(req.body.Password, salt)
    const NewUser = await User.create({
    Name: req.body.Name,
    Username: req.body.Username,
    Password: HashPassword,
    Email: req.body.Email, 
    Phone: req.body.Phone
  })

  res.status(200).json({NewUser});
 }catch{

 }
}

//Authenication and Login
const Login = async(req, res)=>{

  try{
     const user = await User.findOne({Email:req.body.Email})
     console.log(user)
     if(!user){return res.status(500).json("user not found")}

     const Auth =  await bcrypt.compare(req.body.Password, user.Password)
     if(!Auth){return res.status(500).json("incorrect password")} 

     //Generating a token
     const Token = jwt.sign({id:user._id, isAdmin: user.isAdmin}, process.env.SECRET_KEY)

     const {Password, ...Others} = user._doc;
     res.cookie("access_token", Token,{
      httpOnly:true,
     }).status(200).json({...Others})

}catch(err){
  console.log(err)
}
}

const LogOut = async(req, res)=>{
  
}


module.exports={
    RegisterUser,
    Login,
    LogOut,
}