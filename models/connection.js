var pg = require('pg');

const connectionString = "postgres://bandinidb_user:2GIcnwprve1KSohHnujt46vz5JV8hEq1@dpg-cd5i4jirrk0dfu91kkqg-a.oregon-postgres.render.com/bandinidb\n"
const Pool = pg.Pool
const pool = new Pool({
    connectionString,
    max: 10,
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
})

module.exports = pool;