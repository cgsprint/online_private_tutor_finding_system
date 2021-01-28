import axios from'axios';
import { PARENT_BASE_URL } from '../utils/constants'
export const BOOK_TUTOR = 'BOOK_TUTOR'


const bookTutorAction =(data,status)=>{
    return {
        type:BOOK_TUTOR,
        data,
        status
        }
    }
    
export const bookTutor = (request) =>{
    return (dispatch) =>{
        axios.post(PARENT_BASE_URL + '/bookTutor',request)
            .then((response)=>{
                console.log(response.data)
                dispatch(bookTutorAction(response.data,response.status))
                
        }
            )}}

