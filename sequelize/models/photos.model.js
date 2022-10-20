const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('photos', {
        photo_id: {
            type: DataTypes.INTEGER,
            autoincrement: true,
            allowNull: false,
            primaryKey: true

        },
        photo_name: {
            type: DataTypes.STRING(60),
            allowNull: false
        }

    })
}


