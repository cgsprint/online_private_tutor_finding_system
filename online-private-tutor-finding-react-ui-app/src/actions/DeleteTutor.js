import axios from 'axios'
import  { ADMIN_BASE_URL } from '../utils/constants'
export const DELETE_TUTOR = 'DELETE_TUTOR'


const deleteTutorAction = (data) => {
    return {
        type: DELETE_TUTOR,
        data
        
    }
}
export const deleteTutor = (tutorId) => {
    return (dispatch) => {
        axios.delete(`${ADMIN_BASE_URL}/deleteTutor?id=${tutorId}`)
            .then((response) => {
                dispatch(deleteTutorAction(response.data))
            }).catch(err => {
                console.log(err)
            })
    }
}


