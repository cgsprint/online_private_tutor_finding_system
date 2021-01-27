import React, { Component } from "react";

import { Redirect } from "react-router-dom";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import * as actionCreated from '../actions/TutorActions'

import TutorHome from "./TutorHome";

import * as actionCreators from '../actions/RegisterTutor'



export class AddTutor extends Component {
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
      nameError: "",
      usernameError: "",
      passwordError: "",
      subjectError: "",
      phoneNoError: "",
      qualificationsError: "",
      addressError: "",
      // loggedIn
    };

    this.tutorId = React.createRef();
    this.name = React.createRef();
    this.username = React.createRef();
    this.password = React.createRef();
    this.subject = React.createRef();
    this.phoneNumber = React.createRef();
    this.address = React.createRef();
    this.qualifications = React.createRef();
  }

  componentDidUpdate()
  {
    // this.props.history.push('/admin/viewtutors');
  }

  validate = (e) => {
    let {
      nameError,
      usernameError,
      passwordError,
      subjectError,
      phoneNoError,
      addressError,
      qualificationsError,
    } = this.state;

    if (!this.name.current.value) {
      nameError = "This field can not be blank";
    }
    if (!this.username.current.value) {
      usernameError = "This field can not be blank";
    }
    if (!this.password.current.value) {
      passwordError = "This field can not be blank";
    } else if (this.password.current.value.length < 8) {
      passwordError = "Password must be 8 character long";
    }
    if (!this.subject.current.value) {
      subjectError = "This field can not be blank";
    }
    if (!this.phoneNumber.current.value) {
      phoneNoError = "This field can not be blank";
    } else if (this.phoneNumber.current.value.length !== 10) {
      phoneNoError = "Number must be 10 digit long";
    }
    if (!this.address.current.value) {
      addressError = "This field can not be blank";
    }
    if (!this.qualifications.current.value) {
      qualificationsError = "This field can not be blank";
    }
    if (
      nameError ||
      usernameError ||
      passwordError ||
      subjectError ||
      phoneNoError ||
      addressError ||
      qualificationsError
    ) {
      this.setState({
        nameError,
        usernameError,
        passwordError,
        subjectError,
        phoneNoError,
        addressError,
        qualificationsError,
      });
      setTimeout(() => {
        this.setState({
          nameError: "",
          usernameError: "",
          passwordError: "",
          subjectError: "",
          phoneNoError: "",
          addressError: "",
          qualificationsError: "",
        });
      }, 1000);
      return false;
    }

    return true;
  };

  addTutor = (e) => {
    e.preventDefault();
    const valid = this.validate(e);
    console.log(valid);
    if (valid === true) {
      // alert(this.name.current.value+" "+this.username.current.value+" "+this.password.current.value+" "+this.subject.current.value+" "+this.phoneNumber.current.value+" "+this.address.current.value+" "+this.qualifications.current.value)
      let Tutor = {
        name: this.name.current.value,
        username: this.username.current.value,
        password: this.password.current.value,
        subject: this.subject.current.value,
        phoneNumber: this.phoneNumber.current.value,
        address: this.address.current.value,
        qualifications: this.qualifications.current.value,
      };

      this.props.onAddTutor(Tutor);
      // e.preventDefault()
      this.name.current.value = "";
      this.username.current.value = "";
      this.password.current.value = "";
      this.subject.current.value = "";
      this.phoneNumber.current.value = "";
      this.address.current.value = "";
      this.qualifications.current.value = "";
    }
    // window.location.href = 'http://localhost:3000/admin/viewtutors'
  };

  render() {

    // if(this.state.loggedIn === false)
    // {
    //     // return <Redirect to="/" />
    //     window.location.href = 'http://localhost:3000/';
    // }

    if(this.props.status === 200)
    {
      return <Redirect to="/admin/viewtutors"/>
    }

    return (
      <div class="container mt-5 px-3 py-3 border border-dark rounded text-dark form-group required" style={{background: '#f5f5f5'}}>
        <div class="row">
          <div class="col">
            <h2>Add Tutor</h2>
            <br></br>
            <form method="post">
              <div class="mb-3 row ">
                <label
                  for="tutorName"
                  class="col-sm-4 col-form-label control-label"
                >
                  Tutor Name
                </label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    name="tutorName"
                    id="tutorName"
                    ref={this.name}
                  />
                  <br></br>
                  <div className="font-size-small text-danger">{this.state.nameError}</div>
                </div>
              </div>

              <div class="mb-3 row">
                <label
                  for="tutorUsername"
                  class="col-sm-4 col-form-label control-label"
                >
                  Tutor Username
                </label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    name="tutorUsername"
                    id="tutorUsername"
                    ref={this.username}
                  /><br></br>
                  <div className="font-size-small text-danger">
                  {this.state.usernameError}
                </div>
                </div>
                
              </div>

              <div class="mb-3 row">
                <label
                  for="tutorPassword"
                  class="col-sm-4 col-form-label control-label"
                >
                  Tutor Password
                </label>
                <div class="col-sm-5">
                  <input
                    type="password"
                    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    class="form-control form-control-sm"
                    name="tutorPassword"
                    id="tutorPassword"
                    ref={this.password}
                  /><br></br>
                <div className="font-size-small text-danger">
                  {this.state.passwordError}
                </div>
                </div>
                
              </div>

              <div class="mb-3 row">
                <label
                  for="tutorSubject"
                  class="col-sm-4 col-form-label control-label"
                >
                  Tutor Subject
                </label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    name="tutorSubject"
                    id="tutorSubject"
                    ref={this.subject}
                  /><br></br>
                  <div className="font-size-small text-danger">
                  {this.state.subjectError}
                </div>
                </div>
                
              </div>

              <div class="mb-3 row">
                <label
                  for="tutorPhoneNo"
                  class="col-sm-4 col-form-label control-label"
                >
                  Tutor Phone No.
                </label>
                <div class="col-sm-5">
                  <input
                    type="number"
                    pattern="[6-9]{4}[0-9]{6}"
                    class="form-control form-control-sm"
                    name="tutorPhoneNo"
                    id="tutorPhoneNo"
                    ref={this.phoneNumber}
                  /><br></br>
                  <div className="font-size-small text-danger">
                  {this.state.phoneNoError}
                </div>
                </div>
                
              </div>

              <div class="mb-3 row">
                <label
                  for="tutorAddress"
                  class="col-sm-4 col-form-label control-label"
                >
                  Tutor Address
                </label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    name="tutorAddress"
                    id="tutorAddress"
                    ref={this.address}
                  /><br></br>
                  <div className="font-size-small text-danger">
                  {this.state.addressError}
                </div>
                </div>
                
              </div>

              <div class="mb-3 row">
                <label
                  for="tutorQualification"
                  class="col-sm-4 col-form-label control-label"
                >
                  Tutor Qualification
                </label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    name="tutorQualification"
                    id="tutorQualification"
                    ref={this.qualifications}
                  /><br></br>
                <div className="font-size-small text-danger">
                  {this.state.qualificationsError}
                </div>
                </div>
                
              </div>

              <div class="row mt-4">
                <div class="col-7">
                  <button
                    class="btn btn-primary btn-sm"
                    onClick={this.addTutor.bind(this)}
                  >
                    Add
                  </button>
                </div>

                <div class="col-1">
                  <button
                  type="reset"
                    class="btn btn-primary btn-sm"
                    // onClick={this.addTutor.bind(this)}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* <div className="alert alert-successs" role="alert">
              {
                this.props.status === 200 ? <div>{this.props.returnedMessage}</div> : <div></div>
              }
              
            </div> */}

        <div class="text-dark">{this.props.returnedMessage1}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    returnedMessage1: state.returnedMessage1,
    status: state.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTutor: (Tutor) => {
      // console.log("in on validate user")
      dispatch(actionCreators.registerTutor(Tutor));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddTutor));
