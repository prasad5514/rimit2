const mongoose=require("mongoose");

// mongoose.connect('mongodb://localhost:27017/RimitDb');
mongoose.connect("mongodb://localhost:27017/RimitDb", { useNewUrlParser: true , useUnifiedTopology: true });





const Schema=mongoose.Schema;
var NewEmployeeSchema=new Schema({
    Name:String,
    email:String,
    rollNo:Number,
    gender:String,
    mobileNo:Number
});

// var stModel2=mongoose.model("empCol",NewEmployeeSchema);
var stModel2=mongoose.model("stCol",NewEmployeeSchema);
module.exports=stModel2;