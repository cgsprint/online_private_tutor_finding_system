import React, { Component } from 'react'

export class TutorTable extends Component {

    // componentDidMount() {
    //     this.props.onGetTutors()
    // }

    render() {
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
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Tejas</td>
                            <td>Maths</td>
                            <td>9089089989</td>
                            <td>Andheri</td>
                            <td>Bsc</td>
                        </tr>
                    </tbody>

                    
                    
                </table>
 
            </div>
        )
    }
}


// const mapStateToProps = (state) => {
//     return {
//         traineesList:state.traineesList,
//         returnedMessage: state.returnedMessage
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onGetTrainees: () => {
//           return  dispatch(actionCreated.getAllTrainees())
//         },
//         onDeleteTrainee: (traineeId, newTraineeObject) => {
//           return dispatch(actionCreated.deleteTrainee(traineeId, newTraineeObject))
//         },
//         clearState: () => {
//           return  dispatch(actionCreated.clearState())

//         }

//     }

// }

export default TutorTable

