const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('services', {
        service_id: {
            type: DataTypes.INTEGER,
            autoincrement: true,
            allowNull: false,
            primaryKey: true

        },
        service_name: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        service_description: {
            type: DataTypes.STRING(999),
            allowNull: false
        },
        service_price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }

    })
}


