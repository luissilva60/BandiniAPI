function applyExtraSetup(sequelize) {
    const { users, stores, states, services, roles, receipts, products, photos } = sequelize.models;

    roles.hasOne(users);
    users.belongsTo(roles, {
        foreignKey: {
            name: 'user_role_id'
        }
    });

    stores.hasMany(photos);
    photos.belongsTo(stores, {
        foreignKey: {
            name: 'photo_store_id'
        }
    })

    products.hasMany(photos);
    photos.belongsTo(products, {
        foreignKey: {
            name: 'photo_product_id'
        }
    })

    services.hasMany(photos);
    photos.belongsTo(services, {
        foreignKey: {
            name: 'photo_service_id'
        }
    })

    stores.hasMany(products);
    products.belongsTo(stores,{
        foreignKey: {
            name: 'product_store_id'
        }
    })

    users.hasMany(receipts);
    receipts.belongsTo(users,{
        foreignKey: {
            name: 'receipt_user_id'
        }
    })

    services.hasMany(receipts);
    receipts.belongsTo(services,{
        foreignKey: {
            name: 'receipt_service_id'
        }
    })

    products.hasMany(receipts);
    receipts.belongsTo(products,{
        foreignKey: {
            name: 'receipt_product_id'
        }
    })

    stores.hasMany(services);
    services.belongsTo(stores, {
        foreignKey: {
            name: 'service_store_id'
        }
    })

    states.hasOne(services);
    services.belongsTo(states, {
        foreignKey: {
            name: 'service_state_id'
        }
    })

    users.hasMany(stores);
    stores.belongsTo(users, {
        foreignKey: {
            name: 'stores_user_id'
        }
    })



}

module.exports = { applyExtraSetup };