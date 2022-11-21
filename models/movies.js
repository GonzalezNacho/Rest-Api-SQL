const { Model, DataTypes } = require('sequelize')
const { validate } = require('uuid')
const { sequelize } = require('../utils/db')

class Movies extends Model{ }

Movies.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    director: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating:{
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 1,
        validate: {
            min: {
                args: 1,
                msg: 'el valor mas bajo del rating es 1'
            },
            max: {
                args: 10,
                msg: 'el valor mas alto del rating es 10'
            }
        }
    },
    generes:{
        type: DataTypes.STRING(200),
        allowNull: false
    }
}, {
    sequelize,
    underscored:true,
    model: 'movies'
})

module.exports = Movies