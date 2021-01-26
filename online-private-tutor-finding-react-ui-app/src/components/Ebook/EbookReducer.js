import * as actionCreators from '../actions/AddEbookAction'

const initialState = {
    returnedMessage: 'data not Found',
    ebookList: []
}
const EbookReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.ADD_EBOOK:
            let messageAfterAddition = action.data.message
            let listAfterAddition = action.data.ebookList
            console.log('Addition of ebook')
            console.log(listAfterAddition)
            console.log(messageAfterAddition)
            return {
                returnedMessage: messageAfterAddition,
                ebookList: listAfterAddition
            }
        default:
            return state
    }
}
export default EbookReducer;