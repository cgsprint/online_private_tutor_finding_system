import * as actionCreators from '../actions/ParentActions'
import * as actionCreated2 from '../actions/ParentViewTutorActions'

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
            default:
            return state
    }
}
export default parentReducer;