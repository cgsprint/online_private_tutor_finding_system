import axios from 'axios';
import { PARENT_BASE_URL} from '../utils/constants.js'
export const GET_BOOKED_TUTOR = 'GET_BOOKED_TUTOR'

const getBookedTutorAction = (data) => {
    return {
        type: GET_BOOKED_TUTOR,
        data
    }
}
export const getBookedTutor = (parentId) => {
    return (dispatch) => {
        axios.post(PARENT_BASE_URL + '/getBookedTutors?parentId='+parentId)
            .then((response) => {
                console.log(response)
                dispatch(getBookedTutorAction(response.data))  
            })
    }
}