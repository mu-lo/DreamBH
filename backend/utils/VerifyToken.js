const jwt = require('jsonwebtoken')

const VerifyToken = (req, res, next)=>{
  const token = req.cookies.access_token
  if(!token){res.status(401).json("You are not authenicated")}

  jwt.verify(token, process.env.SECRET_KEY, (err, user)=>{
    if(err) res.status(402).json('Your Token in invalid')
    req.user = user
  })
  next()
}

module.exports={ VerifyToken, }