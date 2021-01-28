import * as actionCreators from '../actions/ValidateUser'
import * as actionCreators2 from '../actions/RegisterTutor'
import * as actionCreators3 from '../actions/GetTutorList'
import * as actionCreators4 from '../actions/DeleteTutor'
import * as actionCreators5 from '../actions/GetParentList'
import * as actionCreators6 from '../actions/GetTutorById'
import * as actionCreators7 from '../actions/UpdateTutorByAdmin'
import * as actionCreators8 from '../actions/AddEbookAction'
import * as actionCreators9 from '../actions/GetEbookListAdmin'
import * as actionCreators10 from '../actions/UpdateEbookAction'
import * as actionCreators11 from '../actions/DeleteEbook'
import * as update_tutor_profile from '../actions/TutorActions'
import * as add_parent from '../actions/ParentActions'
import * as get_ebook_for_tutor from '../actions/TutorActions'
import * as get_demo_requests from '../actions/TutorActions'
import * as send_demo_requests from '../actions/SendDemoRequest'
import * as book_tutor from '../actions/BookTutorAction'
import * as get_bookings from '../actions/TutorActions'
import * as parent_view_ebook_action from '../actions/ParentViewEbookAction'
import * as get_booked_tutors from '../actions/ParentBookedTutor'
import * as get_tutors_for_parent from '../actions/ParentViewTutorActions'


const initialState = {
    returnedMessage: '',
    tutorsList: [],
    parentsList: [],
    tutor: [],
    ebooksList: [],
    status: 0,
    adminOb: {},
    tutorOb: {},
    parentOb: {}
}

