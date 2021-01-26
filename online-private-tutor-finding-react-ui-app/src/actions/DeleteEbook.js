import axios from 'axios'
import  { ADMIN_BASE_URL } from '../utils/constants'
export const DELETE_EBOOK = 'DELETE_EBOOK'


const deleteEbookAction = (data) => {
    return {
        type: DELETE_EBOOK,
        data
        
    }
}
export const deleteEbook = (ebookId) => {
    return (dispatch) => {
        axios.delete(`${ADMIN_BASE_URL}/deleteEbook?id=${ebookId}`)
            .then((response) => {
                console.log("response",response)
                dispatch(deleteEbookAction(response.data))
            }).catch(err => {
                console.log(err)
            })
    }
}


