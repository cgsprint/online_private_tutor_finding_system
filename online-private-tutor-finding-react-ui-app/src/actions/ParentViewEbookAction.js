import axios from 'axios';
import { PARENT_BASE_URL} from '../utils/constants.js'
export const GET_ALL_EBOOKS = 'GET_ALL_EBOOKS'
export const CLEAR_STATE = 'CLEAR_STATE'


const getAllEbooksAction = (data) => {
    return {
        type: GET_ALL_EBOOKS,
        data
    }
}
export const getAllEbooks = () => {
    return (dispatch) => {
        axios.get(PARENT_BASE_URL + '/viewEbook')
            .then((response) => {
                dispatch(getAllEbooksAction(response.data))  
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