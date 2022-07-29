const express=require("express");
const app=express();
const bodyparser=require("body-parser");



app.use(bodyparser.urlencoded({extended:false}));

app.get("/",function(req,resp){
    resp.sendFile("public/index.html",{root:__dirname})
})

app.get("/submit_data",function(req,resp){
     var n1=req.query.a;
     var n2=req.query.b;
     
     if(n1=="admin" && n2=="admin"){
            resp.send("You are succesfully logined");
     }
     else{
        resp.redirect('/') ;
     }
     
   
})

app.listen(3000);
console.log("server started");