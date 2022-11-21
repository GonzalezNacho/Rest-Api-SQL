const { Comments } = require('../models/')


const getAll = async (query) => {
  const datos = await Comments.findAll()
  return datos 
};

const getOne = async (id) => { return await Comments.findByPk(id);}

const save = async (body) => { 
    const data = { ...body};
    const comment = await Comments.create(data);
    return comment;
}

const borrar = async (id) => {
  await Comments.destroy({
    where: {
      id
    }
  })
}

const update = async (id, body) => {
  const data = await getOne(id)
  data.comment = body.comment
  data.rating = body.rating
  await data.save()
  return data;
}

module.exports = { getAll, getOne, save, borrar, update};
