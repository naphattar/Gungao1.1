const http = require("http");
const App = require("./app")
const server = http.createServer(App);
const dotenv = require("dotenv");
const {Server} = require("socket.io");

dotenv.config();

const port : Number = parseInt(`${process.env.PORT}`) || parseInt(`${process.env.API_PORT}`);

// Initialize Socket.io for chat app

const socketio = new Server (server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET","POST"]
    }
});

socketio.on("connection",(socket: { id: any; on: (arg0: string, arg1: () => void) => void; }) =>{
    console.log(`${socket.id} user just connected`);
    socket.on("disconnect",()=>{
        console.log("User is disconnected");
    })
})

server.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
});