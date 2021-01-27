import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreated2 from '../actions/ParentViewTutorActions'

 class ViewTutor extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tutors: [],
             message: ''
        }
    }
    componentDidMount() {
        this.props.onGetTutors()
    }
    myfetch(){
        // let URL ='http://localhost:8080/parent/viewAllTutor'
        // axios.get(URL)
        //     .then((res) => {
        //         this.setState({
        //             tutors: res.data
        //         })
        //         console.log(res.data)
        //     })
    }
    

    
    render() {

        if(this.props.tutors !== null)
        {

        
        var tutorsList= () =>{ this.props.tutors.map((tutor , index) => {
            return(
                <tr key={index}>
                <th>{tutor.tutorId}</th>
                <td>{tutor.name}</td>
                <td>{tutor.subject}</td>
                <td>{tutor.phoneNumber}</td>
                <td>{tutor.address}</td>
                <td>{tutor.qualifications}</td>
                <td>
                        <button className="btn btn-primary mr-3">Request Demo</button>
                        <button className="btn btn-primary">Book Tutor</button>
                </td>
                </tr>
                )
                
            })}
        }
        return (
            <div className="tutor-table-div">
                <div>
                    <h1>View Tutor</h1>
                </div>
                <div style={{marginLeft:'200px',marginRight:'200px'}}>
                <table className="table table-warning tutor-table">
                    <thead>
                        <tr>
                            <th scope="col">Tutor Id</th>
                            <th scope="col">Tutor Name</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Tutor PhoneNumber</th>
                            <th scope="col">Tutor Address</th>
                            <th scope="col">Qualification</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tutorsList}
                    </tbody>
                </table>
                </div>
               
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        tutorsList:state.tutorsList,
        returnedMessage: state.returnedMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetTutors: () => {
            console.log("To get Tutor")
          return  dispatch(actionCreated2.getAllTutors())
        },
        clearState: () => {
            return  dispatch(actionCreated2.clearState())
  
          }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ViewTutor))
