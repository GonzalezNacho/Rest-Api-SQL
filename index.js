const http = require("http");
const app = require("./app");
const {Movies} =require("./models")
const tableMovies = require("./utils/tables")
const { connectDb, sequelize } = require("./utils/db")

const server = http.createServer(app);

connectDb()

sequelize.sync().then(() => {
  console.log('\n\t\t\t\t\t\t******************\n\t\t\t\t\t\t* Tablas creadas *\n\t\t\t\t\t\t******************\n')
  for(elemt of tableMovies) {
    Movies.create(elemt).then(registro => {
      console.log('Información insertada:', registro.dataValues);
    })
    .catch(error => {
      console.error('Error al insertar información:', error);
    })
  };
}).catch((error) => {
  console.log('error', error)
})

server.listen(8000, () => {
  console.log("server running");
});
