import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AddParent from './AddParent'
import AdminRouting from './AdminRouting'
import TutorRouting from './TutorRouting'
import ParentRouting from './ParentRouting'
import * as actionCreators from '../actions/ValidateUser'


export class MainLogin extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userRole: "",
       userUsername: "",
       userPassword: "",
       renderPage: "MAIN_LOGIN"
    }
  }

  eventHandler = (e) =>
    {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
  

  parentSelected = () => {
    var admin = document.getElementById("admin");
    var tutor = document.getElementById("tutor");
    var parent = document.getElementById("parent");
    var element = document.getElementById("registerLink");
    
    if (admin.checked) {
      element.classList.remove("d-block");
      this.setState({
        userRole: "admin"
      })
    }
    if (tutor.checked) {
      element.classList.remove("d-block");
      this.setState({
        userRole: "tutor"
      })
    }
    if (parent.checked) {
      element.classList.add("d-block");
      this.setState({
        userRole: "parent"
      })
    }
  };

  userLogin = (e) => {
    // alert(
    //   this.state.userRole+ " " + this.state.userPassword +" "+ this.state.userUsername
    // );

    let User = {
      userUsername :this.state.userUsername,
      userPassword : this.state.userPassword,
      userRole :this.state.userRole
    }

    console.log("in userLogin")
    this.props.onValidateUser(User)
    e.preventDefault();

  };

  

  renderRegister = () =>
  {
    this.setState({
      renderPage: "ADD_PARENT"
    })
  }

  // componentDidUpdate() {
  //   if(this.state.userRole === 'admin' && this.props.status)
  //   {
  //     this.setState({
  //       renderPage : "ADMIN_ROUTING"
  //     })
  //   } 
  // }

  render() {
    const renderComponent = this.state.renderPage;

   
      
      // if(this.props.status === 200 || this.state.userRole === 'admin')
      // {
      //     return (<div>
      //       <h2>Admin</h2>
      //     </div>
      //     )
      // }
    

    if(renderComponent === "MAIN_LOGIN")
    {
      return (
        <div class="container mt-5 px-3 py-3 border border-dark rounded text-dark">
          <div class="row">
            <div class="col">
              <h2>Login Page </h2>
              <br></br>
              <form>
                <div class="mb-0 row">
                  <label for="username" class="col-sm-5 col-form-label mr-3">
                    Select Role
                  </label>
                  <div class="col-sm-4 ">
                    <div
                      class="col d-flex flex-row bd-highlight mb-3 justify-content-between"
                      id="role"
                    >
                      <div class="form-check p-2 bd-highlight">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="role"
                          id="admin"
                          value="admin"
                          ref={this.userRole}
                          onChange={this.parentSelected}
                        ></input>
                        <label class="form-check-label" for="admin">
                          Admin
                        </label>
                      </div>

                      <div class="form-check p-2 bd-highlight">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="role"
                          id="tutor"
                          value="tutor"
                          ref={this.userRole}
                          onChange={this.parentSelected}
                          required
                        ></input>
                        <label class="form-check-label" for="tutor">
                          Tutor
                        </label>
                      </div>

                      <div class="form-check p-2 bd-highlight">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="role"
                          id="parent"
                          value="parent"
                          ref={this.userRole}
                          onChange={this.parentSelected}
                          required
                        ></input>
                        <label class="form-check-label" for="parent">
                          Parent
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="username" class="col-sm-5 col-form-label">
                    Enter Username
                  </label>
                  <div class="col-sm-4 ">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      name="userUsername"
                      id="adminUsername"
                      onChange={this.eventHandler}
                      required
                    />
                  </div>
                </div>

                <div class="mb-3 row">
                  <label for="password" class="col-sm-5 col-form-label">
                    Enter Password
                  </label>
                  <div class="col-sm-4">
                    <input
                      type="password"
                      class="form-control form-control-sm"
                      name="userPassword"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      id="adminPassword"
                      onChange={this.eventHandler}
                      required
                    />
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col">
                    <button
                      class="btn btn-primary btn-sm"
                      onClick={this.userLogin}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>

              <div class="row mt-3 d-none" id="registerLink">
                <div class="col">
                  {/* <h5>or <a href={<AddParent />} class="link-primary">Registration</a></h5> */}
                  <h6 onClick={this.renderRegister} style={{color: 'blue', textDecoration: 'underline'}}>
                    Don't have an account? 
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className={"alert"} role="alert">
              { 
                this.props.status === 200 ? 
                (this.state.userRole === 'admin' ? this.setState({renderPage: "ADMIN_ROUTING"}) :
                (this.state.userRole === 'tutor' ? this.setState({renderPage: "TUTOR_ROUTING"}) : 
                (this.state.userRole === 'parent' ? this.setState({renderPage: "PARENT_ROUTING"}) : <div></div>))) : <div></div>
              }
          </div>
          
          </div>
          
          
      
      );
    }

    else if(this.state.renderPage === 'ADD_PARENT')
    {
      return (
      <div>
        <AddParent/>
      </div>);
    }
    else if(this.state.renderPage === 'ADMIN_ROUTING')
    {
      return (
      <div>
        <AdminRouting/>
      </div>);
    }
    else if(this.state.renderPage === 'TUTOR_ROUTING')
    {
      return (
      <div>
        <TutorRouting/>
      </div>);
    }
    else if(this.state.renderPage === 'PARENT_ROUTING')
    {
      return (
      <div>
        <ParentRouting/>
      </div>);
    }
    else
    {
      return <div>{this.state.renderPage}</div>;
    }

    

    // if(this.props.status === 200 && this.state.userRole === "admin")
    // {
    //   return (
    //     <div>
    //       <h2>Admin success</h2>
    //     </div>
    //   );
    // }
    // else if(this.props.status === 200 && this.state.userRole === "tutor")
    // {
    //   return (
    //     <div>
    //       <h2>Tutor success</h2>
    //     </div>
    //   );
    // }
    // else if(this.props.status === 200 && this.state.userRole === "parent")
    // {
    //   return (
    //     <div>
    //       <h2>Tutor success</h2>
    //     </div>
    //   );
    // }
    // else
    // {
    //   return <div>{this.state.renderPage}</div>;
    // }
  }

  
}

const timer = () => {
    setInterval(() => {
      if(this.state.status === 200)
      {
        this.setState({
          renderPage: "ADMIN_ROUTING"
        })
      }

    }, 1000);
}



const mapStateToProps = (state) => {
  return {
      returnedMessage: state.returnedMessage,
      status: state.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onValidateUser: (User) => {
          console.log("in on validate user")
          dispatch(actionCreators.validateUser(User))
      }
      

  }

  

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainLogin))
// export default MainLogin

