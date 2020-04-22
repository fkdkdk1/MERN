import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api'
})

const addrInsert = payload => api.post('/addr', payload)
const addrList = () => api.get('/addrs')
const addrUpdate = (id, payload) => api.put('/addr/'+id, payload)
const addrDelete = id => api.delete('/addr/' + id)
const addrOne = id => api.get('/addr/' + id)

const apis = {
    addrInsert,
    addrList,
    addrUpdate,
    addrDelete,
    addrOne
} 

export default apis