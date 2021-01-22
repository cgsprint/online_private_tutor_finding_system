import * as actionCreators from '../actions/TutorActions'

const initialState = {
    returnedMessage: 'data yet Found',
    ebooklist: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case actionCreators.TUTOR_VIEW_EBOOK:
          let listOfEbooks = action.data.ebooklist
          let resMessage=action.data.resMessage
          console.log(action.data)
          console.log('List of Ebooks')
          console.log(listOfEbooks)
          if(listOfEbooks.length==0){
              resMessage='No Data Found'
          }
          return {
              returnedMessage: resMessage,
              ebooklist: listOfEbooks
          }

          case actionCreators.UPDATE_TRUTOR:
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