import axios from "axios";
import  { ADMIN_BASE_URL } from '../utils/constants'

export const REGISTER_TUTOR = 'REGISTER_TUTOR'

const registerTutorAction = (data,status) => {
    return {
        type: REGISTER_TUTOR,
        data,
        status
    }
}

   

export const registerTutor = (Tutor) => {

    return(dispatch) => {
        axios.post(`${ADMIN_BASE_URL}/addTutor`,Tutor)
        .then((response) => {
            // dispatch(registerTutorAction(response.data,response.status))
            // console.log(response)
            // alert("Ebook successfully added")
            // console.log(response)
            dispatch(registerTutorAction(response.data.message,response.status))
            // setTimeout(() => {
            //     dispatch(registerTutorAction("",0))
                
            // }, 1500);
            
        }).catch(err => {
            console.log(err)
            dispatch(registerTutorAction(err,404))

            setTimeout(() => {
                dispatch(registerTutorAction(err,0))
                    
            }, 1500);
        })
    }
}