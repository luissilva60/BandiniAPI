const Sequelize = require('sequelize')
const database = require('./connection')

const rolesModel = database.define('roles', {
    role_id: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true

    },
    role_name: {
        type: Sequelize.STRING(60),
        allowNull: false
    }

})


module.exports = rolesModel;