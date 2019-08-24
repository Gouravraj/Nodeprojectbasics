var mongoose=require('mongoose');

var nameSchema = new mongoose.Schema({
    email:String,
    number:Number,
    name:String,
    pass:String
    });
  
  module.exports=mongoose.model("GouravDB",nameSchema);
