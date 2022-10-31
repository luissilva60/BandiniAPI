const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');

async function getAll(req, res) {
    try {
        let allPhotos = await models.photos.findAll({
            include: [models.stores, models.products, models.services]

        });
        res.status(200).json(allPhotos);
    }catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}

async function getById(req, res) {
    const id = getIdParam(req);
    const photo = await models.photos.findByPk(id, {
        include: [models.stores, models.products, models.services]

    });
    if (photo) {
        res.status(200).json(photo);
    } else {
        res.status(404).send('404 - Not found');
    }
}

async function create(req, res) {
    if (req.body.id) {
        res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
    } else {
        try{
            await models.photos.create(req.body);
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
    if (req.body.photo_id === id) {
        await models.photos.update(req.body, {
            where: {
                photo_id: id
            }
        });
        res.status(200).end();
    } else {
        res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.photo_id}).`);
    }
}

async function remove(req, res) {
    const id = getIdParam(req);
    try{
        await models.photos.destroy({
            where: {
                photo_id: id
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