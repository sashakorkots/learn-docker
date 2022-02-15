const Pool = require('pg').Pool
const pool = new Pool({
    user: "test",
    password: 'secret',
    host: "learn-docker_db_1",
    port: 5432,
    database: "test"
})

module.exports = pool
