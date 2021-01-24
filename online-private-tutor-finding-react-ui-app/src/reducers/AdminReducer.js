import * as actionCreators from '../actions/ValidateUser'
import * as actionCreators2 from '../actions/RegisterTutor'

const initialState = {
    returnedMessage: '',
    tustorsList: [],
    status: 0
}

const AdminReducer = (state= initialState,action) => {
    switch(action.type){
        case actionCreators.VALIDATE_USER:
            let resMessage1 = action.data.resMessage
            let Reqstatus1 = action.status
            
            return {
                returnedMessage : resMessage1,
                status : Reqstatus1
            }
        case actionCreators2.REGISTER_TUTOR:
            let resMessage2 = action.data.message
            // let resMessage2;
            let Reqstatus2 = action.status
            console.log(resMessage2)
            // if(Reqstatus2 === 200)
            // {
            //     resMessage2 = 'success'
            // }
            return {
                returnedMessage : resMessage2,
                status : Reqstatus2
            }
        default:
            return state    
    }
}

export default AdminReducer