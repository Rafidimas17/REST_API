require('dotenv').config()
const express = require("express")
const app=express()
const bodyParser=require('body-parser')
const UserRoute=require("./routes/User.js")
const mongoose =require("mongoose")
const cors=require("cors")


mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
})
.then(res=>{
  console.log('Database terhubung')
})
.catch(e=>{
  console.log("Database error")
})
app.use(cors())
app.use(bodyParser.json())
app.use('/',UserRoute)

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server running port ${process.env.PORT}`);
});