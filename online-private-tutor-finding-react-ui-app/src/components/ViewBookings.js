
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreated from '../actions/TutorActions'


 class ViewBookings extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            renderForm: 'VIEW_BOOKINGS_TABLE',
            tId: 0
        }
    }
    
    componentDidMount() {

        const tutor = localStorage.getItem("tutorObj")
        console.log(JSON.parse(tutor).tutorId)
        const tutorId = JSON.parse(tutor).tutorId
        this.props.onGetBookings(tutorId)
    }


    render() {

        var render_form = this.state.renderForm;
       
        if(this.props.bookingsList != null)
        {
            var bookingList =this.props.bookingsList.map((b,index)=>{
                return(
                    <tr key={index}>
                        <th>{b.parentName}</th>
                        <td>{b.subject}</td>
                        <td>{b.localTime}</td>
                        <td>{b.localDate}</td>
            </tr>
            )}
        )}
        else
        {
            return(
                <div>List is empty</div>
            )
        }
        if(render_form === 'VIEW_BOOKINGS_TABLE')
        {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {/* <th scope="col">Booking Id</th> */}
                            <th scope="col">Parent Name</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Time</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingList}
                    </tbody>
                </table>

            </div>
        )
        }   
    }
}

const mapStateToProps = (state) => {
    return {
        bookingsList: state.bookingList,
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetBookings: (tutorId) => {
          return  dispatch(actionCreated.getAllBookings(tutorId))
        },
        clearState: () => {
          return  dispatch(actionCreated.clearState())

        }

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(ViewBookings)


