import React, { Component } from 'react'

 class ViewBookedTutor extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             bookedtutorList: []
        }
    }
    


    render() {

        let bookedtutorList = this.state.bookedtutorList.map((b,index) =>{
            return (
                <tr key={index}>
                    <td>{b.tutorid}</td>
                    <td>{b.name}</td>
                    <td>{b.address}</td>
                    <td>{b.subject}</td>
                    <td>{b.qualification}</td>
                    <td>{b.phoneno}</td>
                </tr>
            )
        })

        return (
            <div>
                <table className="table table-info demo-request-table">
                    <thead>
                        <tr>
                            <th scope="col">TutorId</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Qualification</th>
                            <th scope="col">Phone no</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookedtutorList}
                    </tbody>
                </table>  

            </div>
        )
    }
}

export default ViewBookedTutor
