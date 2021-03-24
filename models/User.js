const { Sequelize,DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    birth_date: DataTypes.DATE
}, {
    underscored: true,
    timestamps: false,
    freezeTableName: true
})

module.exports = User