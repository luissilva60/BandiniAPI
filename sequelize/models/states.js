const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('states', {
        state_id: {
            type: DataTypes.INTEGER,
            autoincrement: true,
            allowNull: false,
            primaryKey: true

        },
        state_name: {
            type: DataTypes.STRING(60),
            allowNull: false
        }
    })
}


