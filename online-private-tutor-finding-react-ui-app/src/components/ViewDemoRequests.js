
import React, { Component } from 'react'
import * as actionCreators from '../actions/TutorActions'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'


export class ViewDemoRequest extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             renderForm: 'VIEW_DEMO_REQUEST_TABLE',
             tId: 0
        }
    }
    


    componentDidMount() {
        const tutor = localStorage.getItem("tutorObj")
        console.log(JSON.parse(tutor).tutorId)
        const tutorId = JSON.parse(tutor).tutorId
        this.props.onGetDemoRequests(tutorId);
    }

    accept = (Id) => {
        // console.log(Id)
        this.props.onAcceptRequest(Id);
    }

    decline = (Id) => {
        // console.log(tutorId)
       this.props.onDeclineRequest(Id)
    }

    render() {
       
        
        var render_form = this.state.renderForm;
        if(this.props.requestsList!= null){
        var requestsList= this.props.requestsList.map((request,index)=>{
            return(
                <tr key={index}>
                    <th>{request.requestId}</th>
                    {/* <td>{request.tutorID}</td> */}
                    <td>{request.subject}</td>
                    <td>{request.localTime}</td> 
                    <td>{request.localDate}</td> 
                    <td>{request.parentName}</td> 
                     {/* <td colSpan="2">
                        <button onClick={this.accept.bind(this,request.Id)} className="btn btn-info btn-sm">ACCEPT</button>
                        <button onClick={this.decline.bind(this,request.Id)} className="btn btn-danger ml-5 btn-sm">DECLINE</button>
                    </td>  */}
                </tr>
            )
        })
    
}
        if(render_form === 'VIEW_DEMO_REQUEST_TABLE')
        {
            return (

           
            <div>
                
                <h2 className="text-center text-light">Demo Request List</h2>
                <table className="table table-striped text-light">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            {/* <th scope="col">TutorId</th> */}
                            <th scope="col">Subject</th>
                            <th scope="col">Time</th>
                            <th scope="col">Date</th>
                            <th scope="col">Parent Name</th>
                            {/* <th scope="col">Actions</th> */}
                        </tr>
                    </thead>

                    <tbody>
                        {requestsList}
                    </tbody>

                    
                    
                </table>
             
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
        requestsList:state.requestsList,
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetDemoRequests: (tutorId) => {
          return  dispatch(actionCreators.getAllDemoRequests(tutorId))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ViewDemoRequest))
