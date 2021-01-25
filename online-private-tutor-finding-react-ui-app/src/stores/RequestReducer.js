const RequestReducer = (state={requests: []}, action) => {
    switch(action.type) {
        case 'ADD_REQUEST':
            state.requests.push(action.payload);
            return state;
       
        default:
            return state;

    }
}

export default RequestReducer;