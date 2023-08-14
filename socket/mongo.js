// const express = require("express");
// const app = express();
// const cors = require("cors");
// // To connect with your mongoDB database
// const mongoose = require("mongoose");
// // Connecting to database
// mongoose.connect("mongodb://localhost:27017/E-comes", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// console.log("App listen at port 5000");
const mongoose = require('mongoose');

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://0.0.0.0:27017/nodeJs', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Listen for connection events
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});



const playlistSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:String,
  active:Boolean,
  date:{
    type:Date,
    default:Date.Now
  },
  author:String,
  phone:Number,

});
const Playlist=new mongoose.model("Playlist",playlistSchema);
const CreateDocument =async ()=>{
  try{
    const ReactPlaylist=new Playlist({
      name:"Zahid mehmood",
      email:"Zahid@@mail",
      active:true,
      author:"Malik ",
      phone:"02111615941",
    })
    const MongoPlaylist=new Playlist({
      name:"Mongo pLAYLIST",
      email:"Mongo@@mail",
      active:true,
      author:"mongoose ",
      phone:"02111615941",
    })
    const jsPlaylist=new Playlist({
      name:"js pLAYLIST",
      email:"js@@mail",
      active:true,
      author:"mongoose ",
      phone:"02111615941",
    })
    const expressPlaylist=new Playlist({
      name:"express pLAYLIST",
      email:"express@@mail",
      active:true,
      author:"mongoose ",
      phone:"02111615941",
    })
   const result=await Playlist.insertMany([expressPlaylist,jsPlaylist,MongoPlaylist,ReactPlaylist]);
   console.log(result);
  }catch(error){
    console.log(error);
  }

}

// CreateDocument();
const getDocument=async()=>{
 const result=await Playlist.find({email:"Zahid@mai"});
 console.log(result);
}

getDocument();