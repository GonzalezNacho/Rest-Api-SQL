const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

class Users extends Model{ }

Users.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
}, {
    sequelize,
    underscored:true,
    modelName: 'users'
})

module.exports = Users