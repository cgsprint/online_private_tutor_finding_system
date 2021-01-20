import React, { Component } from 'react'

export class ParentTable extends Component {
    render() {
        return (
            <div>
                
                <h2 className="text-center">Parent List</h2>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <td>Parent Id</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Email Address</td>
                            <td>Address</td>
                        </tr>
                    </thead>

                    
                </table>

            </div>
        )
    }
}

export default ParentTable
