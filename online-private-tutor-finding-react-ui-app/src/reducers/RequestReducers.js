import * as actionCreators from '../actions/TutorActions.js'


const initialState = {
    returnedMessage: 'data yet Found',
    demoRequestsList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.GET_DEMO_REQUESTS:
            let listofrequests = action.data.demoRequestsList
            let resMessage=action.data.resMessage
            console.log(action.data)
            console.log('List of requests')
            console.log(listofrequests)
            if(listofrequests.length===0){
                resMessage='No Data Found'
            }
            return {
                returnedMessage: resMessage,
                demoRequestsList: listofrequests
            }

        case actionCreators.DECLINE_REQUEST:
            let listAfterDecline = action.data.demoRequestsList
            
            
            console.log(listAfterDecline)
            
            
            
           
            return {
               
                demoRequestsList: listAfterDecline

            }

        case actionCreators.ACCEPT_REQUEST:
            let messageAfterAccept = action.data.message
            let listAfterAccept = action.data.demoRequestsList
            
            console.log(listAfterAccept)
            
            return {
                returnedMessage: messageAfterAccept,
                demoRequestsList: listAfterAccept
            }

       
 

       
        case actionCreators.CLEAR_STATE:
            return {
                returnedMessage: '',
                demoRequestsList: []
            }

        default:
            return state
    }
}

export default reducer;
