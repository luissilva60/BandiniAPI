var pg = require('pg');
const { Sequelize } = require('sequelize');
const connectionString = process.env.DATABASE_URL
const Pool = pg.Pool


// Option 1: Passing a connection URI

const sequelize = new Sequelize(connectionString) // Example for postgres







const pool = new Pool({
    connectionString,
    max: 10,
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
})

await pool.connect()
const res = await pool.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await pool.end()


module.exports = pool;
module.exports =  sequelize;
