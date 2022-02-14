const Pool = require('pg').Pool
const pool = new Pool({
    user: "test",
    password: 'secret',
    host: "nodejs-db-1",
    port: 5432,
    database: "test"
})

module.exports = pool