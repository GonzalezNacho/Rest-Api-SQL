const { Comments, Movies, Users } = require('../models/')


const getAll = async (query) => {
  let options = {
    include: [
      {model: Movies, required: false},
      {model: Users, required: false}
    ]
  }
  if (query.movie_id)
    options = {
      ...options, where: {
        ...options.where,
        movieId: query.movie_id
      }
    }
  
    if (query.user_id)
      options = {
        ...options, where: {
          ...options.where,
          userId: query.user_id
        }
      }
  const datos = await Comments.findAll(options)
  return datos 
};

const getOne = async (id) => { return await Comments.findByPk(id,{
  include: [
    {model: Movies, required: false},
    {model: Users, required: false}
  ]
});}

const save = async (body) => { 
    const data = { ...body};
    const comment = await Comments.create(data);
    let movie = await Movies.findByPk(body.movie.id);
    comment.movieId = movie.id;
    let user = await Users.findByPk(body.user.id);
    comment.userId = user.id;
    await comment.save();
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
  data.movie_id = body.movie_id
  data.user_id = body.user_id
  await data.save()
  return data;
}

module.exports = { getAll, getOne, save, borrar, update};
