import React, { Component } from 'react'

 class ViewEBook extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             ebookList: []
        }
    }
    


    render() {

        let ebookList = this.state.ebookList.map((e,index) =>{
            return (
                <tr key={index}>
                    <td>{e.ebookid}</td>
                    <td>{e.title}</td>
                    <td>{e.authorname}</td>
                    <td>{e.url}</td>
                </tr>
            )
        })

        return (
            <div>
                <table className="table table-info demo-request-table">
                    <thead>
                        <tr>
                            <th scope="col">EBookId</th>
                            <th scope="col">Title</th>
                            <th scope="col">AuthorName</th>
                            <th scope="col">Url</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ebookList}
                    </tbody>
                </table>    
            </div>
        )
    }
}

export default ViewEBook
