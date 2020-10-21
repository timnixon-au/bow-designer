import { client, q } from '../config/db';



export const getAllDesigns = client
.query(q.Paginate(q.Match(q.Ref('indexes/allDesigns'))))
.then(response => {
    const designsRef = response.Data;
    const getAllDataQuery = designsRef.map(ref => {
        return q.Get(ref);
    })
    return client.query(getAllDataQuery).then(data => data)
})
.catch(error => console.error('Error: ', error.message));



export const getAllMaterials = client
.query(q.Paginate(q.Match(q.Ref('indexes/allMaterials'))))
.then(response => {
    const materialsRef = response.Data;
    const getAllDataQuery = materialsRef.map(ref => {
        return q.Get(ref);
    })
    return client.query(getAllDataQuery).then(data => data)
})
.catch(error => console.error('Error: ', error.message));



export const createBow = name =>
  client
    .query(
      q.Create(q.Collection('bow'), {
        data: {
          name
        }
      })
    )
    .then(ret => ret)
    .catch(error => console.error('Error: ', error.message));



    export const deleteBow = bowId =>
  client
    .query(q.Delete(q.Ref(q.Collection('bow'), bowId)))
    .then(ret => ret)
    .catch(error => console.error('Error: ', error.message));