const { v4: uuidv4 } = require("uuid");
let Users = [
    {
        "id":"1",
        "name":"Igancio",
        "lastname":"Gonzalez",
        "user": "nacho101092",
        "email":"nacho@gmail.com"
    },
    {
        "id":"2",
        "name":"Alexander",
        "lastname":"Gomez",
        "user": "alexcabj01",
        "email":"alex@gmail.com"
    },
    {
        "id":"3",
        "name":"Johanna",
        "lastname":"Fernandez",
        "user": "Joha_numeritos",
        "email":"johafernandez@gmail.com"
    },
    {
        "id":"4",
        "name":"Alexander",
        "lastname":"Navia",
        "user": "alexNav_",
        "email":"alex.navia@gmail.com"
    },
    {
        "id":"5",
        "name":"Facundo",
        "lastname":"Beltran",
        "user": "facuBel7",
        "email":"facu_beltran@gmail.com"
    } 
  ];

  const getAll = (query) => { 
    let resultado = Users;
    
    if(query.user){
      resultado = resultado.filter (e => e.user === query.user)
    }

    if(query.email){
        resultado = resultado.filter (e => e.email === query.email)
    }
  
    if(query.search){
        resultado = resultado.filter(e => e.user.includes(resultado.search) || e.name.includes(resultado.search) || e.lastname.includes(resultado.search) || e.email.includes(resultado.search))
    }
    
    return resultado };
  
  
  const save = (body) => { 
    const data = {id: uuidv4(), ...body }
    Users.push(data);
    return data;
  }
  
  const borrar = (id) => {
    const index = Users.findIndex((registro) => registro.id == id);
    if (index > 0) {
      Users.splice(index, 1);
      return true
    }
    return false
  }
  
  const update = (id,req) => { 
    const index = Users.findIndex((registro) => registro.id == id);
    if (index >= 0) {
      Users[index] = req;
      return true
    } 
    return false
  }
  
  module.exports = { getAll, save, borrar, update};