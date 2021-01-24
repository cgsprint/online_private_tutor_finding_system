import axios from 'axios';
import { PARENT_BASE_URL} from '../utils/constants.js'
export const GET_ALL_TUTORS = 'GET_ALL_TUTORS'
export const CLEAR_STATE = 'CLEAR_STATE'

const getAllTutorsAction = (data) => {
    return {
        type: GET_ALL_TUTORS,
        data
    }
}
export const getAllTutors = () => {
    return (dispatch) => {
        axios.get(PARENT_BASE_URL + '/viewAllTutor')
            .then((response) => {
                dispatch(getAllTutorsAction(response.data))             
            })
    }
}

const clearStateAction = (data) => {
    return {
        type: CLEAR_STATE,
        data
    }
}

//clear state function
export const clearState = () => {
    return (dispatch) => {
        dispatch(clearStateAction())
    }
}