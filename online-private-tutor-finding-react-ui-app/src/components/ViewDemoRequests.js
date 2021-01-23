
import React, { Component } from 'react'
import * as actionCreated from '../actions/TutorActions'
import { connect } from 'react-redux'

 class ViewDemoRequests extends Component {
    

    componentDidMount() {
        this.props.onGetDemoRequests()
    }

    Accept(Id) {
        this.props.onAcceptRequest(Id)
    }

    Decline(Id) {
        this.props.onDeclineRequest(Id)
    }
    

    render() {

            let demoRequestList = () => { this.state.demoRequestList.map((request, index) =>{
                return(
                <tr key={index}>
                 <th>{request.Id}</th>
                 <td>{request.tutorId}</td>
                 <td>{request.subject}</td>
                 <td>{request.localtime}</td>
                 <td>{request.localdate}</td>
                 <td>{request.parentId}</td>
                 <td>     
                 <button onClick={this.Accept.bind(this, request.Id)} className="btn btn-primary">Accept</button>
                 </td>
                 <td>
                 <button onClick={this.Decline.bind(this, request.Id)} className="btn btn-primary">Decline</button>
                 </td> 
                 </tr>
                )}
             ) }

        return (
            <div>
                <table className="table table-info demo-request-table">

                    <thead>

                        <tr>

                            <th scope="col">Id</th>

                            <th scope="col">TutorId</th>

                            <th scope="col">Subject</th>

                            <th scope="col">LocalTime</th>

                            <th scope="col">LocalDate</th>

                            <th scope="col">ParentId</th>

                            <th colSpan="2">Actions</th>

                        </tr>

                    </thead>

                <tbody>

                {demoRequestList}

                 </tbody>
                  


                 </table>
             </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        demoRequestList:state.demoRequestList,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetDemoRequests: () => {
          return  dispatch(actionCreated.getAllDemoRequests())
        },
        onAcceptRequest: () => {
            return dispatch(actionCreated.onAcceptRequest())
        },
        onDeclineRequest: () => {
            return dispatch(actionCreated.onDeclineRequest())
        },
        clearState: () => {
          return  dispatch(actionCreated.clearState())

        }

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(ViewDemoRequests)
