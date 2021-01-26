import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/ParentViewEbookAction'

 class ViewEbook extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
             renderForm: 'VIEW_EBOOK_TABLE',
             tId: 0
        }
    }

    componentDidMount() {
        this.props.onGetAllEbooks()
    }
    


    render() {

        var render_form = this.state.renderForm;
        console.log("render_form ", render_form)
        console.log("Ebook List " ,this.props.ebooksList)
        

        if(this.props.ebooksList!== null){
        
        var ebooksList = this.props.ebooksList.map((e,index) =>{
            return (
                <tr key={index}>
                    <th>{e.ebookid}</th>
                    <td>{e.title}</td>
                    <td>{e.authorname}</td>
                    <td>{e.url}</td>
                </tr>
            )
        })
        }
        if(render_form === 'VIEW_EBOOK_TABLE' ){
        return (
            <div>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th scope="col">EBookId</th>
                            <th scope="col">Title</th>
                            <th scope="col">AuthorName</th>
                            <th scope="col">Url</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ebooksList}
                    </tbody>
                </table>  
                
            </div>
        )
        }
        else
        {
            return "Table not found"
        } 
    }
}


const mapStateToProps = (state) => {
    console.log(state.ebooksList)
    console.log("Ebook Table")
    return {
    
        ebooksList:state.ebooksList
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetAllEbooks: () => {
          return  dispatch(actionCreators.getAllEbooks())
        }

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(ViewEbook)


