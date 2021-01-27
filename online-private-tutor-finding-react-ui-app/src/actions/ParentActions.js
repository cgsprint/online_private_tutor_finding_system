import axios from 'axios';
import { PARENT_BASE_URL} from '../utils/constants.js'
export const ADD_Parent = 'ADD_Parent'
export const GET_ALL_TUTORS = 'GET_ALL_TUTORS'


const addParentAction = (data,status) => {
    return {
        type: ADD_Parent,
        data,
        status
    }
}
export const addParent = (newParent) => {
    return (dispatch) => {
        axios.post(PARENT_BASE_URL + '/register', newParent)
            .then((response) => {
                console.log(response.data)
                dispatch(addParentAction(response.data,response.status))
            })
    }
}

