
import pg from 'pg';

const pool = new pg.Pool(
    {
        host: 'localhost',
        user: 'postgres',
        password: 'abhisheksingh',
        database: 'abhisheksingh'
    }
)
export default pool