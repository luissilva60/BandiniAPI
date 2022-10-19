const Sequelize = require('sequelize')
const database = require('./connection')

const receiptsModel = database.define('receipts', {
    receipt_id: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true

    },
    receipt_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    receipt_user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    receipt_description: {
        type: Sequelize.STRING(999),
        allowNull: false
    }

})


module.exports = receiptsModel;