import pg from 'pg'

const pool = new pg.Pool({
    user: "test",
    password: 'secret',
    host: "nodejs-db-1",
    port: 5432,
    database: "test"
})

export default pool
