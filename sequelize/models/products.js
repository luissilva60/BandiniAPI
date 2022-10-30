const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('products', {
        product_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true

        },
        product_name: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        product_description: {
            type: DataTypes.STRING(999),
            allowNull: false
        },
        product_stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }


    })
}


