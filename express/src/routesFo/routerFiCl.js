    const express=require('express');
const empModel=require('../model/clModelFi');
var routerCl=express.Router();
var ObjectId=require('mongoose').Types.ObjectId;
const mongoose=require("mongoose")

routerCl.get('/',function(req,res){
    res.header("access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    empModel.find()
    .then(function(employees){
        res.send(employees)
    })
})

routerCl.post('/', (req, res) => {  //add one employee detail      //  meanstack youtube routing
    var emp = new empModel({
        standard:req.body.standard,
        division:req.body.division,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

routerCl.put('/:id',(req,res) => {
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id: ${req.params.id}`)
    var employee5={
        standard:req.body.standard,
        division:req.body.division,
}
empModel.findByIdAndUpdate(req.params.id, {$set:employee5}, {new:true}, (err,doc)=>{
    if(!err) { res.send(doc) }
    else { console.log('Error in employee update:'+ JSON.stringify(err,undefined, 2)) }
})
})

routerCl.delete('/:id', (req, res) => {  //delete
    if (!ObjectId.isValid(req.params.id))        //if the object is invalid !
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    empModel.findByIdAndRemove(req.params.id, (err, doc) => {
        //EmployeeData.deleteOne(req.params.id, (err, doc) => {   //shell command is different from nodejs command
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports=routerCl;