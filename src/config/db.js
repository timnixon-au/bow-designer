import faunadb from 'faunadb';

const client = new faunadb.Client({
    
    secret: "fnAD4slSrxACCMHEzBHpcqmU9nogjTITL5XEZ7h3"
})
const q = faunadb.query
export { client, q }
