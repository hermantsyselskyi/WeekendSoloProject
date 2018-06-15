const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: '5432',
    database: 'project_data',
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', () => {
    console.log('PG connected');
});

pool.on('error', (error) => {
    console.log('There was an error', error);
});

module.exports = pool;