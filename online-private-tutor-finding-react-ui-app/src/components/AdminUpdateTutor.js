import { withRouter } from 'react-router-dom';
import React from  'react';
import * as actionCreators from '../actions/UpdateTutorByAdmin'
import { connect } from 'react-redux';




 class AdminUpdateTutor extends React.Component{  
  
  constructor(props){
    super(props)

    const token = localStorage.getItem('token');
    
    console.log("token is",token);
    let loggedIn = true

    if(token === null)
    {
        loggedIn = false
    }

    
    this.state = {
      nameError: "",
      usernameError: "",
      passwordError: "",
      subjectError: "",
      phoneNoError: "",
      qualificationsError: "",
      addressError: "",
      loggedIn
    };

    this.tutorId = React.createRef();
    this.name = React.createRef();
    this.username = React.createRef();
    this.password = React.createRef();
    this.subject = React.createRef();
    this.address= React.createRef();
    this.phonenumber = React.createRef();
    this.qualification = React.createRef();

    

    
  
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
    if (!this.phonenumber.current.value) {
      phoneNoError = "This field can not be blank";
    } else if (this.phonenumber.current.value.length !== 10) {
      phoneNoError = "Number must be 10 digit long";
    }
    if (!this.address.current.value) {
      addressError = "This field can not be blank";
    }
    if (!this.qualification.current.value) {
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

  

  componentDidMount() {

    
    console.log("tutorObject is "+this.props.tutorObject)
    // this.props.onGetTutorById(this.props.tutorId);

    // this.setState({
    //   tutorId: this.props.tutor.tutorId
    // })
    // console.log(this.state.tutor.tutorId)
  }

// componentDidUpdate() {
//     let check = this.props.returnedMessage.split(' ')
//     if (check[0] === 'Successfully') {
//         setTimeout(() => {
//             this.props.history.push('/listOfTutors')
//         }, 2000)
//     }
//   }

updateTutor = (e) =>{

  // e.preventDefault();
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
        phoneNumber: this.phonenumber.current.value,
        qualifications:this.qualification.current.value
      }
      e.preventDefault();
      // console.log(p)
      // alert(this.tutorId.current.value)
      this.props.onUpdateTutor(tutor)
      // this.setState({

      // })
      // this.props.history.push('/admin/viewparents');
    }
    
}

changeName = (e) => {
  this.setState({
    name: e.target.value
})
}

  render(){

    if(this.state.loggedIn === false)
        {
            // return <Redirect to="/" />
            window.location.href = 'http://localhost:3000/admin/viewtutors';
        }
      return(
        <div className="container mt-5 px-3 py-3 border border-dark rounded form-group required">
        <div className="row">
          <div className="col">
            <h2>Update Tutor Profile</h2>
            <br></br>
            <form>
              <div className="mb-3 row">
                <label for="tutorId" className="col-sm-4 col-form-label">
                  Tutor Id
                </label>
                <div className="col-sm-5">
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    name="tutorId"
                    id="tutorId"
                    ref={this.tutorId}
                    defaultValue={this.props.tutorObject.tutorID}
                    readOnly = {true}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label for="tutorName" className="col-sm-4 col-form-label  control-label">
                  Tutor Name
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    // name="name"
                    id="tutorName"
                    ref={this.name}
                    defaultValue={this.props.tutorObject.tutorName}
                    
                    onChange={this.changeName.bind(this)}
                  /><br></br>
                  <div className="font-size-small text-danger">{this.state.nameError}</div>
                </div>


                <div style={{ fontSize: 12, color: "red" }}>
                  {/* {this.state.nameError} */}
                  {/* {this.props.tutor} */}
                </div>

                <div style={{fontSize:12,color:"red"}}>
        {/* {this.state.nameError} */}
        </div>


              </div>

              <div className="mb-3 row">
                <label for="tutorUsername" className="col-sm-4 col-form-label control-label">
                  Tutor Username
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="username"
                    id="tutorUsername"
                    ref={this.username}
                    defaultValue={this.props.tutorObject.tutorUsername}
                    
                  /><br></br>
                  <div className="font-size-small text-danger">{this.state.nameError}</div>
                </div>
              </div>

              <div className="mb-3 row">
                <label for="tutorPassword" className="col-sm-4 col-form-label control-label">
                  Tutor Password
                </label>
                <div className="col-sm-5">
                  <input
                    type="password"
                   
                    className="form-control form-control-sm"
                    name="password"
                    id="tutorPassword"
                    ref={this.password}
                    defaultValue={this.props.tutorObject.tutorPassword}
                   
                  /><br></br>
                  <div className="font-size-small text-danger">{this.state.nameError}</div>
                </div>
              </div>

              <div className="mb-3 row">
                <label for="tutorSubject" className="col-sm-4 col-form-label control-label">
                  Tutor Subject
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="subject"
                    id="tutorSubject"
                    defaultValue={this.props.tutorObject.tutorSubject}
                    ref={this.subject}
                    
                  /><br></br>
                  <div className="font-size-small text-danger">{this.state.nameError}</div>
                </div>
              </div>

              <div className="mb-3 row">
                <label for="tutorPhoneNo" className="col-sm-4 col-form-label control-label">
                  Tutor Phone Number
                </label>
                <div className="col-sm-5">
                  <input
                    type="number"
                    pattern="[6-9]{4}[0-9]{6}"
                    className="form-control form-control-sm"
                    name="phoneNumber"
                    id="tutorPhoneNo"
                    defaultValue={this.props.tutorObject.tutorPhoneNo}
                    ref={this.phonenumber}
                    
                  /><br></br>
                  <div className="font-size-small text-danger">{this.state.nameError}</div>
                </div>

                <div style={{fontSize:12,color:"red"}}>
        {/* {this.state.phoneError} */}
        </div>
              </div>

              <div className="mb-3 row">
                <label for="tutorAddress" className="col-sm-4 col-form-label control-label">
                  Tutor Address
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="address"
                    id="tutorAddress"
                    defaultValue={this.props.tutorObject.tutorAddress}
                    ref={this.address}
                   
                  /><br></br>
                  <div className="font-size-small text-danger">{this.state.nameError}</div>
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
                    defaultValue={this.props.tutorObject.tutorQualification}
                    ref={this.qualification}
                   
                  /><br></br>
                  <div className="font-size-small text-danger">{this.state.nameError}</div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col">
                  <button className="btn btn-primary btn-sm" onClick={this.updateTutor.bind(this)}>
                    Update Profile
                  </button>
                </div>
              </div>
              </form>
            </div>
          </div>
        <div>{this.props.returnedMessage}</div>

        </div>
        
      )
      }
}



const mapStateToProps = (state) => {
  return {
      returnedMessage: state.returnedMessage,
      tutor: state.tutor,
      status: state.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

      onUpdateTutor: (newTutorObject) => {
          dispatch(actionCreators.updateTutor(newTutorObject))
      }

}

}




export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminUpdateTutor))
