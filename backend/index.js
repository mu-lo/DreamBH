const express = require("express")
const app = express()
const router = require("./routes/Routes")
const {ConnectDB} = require('./db')
const cors = require("cors")
const cookieParser = require('cookie-parser')

// middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())

//setting up the environment
require("dotenv").config();

//routes
app.use("/api/v1", router)


//initializing app
const start = () =>{
    try{
         ConnectDB(process.env.MONGO_DB, console.log('database is connected'))
         app.listen(process.env.PORT, console.log("app is running"))
    }catch(err){
        console.log(err);
    }
}

start()