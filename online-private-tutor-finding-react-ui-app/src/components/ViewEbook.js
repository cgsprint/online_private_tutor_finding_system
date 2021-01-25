import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreated from '../actions/ParentViewEbookAction'

 class ViewEbook extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
             renderForm: ' VIEW_EBOOK_TABLE',
             tId: 0
        }
    }

    componentDidMount() {
        this.props.onGetAllEbooks()
    }
    


    render() {

        var render_form = this.state.renderForm;
        if(this.props.ebookList!== null){
        
        var ebookList = this.props.ebooksList.map((e,index) =>{
            return (
                <tr key={index}>
                    <td>{e.ebookid}</td>
                    <td>{e.title}</td>
                    <td>{e.authorname}</td>
                    <td>{e.url}</td>
                </tr>
            )
        })
        }
        if(render_form=== 'VIEW_EBOOK_TABLE' ){
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
        else
        {
            return null
        } 
    }
}


const mapStateToProps = (state) => {
    return {
        ebooksList:state.ebooksList
        
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


