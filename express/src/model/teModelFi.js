const mongoose=require("mongoose");
//mongoose.connect('mongodb://localhost:27017/EmployeeDb');
mongoose.connect('mongodb://localhost/RimitDb', {useNewUrlParser: true, useUnifiedTopology: true});

const Schema=mongoose.Schema;
var NewEmployeeSchema=new Schema({
    Name:String,
    email:String,
    employeeId:Number,
    gender:String,
    subject:String
});

// var stModel2=mongoose.model("empCol",NewEmployeeSchema);
var teModel2=mongoose.model("teCol",NewEmployeeSchema);
module.exports=teModel2;