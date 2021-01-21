import React, { Component } from 'react'
import AddParent from './AddParent'

export class ParentLogin extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       renderComponent : 'LOGIN_PARENT'
    }
  }

  renderRegister = () =>
  {
    this.setState({
      renderComponent : 'REGISTER_PARENT'
    })
  }
  
    render() {

      if(this.state.renderComponent === 'LOGIN_PARENT')
      {
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
                      name="username"
                      ref={this.username}
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
                      name="password"
                      ref={this.password}
                      placeholder="Eg: john@123"
                      required
                    />
                  </div>
                  </div>

                  <div class="row mt-3">
              <div class="col">
                <button
                  class="btn btn-primary btn-sm ">
                  Login
                </button>
              </div>
              
              
              </div>
              <div class="row mt-3">
              <div class="col">
              {/* <h5>or <a href={<AddParent />} class="link-primary">Registration</a></h5> */}
              <h5 onClick={this.renderRegister}><a class="link-primary">Registration</a></h5>
                  </div>
                  </div>
          </form>
        </div>
      </div>

          </div>
      )
  }

  else if (this.state.renderComponent === 'REGISTER_PARENT')
  {
    // console.log("register")
    
    return <div>
       <AddParent/>
    </div>
  }

      }
      
      
}

export default ParentLogin
