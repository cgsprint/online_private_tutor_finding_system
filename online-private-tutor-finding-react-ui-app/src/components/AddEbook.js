import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/AddEbookAction'

class AddEbook extends Component {
  constructor(props) {
    super(props);

    // const token = localStorage.getItem('token');
    
    // console.log("token is",token);
    // let loggedIn = true

    // if(token === null)
    // {
    //     loggedIn = false
    // }

    this.state = {
      titleError: "",
      authornameError: "",
      urlError: "",
      // loggedIn
    };
    
    this.title = React.createRef()
    this.authorname = React.createRef()
    this.url = React.createRef()
  }
  
  // componentDidUpdate() {
  //   let check = this.props.returnedMessage.split(' ')
  //   if (check[0] === 'Successfully') {
  //     setTimeout(() => {
  //       this.props.history.push('/addebook')
  //     } ,2000)
  //   }
  // }

  validate = () => {
    let {titleError,authornameError,urlError} = this.state;
  
    if (!this.title.current.value) {
        titleError="This field can not be blank"
    }
    if(!this.authorname.current.value){
        authornameError= "This field can not be blank"
    }
    if (!this.url.current.value) {
        urlError= "This field can not be blank"
    }

    if(titleError||authornameError||urlError){
      this.setState({titleError,authornameError,urlError})
      setTimeout(() => {
        this.setState({titleError:'',authornameError:'',urlError:''})
        
      }, 1000);
      return false;
    }

    return true;
    
  }



  add(e) {
    e.preventDefault();
    const validate = this.validate()
    // console.log(validate)
    if(validate === true)
    {
      let newEbook = {
        title : this.title.current.value,
        authorname : this.authorname.current.value,
        url : this.url.current.value
      }
      this.props.onAddEbook(newEbook)

      this.title.current.value = '';
      this.authorname.current.value = '';
      this.url.current.value = '';
    }
  }


  
 
  render() {

    // if(this.state.loggedIn === false)
    // {
    //     // return <Redirect to="/" />
    //     window.location.href = 'http://localhost:3000/';
    // } 
    
    return (
      <div className="container mt-5 px-3 py-3 border border-dark text-dark rounded form-group required">
        <div className="row">
          <div className="col">
            <h2>Add Ebook</h2>
            <br></br>
            <form>
              

              <div className="mb-3 row">
                <label htmlFor="title" className="col-sm-4 col-form-label control-label">
                  Ebook Title
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    ref={this.title}
                    name="title"
                  /><br></br>
                <div className="font-size-small text-danger">{this.state.titleError}</div>

                  </div>

              </div>

              <div className="mb-3 row">
                <label htmlFor="authorname" className="col-sm-4 col-form-label control-label">
                  Ebook Authorname
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    ref={this.authorname}
                    name="authorname"
                  /><br></br>
                  <div className="font-size-small text-danger">{this.state.authornameError}</div>
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="url" className="col-sm-4 col-form-label control-label">
                  Ebook Url
                </label>
                <div className="col-sm-5">
                  <input
                    type="url"
                    className="form-control form-control-sm"
                    ref={this.url}
                    name="url"
                  /><br></br>
                <div className="font-size-small text-danger">{this.state.urlError}</div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={this.add.bind(this)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>


      <div >
              {this.props.returnedMessage}
            </div>

            

      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
      returnedMessage: state.returnedMessage2 ,
      status : state.status
      
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onAddEbook: (ebook) => {
        // console.log(actionCreators.addEbook)
          dispatch(actionCreators.addEbook(ebook))
      }

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddEbook))
