import axios from 'axios'

export const UPDATE_TUTOR = 'UPDATE_TUTOR'
export const TUTOR_VIEW_EBOOK = 'TUTOR_VIEW_EBOOK'
export const CLEAR_STATE = 'CLEAR_STATE'


const BASE_URL = 'http://localhost:8080/'

const updateTutorAction = (data) => {
    return {
        type: UPDATE_TUTOR,
        data
    }
}
export const updateTutor = (newTutorDetails) => {
    return (dispatch) => {
        axios.put(BASE_URL+'updateTutor', newTutorDetails)
            .then((response) => {
                alert("Tutor Updated added")
                dispatch(updateTutorAction(response.data))
            })
    }
}

const TutorViewEbookAction = (data) => {
    return {
        type: TUTOR_VIEW_EBOOK,
        data
    }
}
export const getAllEbooks = () => {
    return (dispatch) => {
        axios.get(BASE_URL+'viewEbooks')
            .then((response) => {
                dispatch(TutorViewEbookAction(response.data))
                
            })
    }
}


//action to clear state
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