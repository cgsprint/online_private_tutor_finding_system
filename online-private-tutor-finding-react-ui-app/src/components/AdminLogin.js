import React, { Component } from "react";

class AdminLogin extends Component {

    constructor(props) {
        super(props)
    
        this.adminUsername = React.createRef();
        this.adminPassword = React.createRef();
    }


    adminLogin = () =>
    {
        alert(this.adminUsername.current.value+this.adminPassword.current.value)
    }
    
  render() {
    return (
      <div class="container mt-5 px-3 py-3 border border-dark rounded bg-light text-dark">
        <div class="row">
          <div class="col">
            <h2>Admin Login</h2>
            <br></br>
            <form>
              <div class="mb-3 row">
                <label for="username" class="col-sm-5 col-form-label">
                  Enter Username
                </label>
                <div class="col-sm-4 ">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    name="adminUsername"
                    id="adminUsername"
                    ref={this.adminUsername}
                    required
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="password" class="col-sm-5 col-form-label">
                  Enter Password
                </label>
                <div class="col-sm-4">
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    name="adminPassword"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    id="adminPassword"
                    ref={this.adminPassword}
                    required
                  />
                </div>
              </div>

              <div class="row mt-3">
                <div class="col">
                  <button
                    class="btn btn-primary btn-sm"
                    onClick={this.adminLogin}
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>

            <br>
            </br>

          </div>
        </div>

       
      </div>
    );
  }
}

export default AdminLogin;
