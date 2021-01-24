import * as actionCreators from '../actions/TutorActions'

const initialState = {
    returnedMessage: 'data not Found',
    requestList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.GET_DEMO_REQUESTS:
            let listofrequests = action.data.demoRequestsList
            
            console.log(action.data)
            console.log('List of requests')
            console.log(listofrequests)
            
            return {
                
                demoRequestsList: listofrequests
            }

        case actionCreators.DECLINE_REQUEST:
            let listAfterDecline = action.data.demoRequestsList
            
            console.log(listAfterDecline)
          
           
            return {
               
                demoRequestsList: listAfterDecline

            }

        case actionCreators.ACCEPT_REQUEST:
            
            let listAfterAccept = action.data.demoRequestsList
            
            console.log(listAfterAccept)
            
            return {
                
                demoRequestsList: listAfterAccept
            }

       
 

       
        case actionCreators.CLEAR_STATE:
            return {
             
                demoRequestsList: []
            }

        default:
            return state
    }
}

export default reducer;
