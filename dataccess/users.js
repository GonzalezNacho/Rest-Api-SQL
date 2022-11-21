const { Users } = require('../models/')

const getAll = async (query) => {
  const datos = await Users.findAll()
  return datos 
};
  
  const getOne = async (id) => { return await Users.findByPk(id);}

  const save = async (body) => { 
    const data = { ...body }
    const user = await Users.create(data);
    return user;
  }
  
  const borrar = async (id) => {
    await Users.destroy({
      where: {
        id
      }
    })
  }
  
  const update = async (id, body) => {
    const data = await getOne(id)
    data.name = body.name
    data.lastname = body.lastname
    data.email = body.email
    await data.save()
    return data;
  }
  
  module.exports = { getAll, getOne, save, borrar, update};