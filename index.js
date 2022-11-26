const http = require("http");
const app = require("./app");
const { connectDb, sequelize } = require("./utils/db")

const server = http.createServer(app);

connectDb()

sequelize.sync().then(() => {
  console.log('\n\t\t\t\t\t\t******************\n\t\t\t\t\t\t* Tablas creadas *\n\t\t\t\t\t\t******************\n')
}).catch((error) => {
  console.log('error', error)
})

server.listen(8000, () => {
  console.log("server running");
});
