import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreated from '../actions/TutorActions'


class TutorViewEbook extends Component {

    
    componentDidMount() {
        this.props.onViewEbooks()
    }

    
   

    render() {

        let ebooklist= this.props.ebooklist.map((ebook , index) => {
            return(
                <tr key={index}>
                <th>{ebook.ebookId}</th>
                <td>{ebook.title}</td>
                <td>{ebook.authorname}</td>
                <td>{ebook.url}</td>
                
                </tr>
                )
            })
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
                           ebooklist
                        }
                    </tbody>
                </table>
            </div>
        )
    }
        
        
    
}




const mapStateToProps = (state) => {
    return {
  ebooklist:state.ebooklist


    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {  
        onViewEbooks: () => {
            return dispatch(actionCreated.getAllEbooks())
          },
          clearState: () => {
            return  dispatch(actionCreated.clearState())
  
          }
    }
    
  }
  


  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TutorViewEbook))
  
