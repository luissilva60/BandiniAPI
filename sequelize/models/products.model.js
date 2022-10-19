const Sequelize = require('sequelize')
const database = require('./connection')

const productsModel = database.define('products', {
    product_id: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true

    },
    product_name: {
        type: Sequelize.STRING(60),
        allowNull: false
    },
    product_description: {
        type: Sequelize.STRING(999),
        allowNull: false
    },
    product_stock: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    product_price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }


})


module.exports = productsModel;