const { Movies } = require('../models/')

const getAll = async (query) => {
  const datos = await Movies.findAll()
  return datos 
};

const getOne = async (id) => { return await Movies.findByPk(id);}

const save = async (body) => { 
  const data = {...body};
  const movie = await Movies.create(data);
  return movie;
}

const borrar = async (id) => {
  await Movies.destroy({
    where: {
      id
    }
  })
}

const update = async (id, body) => {
  const data = await getOne(id)
  data.title = body.title
  data.director = body.director
  data.year = body.year
  data.rating = body.rating
  data.genres = body.genres
  await data.save()
  return data;
}

module.exports = { getAll, getOne, save, borrar, update};