const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('photos', {
        photo_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true

        },
        photo_name: {
            type: DataTypes.STRING(60),
            allowNull: false
        }

    })
}


