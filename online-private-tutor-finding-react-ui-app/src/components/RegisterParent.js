import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/ParentActions'

export class RegisterParent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
      passwordError: "",
      mobileNoError: "",
      emailError: "",
      addressError: "",
    };

    this.parentId = React.createRef();
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.username =React.createRef();
    this.password = React.createRef();
    this.mobileNo = React.createRef();
    this.email = React.createRef();
    this.address = React.createRef();
  }

  validate = (e) => {
    let {
      firstNameError,
      lastNameError,
      usernameError,
      passwordError,
      mobileNoError,
      emailError,
      addressError,
    } = this.state;

    if (!this.firstName.current.value) {
      firstNameError = "This field can not be blank";
    }
    if (!this.lastName.current.value) {
      lastNameError = "This field can not be blank";
    }
    if (!this.username.current.value) {
      usernameError = "This field can not be blank";
    }
    if (!this.password.current.value) {
      passwordError = "This field can not be blank";
    } else if (this.password.current.value.length < 8) {
      passwordError = "Password must be 8 character long";
    }
    if (!this.mobileNo.current.value) {
      mobileNoError = "This field can not be blank";
    }
    if (!this.email.current.value) {
      emailError = "This field can not be blank";
    }
    if (!this.address.current.value) {
      addressError = "This field can not be blank";
    }
    
    if (
      firstNameError ||
      lastNameError ||
      usernameError ||
      passwordError ||
      mobileNoError ||
      emailError ||
      addressError
    ) {
      this.setState({
        firstNameError,
        lastNameError,
        usernameError,
        passwordError,
        mobileNoError,
        emailError,
        addressError
      });
      setTimeout(() => {
        this.setState({
          firstNameError: "",
          lastNameError: "",
          usernameError: "",
          passwordError: "",
          mobileNoError: "",
          emailError: "",
          addressError: "",
        });
      }, 1000);
      return false;
    }

    return true;
  };

  // renderLoginPage = () => {
  //   this.props.backToLogin();
  // } 

  renderLoginPage = () => {

    const page ='MAIN_LOGIN'
    this.props.backToLogin(page);
  }

  add = (e) => {

    e.preventDefault();
    const valid = this.validate(e);
    console.log(valid);
    if(valid===true)
    {
      let newParent = {
        // parentId: this.parentId.current.value,
        firstName: this.firstName.current.value,
        lastName: this.lastName.current.value,
        username: this.username.current.value,
        password: this.password.current.value,
        mobileNo: this.mobileNo.current.value,
        email: this.email.current.value,
        address: this.address.current.value
    }
    // alert(this.firstName.current.value + this.lastName.current.value)
    this.props.onAddParent(newParent);
    e.preventDefault();
    }
    

    //alert(this.firstName.current.value + this.lastName.current.value + this.username.current.value + this.password.current.value + this.mobileNo.current.value +this.email.current.value + this.address.current.value)
}
    render() {
        return (
            <div class="container mt-5 px-3 py-3 text-dark border border-dark rounded main-login">
        <div class="row">
          <div class="col">
            <h2><b><u>Registration</u></b></h2>
            <br></br>
            <form method="post">
              <div>

              <div class="mb-3 row">
                <label for="firstName" class="col-sm-4 col-form-label">
             <b>   First Name : </b>
                </label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="firstName"
                    name="firstName"
                    ref={this.firstName}
                    placeholder = "Eg: John"
                  />
                  <br></br>
                  <div className="font-size-small text-danger">{this.state.firstNameError}</div>
                </div>
              </div>

              <div class="mb-3 row">
                <label for="lastName" class="col-sm-4 col-form-label">
                  <b>Last Name :</b>
                </label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="lastName"
                    name="lastName"
                    ref={this.lastName}
                    placeholder = "Eg: Doe"
                    
                  /><br></br>
                  <div className="font-size-small text-danger">{this.state.lastNameError}</div>
                </div>
              </div>

              <div class="mb-3 row">
                <label for="username" class="col-sm-4 col-form-label">
                 <b> Username :</b>
                </label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="username"
                    name="username"
                    ref={this.username}
                    placeholder = "Eg: John"
                  /><br></br>
                  <div className="font-size-small text-danger">{this.state.usernameError}</div>
                </div>
              </div>

              <div class="mb-3 row">
                <label for="password" class="col-sm-4 col-form-label">
                 <b> Password :</b>
                </label>
                <div class="col-sm-5">
                  <input
                    type="password"
                    // pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}"
                    
                    class="form-control form-control-sm"
                    id="password"
                    name="password"
                    ref={this.password}
                    placeholder="Eg: john@123"
                  /><br></br>
                  <div className="font-size-small text-danger">{this.state.passwordError}</div>
                </div>
              </div>

              <div class="mb-3 row">
                <label for="mobileNo" class="col-sm-4 col-form-label">
                <b>  Mobile No :</b>
                </label>
                <div class="col-sm-5">
                  <input
                    type="number"
                    pattern = "^\d{10}"
                    class="form-control form-control-sm"
                    id="mobileNo"
                    name="mobileNo"
                    ref={this.mobileNo}
                    placeholder="Eg: 1234668909"
                   
                  /><br></br>
                  <div className="font-size-small text-danger">{this.state.mobileNoError}</div>
                </div>
              </div>

              <div class="mb-3 row">
                <label for="email" class="col-sm-4 col-form-label">
                <b>  Email :</b>
                </label>
                <div class="col-sm-5">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    name="email"
                    id="email"
                    ref={this.email}
                    placeholder = "Eg: john@gmail.com"
                    
                  /><br></br>
                  <div className="font-size-small text-danger">{this.state.emailError}</div>
                </div>
              </div>

              <div class="mb-3 row">
                <label for="address" class="col-sm-4 col-form-label">
                 <b> Address :</b>
                </label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    name="address"
                    id="address"
                    ref={this.address}
                    placeholder = "Eg: Andheri"
                  
                  /><br></br>
                  <div className="font-size-small text-danger">{this.state.addressError}</div>
                </div>
              </div>

              <div class="row mt-3">
                <div class="col">
                  <button
                    class="btn btn-primary btn-sm "
                    onClick={this.add.bind(this)}
                    >
                  Register
                  </button>
                </div>                
              </div>
              </div>
              
            </form>
          </div>
          
        </div> 
       <br></br>
            <br></br>
            <div>
              {this.props.returnedMessage4}
              
              {
                this.props.status === 200 && <div>
                  <button
                class="btn btn-primary btn-sm "
                onClick={this.renderLoginPage}
                >
                  Back to login
              </button></div>
              }
            </div>
            <div >
              {/* {this.props.returnedMessage4} */}
            </div>
            <hr></hr>

        
      </div>

      
        )
    } 
}
const mapStateToProps = (state) => {
  return {
      returnedMessage4: state.register_parent_msg,
      status: state.register_parent_status
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      onAddParent: (newParent) => {
          console.log("Registering parent")
          dispatch(actionCreators.addParent(newParent))
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(RegisterParent))