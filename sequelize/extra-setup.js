function applyExtraSetup(sequelize) {
    const { user, store, state, service, role, receipt, product, photo } = sequelize.models;

    role.hasOne(user);
    user.belongsTo(role, {
        foreignKey: {
            name: 'user_role_id'
        }
    });

    store.hasMany(photo);
    photo.belongsTo(store, {
        foreignKey: {
            name: 'photo_store_id'
        }
    })

    product.hasMany(photo);
    photo.belongsTo(product, {
        foreignKey: {
            name: 'photo_product_id'
        }
    })

    service.hasMany(photo);
    photo.belongsTo(service, {
        foreignKey: {
            name: 'photo_service_id'
        }
    })

    store.hasMany(product);
    product.belongsTo(store,{
        foreignKey: {
            name: 'product_store_id'
        }
    })

    user.hasMany(receipt);
    receipt.belongsTo(user,{
        foreignKey: {
            name: 'receipt_user_id'
        }
    })

    service.hasMany(receipt);
    receipt.belongsTo(service,{
        foreignKey: {
            name: 'receipt_service_id'
        }
    })

    product.hasMany(receipt);
    receipt.belongsTo(product,{
        foreignKey: {
            name: 'receipt_product_id'
        }
    })

    store.hasMany(service);
    service.belongsTo(store, {
        foreignKey: {
            name: 'service_store_id'
        }
    })

    state.hasOne(service);
    service.belongsTo(state, {
        foreignKey: {
            name: 'service_state_id'
        }
    })

    user.hasMany(store);
    store.belongsTo(user, {
        foreignKey: {
            name: 'store_user_id'
        }
    })



}

module.exports = { applyExtraSetup };