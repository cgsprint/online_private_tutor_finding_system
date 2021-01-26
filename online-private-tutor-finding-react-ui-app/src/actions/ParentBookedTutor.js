import axios from 'axios';
import { PARENT_BASE_URL} from '../utils/constants.js'
export const GET_BOOKED_TUTOR = 'GET_BOOKED_TUTOR'

const getBookedTutorAction = (data) => {
    return {
        type: GET_BOOKED_TUTOR,
        data
    }
}
export const getBookedTutor = () => {
    return (dispatch) => {
        axios.get(PARENT_BASE_URL + '/bookedTutor'
        // , { 
            // 'Access-Control-Allow-Origin': '*'
        // }
)
            .then((response) => {
                dispatch(getBookedTutorAction(response.data))  
            })
    }
}