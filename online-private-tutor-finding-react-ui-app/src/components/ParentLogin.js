import React, { Component } from 'react'
import AddParent from './AddParent';
    

export class ParentLogin extends Component {
    constructor(props) {
        
        super(props)
            this.parentUsername = React.createRef();
            this.parentPassword = React.createRef(); 
    }
    parentLogin =() => 
    {
        alert(this.parentUsername.current.value+this.parentPassword.current.value)
    }
    render() {
        return (
            <div class="container mt-5 px-3 py-3 border border-dark rounded">
            <div class="row">
              <div class="col">
                <h2>Parent Login</h2>
                <br></br>
                <form>
    
                  <div class="mb-3 row">
                    <label for="username" class="col-sm-4 col-form-label">
                      Username :
                    </label>
                    <div class="col-sm-5">
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        name="parentUsername"
                        id="parentUsername"
                        ref={this.parentUsername}
                        placeholder = "Eg: John"
                        required
                      />
                    </div>
                  </div>
    
                  <div class="mb-3 row">
                    <label for="password" class="col-sm-4 col-form-label">
                      Password :
                    </label>
                    <div class="col-sm-5">
                      <input
                        type="password"
                        // pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}"
                        
                        class="form-control form-control-sm"
                        name="parentPassword"
                        id="parentPassword"
                        ref={this.parentPassword}
                        placeholder="Eg: john@123"
                        required
                      />
                    </div>
                    </div>

                    <div class="row mt-3">
                <div class="col">
                  <button
                    class="btn btn-primary btn-sm " onClick={this.parentLogin} >
                    Login
                  </button>
                </div>
                
                
                </div>
                <div class="row mt-3">
                <div class="col">
                <h5>or <a href={<AddParent />} class="link-primary">Registration</a></h5>
                    </div>
                    </div>
            </form>
          </div>
        </div>

            </div>
        )
    }
}

export default ParentLogin
