const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
    const user = sequelize.define('users', {
        user_id: {
            type: DataTypes.INTEGER,
            autoincrement: true,
            primaryKey: true

        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_bdate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        user_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: false
        }


    });
    sequelize.sync();


    return user;
};


