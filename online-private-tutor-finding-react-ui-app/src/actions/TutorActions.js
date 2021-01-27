

import axios from 'axios'

import { TUTOR_BASE_URL } from '../utils/constants'
export const UPDATE_TUTOR_PROFILE = 'UPDATE_TUTOR_PROFILE'
export const TUTOR_VIEW_EBOOK = 'TUTOR_VIEW_EBOOK'
export const GET_DEMO_REQUESTS = 'GET_DEMO_REQUESTS'
export const GET_ALL_BOOKINGS = 'GET_ALL_BOOKINGS'
export const ACCEPT_REQUEST = 'ACCEPT_REQUEST'
export const DECLINE_REQUEST = 'DECLINE_REQUEST'
export const CLEAR_STATE = 'CLEAR_STATE'



const BASE_URL = 'http://localhost:8080/'

const updateTutorAction = (data) => {
    return {
        type: UPDATE_TUTOR_PROFILE,
        data
    }
}
export const updateTutor = (newTutorDetails) => {
    return (dispatch) => {
        axios.put(BASE_URL+'updateTutor', newTutorDetails)
            .then((response) => {
                alert("Tutor Updated added")
                dispatch(updateTutorAction(response.data))
            })
    }
}


const TutorViewEbookAction = (data) => {
    return {
        type: TUTOR_VIEW_EBOOK,
        data
    }
}
export const getAllEbooks = () => {
    return (dispatch) => {
        axios.get(BASE_URL+'viewEbook')
            .then((response) => {
                dispatch(TutorViewEbookAction(response.data))
                
            })
    }
}

const getDemoRequestsAction = (data) => {
    return {
        type: GET_DEMO_REQUESTS,
        data
    }
}
export const getAllDemoRequests = () => {
    return (dispatch) => {
        axios.get(TUTOR_BASE_URL + '/request')
            .then((response) => {
                dispatch(getDemoRequestsAction(response.data))
                
            })
    }
}

const getAllBookingsAction = (data) => {
    return {
        type: GET_ALL_BOOKINGS,
        data
    }
}
export const getAllBookings = () => {
    return (dispatch) => {
        axios.get(TUTOR_BASE_URL + '/bookings')
            .then((response) => {
                dispatch(getAllBookingsAction(response.data))
                
            })
    }
}

const acceptRequestAction = (data) => {

    return {

        type: ACCEPT_REQUEST,

        data

    }

}

export const onAcceptRequest = (Id) => {

    return (dispatch) => {

        axios.delete(BASE_URL +(Id) )

            .then((response) => {

                dispatch(acceptRequestAction(response.data))

            })

    }

}

const declineRequestAction = (data) => {

    return {

        type: DECLINE_REQUEST,

        data

    }

}

export const onDeclineRequest = (Id) => {

    return (dispatch) => {

        axios.delete(BASE_URL +(Id) )

            .then((response) => {

                dispatch(declineRequestAction(response.data))

            })

    }

}


//action to clear state
const clearStateAction = (data) => {
    return {
        type: CLEAR_STATE,
        data
    }
}

//clear state function
export const clearState = () => {
    return (dispatch) => {
        dispatch(clearStateAction())
    }
}


