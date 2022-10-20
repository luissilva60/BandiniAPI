const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');
const connectionString = process.env.DATABASE_URL



const sequelize = new Sequelize({
    dialect: 'postgres',
    storage: connectionString,
    logQueryParameters: true,
    benchmark: true
});

const modelDefiners = [
    require('./models/users.model'),
    require('./models/stores.model'),
    require('./models/states.model'),
    require('./models/services.model'),
    require('./models/roles.model'),
    require('./models/receipts.model'),
    require('./models/products.model'),
    require('./models/photos.model'),

    // Add more models here...
    // require('./models/item'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;