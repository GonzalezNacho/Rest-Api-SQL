const { v4: uuidv4 } = require("uuid");
let Movies = [
  {
      "id":"1",
      "title":"Alien",
      "director":"James Cameron",
      "year":1986,
      "rating":8.5,
      "genres":"Ciencia ficción"
  },
  {
      "id":"2",
      "title":"The Dark Knight",
      "director":"Cristopher Nolan",
      "year":2008,
      "rating":9,
      "genres":"Acción"
  },
  {
      "id":"3",
      "title":"Pulp Fiction",
      "director":"Quentin Tarantino",
      "year":1994,
      "rating":8.6,
      "genres":["Crimen", "Drama"]
  },
  {
      "id":"4",
      "title":"Schindler's List",
      "director":"Steven Spielberg",
      "year":1993,
      "rating":9.4,
      "genres":["Belico","Drama"]
  },
  {
      "id":"5",
      "title":"Life Is Beautiful",
      "director":"Roberto Benigni",
      "year":1997,
      "rating":8.9,
      "genres":["Belico","Drama"]
  },
  {
      "id":"6",
      "title":"Inception",
      "director":"Christopher Nolan",
      "year":2010,
      "rating":8.4,
      "genres":["Acción","Ciencia ficción"]
  },
  {
      "id":"7",
      "title":"Avengers: Endgame",
      "director":"Anthony Russo, Joe Russo",
      "year":2019,
      "rating":7.3,
      "genres":["Acción","Ciencia ficción"]
  },
  {
      "id":"8",
      "title":"Scarface",
      "director":"Oliver Stone",
      "year":1983,
      "rating":8.6,
      "genres":["Crimen","Drama"]
  },
  {
      "id":"9",
      "title":"Star Wars Episode IV - A New Hope",
      "director":"George Lucas",
      "year":1977,
      "rating":7.9,
      "genres":"Ciencia ficción"
  },
  {
      "id":"10",
      "title":"The Godfather",
      "director":"Francis Ford Coppola",
      "year": 1972,
      "rating": 9.2,
      "genres":["Crimen","Drama"]
  }
];

const getAll = (query) => { 
  let resultado = Movies;
  
  if(query.title){
    resultado = resultado.filter (e => e.title === query.title)
  }

  if(query.genres){
    resultado = resultado.filter (e => e.genres.includes(query.genres))
  }
  
  if(query.search){
    resultado = resultado.filter(e => e.title.includes(resultado.search) || e.genres.includes(resultado.search) || e.director.includes(resultado.search))
  }

  return resultado };

const getAllAlphabetically = () => { return Movies.sort((a, b) => a.title.localeCompare(b.title)) };

const getDestacados = () => { return Movies.sort((a, b) => a.rating - b.rating).reverse().slice(0,4) };

const getOne = (id) => { return Movies.find((registro) => registro.id == id);}

const save = (body) => { 
  const data = {id: uuidv4(), ...body};
  Movies.push(data);
  return data;
}

const borrar = (id) => {
  const index = Movies.findIndex((registro) => registro.id == id);
  if (index > 0) {
    Movies.splice(index, 1);
    return true
  }
  return false
}

const update = (id,req) => {
  const index = Movies.findIndex((registro) => registro.id == id);
  if (index >= 0) {
    Movies[index] = req;
    return true
  } 
  return false
}

module.exports = { getAll, getAllAlphabetically,getDestacados, getOne, save, borrar, update};
