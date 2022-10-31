function applyExtraSetup(sequelize) {
    const { users, stores, states, services, roles, receipts, products, photos } = sequelize.models;

    roles.hasOne(users, {
        foreignKey: 'user_role_id'

    });
    users.belongsTo(roles ,{
        foreignKey:  'user_role_id'

    });

    stores.hasMany(photos, {
        foreignKey: 'photo_store_id'

    });
    photos.belongsTo(stores, {
        foreignKey: 'photo_store_id'

    })

    products.hasMany(photos, {
        foreignKey: 'photo_product_id'

    });
    photos.belongsTo(products, {
        foreignKey: 'photo_product_id'

    })

    services.hasMany(photos, {
        foreignKey: 'photo_service_id'

    });
    photos.belongsTo(services, {
        foreignKey: 'photo_service_id'

    })

    stores.hasMany(products, {
        foreignKey:'product_store_id'
    });
    products.belongsTo(stores, {
        foreignKey:'product_store_id'
    })

    users.hasMany(receipts,{
        foreignKey:  'receipt_user_id'

    });
    receipts.belongsTo(users,{
        foreignKey:  'receipt_user_id'

    })

    services.hasMany(receipts,{
        foreignKey:  'receipt_service_id'

    });
    receipts.belongsTo(services,{
        foreignKey:  'receipt_service_id'

    })

    products.hasMany(receipts,{
        foreignKey: 'receipt_product_id'

    });
    receipts.belongsTo(products,{
        foreignKey: 'receipt_product_id'

    })

    stores.hasMany(services, {
        foreignKey: 'service_store_id'
    });
    services.belongsTo(stores, {
        foreignKey: 'service_store_id'
    })

    states.hasOne(services, {
        foreignKey: 'service_state_id'

    });
    services.belongsTo(states, {
        foreignKey: 'service_state_id'

    })

    users.hasMany(stores, {
        foreignKey: 'store_user_id'
    });
    stores.belongsTo(users, {
        foreignKey: 'store_user_id'
    })

    //sequelize.sync();



}

module.exports = { applyExtraSetup };