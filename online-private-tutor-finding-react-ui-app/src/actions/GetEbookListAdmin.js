import axios from 'axios'
import  { ADMIN_BASE_URL } from '../utils/constants'
export const GET_ALL_EBOOKS = 'GET_ALL_EBOOKS'


const getAllEbooksAction = (data) => {
    return {
        type: GET_ALL_EBOOKS,
        data
    }
}
export const getAllEbooks = ()=>
{
    return (dispatch) => {
        axios.get(`${ADMIN_BASE_URL}/viewEbooks`)
            .then((response) => {
                dispatch(getAllEbooksAction(response.data))
                console.log(response.data)
            })
    }
}