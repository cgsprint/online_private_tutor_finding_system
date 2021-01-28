import React, { Component } from 'react';


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreated from '../actions/TutorActions'

import axios from 'axios'


class TutorViewEbook extends Component {

    
    componentDidMount() {
        this.props.onViewEbooks()
    }

    
   

    render() {

        if(this.props.ebooklist != null)
        {

        

        var ebooklist= this.props.ebooklist.map((ebook , index) => {
            return(
                <tr key={index}>
                <th>{ebook.ebookId}</th>
                <td>{ebook.title}</td>
                <td>{ebook.authorname}</td>
                <td>{ebook.url}</td>
                
                </tr>
                )
            })
        }
        else
        {
            return (
                <div>Empty list</div>
            )
        }
        return (
            <div>
                <h2 class="text-center text-light">Ebooks List</h2>
                <table className="table  demo-request-table table-striped text-light"> 
                {/* demo-request-table table-info */}
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

    console.log("state.ebooklist ",state.ebooklist)
    return {
        ebooklist:state.ebooksList


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
  
