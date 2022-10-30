const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');

async function getAll(req, res) {
    try {
        let allStates = await models.states.findAll();
        res.status(200).json(allStates);
    }catch (e) {
        console.log(e);
        return { status: 500, data: e};
    }

}

async function getById(req, res) {
    const id = getIdParam(req);
    const state = await models.states.findByPk(id);
    if (state) {
        res.status(200).json(state);
    } else {
        res.status(404).send('404 - Not found');
    }
}

async function create(req, res) {
    if (req.body.id) {
        res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
    } else {
        try{
            await models.states.create(req.body);
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
    if (req.body.state_id === id) {
        await models.states.update(req.body, {
            where: {
                state_id: id
            }
        });
        res.status(200).end();
    } else {
        res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.state_id}).`);
    }
}

async function remove(req, res) {
    const id = getIdParam(req);
    await models.states.destroy({
        where: {
            state_id: id
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