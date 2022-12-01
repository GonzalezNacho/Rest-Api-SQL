const { Movies } = require('../models/')
const { Op } = require("sequelize");

const getAll = async (query) => {
  let options = {
    //attributes:['id', 'title', 'year', 'rating', 'genres']
    attributes:{ exclude: ['createdAt','updatedAt'] }
  }
  
  if (query.title)
    options = {
      ...options, where: {
        ...options.where,
        title: query.title
      }
    }

  if (query.genres)
    options = {
      ...options, where: {
        ...options.where,
        genres: {
          [Op.substring]:query.genres
        } 
      }
    }
  
    if (query.ratingmin)
    options = {
      ...options, where: {
        ...options.where,
        rating: {
          [Op.gte]:query.ratingmin
        } 
      }
    }
  
  const datos = await Movies.findAll(options)
  return datos 
};

const getOne = async (id) => { return await Movies.findByPk(id, {
  attributes: {exclude:['createdAt', 'updatedAt']}
});}

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
