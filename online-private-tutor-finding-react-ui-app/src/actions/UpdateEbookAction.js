import axios from 'axios'
import { ADMIN_BASE_URL } from '../utils/constants'

export const UPDATE_EBOOK = 'UPDATE_EBOOK'
export const CLEAR_STATE = 'CLEAR_STATE'

const updateEbookAction = (data,status) => {
    return {
        type : UPDATE_EBOOK ,
        data,
        status
    }
}
export const updateEbook = (newEbookDetails) => {
    return (dispatch) => {
        axios.put(ADMIN_BASE_URL+'/updateEbook/', newEbookDetails)
            .then((response) => {
                // console.log("REsponse for update ebook",response)
                dispatch(updateEbookAction(response.data,response.status))
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

