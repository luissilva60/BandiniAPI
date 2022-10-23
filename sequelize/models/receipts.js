const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('receipts', {
        receipt_id: {
            type: DataTypes.INTEGER,
            autoincrement: true,
            allowNull: false,
            primaryKey: true

        },
        receipt_date: {
            type: DataTypes.DATE,
            allowNull: false
        }

    })
}


