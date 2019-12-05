var express=require("express");
var fs=require("fs");
var path=require("path");
var route=express.Router();
var config=require('../../config');

route.post("/apply", function(request,response){
    fs.readFile("server/data/data.json","utf8",function(err,data){
       if(err)
       {
          console.log(err);
          response.sendStatus(500);
       }
       else
          {
              let application=request.body;
              let applications= JSON.parse(data);
              applications.push(application);

              fs.writeFile("server/data/data.json",JSON.stringify(applications),function(err){
                 if(err)
                    response.sendStatus(500);
                 else
                    response.redirect("/home");
              })
          }
    });
})


route.get("/applications",function(request,response){
   fs.readFile("server/data/data.json","utf8",function(err,data){
        if(err)
          response.sendStatus(500);
         else{
      let arraydata=  JSON.parse(data);
           response.render("applications",{applications:arraydata});
         }



   });

});

module.exports=route;