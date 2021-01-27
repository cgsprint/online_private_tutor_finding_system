import axios from "axios";
import  { ADMIN_BASE_URL } from '../utils/constants'
import  { TUTOR_BASE_URL } from '../utils/constants'
import  { PARENT_BASE_URL } from '../utils/constants'

export const VALIDATE_ADMIN = 'VALIDATE_ADMIN';
export const VALIDATE_TUTOR = 'VALIDATE_TUTOR';
export const VALIDATE_PARENT = 'VALIDATE_PARENT';


const validateAdminAction = (data,status) => {
    return {
        type: VALIDATE_ADMIN,
        data,
        status
    }
}

const validateTutorAction = (data,status) => {
    return {
        type: VALIDATE_TUTOR,
        data,
        status
    }
}

const validateParentAction = (data,status) => {
    return {
        type: VALIDATE_PARENT,
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
                dispatch(validateAdminAction(response.data,response.status))
                console.log(response)
                
            })
            .catch((err) => {
                dispatch(validateAdminAction(err,404))

                setTimeout(() => {
                    dispatch(validateAdminAction(err,0))
                        
                }, 1500);
            })
        } 
        if(User.userRole === 'tutor')
        {

        
            axios.post(TUTOR_BASE_URL+`/logintutor?username=${User.userUsername}&password=${User.userPassword}`)
            .then((response) => {
                dispatch(validateTutorAction(response.data,response.status))
                console.log(response)
                
            }).catch((err) => {
                dispatch(validateTutorAction(err,404))

                setTimeout(() => {
                    dispatch(validateTutorAction(err,0))
                        
                }, 1500);
            })
        } 
        if(User.userRole === 'parent')
        {

        
            axios.post(PARENT_BASE_URL+`/login?username=${User.userUsername}&password=${User.userPassword}`)
            .then((response) => {
                dispatch(validateParentAction(response.data,response.status))
                console.log(response)
                
            }).catch((err) => {
                dispatch(validateParentAction(err,404))

                setTimeout(() => {
                    dispatch(validateParentAction(err,0))
                        
                }, 1500);
            })
        }  
        
        
    }
}