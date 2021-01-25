import axios from "axios";
import  { ADMIN_BASE_URL } from '../utils/constants'
import  { TUTOR_BASE_URL } from '../utils/constants'
import  { PARENT_BASE_URL } from '../utils/constants'

export const VALIDATE_USER = 'VALIDATE_USER';


const validateUserAction = (data,status) => {
    return {
        type: VALIDATE_USER,
        data,
        status
    }
}
export const validateUser = (User) => {
    return (dispatch) => {

        if(User.userRole === 'admin')
        {

        
            axios.post(ADMIN_BASE_URL+`/login?username=${User.userUsername}&password=${User.userPassword}`)
            .then((response) => {
                dispatch(validateUserAction(response.data,response.status))
                console.log(response)
                
            })
            .catch((err) => {
                dispatch(validateUserAction(err,404))

                setTimeout(() => {
                    dispatch(validateUserAction(err,0))
                        
                }, 1500);
            })
        } 
        if(User.userRole === 'tutor')
        {

        
            axios.post(TUTOR_BASE_URL+`/logintutor?username=${User.userUsername}&password=${User.userPassword}`)
            .then((response) => {
                dispatch(validateUserAction(response.data,response.status))
                console.log(response)
                
            }).catch((err) => {
                dispatch(validateUserAction(err,404))

                setTimeout(() => {
                    dispatch(validateUserAction(err,0))
                        
                }, 1500);
            })
        } 
        if(User.userRole === 'parent')
        {

        
            axios.post(PARENT_BASE_URL+`/login?username=${User.userUsername}&password=${User.userPassword}`)
            .then((response) => {
                dispatch(validateUserAction(response.data,response.status))
                console.log(response.status)
                
            }).catch((err) => {
                dispatch(validateUserAction(err,404))

                setTimeout(() => {
                    dispatch(validateUserAction(err,0))
                        
                }, 1500);
            })
        }  
        
        
    }
}