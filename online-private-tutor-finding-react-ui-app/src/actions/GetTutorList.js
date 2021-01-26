import axios from 'axios'
import  { ADMIN_BASE_URL } from '../utils/constants'
export const GET_ALL_TUTORS = 'GET_ALL_TUTORS'


const getAllTutorsAction = (data) => {
    return {
        type: GET_ALL_TUTORS,
        data
    }
}
export const getAllTutors = () => {
    return async (dispatch) => {
        await axios.get(`${ADMIN_BASE_URL}/viewTutors`)
            .then((response) => {
                dispatch(getAllTutorsAction(response.data))
                
            })
    }
}