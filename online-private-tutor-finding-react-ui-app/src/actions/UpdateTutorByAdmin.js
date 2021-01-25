import axios from 'axios'
import  { ADMIN_BASE_URL } from '../utils/constants'
export const UPDATE_TUTOR = 'UPDATE_TUTOR'


const updateTutorAction = (data,status) => {
    return {
        type: UPDATE_TUTOR,
        data,
        status
        
    }
}
export const updateTutor = (tutor) => {
    return (dispatch) => {
        axios.put(`${ADMIN_BASE_URL}/updateTutor`,tutor)
            .then((response) => {
                // console.log(response)
                dispatch(updateTutorAction(response.data.message,response.status))
            }).catch(err => {
                console.log(err)
            })
    }
}


