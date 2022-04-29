// io() : socket.io.js 라이브러리 안의 method. 연결을 시도하고 keep that alive, and 백엔드로 request를 전송한다.
let socket = io();
    
socket.on("connect",()=>{
  console.log('connected on server');
  
  // first parameter have to be same word on server side which made custom event.
  // so .emit is, sending message to server.
  socket.emit('createMessage',{
    from: "beebly",
    text: "hey guys!"
  })

  socket.on("newMessage",function(message){
    console.log("newMessage", message);
  })

})




socket.on("disconnect",()=>{
  console.log('disconnected from server');
})
