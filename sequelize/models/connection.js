var pg = require('pg');

const connectionString = "postgres://bandini:OW6N49OjqYV0IGJ@top2.nearest.of.bandini-db.internal:5432/bandini"
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