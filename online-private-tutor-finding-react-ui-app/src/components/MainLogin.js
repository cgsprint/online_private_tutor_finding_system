import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AddParent from './RegisterParent'
import AdminRouting from './AdminRouting'
import TutorRouting from './TutorRouting'
import ParentRouting from './ParentRouting'
import * as actionCreators from '../actions/ValidateUser'


var sectionStyle = {
  // backgroundImage: `url(${LogoImage})`
  backgroundcolor: `red`
}

export class MainLogin extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userRole: "",
       userUsername: "",
       userPassword: "",
       renderPage: "MAIN_LOGIN",
       roleErr: '',
       usernameErr: '',
       passwordErr: ''
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

  // parentSelected = (e) => {
  //   this.setState({
  //     [e.target.name] : e.target.value 
  //   })
  //   var element = document.getElementById("registerLink");


  //   if (this.state.userRole === 'admin') {
  //     element.classList.remove("d-block");
    
  //   }
  //   if (this.state.userRole === 'tutor') {
  //       element.classList.remove("d-block");
      
  //   }
  //   if(this.state.userRole === 'parent')
  //   {
  //     element.classList.remove("d-none");
  //     element.classList.add("d-block");

  //   }

  // }

  validate = () => {
    let {roleErr,usernameErr,passwordErr} = this.state;
  
    if (!this.state.userRole) {
        roleErr="Chosse one from above options"
    }
    if(!this.state.userUsername){
        usernameErr= "This field can not be blank"
    }
    if (!this.state.userPassword) {
        passwordErr= "This field can not be blank"
    }
    else if (this.state.userPassword.length <= 8) {
      passwordErr= "Password should be greater than or eqaul to 8 characters"
  }

    if(roleErr||usernameErr||passwordErr){
      this.setState({roleErr,usernameErr,passwordErr})
      setTimeout(() => {
        this.setState({roleErr:'',usernameErr:'',passwordErr:''})
        
      }, 1000);
      return false;
    }

    return true;
    
  }


  userLogin = (e) => {
    // alert(
    //   this.state.userRole+ " " + this.state.userPassword +" "+ this.state.userUsername
    // );
    e.preventDefault()
    const validate = this.validate()
    console.log(validate)
    if(validate === true)
    {
      let User = {
        userUsername :this.state.userUsername,
        userPassword : this.state.userPassword,
        userRole :this.state.userRole
      }
  
      console.log("in userLogin")
      this.props.onValidateUser(User)
      // e.preventDefault();
    }
    

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
        <>
        <div className="mt-5 text-body font-weight-bold">
          <h1>Online Private Tutor Finding System</h1>
        </div>
        <div class="container mt-5 px-3 py-3 border border-dark rounded form-group required main-login text-dark main-login">
          <div class="row">
            <div class="col">
              <h2>Login Page </h2>
              <br></br>
              <form>
                <div class="mb-3 row">
                  <label for="username" class="col-sm-5 col-form-label mr-3   control-label">
                    Select Role
                  </label>
                  <div class="col-sm-4 ">
                    <div
                      class="col d-flex bd-highlight mb-3 justify-content-between"
                      id="role"  onChange={this.parentSelected}
                    >
                          
                      <div class="form-check p-2 bd-highlight">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="userRole"
                          id="admin"
                          value="admin"
                          ref={this.userRole}
                          // onChange={this.parentSelected}
                        ></input>
                        <label class="form-check-label" for="admin">
                          Admin
                        </label>
                      </div>

                      <div class="form-check p-2 bd-highlight">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="userRole"
                          id="tutor"
                          value="tutor"
                          ref={this.userRole}
                          // onChange={this.parentSelected}
                        ></input>
                        <label class="form-check-label" for="tutor">
                          Tutor
                        </label>
                      </div>

                      <div class="form-check p-2 bd-highlight">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="userRole"
                          id="parent"
                          value="parent"
                          ref={this.userRole}
                          // onChange={this.parentSelected}
                        ></input>
                        <label class="form-check-label" for="parent">
                          Parent
                        </label>
                      </div>
                    </div>
                <div className="font-size-small text-danger">{this.state.roleErr}</div>
                  </div>
                </div>

                <div class="mb-3 row">
                  <label for="username" class="col-sm-5 col-form-label control-label">
                    Enter Username
                  </label>
                  <div class="col-sm-4 ">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      name="userUsername"
                      id="adminUsername"
                      onChange={this.eventHandler}
                    /><br></br>
                    <div className="font-size-small text-danger">{this.state.usernameErr}</div>
                  </div>
                </div>

                <div class="mb-3 row">
                  <label for="password" class="col-sm-5 col-form-label control-label">
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
                    /><br></br>
                    <div className="font-size-small text-danger">{this.state.passwordErr}</div>
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
                  <h6 onClick={this.renderRegister} style={{color: 'black', textDecoration: 'underline'}}>
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
              {
                this.props.status === 404 && <div>Login failed</div> 
              }
          </div>
         

          </div>
          
              </>
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

