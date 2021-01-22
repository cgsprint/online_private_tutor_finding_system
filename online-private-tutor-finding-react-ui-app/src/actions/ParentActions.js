import axios from 'axios';
export const ADD_Parent = 'ADD_Parent'

const BASE_URL = 'http://localhost:8080/parent/'
const addParentAction = (data) => {
    return {
        type: ADD_Parent,
        data
    }
}
export const addParent = (newParent) => {
    return (dispatch) => {
        axios.post(BASE_URL, newParent)
            .then((response) => {
                alert("Parent Successfully added")
                //console.log(response.data)
                dispatch(addParentAction(response.data))
            })
    }
}