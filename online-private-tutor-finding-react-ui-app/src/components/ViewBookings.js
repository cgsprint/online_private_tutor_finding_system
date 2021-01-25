
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
        this.props.onGetBookings()
    }


    render() {

        var render_form = this.state.renderForm;
        if(this.props.bookingsList!== null)
        {
        var bookingsList =this.props.bookingsList.map((b,index)=>{
            return(
                <tr key={index}>
                    <th>{b.Id}</th>
                    <td>{b.parentId}</td>
                    <td>{b.subject}</td>
		</tr>
		)}
        )}
        if(render_form === 'VIEW_BOOKINGS_TABLE')
{
        return (
            <div>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th scope="col">BookingId</th>
                            <th scope="col">ParentId</th>
                            <th scope="col">Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingsList}
                    </tbody>
                </table>
            </div>
        )
        }   
    }
}

const mapStateToProps = (state) => {
    return {
        bookingsList:state.bookingsList,
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetBookings: () => {
          return  dispatch(actionCreated.getAllBookings())
        },
        clearState: () => {
          return  dispatch(actionCreated.clearState())

        }

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(ViewBookings)


