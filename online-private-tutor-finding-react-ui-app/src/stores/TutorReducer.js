
import * as actionCreators from '../actions/TutorActions'


const initialState = {
    returnedMessage: 'data yet Found',
    ebooklist: [],
    requestsList: [],
    bookingsList: []
}

const tutorReducer = (state = initialState, action) => {
  switch (action.type) {
      case actionCreators.TUTOR_VIEW_EBOOK:
          let listOfEbooks = action.data
          
          return {
             
              ebooklist: listOfEbooks
          }

          case actionCreators.UPDATE_TUTOR:
            let messageAfterUpdation = action.data.message
            let listAfterUpdation = action.data.tutor
            console.log('Updating trainee')
            console.log(listAfterUpdation)
            console.log(messageAfterUpdation)
            return {
                returnedMessage: messageAfterUpdation,
                traineesList: listAfterUpdation
            }
            case actionCreators.GET_DEMO_REQUESTS:
                let listofrequests = action.data
                
                console.log(action.data)
                console.log('List of requests')
                console.log(listofrequests)
                
                return {
                    
                    requestsList: listofrequests
                }
                case actionCreators.GET_ALL_BOOKINGS:
                    let listofbookings = action.data
                    
                    console.log(action.data)
                    console.log('List of requests')
                    console.log(listofbookings)
                    
                    return {
                        
                        bookingsList: listofbookings
                    }
          case actionCreators.CLEAR_STATE:
                return {
                    returnedMessage: '',
                    ebooklist: []
                }
    
            default:
                return state
    }
}

export default tutorReducer

