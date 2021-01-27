import { withRouter } from "react-router-dom";
import React from "react";
import * as actionCreators3 from '../actions/GetTutorById'

import { connect } from "react-redux";

import * as actionCreators from "../actions/TutorActions";

const initialState = {
  name: "",
  password: "",
  username: "",
  subject: "",
  phoneNumber:"",
  address: "",
  qualifications: "",
  nameError: "",
  usernameError: "",
  passwordError: "",
  subjectError: "",
  phoneNoError: "",
  qualificationError: "",
  addressError: "",
};

class UpdateTutor extends React.Component {
  constructor(props) {
    super(props);

    this.tutorId = React.createRef();
    this.name = React.createRef();
    this.username = React.createRef();
    this.password = React.createRef();
    this.subject = React.createRef();
    this.address = React.createRef();
    this.phoneNumber = React.createRef();
    this.qualifications = React.createRef();

    this.state = {
      initialState,
      tutor: {}
    };
  }

  validate = (e) => {
    let {
      nameError,
      usernameError,
      passwordError,
      subjectError,
      phoneNoError,
      addressError,
      qualificationError,
    } = this.state;

    if (!this.name.current.value) {
      nameError = "This field can not be blank";
    }
    if (!this.username.current.value) {
      usernameError = "This field can not be blank";
    }
    if (!this.password.current.value) {
      passwordError = "This field can not be blank";
    }

    if (!this.subject.current.value) {
      subjectError = "This field can not be blank";
    }
    if (!this.phoneNumber.current.value) {
      phoneNoError = "This field can not be blank";
    }

    if (!this.address.current.value) {
      addressError = "This field can not be blank";
    }
    if (!this.qualifications.current.value) {
      qualificationError = "This field can not be blank";
    }
    if (
      nameError ||usernameError ||passwordError ||subjectError ||phoneNoError ||addressError ||qualificationError
    ) {
      this.setState({
        nameError,
        usernameError,
        passwordError,
        subjectError,
        phoneNoError,
        addressError,
        qualificationError,
      });
      setTimeout(() => {
        this.setState({
          nameError: "",
          usernameError: "",
          passwordError: "",
          subjectError: "",
          phoneNoError: "",
          addressError: "",
          qualificationError: "",
        });
      }, 2000);
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);

      //Clear state
      this.setState(initialState);
    }
  };

  componentDidMount() {
    //  console.log(this.props.tutorUname)
    //  this.props.onGetTutor(this.props.tutorUname);

    const tutorObject = localStorage.getItem("tutorObj");
    const tutorId =JSON.parse(tutorObject).tutorId;
    // console.log("Tutor id is ",JSON.parse(tutorObject).tutorId);
    // console.log("object")

    this.props.onGetTutorById(tutorId);

    // console.log("this.props.tutor",this.props.tutor)
    // this.props.history.push('/tutor/updatetutor')

  }

  updateTutor(e) {
    e.preventDefault();

    const valid = this.validate(e);
  console.log(valid)
  if (valid === true) {
     let tutor = {
     tutorId: this.tutorId.current.value,
    name: this.name.current.value,
     username: this.username.current.value,
     password: this.password.current.value,
     subject: this.subject.current.value,
     address: this.address.current.value,
     phoneNumber: this.phoneNumber.current.value,
     qualifications: this.qualifications.current.value,
     };
    console.log(this.tutorId.current.value,this.name.current.value,this.username.current.value,this.password.current.value,this.subject.current.value,this.address.current.value,this.phoneNumber.current.value,this.qualifications.current.value);
    this.props.onUpdateTutor(tutor)  
}

   
    e.preventDefault();

  }

  render() {
    if(this.props.tutor != null)
      {
        
      
    return (

      
      <div className="container mt-5 px-3 py-3 border border-dark rounded form-group required">
        <div className="row">
          <div className="col">
            <h2>Update Tutor Profile</h2>
            <br></br>
            <form>
              <div className="mb-3 row">
                <label for="tutorId" className="col-sm-4 col-form-label ">
                  Tutor Id
                </label>
                <div className="col-sm-5">
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    name="tutorId"
                    id="tutorId"
                    ref={this.tutorId}
                    defaultValue={this.props.tutor.tutorId}
                    readOnly
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  for="tutorName"
                  className="col-sm-4 col-form-label  control-label"
                >
                  Tutor Name
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    // name="name"
                    id="tutorName"
                    ref={this.name}
                    defaultValue={this.props.tutor.tutorName}
                    // onChange={this.changeName.bind(this)}
                  />
                  <br></br>
                  <div className="font-size-small text-danger">
                    {this.state.nameError}
                  </div>
                </div>

                <div style={{ fontSize: 12, color: "red" }}>
                  {/* {this.state.nameError} */}
                  {/* {this.props.tutor} */}
                </div>

                <div style={{ fontSize: 12, color: "red" }}>
                  {/* {this.state.nameError} */}
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  for="tutorUsername"
                  className="col-sm-4 col-form-label control-label"
                >
                  Tutor Username
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="username"
                    id="tutorUsername"
                    ref={this.username}
                    defaultValue={this.props.tutor.tutorUsername}
                  />
                  <br></br>
                  <div className="font-size-small text-danger">
                    {this.state.nameError}
                  </div>
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  for="tutorPassword"
                  className="col-sm-4 col-form-label control-label"
                >
                  Tutor Password
                </label>
                <div className="col-sm-5">
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    name="password"
                    id="tutorPassword"
                    ref={this.password}
                    defaultValue={this.props.tutor.tutorPassword}
                  />
                  <br></br>
                  <div className="font-size-small text-danger">
                    {this.state.nameError}
                  </div>
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  for="tutorSubject"
                  className="col-sm-4 col-form-label control-label"
                >
                  Tutor Subject
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="subject"
                    id="tutorSubject"
                    defaultValue={this.props.tutor.tutorSubject}
                    ref={this.subject}
                  />
                  <br></br>
                  <div className="font-size-small text-danger">
                    {this.state.nameError}
                  </div>
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  for="tutorPhoneNo"
                  className="col-sm-4 col-form-label control-label"
                >
                  Tutor Phone Number
                </label>
                <div className="col-sm-5">
                  <input
                    type="number"
                    pattern="[6-9]{4}[0-9]{6}"
                    className="form-control form-control-sm"
                    name="phoneNumber"
                    id="tutorPhoneNo"
                    defaultValue={this.props.tutor.tutorPhoneNo}
                    ref={this.phoneNumber}
                  />
                  <br></br>
                  <div className="font-size-small text-danger">
                    {this.state.nameError}
                  </div>
                </div>

                <div style={{ fontSize: 12, color: "red" }}>
                  {/* {this.state.phoneError} */}
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  for="tutorAddress"
                  className="col-sm-4 col-form-label control-label"
                >
                  Tutor Address
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="address"
                    id="tutorAddress"
                    defaultValue={this.props.tutor.tutorAddress}
                    ref={this.address}
                  />
                  <br></br>
                  <div className="font-size-small text-danger">
                    {this.state.nameError}
                  </div>
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  for="tutorQualification"
                  className="col-sm-4 col-form-label control-label"
                >
                  Tutor Qualification
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="qualification"
                    id="tutorQualification"
                    defaultValue={this.props.tutor.tutorQualifications}
                    ref={this.qualifications}
                  />
                  <br></br>
                  <div className="font-size-small text-danger">
                    {this.state.nameError}
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={this.updateTutor.bind(this)}
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>{this.props.returnedMessage}</div>
      </div>
    );
      }
      else
      {
        return (
          <div>Your profile has been updated</div>
        )
      }
  }
}

const mapStateToProps = (state) => {
  console.log("state is jkjn ",state);

  return {
        tutor: state.tutor,
        returnedMessage: state.tutorUpdationMsg,

  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("request");
  return {
    onUpdateTutor: (newTutorObject) => {
      dispatch(actionCreators.updateTutor(newTutorObject));
    },
    clearState: () => {
      dispatch(actionCreators.clearState());
    },
    onGetTutorById: (tutorId) => {
      console.log("tutorId is ",tutorId)
      dispatch(actionCreators3.getTutor(tutorId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UpdateTutor));