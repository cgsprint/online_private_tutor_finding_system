import axios from 'axios';
import { PARENT_BASE_URL} from '../utils/constants.js'
export const ADD_Parent = 'ADD_Parent'
export const GET_ALL_TUTORS = 'GET_ALL_TUTORS'
export const GET_ALL_EBOOKS = 'GET_ALL_EBOOKS';
export const GET_BOOKED_TUTOR = 'GET_BOOKED_TUTOR';





const addParentAction = (data) => {
    return {
        type: ADD_Parent,
        data
    }
}
export const addParent = (newParent) => {
    return (dispatch) => {
        axios.post(PARENT_BASE_URL + '/register', newParent)
            .then((response) => {
                alert("Parent Successfully added")
                //console.log(response.data)
                dispatch(addParentAction(response.data))
            })
    }
}

const getAllEbooksAction = (data) => {
    return {
        type: GET_ALL_EBOOKS,
        data
    }
}
export const getAllEbooks = () => {
    return (dispatch) => {
        axios.get(PARENT_BASE_URL+ 'viewEbook')
            .then((response) => {
                dispatch(getAllEbooksAction(response.data))
                
            })
    }
}

const getBookedTutorAction = (data) => {
    return {
        type: GET_BOOKED_TUTOR,
        data
    }
}
export const getBookedTutor = () => {
    return (dispatch) => {
        axios.get(PARENT_BASE_URL+ 'bookedtutor')
            .then((response) => {
                dispatch(getBookedTutorAction(response.data))
                
            })
    }
}
