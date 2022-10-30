const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');

async function getAll(req, res) {
    try {
        const allStores = await models.stores.findAll();
        console.log(allStores)
        res.status(200).json(allStores);
    }catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}

async function getById(req, res) {
    const id = getIdParam(req);
    const store = await models.stores.findByPk(id);
    if (store) {
        res.status(200).json(store);
    } else {
        res.status(404).send('404 - Not found');
    }
}

async function create(req, res) {
    if (req.body.id) {
        res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
    } else {
        try{
            await models.stores.create(req.body);
            res.status(201).end();
        }catch (e) {
            console.log(e)
            res.status(500).end()
        }

    }
}

async function update(req, res) {
    const id = getIdParam(req);

    // We only accept an UPDATE request if the `:id` param matches the body `id`
    if (req.body.store_id === id) {
        await models.stores.update(req.body, {
            where: {
                store_id: id
            }
        });
        res.status(200).end();
    } else {
        res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.store_id}).`);
    }
}

async function remove(req, res) {
    const id = getIdParam(req);
    await models.stores.destroy({
        where: {
            store_id: id
        }
    });
    res.status(200).end();
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
}