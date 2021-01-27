import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/UpdateEbookAction'
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

class UpdateEbook extends Component {
  constructor(props) {
    super(props);

    const token = localStorage.getItem('token');
    
    console.log("token is",token);
    let loggedIn = true

    if(token === null)
    {
        loggedIn = false
    }

    this.state = {
      loggedIn,
      titleError: '',
      authornameErro : '',
      urlError: ''
    }
    
    this.ebookId = React.createRef()
    this.title = React.createRef()
    this.authorname = React.createRef()
    this.url = React.createRef()
  }
  
  componentDidMount() {
    // this.props.clearState()
    console.log(this.props.ebookObject);
  }
    
  // componentDidUpdate() {
  //   let check = this.props.returnedMessage.split(' ')
  //   if(check[0] === 'Successfully') {
  //     setTimeout(() => {
  //       this.props.history.push('/updateebook')
  //     }, 2000)
  //   }
  // }


  validate = (e) => {
    let {
      titleError,
      authornameError,
      urlError
    } = this.state;

    if (!this.title.current.value) {
      titleError = "This field can not be blank";
    }
    if (!this.authorname.current.value) {
      authornameError = "This field can not be blank";
    }
    if (!this.url.current.value) {
      urlError = "This field can not be blank";
    }
    if (
      titleError ||
      authornameError ||
      urlError 
    ) {
      this.setState({
        titleError,
        authornameError,
        urlError
      });
      setTimeout(() => {
        this.setState({
          titleError: "",
          authornameError: "",
          urlError: ""
        });
      }, 1000);
      return false;
    }

    return true;
  };
  update(e) {

    const valid = this.validate(e);
    if(valid === true)
    {
      let ebook = {
        ebookId : this.ebookId.current.value,
        title : this.title.current.value,
        authorname : this.authorname.current.value,
        url : this.url.current.value
      }
      e.preventDefault();
      this.props.onUpdateEbook(ebook)

    }

    
  }
    render() {

      if(this.state.loggedIn === false)
      {
          // return <Redirect to="/" />
          window.location.href = 'http://localhost:3000/';
      }
      
      // if(this.props.status === 200)
      // {
      //   return <Redirect to="/admin/viewebooks"/>
      // }
        return (
            <div className="container mt-5 px-3 py-3 border border-dark text-dark rounded">
        <div className="row">
          <div className="col">
            <h2>Update Ebook</h2>
            <br></br>
            <form>
              <div className="mb-3 row">
                <label htmlFor="ebookId" className="col-sm-4 col-form-label">
                  Ebook Id
                </label>
                <div className="col-sm-5 ">
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    name="ebookId"
                    id="ebookId"
                    defaultValue={this.props.ebookObject.ebookID}
                    ref={this.ebookId}
                    readOnly = {true}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="title" className="col-sm-4 col-form-label">
                  Ebook Title
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="title"
                    id="title"
                    defaultValue={this.props.ebookObject.ebookTitle}
                    ref={this.title}
                  /><br></br>
                  <div className="font-size-small text-danger">{this.state.titleError}</div>
                </div>
              </div>

              <div className="mb-3 row">
                <label for="auth" className="col-sm-4 col-form-label">
                  Ebook Authorname
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="authorname"
                    defaultValue={this.props.ebookObject.ebookAuthorname}
                    id="authorname"
                    ref={this.authorname}
                  /><br></br>
                  <div className="font-size-small text-danger">{this.state.authornameError}</div>
                </div>
              </div>

              <div className="mb-3 row">
                <label for="url" className="col-sm-4 col-form-label">
                  Ebook Url
                </label>
                <div className="col-sm-5">
                  <input
                    type="url"
                    className="form-control form-control-sm"
                    name="url"
                    defaultValue={this.props.ebookObject.ebookUrl}
                    id="url"
                    ref={this.url}
                  /><br></br>
                  <div className="font-size-small text-danger">{this.state.urlError}</div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={this.update.bind(this)}
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div >
              {this.props.returnedMessage3}
            </div>

      </div>

        )
    }
}

const mapStateToProps = (state) => {
  return {
      returnedMessage3: state.returnedMessage3,
      status: state.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      
      onUpdateEbook: (newEbookObject) => {
          dispatch(actionCreators.updateEbook(newEbookObject))
      },
      clearState: () => {
          dispatch(actionCreators.clearState())

      }

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UpdateEbook))
