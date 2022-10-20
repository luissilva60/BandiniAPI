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
        },
        receipt_user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        receipt_description: {
            type: DataTypes.STRING(999),
            allowNull: false
        }

    })
}


