const Sequelize = require('sequelize')
const database = require('./connection')

const statesModel = database.define('states', {
    state_id: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true

    },
    state_name: {
        type: Sequelize.STRING(60),
        allowNull: false
    }
})


module.exports = statesModel;