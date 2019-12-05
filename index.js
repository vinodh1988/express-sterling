var express= require("express");
var path=require("path");
var bodyParser= require("body-parser");
var app= express();
var form=require("./server/routes/form");
var student=require("./server/routes/student");

app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname,"public/styles/")));
app.use(express.static(path.join(__dirname,"public/scripts/")));
app.use(express.static(path.join(__dirname,"node_modules/bootstrap/dist/")));

app.set('view engine','pug')
app.set('views',path.join(__dirname,'public/templates'));

app.use("/form",form);
app.use("/student",student);

app.get("/",function(request,response){
    response.send("First NODE JS APP");
})

app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,"public/statichtml/index.html"));
})

app.listen("4040",function(){
    console.log("Server Started at 4040");
})