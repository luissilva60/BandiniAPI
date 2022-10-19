const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI

const sequelize = new Sequelize('postgres://postgres:XJTQ76Aj7aN6BLX@bandini-db.internal:5432/bandini-db') // Example for postgres



module.exports =  sequelize;