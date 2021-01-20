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
     <form onSubmit={this.handleSubmit}>
         <div>
             <label>Tutor Id :</label>
     <input style={{fontSize:16}} name="id" type="number" placeholder="Tutor Id" value={this.state.id} onChange={this.handleChange}/>
    </div>
    <div style={{fontSize:12,color:"red"}}>
        {this.state.idError}
        </div>
        <br/>
        
    <div>
    <label>Tutor Name :</label>
     <input style={{fontSize:16}} name="name" placeholder="Tutor Name" value={this.state.name} onChange={this.handleChange}/>
    </div>
    <div style={{fontSize:12,color:"red"}}>
        {this.state.nameError}
        </div>
        <br/>
    <div>
    <label>Subject :</label>
     <input style={{fontSize:16}}name="subject" type="text" placeholder="Subject" value={this.state.subject} onChange={this.handleChange}/>
    </div>
    <div style={{fontSize:12,color:"red"}}>
        {this.state.subjectError}
        </div>
        <div>
    <label>Address :</label>
     <input style={{fontSize:16}}name="address" type="text" placeholder="Address" value={this.state.address} onChange={this.handleChange}/>
    </div>

    <div>
    <label>Phone Number :</label>
     <input style={{fontSize:16}}name="phonenumber" type="number" placeholder="Phone Number" value={this.state.phonenumber} onChange={this.handleChange}/>
    </div>
      <br/>

    <button type="submit">Submit</button>
     </form>
      );
  }


}