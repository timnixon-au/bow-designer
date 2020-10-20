import faunadb from 'faunadb';

const client = new faunadb.Client({
    secret: "fnAD4mWMDqACCAhK0jAR6mOqsZJ-pASs6zN2sUTO"
})
const q = faunadb.query
export { client, q }
