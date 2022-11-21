const Movies = require('./movies')
const Comments = require('./comments')
const Users = require('./users')

Comments.belongsTo(Movies)
Movies.hasMany(Comments)

Comments.belongsTo(Users)
Users.hasMany(Comments)

module.exports = {
    Movies,
    Comments,
    Users
}