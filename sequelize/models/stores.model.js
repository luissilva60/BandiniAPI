const Sequelize = require('sequelize')
const database = require('./connection')

const storesModel = database.define('stores', {
    store_id: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true

    },
    store_name: {
        type: Sequelize.STRING(60),
        allowNull: false
    },
    store_user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    store_description: {
        type: Sequelize.STRING(999),
        allowNull: false
    }

})


module.exports = storesModel;