import * as actionCreators from '../actions/ParentActions'
const initialState = {
    returnedMessage: 'data yet Found',
    ebookList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.GET_ALL_EBOOKS:
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

export default reducer
