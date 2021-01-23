//For Parent

import React, { Component } from 'react'
import { connect } from 'react-redux';
// import * as actionCreators from '../actions/GetTutorList'
// import * as actionCreators2 from '../actions/DeleteTutor'
import * as actionCreators from '../actions/ParentViewTutorActions'
import UpdateTutor from './UpdateTutor';


export class ViewTutorTable extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             renderForm: 'VIEW_TUTOR_TABLE',
             tId: 0
        }
    }
    


    componentDidMount() {
        this.props.onGetTutors();
    }

    // delete = (tutorId) => {
    //     // console.log(tutorId)
    //     this.props.onDeleteTutor(tutorId);
    // }

    // update = (tutorId) => {
    //     // console.log(tutorId)
    //     this.setState({
    //         renderForm: 'VIEW_UPDATE_TUTOR',
    //         tId: tutorId
    //     })
    // }

    render() {
        // let madeArr = Object.values(this.props.tutorsList)
        // console.log(this.props.tutorsList);
        
        var render_form = this.state.renderForm;

        let tutorList=this.props.tutorsList.map((tutor,index)=>{
            return(
                <tr key={index}>
                    <th>{tutor.tutorId}</th>
                    <td>{tutor.name}</td>
                    <td>{tutor.subject}</td>
                    <td>{tutor.phoneNumber}</td> 
                    <td>{tutor.address}</td> 
                    <td>{tutor.qualifications}</td> 
                    {/* <td colSpan="2">
                        <button onClick={this.update.bind(this,tutor.tutorId)} className="btn btn-info btn-sm">UPDATE</button>
                        <button onClick={this.delete.bind(this,tutor.tutorId)} className="btn btn-danger ml-5 btn-sm">DELETE</button>
                    </td> */}
                </tr>
            )
        })

        if(render_form === 'VIEW_TUTOR_TABLE')
        {
            return (

           
            <div>
                
                <h2 className="text-center">Tutor List</h2>
                <table className="table table-stripped">
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
        // else if(render_form === 'VIEW_UPDATE_TUTOR')
        // {
        //     return (
        //         <div>
        //             <UpdateTutor tutorId={this.state.tId}/>
        //         </div>
        //     )
        // }
        // else
        // {
        //     return null
        // }
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
          return  dispatch(actionCreators.getAllTutors())
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ViewTutorTable)