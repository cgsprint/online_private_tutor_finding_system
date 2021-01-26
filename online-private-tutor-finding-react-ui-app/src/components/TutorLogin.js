import React, { Component } from 'react';


const initialState={
    username:"",
    password:"",
    usernameError:"",
    passwordError:""

}

class TutorLogin extends Component {

    state=initialState;

    validate=()=>{
        let usernameError="";
         let passwordError ="";
   
         if(this.state.username.length<5){
            usernameError="username should be more than 5 characters";
          }

          if(usernameError){
            this.setState({usernameError});
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
       
    render() {
        return (
            <div className="container mt-5 px-3 py-3 border border-dark rounded">
            <div className="row">
              <div className="col">
                <h2>Tutor Login</h2>
                <br></br>
            <form method="post" onSubmit={this.handleSubmit}>
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
                required
              />
            </div>
            <div style={{fontSize:12,color:"red"}}>
        {this.state.usernameError}
        </div>
          </div>

          <div className="mb-3 row">
            <label for="tutorPassword" className="col-sm-4 col-form-label">
              Tutor Password
            </label>
            <div className="col-sm-5">
              <input
                type="password"
               
                className="form-control form-control-sm"
                name="tutorPassword"
                id="tutorPassword"
                ref={this.password}
                required
              />
            </div>
          </div>
          <div className="row mt-3">
                <div className="col">
                  <button type="submit"
                    className="btn btn-primary btn-sm"
                  >
                    Sign In
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

export default TutorLogin;
