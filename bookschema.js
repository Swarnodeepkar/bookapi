//creating schema for bookapi
let mongoose = require("mongoose")

const Bookstructure = new mongoose.Schema({
    Title: { type: String, required: true },
    Author: { type: String, required: true },
    Summary: { type: String, required: true }

})


module.exports=mongoose.model("Books",Bookstructure);