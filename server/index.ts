const http = require("http");
const App = require("./app")
const server = http.createServer(App);
const dotenv = require("dotenv");

dotenv.config();

const port : Number = parseInt(`${process.env.PORT}`) || parseInt(`${process.env.API_PORT}`) || 4000;

server.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
});