const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('stores', {
        store_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true

        },
        store_name: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        store_user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        store_description: {
            type: DataTypes.STRING(999),
            allowNull: false
        }

    })
}


