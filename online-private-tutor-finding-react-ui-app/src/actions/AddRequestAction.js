import axios from 'axios';
import { PARENT_BASE_URL} from '../utils/constants.js'

const AddRequestAction = (requestObj) => {
    return async function(dispatch) {
        const res = await axios.post(
            PARENT_BASE_URL + "/demoRequest",
                { 
                    parentId: requestObj.parentId,
		    tutorId: requestObj.tutorId,
		    subject: requestObj.subject,
		    date: requestObj.date
                }, 
                { 
                    'Content-type': 'application/json; charset=UTF-8',
                    'Access-Control-Allow-Origin': '*'
                }
            );
          console.log('Add Product serverResponse: ', res.data);
          dispatch({type: "ADD_REQUEST", payload: res.data});

    }
}

export default AddRequestAction;