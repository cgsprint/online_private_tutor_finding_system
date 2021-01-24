import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreated from '../actions/ParentViewEbookAction'

 class ViewEbook extends Component {

    // constructor(props) {
        // super(props)
        // 
        // this.state = {
            //  renderForm: ' VIEW_EBOOK_TABLE',
            //  tId: 0
        // }
    // }

    componentDidMount() {
        this.props.onGetAllEbooks()
    }
    


    render() {

        // var render_form = this.state.renderForm;

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
        // if(render_form=== 'VIEW_EBOOK_TABLE' ){
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


