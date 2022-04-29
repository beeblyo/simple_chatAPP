"use strict"
const socket = io();

socket.emit("chatting","from front");

// 서버에서 보낸 메세지를 받음
