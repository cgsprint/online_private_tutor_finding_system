import axios from 'axios'
import React, { Component } from 'react'
// import './style.css'

 class ViewBookings extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             bookingList: []
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:8080/bookedTutor',this.state)
        .then((res) => {
            this.setState({ bookingList: res.data.data})
         })
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
                        {/* {
                            this.state.bookingList.map((b) => (
                                <tr key={b.bookingId}>
                                    <td>{b.bookingId}</td>
                                    <td>{b.parentId}</td>
                                    <td>{b.subject}</td>

                                </tr>
                            ))
                        } */}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ViewBookings
