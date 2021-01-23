
import React, { Component } from 'react'

// import './style.css'

import { connect } from 'react-redux'
import * as actionCreated from '../actions/TutorActions'

// import './style.css'

 class ViewBookings extends Component {

    
    componentDidMount() {
        this.props.onGetBookings()
    }


    render() {
        return (
            <div>
                 <table className="table table-info demo-request-table">
                     <thead>
                         <tr>
                             <th scope="col">BookingId</th>
                             <th scope="col">ParentId</th>
                             <th scope="col">Subject</th>
                         </tr>
                     </thead>
                     <tbody>
                         {
                            this.props.bookingList.map((b) => (
                                <tr key={b.bookingId}>
                                     <td>{b.bookingId}</td>
                                     <td>{b.parentId}</td>
                                     <td>{b.subject}</td>

                                 </tr>
                            ))
                        }
                    </tbody> 
                 </table> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bookingList:state.bookingList,
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


