// const express=require("express")
// const app=express()
// app.get("/",(req,res)=>{
//     res.send("hell");
// })
// const server=app.listen(3000,()=>{
//     console.log("listening");
// })
// const io=require('socket.io')(server,{ 
//     pingTimeout:600000,
//     cors:{
//       origin:"http://localhost:3000" 
//     },
//   })
//   io.on("connection",(socket)=>{
//     console.log('connected to socket.io ');
//   })  
//comment------------------------------------------------
// const express=require("express")
// const app=express()
// const server=app.listen(8080, () =>     
//   console.log('listening'), 
// );
// const io=require('socket.io')(server,{
//   pingTimeout:60000,
//   cors:{
//     origin:"http://localhost:3000"
//   },
// })
// io.on("connection",(socket)=>{
//   console.log('connected to socket.io connected ');
// })
// server.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('message', (message) => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(4000, () => {
  console.log('Server listening on port 4000');
});

