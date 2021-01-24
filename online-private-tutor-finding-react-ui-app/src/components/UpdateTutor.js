import { withRouter } from 'react-router-dom';
import React from  'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/TutorActions'
=======
import * as actionCreators from '../actions/TutorActions'
import { connect } from 'react-redux';


>>>>>>> e33c488336c5ae59ca6e275b1efbe5da12ce99e6


 class UpdateTutor extends React.Component{  
  
  constructor(props){
    super(props)

    this.tutorId = React.createRef();
    this.name = React.createRef();
    this.username = React.createRef();
    this.password = React.createRef();
    this.subject = React.createRef();
    this.address= React.createRef();
    this.phonenumber = React.createRef();
    this.qualification = React.createRef();

    this.state = {
      nameError: "",
      usernameError: "",
      passwordError: "",
      subjectError: "",
      phoneNoError: "",
      qualificationsError: "",
      addressError: "",
    };

  
  }

  
  
    validate = (e) => {
      let {nameError,usernameError,passwordError,subjectError,phoneNoError,addressError,qualificationsError} = this.state;
    
      if (!this.name.current.value) {
          nameError="This field can not be blank"
      }
      if(!this.username.current.value){
          usernameError= "This field can not be blank"
      }
      if (!this.password.current.value) {
          passwordError= "This field can not be blank"
      }
     
      if(!this.subject.current.value){
          subjectError= "This field can not be blank"
      }
      if (!this.phoneNumber.current.value) {
          phoneNoError= "This field can not be blank"
      }
     
      if(!this.address.current.value){
          addressError= "This field can not be blank"
      }
      if(!this.qualifications.current.value){
          qualificationsError= "This field can not be blank"
      }
      if(nameError||usernameError||passwordError||subjectError||phoneNoError||addressError||qualificationsError){
        this.setState({nameError,usernameError,passwordError,subjectError,phoneNoError,addressError,qualificationsError})
        setTimeout(() => {
          this.setState({nameError:'',usernameError:'',passwordError:'',subjectError:'',phoneNoError:'',addressError:'',qualificationsError:''})
          
        }, 1000);
        return false;
      }
  
      return true;
      
    };
  

  

//   componentDidMount() {
//     this.props.clearState()
// }
componentDidUpdate() {
    let check = this.props.returnedMessage.split(' ')
    if (check[0] === 'Successfully') {
        setTimeout(() => {
            this.props.history.push('/listOfTutors')
        }, 2000)
    }
  }

update() {
    let tutor = {
        tutorId: this.tutorId.current.value,
        name: this.name.current.value,
        subject: this.subject.current.value,
        address: this.address.current.value,
        phonenumber: this.phonenumber.current.value,
        qualification:this.qualification.current.value
    }
    this.props.onUpdateTutor(tutor)

}



  render(){
      return(
        <div className="container mt-5 px-3 py-3 border border-dark rounded">
        <div className="row">
          <div className="col">
            <h2>Update Tutor Profile</h2>
            <br></br>
            <form >
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
                    
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label for="tutorName" className="col-sm-4 col-form-label">
                  Tutor Name
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="tutorName"
                    id="tutorName"
                    ref={this.name}
                    
                  />
                </div>


                <div style={{ fontSize: 12, color: "red" }}>
                  {/* {this.state.nameError} */}
                </div>

                <div style={{fontSize:12,color:"red"}}>
        {/* {this.state.nameError} */}
        </div>


              </div>

              <div className="mb-3 row">
                <label for="tutorUsername" className="col-sm-4 col-form-label">
                  Tutor Username
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="tutorUsername"
                    id="tutorUsername"
                    ref={this.username}
                    
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label for="tutorPassword" className="col-sm-4 col-form-label">
                  Tutor Password
                </label>
                <div className="col-sm-5">
                  <input
                    type="password"
                    //pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}"
                    pattern="[A-Z]{1,}[a-z]{1,}[0-9]{1,}[a-z]{1,}"
                    className="form-control form-control-sm"
                    name="tutorPassword"
                    id="tutorPassword"
                    ref={this.password}
                    
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label for="tutorSubject" className="col-sm-4 col-form-label">
                  Tutor Subject
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="tutorSubject"
                    id="tutorSubject"
                    ref={this.subject}
                    
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label for="tutorPhoneNo" className="col-sm-4 col-form-label">
                  Tutor Phone Number
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    pattern="^[7-9]{1}[0-9]{2}[0-9]{2}[0-9]{3}[0-9]{2}"
                    className="form-control form-control-sm"
                    name="tutorPhoneNo"
                    id="tutorPhoneNo"
                    ref={this.phonenumber}
                    
                  />
                </div>

                <div style={{fontSize:12,color:"red"}}>
        {/* {this.state.phoneError} */}
        </div>
              </div>

              <div className="mb-3 row">
                <label for="tutorAddress" className="col-sm-4 col-form-label">
                  Tutor Address
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="tutorAddress"
                    id="tutorAddress"
                    ref={this.address}
                   
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  for="tutorQualification"
                  className="col-sm-4 col-form-label"
                >
                  Tutor Qualification
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="tutorQualification"
                    id="tutorQualification"
                    ref={this.qualification}
                   
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col">
                  <button type="submit" className="btn btn-primary btn-sm">
                    Update Profile
                  </button>
                </div>
              </div>
              </form> 
            </div>
          </div>
        </div>
        
      )
      }
}



const mapStateToProps = (state) => {
  return {
      returnedMessage: state.returnedMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {



      onUpdateTutor: (newTutorObject) => {
          dispatch(actionCreators.updateTutor(newTutorObject))
      },
      clearState: () => {
          dispatch(actionCreators.clearState())

  }

}

}




export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UpdateTutor))
