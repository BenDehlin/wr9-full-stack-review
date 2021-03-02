import {useState, useEffect} from 'react'
import axios from 'axios'

const useAxios = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(url).then(res => {
            setData(res.data)
        }).catch(err => console.log(err))
    } ,[])

    const deleteItem = (id) => {
        axios.delete(`${url}/${id}`).then(res => {
            setData(res.data)
        }).catch(err => console.log(err))
    }

    return [data, setData, deleteItem]
}

export default useAxios