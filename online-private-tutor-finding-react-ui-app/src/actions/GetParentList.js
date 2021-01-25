import axios from 'axios'
import  { ADMIN_BASE_URL } from '../utils/constants'
export const GET_ALL_PARENTS = 'GET_ALL_PARENTS'


const getAllParentsAction = (data) => {
    return {
        type: GET_ALL_PARENTS,
        data
    }
}
export const getAllParents = () =>
{
    return (dispatch) => {
        axios.get(`${ADMIN_BASE_URL}/viewParents`)
            .then((response) => {
                dispatch(getAllParentsAction(response.data))
                
            })
    }
}