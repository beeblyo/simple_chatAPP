const express = require("express");
// The path module https://nodejs.dev/learn/the-nodejs-path-module
const path = require("path");
// web socket 을 사용하기 위한 http 모듈 incorporate. 
const http = require("http");
const app = express();
// app이 http를 통해 실행될 수 있도록 설정한 변수 server.
const server = http.createServer(app);
const socketIO = require("socket.io");
const io = socketIO(server)
// process.env.PORT 프로세스 환경에 포트가 지정되있을 경우.
const PORT = process.env.PORT || 3000;

// connection이 이루어지면 연결에 대한 모든 정보를 socket에 담는다.
io.on("connection",(socket)=>{
  console.log("connection is completed with web socket");
 
  socket.on("chatting",(data)=>{
    console.log("data is " + JSON.stringify(data));
    io.emit("chatting",`greeting client! ${data}`);
  })
})


// path.join() => 각 os 마다 다른 / 경로를 쓰고 있어서 사용
// src => src 폴더 아래 index.html 을 서비스.
app.use(express.static(path.join(__dirname, 'src')))


server.listen(PORT,()=>{
  console.log(`server is started at port on ${PORT}!`);
})
