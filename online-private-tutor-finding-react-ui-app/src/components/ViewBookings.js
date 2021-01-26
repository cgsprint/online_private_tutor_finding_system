
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreated from '../actions/TutorActions'


 class ViewBookings extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             bookingList: []
        }
    }
    
    componentDidMount() {
        this.props.onGetBookings()
    }


    render() {

        let bookingList= () => {this.props.bookingsList.map((b,index)=>{
            return(
                <tr key={index}>
                    <th>{b.Id}</th>
                    <td>{b.parentId}</td>
                    <td>{b.subject}</td>
		</tr>
		)}
		)}
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
                        {bookingList}
                    </tbody>
                </table>

            </div>
        )
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


