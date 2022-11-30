const { Users } = require('../models/')

const getAll = async (query) => {
  let options = {
    attributes:{ exclude: ['createdAt','updatedAt'] }
  }

  if (query.name)
    options = {
      ...options, where: {
        ...options.where,
        name: query.name
      }
    }
  
    if (query.lastname)
    options = {
      ...options, where: {
        ...options.where,
        lastname: query.lastname
      }
    }

  const datos = await Users.findAll(options)
  return datos 
};
  
  const getOne = async (id) => { return await Users.findByPk(id,{
    attributes:{ exclude: ['createdAt','updatedAt'] }
  });}

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
    data.user = body.user
    data.email = body.email
    await data.save()
    return data;
  }
  
  module.exports = { getAll, getOne, save, borrar, update};