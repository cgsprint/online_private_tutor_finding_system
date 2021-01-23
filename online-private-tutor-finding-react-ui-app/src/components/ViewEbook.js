import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreated from '../actions/ParentActions'

 class ViewEbook extends Component {

    componentDidMount() {
        this.props.onGetAllEbooks()
    }
    


    render() {

        let ebookList = this.props.ebookList.map((e,index) =>{
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

const mapStateToProps = (state) => {
    return {
        ebookList:state.ebookList
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetAllEbooks: () => {
          return  dispatch(actionCreated.getAllEbooks())
        }

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(ViewEbook)


