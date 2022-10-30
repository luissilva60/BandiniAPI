const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');
const user = models.toString();


async function getAll (req, res) {
  try {
    console.log(user)
    let allUsers = await models.users.findAll()
    console.log(allUsers)
    res.status(200).json(allUsers);
  }catch (err) {
    console.log(err);
    return { status: 500, data: err };
  }
}

/*sequelize.sync().then(() => {

  Book.findAll().then(res => {
    console.log(res)
  }).catch((error) => {
    console.error('Failed to retrieve data : ', error);
  });

}).catch((error) => {
  console.error('Unable to create table : ', error);
});*/

async function getById(req, res) {
  const id = getIdParam(req);
  const user = await models.users.findByPk(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send('404 - Not found');
  }
};

async function create(req, res) {
  if (req.body.id) {
    res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
  } else {
    try{
      await models.users.create(req.body);
      res.status(201).end();
    }catch (e) {
      console.log(e)
      res.status(500).end()
    }

  }
};

async function update(req, res) {
  const id = getIdParam(req);

  // We only accept an UPDATE request if the `:id` param matches the body `id`
  if (req.body.id === id) {
    await models.users.update(req.body, {
      where: {
        user_id: id
      }
    });
    res.status(200).end();
  } else {
    res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
  }
};

async function remove(req, res) {

  const id = getIdParam(req);
  try{
    await models.users.destroy({
      where: {
        user_id: id
      }
    });
    res.status(200).end();
  }catch (e) {
    console.log("ERRO:" + e)
    res.status(500).end();
  }

};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};