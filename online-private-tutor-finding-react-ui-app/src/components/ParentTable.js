import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../actions/GetParentList'
import { Redirect } from "react-router-dom";



export class ParentTable extends Component {

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
             loggedIn
        }

        
    }

    componentDidMount() {
        this.props.onGetParents();
    }

    

    render() {

        if(this.state.loggedIn === false)
        {
            // return <Redirect to="/" />
            window.location.href = 'http://localhost:3000/';
        }

        if(this.props.parentsList != null)
        {
        
        var parentList=this.props.parentsList.map((parent,index)=>{
            return(
                <tr key={index}>
                    <th>{parent.parentId}</th>
                    <td>{parent.firstName}</td>
                    <td>{parent.lastName}</td>
                    <td>{parent.mobileNo}</td>
                    <td>{parent.email}</td>
                    <td>{parent.address}</td> 
                    
                </tr>
            )
        })

    }
    else{
        return (
            <div>Empty list</div>
        )
    }
        return (

            
            <div>
                
                <h2 className="text-center text-dark">Parent List</h2>
                <table className="table table-striped text-dark">
                    <thead>
                       <tr>
                            <th scope="col">Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Mobile No.</th>
                            <th scope="col">Email Address</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                      {parentList}
                    </tbody>
                    
                </table>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        parentsList:state.parentsList,
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetParents: () => {
          return  dispatch(actionCreators.getAllParents())
        }
        // },
        // onDeleteTutor: (traineeId) => {
        //   return dispatch(actionCreators2.deleteTutor(traineeId))
        // }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ParentTable)

