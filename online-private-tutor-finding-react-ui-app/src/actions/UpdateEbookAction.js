import axios from 'axios'
import { ADMIN_BASE_URL } from '../utils/constants'

export const UPDATE_EBOOK = 'UPDATE_EBOOK'
export const CLEAR_STATE = 'CLEAR_STATE'

const updateEbookAction = (data) => {
    return {
        type : UPDATE_EBOOK ,
        data
    }
}
export const updateEbook = (newEbookDetails) => {
    return (dispatch) => {
        axios.put(ADMIN_BASE_URL+'/updateEbook/', newEbookDetails)
            .then((response) => {
                dispatch(updateEbookAction(response.data))
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

