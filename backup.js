
var fs=require("fs");
var temp=require("./second");

fs.readFile("package.json","utf8",function(err,data){
    if(err)
       console.log("error in reading file");
    else
       console.log(data);
})

console.log(temp.appname);
console.log(temp.namearray);
console.log(temp.funny());

console.log("Code After File Read...!!!!");