import React, { Component } from 'react'

export class ParentTable extends Component {
    render() {
        return (
            <div>
                
                <h2 className="text-center">Parent List</h2>
                <table className="table table-stripped">
                    <thead>
                       <tr>
                            <th scope="col">Parent Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email Address</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Santacruz</td>
                        </tr>
                        
                    </tbody>
                    
                </table>


            </div>
        )
    }
}

export default ParentTable
