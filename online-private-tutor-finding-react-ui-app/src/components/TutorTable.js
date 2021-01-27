import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../actions/GetTutorList'
import * as actionCreators3 from '../actions/GetTutorById'
import * as actionCreators2 from '../actions/DeleteTutor'
import * as actionCreators4 from '../actions/UpdateTutorByAdmin'

import AdminUpdateTutor from './AdminUpdateTutor';
import { Redirect } from 'react-router';


export class TutorTable extends Component {

    constructor(props) {
        super(props)

        const token = localStorage.getItem('token');
    
        console.log("token is",token);
        let loggedIn = true

        if(token === null)
        {
            loggedIn = false
        }

    
    
        this.state = {
            renderForm: 'VIEW_TUTOR_TABLE',
            loggedIn,
            TutorObj: {
                tutorId: 0,
                tutorName: "",
                tutorUsername: "",
                tutorPassword: "",
                tutorSubject: "",
                tutorPhoneNo: 0,
                tutorAddress: "",
                tutorQualification: ""
                }
        }
    }
    

    componentDidMount() {
        this.props.onGetTutors();
    }

    delete = (tutorId) => {
        // console.log(tutorId)
        this.props.onDeleteTutor(tutorId);
    }

    update = (tutor) => {
        // console.log("Tutor obj is 1 "+tutor.tutorId)
        // this.props.onGetTutorById(tutorId);

        // const TutorObjCopy = {
        //     tutorId: tutor.tutorId,
        //     tutorName: tutor.name,
        //     tutorUsername: tutor.username,
        //     tutorPassword: tutor.password,
        //     tutorSubject: tutor.subject,
        //     tutorPhoneNo: tutor.phoneNumber,
        //     tutorAddress: tutor.address,
        //     tutorQualification: tutor.qualifications

        // }


        this.state.TutorObj.tutorID = tutor.tutorId
        this.state.TutorObj.tutorName = tutor.name
        this.state.TutorObj.tutorUsername = tutor.username
        this.state.TutorObj.tutorPassword = tutor.password
        this.state.TutorObj.tutorSubject = tutor.subject
        this.state.TutorObj.tutorPhoneNo = tutor.phoneNumber
        this.state.TutorObj.tutorAddress = tutor.address
        this.state.TutorObj.tutorQualification = tutor.qualifications


        this.setState({
            renderForm: 'VIEW_UPDATE_TUTOR',
            // TutorObj.tutorId : tutor.tutorId
            
        })


        // let TutorObj = {
        //     tutorId: tutor.tutorId,
        //     tutorName: tutor.name,
        //     tutorUsername: tutor.username,
        //     tutorPassword: tutor.password,
        //     tutorSubject: tutor.subject,
        //     tutorPhoneNo: tutor.phoneNumber,
        //     tutorAddress: tutor.address,
        //     tutorQualification: tutor.qualifications,

        // }

        // <Redirect to="/updatetutor" />

        console.log("Tutor obj is "+this.state.TutorObj.tutorUsername)

        // this.props.onGetTutorById(tutorId);

    }

    

    

    render() {

        

        if(this.state.loggedIn === false)
        {
            // return <Redirect to="/" />
            window.location.href = 'http://localhost:3000/';
        } 
        // let madeArr = Object.values(this.props.tutorsList)
        // console.log(this.props.tutorsList);
        // const tList = this.props.tutorsList;
        var render_form = this.state.renderForm;

        

        if(render_form === 'VIEW_TUTOR_TABLE')
        {
            if(this.props.tutorsList != null)
        {
        
            var tutorList=this.props.tutorsList.map((tutor,index)=>{
                return(
                    <tr key={index}>
                        <th>{tutor.tutorId}</th>
                        <td>{tutor.name}</td>
                        <td>{tutor.subject}</td>
                        <td>{tutor.phoneNumber}</td> 
                        <td>{tutor.address}</td> 
                        <td>{tutor.qualifications}</td> 
                        <td colSpan="2">
                            <button onClick={this.update.bind(this,tutor)} className="btn btn-info btn-sm">UPDATE</button>
                            <button onClick={this.delete.bind(this,tutor.tutorId)} className="btn btn-danger ml-5 btn-sm">DELETE</button>
                        </td>
                    </tr>
                )
            })
        }
            return (

           
            <div>
                
                <h2 className="text-center text-dark">Tutor List</h2>
                <table className="table table-striped text-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Phone No.</th>
                            <th scope="col">Address</th>
                            <th scope="col">Qualification</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tutorList}
                    </tbody>

                    
                    
                </table>
            </div>
            )
        }
        else if(render_form === 'VIEW_UPDATE_TUTOR')
        {
            return (
                <div>
                   <AdminUpdateTutor tutorObject={this.state.TutorObj}></AdminUpdateTutor>
                </div>
            )
        }
        else
        {
            return null
        }
    }
}


const mapStateToProps = (state) => {

    return {
        tutorsList:state.tutorsList,
        returnedMessage: state.returnedMessage,
        tutor: state.tutor,
        status: state.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetTutors: () => {
          return  dispatch(actionCreators.getAllTutors())
        },
        onDeleteTutor: (tutorId) => {
          return dispatch(actionCreators2.deleteTutor(tutorId))
        },
        onGetTutorById: (tutorId) => {
          dispatch(actionCreators3.getTutor(tutorId))
        }
        
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(TutorTable)


