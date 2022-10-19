const Sequelize = require('sequelize')
const database = require('./connection')

const User = database.define('User', {
    user_id: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true

    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_bdate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    user_email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_role_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

})


module.exports = User;