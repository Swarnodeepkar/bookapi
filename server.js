const express= require("express")
const app= express();
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/Books",{useNewUrlParser:true}); //important

const db = mongoose.connection; //connection to db
db.on("error",(error)=>console.log(error));
db.on("open",()=>console.log("Database Connected"));

const cors = require("cors") //calling cors origin
app.use(cors());
app.use(express.json()); //injecting json

const Bookapi= require("./api/bookapi");
app.use("/book",Bookapi);


app.listen(8000,() =>console.log("The server is live now...."));