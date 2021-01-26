import * as actionCreators from '../actions/ParentActions'
import * as actionCreated2 from '../actions/ParentViewTutorActions'
import * as actionCreated3 from '../actions/ParentViewEbookAction'

const initialState = {
    returnedMessage: 'data not Found',
    tutorsList: [],
    status: 0
}
const parentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreated2.GET_ALL_TUTORS:
            let listOfTutors = action.data;
            let resMessage=action.data.resMessage
            console.log(action.data)
            console.log('List of Tutors')
            console.log(listOfTutors)
            
            return {
                returnedMessage: resMessage,
                tutorsList: listOfTutors
            }
        case actionCreators.ADD_Parent:
            let messageAfterAddition = action.data.message
            let listAfterAddition = action.data
            let Reqstatus1 = action.status
            console.log('Addition of parent')
            console.log(listAfterAddition)
            console.log(messageAfterAddition)
            return {
                returnedMessage: messageAfterAddition,
                status : Reqstatus1
            }
            case actionCreated3.GET_ALL_EBOOKS:
                let listOfEbooks = action.data.ebookList
                
                console.log(action.data)
                console.log('List of ebooks')
                console.log(listOfEbooks)
                
                return {
                    
                    ebookList: listOfEbooks
                }
            default:
            return state
    }
}
export default parentReducer;