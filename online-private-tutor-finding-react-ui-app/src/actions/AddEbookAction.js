import axios from 'axios'
import { ADMIN_BASE_URL } from '../utils/constants'

export const ADD_EBOOK = 'ADD_EBOOK'




const addEbookAction = (data,status) => {
    return {
        type : ADD_EBOOK ,
        data,
        status
    }
}

export const addEbook = (newEbook) => {
    return(dispatch) => {
        axios.post(ADMIN_BASE_URL+'/addEbook', newEbook)
        .then((response) => {
            // alert("Ebook successfully added")
            console.log(response)
            dispatch(addEbookAction(response.data.message,response.status))
            setTimeout(() => {
                dispatch(addEbookAction("",0))
                
            }, 1500);
            
        })
        .catch((err) => {
            // console.log(err)
            dispatch(addEbookAction(err,404))

            setTimeout(() => {
                dispatch(addEbookAction(err,0))
                    
            }, 1500);
        })
    }
}

