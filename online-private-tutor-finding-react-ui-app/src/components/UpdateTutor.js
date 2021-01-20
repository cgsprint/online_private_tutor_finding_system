import React from  'react';

const initialState={
    id:"",
    name:"",
    subject:"",
    address:"",
  
    nameError:"",
    costError:"",
   
}

export default class ValidatioFrom extends React.Component{   
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
  let costError ="";

let idError="";
let nameIsString="";
let idIsNumber="";

if(!this.state.name){
    idError="id cant be blank";
  }

 if(!this.state.name){
      nameError="name cant be blank";
    }

    if(!this.state.cost){
        costError="Cost cant be blank";
      }

      
    if(idError||nameError || costError){
        this.setState({idError,nameError,costError});
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
        {this.state.costError}
        </div>
        <div>
    <label>Subject :</label>
     <input style={{fontSize:16}}name="address" type="text" placeholder="Address" value={this.state.address} onChange={this.handleChange}/>
    </div>
      <br/>
    <button type="submit">Submit</button>
     </form>
      );
  }


}