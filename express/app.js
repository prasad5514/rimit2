// const express =require('express');
// const ProductData=require('./src/model/Productdata');
// const cors=require("cors");  //cross origin resource sharing 
// var bodyparser=require('body-parser');
// var app=new express;
// const port=3000;
// app.use(cors());  //resource sharing will  occure,consolidating two port
// app.use(bodyparser.json())

// //var app=new express;//const app=new express();
// var router=require("./src/routesFo/routerFi");
// app.use('/',router);
// //app.use(cors({ origin: 'http://localhost:4200' }));

//     app.listen(3000,function(){
//         console.log("listening to portt:"+port);
//     })

const express =require('express');
// const EmployeeData=require('./src/model/empModelFi');
const cors=require("cors");
var bodyparser=require('body-parser');
var app=new express;
const port=3000;
app.use(cors());
app.use(bodyparser.json())

// var router=require("./src/routesFo/routerFi");
var routerSt=require("./src/routesFo/routerFiSt");
var routerTe=require("./src/routesFo/routerFiTe");
var routerCl=require("./src/routesFo/routerFiCl");
//const { db } = require('./src/model/employeedataFi');
app.use(cors({origin:"http://localhost:4200"}));

app.listen(3000,function(){
    console.log('listening to portt:'+port);
})
// app.use('/employees',router);
app.use('/student',routerSt);
app.use('/teacher',routerTe);
app.use('/class',routerCl);
//db.empcols.insertMany([{"userName":"pra","email":"pra@gmail.com"},{"userName":"nith","email":"nith@gmail.com"}])

//db.empcols.insertMany([{"userName":"ter","email":"ter@gmail.com","phone":"dd33","gender":"ff","age":28},{"userName":"ter2","email":"ter2@gmail.com","phone":"dd3r3","gender":"frf","age":"29"}])