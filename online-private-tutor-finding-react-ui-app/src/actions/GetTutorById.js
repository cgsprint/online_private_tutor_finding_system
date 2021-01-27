// import  { ADMIN_BASE_URL } from '../utils/constants'
import axios from 'axios'

import  { TUTOR_BASE_URL } from '../utils/constants'
export const GET_TUTOR_BY_ID = 'GET_TUTOR_BY_ID'

const TutorByIdAction = (data) => {
    return {
        type: GET_TUTOR_BY_ID,
        data
    }
}
export const getTutor = (Id) => {
    return (dispatch) => {
        // console.log("Tutor idkhkhkjhi ", Id);
        axios.get(`${TUTOR_BASE_URL}/tutor/viewTutor?id=${Id}`)
            .then((response) => {
                console.log("REsponse for get Tutor",response);
                dispatch(TutorByIdAction(response.data))
                // console.log(response.data)
            })
    }
}