const Sequelize = require('sequelize')
const database = require('./connection')

const photosModel = database.define('photos', {
    photo_id: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true

    },
    photo_name: {
        type: Sequelize.STRING(60),
        allowNull: false
    }

})


module.exports = photosModel;