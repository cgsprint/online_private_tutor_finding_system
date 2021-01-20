import React from  'react';

const initialState={
    id:"",
    name:"",
    subject:"",
    address:"",
    phonenumber:"",
    nameError:"",
    subjectError:"",
    addressError:"",
    phoneError:""
   
}

export default class UpdateTutor extends React.Component{   
  state= initialState;

  handleChange=event=>{
      const isCheckbox=event.target.type==="checkbox";
      this.setState({
          [event.target.id]:isCheckbox
          ? event.target.checked
          :event.target.value
      });

  };

  validate=()=>{
 let nameError="";
  let subjectError ="";
   let addressError="";
   let phoneError="";
let idError="";
let nameIsString="";
let idIsNumber="";

if(!this.state.id){
    idError="id cant be blank";
  }

 if(!this.state.name){
      nameError="name cant be blank";
    }

    if(!this.state.subject){
        subjectError="Subject cant be blank";
      }

      if(!this.state.address){
        addressError="address cant be blank";
      }

      if(!this.state.phonenumber){
        phoneError="mobile number cant be blank";
      }

      
    if(idError||nameError || subjectError||addressError||phoneError){
        this.setState({idError,nameError,subjectError,addressError,phoneError});
        return false;
    }
    return true;
  };

 

  handleSubmit=event=>{
      event.preventDefault();
      const isValid= this.validate();
      if(isValid){
          console.log(this.state)

          //Clear state
          this.setState(initialState);
      }
     
  };

  render(){
      return(
        <div class="container mt-5 px-3 py-3 border border-dark rounded">
        <div class="row">
          <div class="col">
            <h2>Add Tutor</h2>
            <br></br>
            <form method="post">
              <div class="mb-3 row">
                <label for="tutorId" class="col-sm-4 col-form-label">
                  Tutor Id
                </label>
                <div class="col-sm-5 ">
                  <input
                    type="number"
                    class="form-control form-control-sm"
                    name="tutorId"
                    id="tutorId"
                    ref={this.tutorId}
                    required
                  />
                </div>
              </div>

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
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
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
                    ref={this.phoneNo}
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
                    onClick={this.updateTutor}
                  >
                    Update
                  </button>
                </div>
                
              </div>
            </form>
          </div>
        </div>

        
        
      </div>
     );
  }


}