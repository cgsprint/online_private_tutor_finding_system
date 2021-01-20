import React, { Component } from 'react';

const initialState={
    username:"",
    password:""
}

class TutorLogin extends Component {
       
         state=initialState;


         validate(){
            let emptyUsernameError="";
            let emptyPasswordError="";

            if(!this.state.username){
                idError="username cant be blank";
              }

              if(!this.state.password){
                idError="password cant be blank";
              }


         }
           
         
         

    render() {
        return (
            <div>
    <div class="mb-3">
     <label for="username" class="form-label">Username</label>
     <input type="text" class="form-control" id="username" placeholder="Username"/>
     </div>
     <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword"/>
    </div>        
           </div>    
               
           </div>
        );
    }
}

export default TutorLogin;
