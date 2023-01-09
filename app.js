const express= require("express");
const app = express(); 
const path = require("path");
const port = process.env.PORT||5000;
const static1 = path.join(__dirname,"./BINGO")
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(static1));



console.log("yes");
io.on('connection',socket=>{
    console.log(socket.id)
    socket.on("num", num=>{
        const data = {id:socket.id,num:num}
      //  console.log(num,socket.id);
        socket.broadcast.emit("data",data);
})
})  


 app.get("/",function(req,res){

    
      
    res.sendFile(static1+"/index.html");
});

app.get("/player1",(req,res)=>
{
    res.sendFile(static1+"/jks.html");
    
})
app.post("/player1",async(req,res)=>
{       
    

    res.sendFile(static1+"/jks.html");  
})

 app.get("/player2",function(req,res){
      
     res.sendFile(static1+"/jks.html");
//      
 });
 app.post("/player2",(req,res)=>
{       
    res.sendFile(static1+"/jks.html");  
})

http.listen(port, function(){
    console.log("Server is up");
})