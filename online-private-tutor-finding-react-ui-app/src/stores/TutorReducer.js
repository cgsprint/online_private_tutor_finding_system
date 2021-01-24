
import * as actionCreators from '../actions/TutorActions'


const initialState = {
    returnedMessage: 'data yet Found',
    ebooklist: []
}

const reducer = (state = initialState, action) => {
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
          case actionCreators.CLEAR_STATE:
                return {
                    returnedMessage: '',
                    ebooklist: []
                }
    
            default:
                return state
    }
}

export default reducer

