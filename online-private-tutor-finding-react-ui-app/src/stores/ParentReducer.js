import * as actionCreators from '../actions/ParentActions'
import * as actionCreators2 from '../actions/ParentViewTutorActions'
import * as actionCreators3 from '../actions/ParentViewEbookAction'
import * as actionCreators4 from '../actions/ParentBookedTutor'

const initialState = {
    returnedMessage: 'data not Found',
    tutorsList: [],
    ebooksList: [],
    bookedtutorsList: []
}
const parentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators2.GET_ALL_TUTORS:
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
            case actionCreators3.GET_ALL_EBOOKS:
                let listOfEbooks = action.data;
                // 
                // console.log(action.data)
                console.log('List of ebooks')
                console.log(listOfEbooks)
                
                return {
                    
                    ebooksList: listOfEbooks
                }
                case actionCreators4.GET_BOOKED_TUTOR:
                    let listOfbookedTutor = action.data;
                    
                    console.log(action.data)
                    console.log('List of bookedTutor')
                    console.log(listOfbookedTutor)
                    
                    return {
                        
                        bookedtutorsList: listOfbookedTutor
                    }
            default:
            return state
    }
}
export default parentReducer;