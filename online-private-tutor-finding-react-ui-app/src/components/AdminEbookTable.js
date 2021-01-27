import React, { Component } from "react";
import { connect } from 'react-redux';
import * as  actionCreators   from '../actions/GetEbookListAdmin'
import * as  actionCreators2   from '../actions/DeleteEbook';
import UpdateEbook from "./UpdateEbook";


class AdminEbookTable extends Component {

  constructor(props) {
    super(props)

    const token = localStorage.getItem('token');
    
    console.log("token is",token);
    let loggedIn = true

    if(token === null)
    {
        loggedIn = false
    }

    this.state = {
      loggedIn,
      renderForm: 'VIEW_EBOOK_TABLE',
      EbookObj: {
        ebookId: 0,
        ebookTitle: "",
        ebookAuthorname: "",
        ebookUrl: ""
        }

    }
    
  }
  

    componentDidMount()
    {
        this.props.onGetEbooks();
    }

    update(ebook)
    {
      this.state.EbookObj.ebookID = ebook.ebookId
      this.state.EbookObj.ebookTitle = ebook.title
      this.state.EbookObj.ebookAuthorname = ebook.authorname
      this.state.EbookObj.ebookUrl =ebook.url

      this.setState({
        renderForm: 'UPDATE_EBOOK',
        // TutorObj.tutorId : tutor.tutorId
        
    })
    }

    delete = (ebookId) => {
      // console.log(tutorId)
      this.props.onDeleteEbook(ebookId);
  }




  render() {

    if(this.state.loggedIn === false)
    {
        // return <Redirect to="/" />
        window.location.href = 'http://localhost:3000/';
    } 

    var render_form = this.state.renderForm;

   
    if(render_form === 'VIEW_EBOOK_TABLE')
    {
    
    if(this.props.ebooksList != null)
    {
      var ebookList=this.props.ebooksList.map((ebook,index)=>{
          return(
              <tr key={index} class="d-flex">
                  <th className="col-1">{ebook.ebookId}</th>
                  <td className="col-2">{ebook.title}</td>
                  <td className="col-2">{ebook.authorname}</td>
                  <td className="col-5 word-wrap">{ebook.url}</td> 
                  <td className="col-2" >
                      <button onClick={this.update.bind(this,ebook)} className="btn btn-info btn-sm">UPDATE</button>
                      <button onClick={this.delete.bind(this,ebook.ebookId)} className="btn btn-danger ml-5 btn-sm">DELETE</button>
                  </td>
                  
              </tr>
          )
      })
  }
  else{
    return (
      <div>Empty ebook list</div>
    )
  }
  

    return (

      
      <div>
        <h2 className="text-center">Ebook List</h2>

        <table className="table text-dark table-striped ">
          <thead>
            <tr class="d-flex">
              <th className="col-1">Id</th>
              <th className="col-2">Title</th>
              <th className="col-2">Authorname</th>
              <th className="col-5">Url</th>
              <th className="col-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ebookList}
          </tbody>
        </table>
      </div>
     

    );
    }

    else if(render_form === 'UPDATE_EBOOK')
    {
      return (
        <div>
           {/* <AdminUpdateTutor tutorObject={this.state.TutorObj}></AdminUpdateTutor> */}
           <UpdateEbook ebookObject = {this.state.EbookObj}/>
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
        ebooksList:state.ebooksList,
        returnedMessage: state.returnedMessage,
        ebook: state.ebook,
        status: state.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetEbooks: () => {
          return  dispatch(actionCreators.getAllEbooks())
        },
        onDeleteEbook: (ebookId) => {
          return dispatch(actionCreators2.deleteEbook(ebookId))
        }
        // },
        // onGetEbookById: (tutorId) => {
        //   dispatch(actionCreators3.getEbook(ebookId))
        // }
      
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AdminEbookTable)
