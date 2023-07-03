const jsonserver = require("json-server");
const cors = require("cors");
const server = jsonserver.create();

const router = jsonserver.router("db.json");
const middlewares = jsonserver.defaults();
const port = 3000;
server.use(cors())
server.use(jsonserver.bodyParser)
server.use(middlewares)
server.use(router)
server.listen(port,()=>{
    console.log("Connected to server")
})