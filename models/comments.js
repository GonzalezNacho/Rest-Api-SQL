const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

class Comments extends Model{ }

Comments.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    rating:{
        type: DataTypes.INTEGER,
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
    }
}, {
    sequelize,
    underscored:true,
    modelName: 'comments'
})

module.exports = Comments