const mongoose=require("mongoose");
//mongoose.connect('mongodb://localhost:27017/EmployeeDb');
mongoose.connect('mongodb://localhost/RimitDb', {useNewUrlParser: true, useUnifiedTopology: true});

const Schema=mongoose.Schema;
var NewEmployeeSchema=new Schema({
    // Name:String,
    // email:String,
    standard:Number,
    // gender:String,
    division:String
});

// var stModel2=mongoose.model("empCol",NewEmployeeSchema);
var clModel2=mongoose.model("clCol",NewEmployeeSchema);
module.exports=clModel2;