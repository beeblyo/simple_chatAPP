const express = require("express");
// The path module https://nodejs.dev/learn/the-nodejs-path-module
const path = require("path");
const publicPath = path.join(__dirname, '/../public');
// process.env.PORT 프로세스 환경에 포트가 지정되있을 경우.
const PORT = process.env.PORT || 3000
// web socket 을 사용하기 위한 http 모듈 incorporate. 
const http = require('http');
const socketIO = require("socket.io");


let app = express();
// socket.io 를 사용하기 위한 server 구축. createServer()는 argument 로 app을 받는다.
let server = http.createServer(app);
let io = socketIO(server);

// listening from front => index.html => let socket = io();
io.on("connection",(socket)=>{
  console.log("A new user is just connected");
  
  // created custom event-listening
  socket.on("createMessage",(message)=>{
    console.log("createMessage", message);
  })

  // got custom event-listening from client AND send message to client.
  socket.emit("newMessage",{
    from: "server",
    text: "yo whats up?"
  })


  socket.on("disconnect",()=>{
    console.log('user is disconnected');
  })
  
});

// public 폴더 아래 index.html 을 서비스.
app.use(express.static(publicPath));


server.listen(PORT,()=>{
  console.log(`server is started at port on ${PORT}!`);
})
