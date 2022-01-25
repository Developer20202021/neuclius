const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


    mongoose.connect("mongodb://c6h6ch3h:5UhlT5fyPiIT0y6R@cluster0-shard-00-00.l9s4l.mongodb.net:27017,cluster0-shard-00-01.l9s4l.mongodb.net:27017,cluster0-shard-00-02.l9s4l.mongodb.net:27017/solder?ssl=true&replicaSet=atlas-rb992z-shard-0&authSource=admin&retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    
    )
.then(()=>{

    console.log("connection successful");
})
.catch(err=>{

    console.log(err);
})
















app.listen(5000,()=>{


    console.log("Server is running");
})
