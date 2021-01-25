import axios from 'axios'
import { ADMIN_BASE_URL } from '../../utils/constants'

export const ADD_EBOOK = 'ADD_EBOOK'




const addEbookAction = (data) => {
    return {
        type : ADD_EBOOK ,
        data
    }
}

export const addEbook = (newEbook) => {
    return(dispatch) => {
        axios.post(ADMIN_BASE_URL+'/addEbook', newEbook)
        .then((response) => {
            alert("Ebook successfully added")
            dispatch(addEbookAction(response.data))
        })
    }
}

