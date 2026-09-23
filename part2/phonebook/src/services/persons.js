import axios  from "axios";
const baseUrl='http://localhost:3001/persons'

const getAll=()=>{
    const req=axios.get(baseUrl)
    return req.then(res=>res.data)
}
const create=personObject=>{
    const req=axios.post(baseUrl,personObject)
    return req.then(res=>res.data)
}
const update=(personId,personObject)=>{
    const req=axios.put(`${baseUrl}/${personId}`,personObject)
    return req.then(res=>res.data)
}
const remove=personId=>{
    const req=axios.delete(`${baseUrl}/${personId}`)
    return req.then(res=> res.data)
}
export default {getAll,create,update,remove}