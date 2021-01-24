import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/ParentActions'

export class AddParent extends Component {
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

  validate = () => {
    if (!this.firstName.current.value) {
      this.setState({
        firstNameError: "Fill this blank field",
      });
    }
  };
  add = (e) => {
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

    //alert(this.firstName.current.value + this.lastName.current.value + this.username.current.value + this.password.current.value + this.mobileNo.current.value +this.email.current.value + this.address.current.value)
}
    render() {
        return (
            <div class="container mt-5 px-3 py-3 border border-dark rounded">
        <div class="row">
          <div class="col">
            <h2>Registration</h2>
            <br></br>
            <form method="post">
              <div>

              <div class="mb-3 row">
                <label for="firstName" class="col-sm-4 col-form-label">
                First Name : 
                </label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="firstName"
                    name="firstName"
                    ref={this.firstName}
                    placeholder = "Eg: John"
                    required
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="lastName" class="col-sm-4 col-form-label">
                  Last Name :
                </label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="lastName"
                    name="lastName"
                    ref={this.lastName}
                    placeholder = "Eg: Doe"
                    required
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="username" class="col-sm-4 col-form-label">
                  Username :
                </label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="username"
                    name="username"
                    ref={this.username}
                    placeholder = "Eg: John"
                    required
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="password" class="col-sm-4 col-form-label">
                  Password :
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
                    required
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="mobileNo" class="col-sm-4 col-form-label">
                  Mobile No :
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
                    required
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="email" class="col-sm-4 col-form-label">
                  Email :
                </label>
                <div class="col-sm-5">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    name="email"
                    id="email"
                    ref={this.email}
                    placeholder = "Eg: john@gmail.com"
                    required
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="address" class="col-sm-4 col-form-label">
                  Address :
                </label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    name="address"
                    id="address"
                    ref={this.address}
                    placeholder = "Eg: Andheri"
                    required
                  />
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
          {/* <div className="alert alert-successs" role="alert">
              {
                this.props.status === 200 ? <div>{this.props.returnedMessage}</div> : <div></div>
              }
            </div>*/}
        </div> 
       <br></br>
            <br></br>
    
            <div className={(this.props.returnedMessage === '') ? '' : "alert"} role="alert">
              {this.props.returnedMessage}
            </div>
        
        
      </div>
        )
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
      onAddParent: (newParent) => {
          console.log("Registering parent")
          dispatch(actionCreators.addParent(newParent))
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AddParent))