var express= require("express");
var path=require("path");
var bodyParser= require("body-parser");
var app= express();
var form=require("./server/routes/form");

app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname,"public/styles/")));
app.use(express.static(path.join(__dirname,"public/scripts/")));
app.use(express.static(path.join(__dirname,"node_modules/bootstrap/dist/")));

app.use("/form",form);

app.get("/",function(request,response){
    response.send("First NODE JS APP");
})

app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,"public/statichtml/index.html"));
})

app.listen("4040",function(){
    console.log("Server Started at 4040");
})