const AdminReducer = (state= initialState,action) => {
    switch(action.type){
        case actionCreators.VALIDATE_ADMIN:
            let resMessage1 = action.data.message
            let Reqstatus1 = action.status;
            if(action.data.adminLst != null)
            {
                var adminObject = {
                    adminId: action.data.adminLst[0].adminId,
                    adminName: action.data.adminLst[0].adminName,
                    adminUsername: action.data.adminLst[0].adminUsername,
                    adminPassword: action.data.adminLst[0].adminPassword
                }
            }
            else{
                resMessage1 = "Username and passord is incorrect"
            }
            
            
            // console.log("In Admin reducer",action.data.adminLst[0]);
            return {
                returnedMessage : resMessage1,
                status : Reqstatus1,
                adminOb : adminObject
            }

        case actionCreators.VALIDATE_TUTOR:
            let resMessage11 = action.data.message
            let Reqstatus11 = action.status;
            if(action.data.tutorLst != null)
            {
                
                var tutorObject = {
                    tutorId: action.data.tutorLst[0].tutorId,
                    tutorName: action.data.tutorLst[0].name,
                    tutorUsername: action.data.tutorLst[0].username,
                    tutorPassword: action.data.tutorLst[0].password,
                    tutorSubject: action.data.tutorLst[0].subject,
                    tutorPhoneNo: action.data.tutorLst[0].phoneNumber,
                    tutorAddress: action.data.tutorLst[0].address,
                    tutorQualifications: action.data.tutorLst[0].qualifications
                }
            }
            else
            {
                resMessage11 = "Username and passord is incorrect"
            }
            
            // console.log("In Admin reducer",action.data.adminLst[0]);
            return {
                returnedMessage : resMessage11,
                status : Reqstatus11,
                tutorOb : tutorObject
            }

        case actionCreators.VALIDATE_PARENT:
            let resMessage13 = action.data.message
            let Reqstatus13 = action.status;
            // console.log("Parent List is ",action.data.parentLst[0].username)
            if(action.data.parentLst != null)
            {
                var parentObject = {
                    parentId: action.data.parentLst[0].parentId,
                    parentFirstName: action.data.parentLst[0].firstName,
                    parentLastName: action.data.parentLst[0].lastName,
                    parentUsername: action.data.parentLst[0].username,
                    parentPassword: action.data.parentLst[0].password,
                    parentMobileNo: action.data.parentLst[0].mobileNo,
                    parentEmail: action.data.parentLst[0].email,
                    parentAddress: action.data.parentLst[0].address
                }
            }
            else{
                resMessage13 = "Username and passord is incorrect"
            }
            
            
            // console.log("In Admin reducer",action.data.adminLst[0]);
            return {
                returnedMessage : resMessage13,
                status : Reqstatus13,
                parentOb : parentObject
            }
        case actionCreators2.REGISTER_TUTOR:
            let rMessage
            let rStatus
            if(action.status === 200)
            {
                rMessage = action.data
                rStatus = action.status
            }
            else if(action.status === 0)
            {
                rMessage = ""
                rStatus = 0
            }
            else{
                rMessage = "Failed to register tutor."
                rStatus = 404
            }
            
            return {
                returnedMessage4: rMessage,
                status : rStatus
            }
        case add_parent.ADD_Parent:
            let messageAfterAddition = action.data
            // let listAfterAddition = action.data
            let Reqstatus = action.status
            console.log('Addition of parent')
            console.log(action)
            console.log(messageAfterAddition)
            return {
                register_parent_msg: messageAfterAddition,
                register_parent_status : Reqstatus
            }
        case actionCreators3.GET_ALL_TUTORS:
            console.log("in get tutors")
            console.log(action.data)
            let tList = action.data
            
            return {
                tutorsList: tList
            }
        case actionCreators4.DELETE_TUTOR:
            // console.log(action.data)
            let tListAfterDeletion = action.data
            
            return {
                tutorsList: tListAfterDeletion
            }  
        case actionCreators5.GET_ALL_PARENTS:

            // console.log(action.data)
            let pList= action.data
            
            return {
                parentsList: pList
            } 
        case actionCreators6.GET_TUTOR_BY_ID:
            console.log("in get tutor by id")
            // console.log(action.data)
            let tutorObj = action.data
            console.log("tutorObject is ",tutorObj.name)
            if(tutorObj != null)
            {
                var tutorObject2 = {
                    tutorId: tutorObj.tutorId,
                    tutorName: tutorObj.name,
                    tutorUsername: tutorObj.username,
                    tutorPassword: tutorObj.password,
                    tutorSubject: tutorObj.subject,
                    tutorPhoneNo: tutorObj.phoneNumber,
                    tutorAddress: tutorObj.address,
                    tutorQualifications: tutorObj.qualifications
                }
                // var tutorUpdationMsg = "Your profile has been updated"

            }
            else
            {
                var tutorUpdationMsg = "Values are not present "
            }


            return {
                tutor: tutorObject2,
                tutorUpdationMsg : tutorUpdationMsg
            }  
        case actionCreators7.UPDATE_TUTOR:
            // console.log("in update tutor")
            // // console.log(action.data)
            // let tutorObj2 = action.data
            // console.log(tutorObj2)
            
            // return {
            //     tutor: tutorObj2
            // } 

            // console.log(action.status)
            let rMessage2
            let rStatus2
            if(action.status === 200)
            {
                rMessage2 = action.data
                rStatus2 = action.status
            }
            else if(action.status === 0)
            {
                rMessage2 = ""
                rStatus2 = 0
            }
            else{
                rMessage2 = "Failed to update tutor."
                rStatus2 = 404
            }
            
            return {
                returnedMessage: rMessage2,
                status : rStatus2
            } 
        case actionCreators8.ADD_EBOOK:

            // console.log(action.status)
            let rMessage3
            let rStatus3
            if(action.status === 200)
            {
                rMessage3 = action.data
                rStatus3 = action.status
            }
            else if(action.status === 0)
            {
                rMessage3 = ""
                rStatus3 = 0
            }
            else{
                rMessage3 = "Failed to add ebook."
                rStatus3 = 404
            }
            
            return {
                returnedMessage2: rMessage3,
                status : rStatus3
            }     
        case actionCreators9.GET_ALL_EBOOKS:

            // console.log(action.data)
            let eList= action.data
            
            console.log("eList"+eList);
            return {
                ebooksList: eList
            } 
        case actionCreators10.UPDATE_EBOOK:
            let messageAfterUpdation = action.data.message
            let listAfterUpdation = action.data.ebookList
            console.log('Updating ebook')
            console.log(listAfterUpdation)
            console.log("action staus for update ebook",action.data.status)
            return {
                returnedMessage3: messageAfterUpdation,
                ebookList: listAfterUpdation,
                status: action.data.status
            }
        case actionCreators11.DELETE_EBOOK:
        // console.log(action.data)
            let eListAfterDeletion = action.data
            // console.log("eListAfterDeletion",eListAfterDeletion)
            return {
                ebooksList: eListAfterDeletion
            } 

        case update_tutor_profile.UPDATE_TUTOR_PROFILE:
            let messageAfterUpdation2 = action.data.message
            let listAfterUpdation2 = action.data.tutor
            console.log('Updating tutor')
            console.log(listAfterUpdation2)
            console.log(messageAfterUpdation2)
            return {
                tutorUpdationMsg: messageAfterUpdation2,
                tutorsList: listAfterUpdation2
            }

        case get_ebook_for_tutor.TUTOR_VIEW_EBOOK:

            console.log(action.data)
            let ebookList= action.data
            
            console.log("eList"+ebookList);
            return {
                ebooksList: ebookList
            } 
        case get_demo_requests.GET_DEMO_REQUESTS:

            console.log(action.data)
            let requestList= action.data
            
            console.log("requestList"+requestList);
            return {
                requestsList: requestList
            }
        case send_demo_requests.SEND_DEMO_REQUEST:

            console.log(action.status)

            let rMessage4
            let rStatus4
            // if(action.status === 200)
            // {
            //     rMessage4 = action.data
            //     rStatus4 = action.status
            // }
            // else if(action.status === 0)
            // {
            //     rMessage4 = ""
            //     rStatus4 = 0
            // }
            // else{
            //     rMessage4 = "Failed to send demo request."
            //     rStatus4 = 404
            // }
            
            return {
                returnedMessage3: rMessage4,
                status : action.status
            } 
        case book_tutor.BOOK_TUTOR:
            console.log(action);
            return {
                status: action.status
            } 
        case parent_view_ebook_action.GET_ALL_EBOOKS:

            // console.log(action)
            // let requestList= action.data
            
            console.log("Booking list",action.data);
            return {
                ebooksList: action.data
                } 
        case get_booked_tutors.GET_BOOKED_TUTOR:

            // console.log(action)
            // let requestList= action.data
            
            console.log("Booked Tutors list",action.data);
            return {
                bookedTutorsList: action.data
                } 
        case get_bookings.GET_ALL_BOOKINGS_LIST:

            // console.log(action)
            // let requestList= action.data
            
            console.log("Booking list",action.data);
            return {
                bookingList: action.data
                } 
        case get_tutors_for_parent.GET_ALL_TUTORS:
            let listOfTutors = action.data;
            let resMessage=action.data.resMessage
            console.log(action.data)
            console.log('List of Tutors')
            console.log(listOfTutors)
            
            return {
                returnedMessage: resMessage,
                tutorsList: listOfTutors
            }    
        default:
            return state    
    }
}

export default AdminReducer