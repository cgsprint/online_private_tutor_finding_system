import  { ADMIN_BASE_URL } from '../utils/constants'
import axios from 'axios'

export const GET_TUTOR_BY_ID = 'GET_TUTOR_BY_ID'

const TutorByIdAction = (data) => {
    return {
        type: GET_TUTOR_BY_ID,
        data
    }
}
export const getTutor = (Id) => {
    return (dispatch) => {
        axios.get(`${ADMIN_BASE_URL}/getTutorById?id=${Id}`)
            .then((response) => {
                dispatch(TutorByIdAction(response.data))
                // console.log(response.data)
            })
    }
}