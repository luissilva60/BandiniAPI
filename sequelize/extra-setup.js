function applyExtraSetup(sequelize) {
    const { users, stores, states, services, roles, receipts, products, photos } = sequelize.models;

    roles.hasOne(users, {
        foreignKey: 'user_role_id'

    });
    //users.belongsTo(roles);

    stores.hasMany(photos, {
        foreignKey: 'photo_store_id'

    });
    //photos.belongsTo(stores)

    products.hasMany(photos, {
        foreignKey: 'photo_product_id'

    });
    //photos.belongsTo(products)

    services.hasMany(photos, {
        foreignKey: 'photo_service_id'

    });
    //photos.belongsTo(services)

    stores.hasMany(products, {
        foreignKey:'product_store_id'
    });
    //products.belongsTo(stores)

    users.hasMany(receipts,{
        foreignKey:  'receipt_user_id'

    });
    //receipts.belongsTo(users)

    services.hasMany(receipts,{
        foreignKey:  'receipt_service_id'

    });
    //receipts.belongsTo(services)

    products.hasMany(receipts,{
        foreignKey: 'receipt_product_id'

    });
    //receipts.belongsTo(products)

    stores.hasMany(services, {
        foreignKey: 'service_store_id'
    });
    //services.belongsTo(stores)

    states.hasOne(services, {
        foreignKey: 'service_state_id'

    });
    //services.belongsTo(states)

    users.hasMany(stores, {
        foreignKey: 'store_user_id'
    });
    //stores.belongsTo(users)

    //sequelize.sync();



}

module.exports = { applyExtraSetup };