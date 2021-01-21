import React, { Component } from 'react';
import axios from 'axios'

class TutorViewEbook extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             ebooklist: []
        }
    }       
    
    componentDidMount() {
        axios.get('http://localhost:8080/viewEbook',this.state)
        .then((res) => {
            this.setState({ ebooklist: res.data.data})
         })
    }


    render() {
        return (
            <div>
                <table className="table table-info demo-request-table">
                    <thead>
                        <tr>
                            <th scope="col">EbookId</th>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                             <th scope="col">Url</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.ebooklist.map((b) => (
                                <tr key={b.ebookId}>
                                    <td>{b.ebookId}</td>
                                    <td>{b.title}</td>
                                    <td>{b.author}</td>
                                    <td>{b.url}</td>
                                    <td>
                                               
                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
        
        
    
}

export default TutorViewEbook;