import * as actionCreators from '../actions/ValidateUser'
import * as actionCreators2 from '../actions/RegisterTutor'
import * as actionCreators3 from '../actions/GetTutorList'
import * as actionCreators4 from '../actions/DeleteTutor'
import * as actionCreators5 from '../actions/GetParentList'
import * as actionCreators6 from '../actions/GetTutorById'
import * as actionCreators7 from '../actions/UpdateTutorByAdmin'
import * as actionCreators8 from '../actions/AddEbookAction'
import * as actionCreators9 from '../actions/GetEbookAdmin'
import * as actionCreators10 from '../actions/UpdateEbookAction'

const initialState = {
    returnedMessage: '',
    tutorsList: [],
    parentsList: [],
    tutor: [],
    ebooksList: [],
    status: 0
}

const AdminReducer = (state= initialState,action) => {
    switch(action.type){
        case actionCreators.VALIDATE_USER:
            let resMessage1 = action.data.message
            let Reqstatus1 = action.status
            
            console.log(action);
            return {
                returnedMessage : resMessage1,
                status : Reqstatus1
            }
        case actionCreators2.REGISTER_TUTOR:
            // let resMessage2 = action.data.message
            // // let resMessage2;
            // let Reqstatus2 = action.status
            // console.log(resMessage2)
            // // if(Reqstatus2 === 200)
            // // {
            // //     resMessage2 = 'success'
            // // }
            // return {
            //     returnedMessage : resMessage2,
            //     status : Reqstatus2
            // }

            let rMessage
            let rStatus
            if(action.status === 200)
            {
                rMessage = action.data
                rStatus = action.status
            }
            else if(action.status === 0)
            {
                rMessage = ""
                rStatus = 0
            }
            else{
                rMessage = "Failed to register tutor."
                rStatus = 404
            }
            
            return {
                returnedMessage1: rMessage,
                status : rStatus
            }
        case actionCreators3.GET_ALL_TUTORS:
            console.log("in get tutors")
            console.log(action.data)
            let tList = action.data
           
            return {
                tutorsList: tList
            }
        case actionCreators4.DELETE_TUTOR:
            // console.log(action.data)
            let tListAfterDeletion = action.data
            
            return {
                tutorsList: tListAfterDeletion
            }  
        case actionCreators5.GET_ALL_PARENTS:

            // console.log(action.data)
            let pList= action.data
            
            return {
                parentsList: pList
            } 
        case actionCreators6.GET_TUTOR_BY_ID:
            console.log("in get tutor by id")
            // console.log(action.data)
            let tutorObj = action.data
            // console.log(tutorObj)
            
            return {
                tutor: tutorObj
            }  
        case actionCreators7.UPDATE_TUTOR:
            // console.log("in update tutor")
            // // console.log(action.data)
            // let tutorObj2 = action.data
            // console.log(tutorObj2)
            
            // return {
            //     tutor: tutorObj2
            // } 

            // console.log(action.status)
            let rMessage2
            let rStatus2
            if(action.status === 200)
            {
                rMessage2 = action.data
                rStatus2 = action.status
            }
            else if(action.status === 0)
            {
                rMessage2 = ""
                rStatus2 = 0
            }
            else{
                rMessage2 = "Failed to update tutor."
                rStatus2 = 404
            }
            
            return {
                returnedMessage: rMessage2,
                status : rStatus2
            } 
        case actionCreators8.ADD_EBOOK:

            // console.log(action.status)
            let rMessage3
            let rStatus3
            if(action.status === 200)
            {
                rMessage3 = action.data
                rStatus3 = action.status
            }
            else if(action.status === 0)
            {
                rMessage3 = ""
                rStatus3 = 0
            }
            else{
                rMessage3 = "Failed to add ebook."
                rStatus3 = 404
            }
            
            return {
                returnedMessage2: rMessage3,
                status : rStatus3
            }     
        case actionCreators9.GET_EBOOK:

            // console.log(action.data)
            let eList= action.data
            
            
            return {
                parentsList: eList
            } 
        case actionCreators10.UPDATE_EBOOK:
            let messageAfterUpdation = action.data.message
            let listAfterUpdation = action.data.ebookList
            console.log('Updating ebook')
            console.log(listAfterUpdation)
            console.log(messageAfterUpdation)
            return {
                returnedMessage: messageAfterUpdation,
                ebookList: listAfterUpdation
            }
        default:
            return state    
    }
}

export default AdminReducer