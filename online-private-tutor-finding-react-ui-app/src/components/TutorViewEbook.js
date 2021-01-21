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
        
            this.props.onViewEbooks() 
    }


    render() {

        let ebooklist= this.state.ebooklist.map((ebook , index) => {
            return(
                <tr key={index}>
                <th>{ebook.ebookId}</th>
                <td>{ebook.title}</td>
                <td>{ebook.author}</td>
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
        returnedMessage: state.returnedMessage
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        onViewEbooks: () => {
            return  dispatch(actionCreated.getAllEbooks())
          },
        clearState: () => {
            dispatch(actionCreators.clearState())
  
        }
  
    }
  
  }
  


  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TutorViewEbook))