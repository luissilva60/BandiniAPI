const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');

async function getAll(req, res) {
    try{
        const allServices = await models.services.findAll();
        res.status(200).json(allServices)
    }catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}

async function getById(req, res) {
    const id = getIdParam(req);
    const service = await models.services.findByPk(id);
    if (service) {
        res.status(200).json(service);
    } else {
        res.status(404).send('404 - Not found');
    }
}

async function create(req, res) {
    if (req.body.id) {
        res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
    } else {
        try {
            await models.services.create(req.body);
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
    if (req.body.service_id === id) {
        await models.services.update(req.body, {
            where: {
                service_id: id
            }
        });
        res.status(200).end();
    } else {
        res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.service_id}).`);
    }
}

async function remove(req, res) {
    const id = getIdParam(req);
    try{
        await models.services.destroy({
            where: {
                service_id: id
            }
        });
        res.status(200).end();
    }catch (e) {
        console.log("ERRO:" + e)
        res.status(500).end();
    }

}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};