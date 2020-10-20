import faunadb from 'fuanadb';

const client = new faunadb.Client({
    secret: process.env.DB_KEY
})
const q = faunadb.query
export { client, q }
