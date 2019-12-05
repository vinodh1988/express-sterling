var studentcrud= require("../database/studentdao");

var route=require('express').Router();


route.get("/all",function(request,response){
    studentcrud.selectAll(function(err,data){
      if(err)
         response.sendStatus(500);
       else
         response.json(data);
    });
})

route.get("/all/:pattern",function(request,response){
    studentcrud.selectPattern(request.params.pattern,function(err,data){
        if(err)
        response.sendStatus(500);
      else
        response.json(data);
    });
})

module.exports=route;