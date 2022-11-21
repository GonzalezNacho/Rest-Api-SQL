const http = require("http");
const app = require("./app");
const { connectDb } = require("./utils/db")

const server = http.createServer(app);

connectDb()

server.listen(8000, () => {
  console.log("server running");
});
