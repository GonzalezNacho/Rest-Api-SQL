const { v4: uuidv4 } = require("uuid");
let Comments = [
  {
      "id":"1",
      "comment":"disfrutable",
      "rating": 6,
      "idMovie":"1"  
  },
  {
      "id":"2",
      "comment":"muy buena pelicula",
      "rating": 8.2,
      "idMovie":"1"  
  },
  {
      "id":"3",
      "comment":"esperaba mas de esta pelicula",
      "rating": 4,
      "idMovie":"2"  
  },
  {
      "id":"4",
      "comment":"totalmente decepcionado",
      "rating": 1,
      "idMovie":"2"  
  },
  {
      "id":"5",
      "comment":"Es la mejor pelicula que vi",
      "rating": 10,
      "idMovie":"3"  
  },
  {
      "id":"6",
      "comment":"pelicula pochoclera, es buena pero no me volo la cabeza",
      "rating": 7,
      "idMovie":"3"  
  },
  {
      "id":"7",
      "comment":"excelente el mensaje que transmite",
      "rating": 7.5,
      "idMovie":"4"  
  },
  {
      "id":"8",
      "comment":"una pieza clasica del cine",
      "rating": 9.1,
      "idMovie":"4"  
  },
  {
      "id":"9",
      "comment":"excelente para disfrutar en familia",
      "rating": 8.6,
      "idMovie":"5"  
  },
  {
      "id":"10",
      "comment":"maso maso",
      "rating": 5.5,
      "idMovie":"5"  
  },
  {
      "id":"11",
      "comment":"me sorprendio gratamente",
      "rating": 7.9,
      "idMovie":"6"  
  },
  {
      "id":"12",
      "comment":"muy buena trama",
      "rating": 7.5,
      "idMovie":"6"  
  },
  {
      "id":"13",
      "comment":"muy buena actuacion",
      "rating": 7.9,
      "idMovie":"7"  
  },
  {
      "id":"14",
      "comment":"me gusto mas la primera",
      "rating": 6.5,
      "idMovie":"7"  
  },
  {
      "id":"15",
      "comment":"malisimo el final",
      "rating": 3,
      "idMovie":"8"  
  },
  {
      "id":"16",
      "comment":"espero la continuacion de la historia con ansias",
      "rating": 8.2,
      "idMovie":"8"  
  },
  {
      "id":"17",
      "comment":"no se parece en nada al libro",
      "rating": 4.5,
      "idMovie":"9"  
  },
  {
      "id":"18",
      "comment":"toda peli de ciencia ficcion me encanta",
      "rating": 8.8,
      "idMovie":"9"  
  },
  {
      "id":"19",
      "comment":"muy buena la ambientacion de la epoca",
      "rating": 8.3,
      "idMovie":"10"  
  },
  {
      "id":"20",
      "comment":"rescato la actuacion del personaje principal",
      "rating": 7,
      "idMovie":"10"  
  }
];

const getAll = (query) => { 
  let resultado = Comments;
  
  if(query.idMovie){
    resultado = resultado.filter (e => e.idMovie === query.idMovie)
  }

  if(query.rating){
    resultado = resultado.filter (e => e.rating > query.rating)
  }
  
  return resultado };


const save = (body) => { 
    const data = {id: uuidv4(), ...body};
    Comments.push(data);
    return data;
}

const borrar = (id) => {
  const index = Comments.findIndex((registro) => registro.id == id);
  if (index > 0) {
    Comments.splice(index, 1);
    return true
  }
  return false
}

const update = (id,req) => { 
  const index = Comments.findIndex((registro) => registro.id == id);
  if (index >= 0) {
    Comments[index] = req;
    return true
  } 
  return false
}

module.exports = { getAll, save, borrar, update};
