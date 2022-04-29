// io() : socket.io.js 라이브러리 안의 method. 연결을 시도하고 keep that alive, and 백엔드로 request를 전송한다.
let socket = io();
    
socket.on("connect",()=>{
  console.log('connected on server');
})
socket.on("disconnect",()=>{
  console.log('disconnected from server');
})
