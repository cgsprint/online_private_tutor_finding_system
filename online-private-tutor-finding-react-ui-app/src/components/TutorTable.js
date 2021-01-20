import React, { Component } from 'react'

export class TutorTable extends Component {
    render() {
        return (
            <div>
                
                <h2 className="text-center">Tutor List</h2>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Subject</td>
                            <td>Phone No.</td>
                            <td>Address</td>
                            <td>Qualification</td>
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

export default TutorTable

