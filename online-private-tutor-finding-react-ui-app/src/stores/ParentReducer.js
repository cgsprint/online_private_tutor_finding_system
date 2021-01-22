import * as actionCreators from '../actions/ParentActions'

const initialState = {
    returnedMessage: 'data not Found',
    parentList: []
}
const parentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.ADD_Parent:
            let messageAfterAddition = action.data.message
            let listAfterAddition = action.data.parents
            console.log('Addition of parent')
            console.log(listAfterAddition)
            console.log(messageAfterAddition)
            return {
                returnedMessage: messageAfterAddition,
                traineesList: listAfterAddition
            }
            default:
            return state
    }
}
export default parentReducer;