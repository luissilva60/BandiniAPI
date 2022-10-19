const Sequelize = require('sequelize')
const database = require('./connection')

const servicesModel = database.define('services', {
    service_id: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true

    },
    service_name: {
        type: Sequelize.STRING(60),
        allowNull: false
    },
    service_description: {
        type: Sequelize.STRING(999),
        allowNull: false
    },
    service_price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }

})


module.exports = servicesModel;