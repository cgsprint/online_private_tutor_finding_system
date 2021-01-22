import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/RegisterTutor'
import { connect } from 'react-redux';
import TutorHome from "./TutorHome";

export class AddTutor extends Component {
  constructor(props) {
    super(props);

    this.tutorId = React.createRef();
    this.name = React.createRef();
    this.username = React.createRef();
    this.password = React.createRef();
    this.subject = React.createRef();
    this.phoneNumber = React.createRef();
    this.address = React.createRef();
    this.qualifications = React.createRef();
    
  }

  addTutor = (e) =>{

      // alert(this.name.current.value+" "+this.username.current.value+" "+this.password.current.value+" "+this.subject.current.value+" "+this.phoneNumber.current.value+" "+this.address.current.value+" "+this.qualifications.current.value)
      let Tutor = {
        name : this.name.current.value,
        username: this.username.current.value,
        password : this.password.current.value,
        subject : this.subject.current.value,
        phoneNumber : this.phoneNumber.current.value,
        address : this.address.current.value,
        qualifications : this.qualifications.current.value,
      }

      this.props.onAddTutor(Tutor)
      // e.preventDefault()
  }

 
  render() {
    return (
      <div class="container mt-5 px-3 py-3 border border-dark rounded">
        <div class="row">
          <div class="col">
            <h2>Add Tutor</h2>
            <br></br>
            <form>
              

              <div class="mb-3 row">
                <label for="tutorName" class="col-sm-4 col-form-label">
                  Tutor Name
                </label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    name="tutorName"
                    id="tutorName"
                    ref={this.name}
                    required
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="tutorUsername" class="col-sm-4 col-form-label">
                  Tutor Username
                </label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    name="tutorUsername"
                    id="tutorUsername"
                    ref={this.username}
                    required
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="tutorPassword" class="col-sm-4 col-form-label">
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
                    required
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="tutorSubject" class="col-sm-4 col-form-label">
                  Tutor Subject
                </label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    name="tutorSubject"
                    id="tutorSubject"
                    ref={this.subject}
                    required
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="tutorPhoneNo" class="col-sm-4 col-form-label">
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
                    required
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="tutorAddress" class="col-sm-4 col-form-label">
                  Tutor Address
                </label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    name="tutorAddress"
                    id="tutorAddress"
                    ref={this.address}
                    required
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="tutorQualification" class="col-sm-4 col-form-label">
                  Tutor Qualification
                </label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    name="tutorQualification"
                    id="tutorQualification"
                    ref={this.qualifications}
                    required
                  />
                </div>
              </div>

              <div class="row mt-3">
                <div class="col">
                  <button
                    class="btn btn-primary btn-sm"
                    onClick={this.addTutor}
                  >
                    Add
                  </button>
                </div>
                
              </div>
            </form>
          </div>
        </div>

        {/* <div className={(this.props.returnedMessage === '') ? '' : "alert"} role="alert">
              {this.props.returnedMessage}
            </div> */}
            <div className="alert alert-successs" role="alert">
              {
                this.props.status === 200 ? <div>{this.props.returnedMessage}</div> : <div></div>
              }
            </div>
        
        
      </div>
    );
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
      onAddTutor: (Tutor) => {
          // console.log("in on validate user")
          dispatch(actionCreators.registerTutor(Tutor))
      }
      

  }

  

}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddTutor))
