//For Parent

import React, { Component } from 'react'
import { connect } from 'react-redux';
// import * as actionCreators from '../actions/GetTutorList'
// import * as actionCreators2 from '../actions/DeleteTutor'
import * as actionCreators from '../actions/ParentViewTutorActions'
import BookTutor from './BookTutor';
import RequestDemo from './RequestDemo';
import UpdateTutor from './UpdateTutor';


export class ViewTutorTable extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             renderForm: 'VIEW_TUTOR_TABLE',
             tId: 0,
             tutorSubject: '',
             parentId: 0,
             parentFullName: ''
        }
    }
    


    componentDidMount() {

        
        // this.props.onGetTutorById(tutorId);


        this.props.onGetTutors();
        // console.log("this.props.tutorsList ",this.props.tutorsList);

        const parentObject = localStorage.getItem("parentObj");
        const parentID =JSON.parse(parentObject).parentId;
        const parentName = JSON.parse(parentObject).parentFirstName+" "+JSON.parse(parentObject).parentLastName;


        console.log(parentID+" "+parentName);

        this.setState({
            parentId: parentID,
            parentFullName : parentName
        })
        

    }

    sendDemoRequest = (tutorId,tutorSubject) => {
        console.log(tutorId)
        this.setState({
            renderForm: 'SEND_DEMO_REQUEST',
            tId: tutorId,
            tutorSubject: tutorSubject
        })

        // const parentObject = localStorage.getItem("parentObj");
        // const parentId =JSON.parse(parentObject).parentId;
        // const parentName = JSON.parse(parentObject).parentName;

        // console.log(parentId+" "+parentName);

        // this.props.onDeleteTutor(tutorId);
    }

    bookTutor = (tutorId,tutorSubject) => {
        console.log(tutorId)
        this.setState({
            renderForm: 'BOOK_TUTOR',
            tId: tutorId,
            tutorSubject: tutorSubject
        })
    }

    render() {
        // let madeArr = Object.values(this.props.tutorsList)
        // console.log(this.props.tutorsList);
        
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
                                <button onClick={this.sendDemoRequest.bind(this,tutor.tutorId,tutor.subject)} className="btn btn-info btn-sm">SEND DEMO REQUEST</button>
                                <button onClick={this.bookTutor.bind(this,tutor.tutorId,tutor.subject)} className="btn btn-danger ml-5 btn-sm">BOOK TUTOR</button>
                            </td>
                        </tr>
                    )
                });

            }
            else
            {
                return (
                    <div>Empty tutors list</div>
                )
            }

          return (

           
            <div>
                
                <h2 className="text-center">Tutor List</h2>
                <table className="table table-striped">
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
            );
       
        }
        else if(render_form === 'SEND_DEMO_REQUEST')
        {
            return (
                <div>
                    {/* <UpdateTutor tutorId={this.state.tId}/> */}
                    <RequestDemo parentId={this.state.parentId} parentName={this.state.parentFullName} tutorId={this.state.tId} tutorSub={this.state.tutorSubject}/>
                </div>
            )
        }
        else if(render_form === 'BOOK_TUTOR')
        {
            return (
                <div>
                    {/* <UpdateTutor tutorId={this.state.tId}/> */}
                    <BookTutor parentId={this.state.parentId} parentName={this.state.parentFullName}  tutorId={this.state.tId}  tutorSub={this.state.tutorSubject}/>
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
        tutorsList: state.tutorsList,
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetTutors: () => {
            // console.log("mapDispathToProps")
            return  dispatch(actionCreators.getAllTutors())
        }
    }

}






export default connect(mapStateToProps, mapDispatchToProps)(ViewTutorTable)