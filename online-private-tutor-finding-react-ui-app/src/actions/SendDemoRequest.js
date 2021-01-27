import qs from 'qs'
import axios from'axios';
import { PARENT_BASE_URL } from '../utils/constants'
export const SEND_DEMO_REQUEST = 'SEND_DEMO_REQUEST'




const sendDemoRequestAction =(data,status)=>{
    return {
        type:SEND_DEMO_REQUEST,
        data,
        status
        }
    }
    
export const sendDemoRequest = (request) =>{
    return (dispatch) =>{
        axios.post(`${PARENT_BASE_URL}/demoRequest`,request)
            .then((response)=>{
                console.log(response.data)
                dispatch(sendDemoRequestAction(response.data,response.status))
                setTimeout(() => {
                dispatch(sendDemoRequestAction("",0))
                
                }, 1000);
            })
            .catch((error) => {
                console.log( error.response,request._response )
            })
    }
}