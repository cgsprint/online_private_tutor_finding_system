import React, { Component } from "react";
import AddParent from './AddParent'

export class MainLogin extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userRole: "",
       userUsername: "",
       userPassword: "",
       renderPage: "MAIN_LOGIN"
    }
  }

  eventHandler = (e) =>
    {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
  

  parentSelected = () => {
    var admin = document.getElementById("admin");
    var tutor = document.getElementById("tutor");
    var parent = document.getElementById("parent");
    var element = document.getElementById("registerLink");
    
    if (admin.checked) {
      element.classList.remove("d-block");
      this.setState({
        userRole: "admin"
      })
    }
    if (tutor.checked) {
      element.classList.remove("d-block");
      this.setState({
        userRole: "tutor"
      })
    }
    if (parent.checked) {
      element.classList.add("d-block");
      this.setState({
        userRole: "parent"
      })
    }
  };

  userLogin = () => {
    // alert(
    //   this.state.userRole+ " " + this.state.userPassword +" "+ this.state.userUsername
    // );




  };

  renderRegister = () =>
  {
    this.setState({
      renderPage: "ADD_PARENT"
    })
  }

  render() {
    const renderComponent = this.state.renderPage;
    if(renderComponent === "MAIN_LOGIN")
    {
      return (
        <div class="container mt-5 px-3 py-3 border border-dark rounded text-dark">
          <div class="row">
            <div class="col">
              <h2>Login Page </h2>
              <br></br>
              <form>
                <div class="mb-0 row">
                  <label for="username" class="col-sm-5 col-form-label mr-3">
                    Select Role
                  </label>
                  <div class="col-sm-4 ">
                    <div
                      class="col d-flex flex-row bd-highlight mb-3 justify-content-between"
                      id="role"
                    >
                      <div class="form-check p-2 bd-highlight">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="role"
                          id="admin"
                          value="admin"
                          ref={this.userRole}
                          onChange={this.parentSelected}
                        ></input>
                        <label class="form-check-label" for="admin">
                          Admin
                        </label>
                      </div>

                      <div class="form-check p-2 bd-highlight">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="role"
                          id="tutor"
                          value="tutor"
                          ref={this.userRole}
                          onChange={this.parentSelected}
                          required
                        ></input>
                        <label class="form-check-label" for="tutor">
                          Tutor
                        </label>
                      </div>

                      <div class="form-check p-2 bd-highlight">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="role"
                          id="parent"
                          value="parent"
                          ref={this.userRole}
                          onChange={this.parentSelected}
                          required
                        ></input>
                        <label class="form-check-label" for="parent">
                          Parent
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="username" class="col-sm-5 col-form-label">
                    Enter Username
                  </label>
                  <div class="col-sm-4 ">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      name="userUsername"
                      id="adminUsername"
                      onChange={this.eventHandler}
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
                      name="userPassword"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      id="adminPassword"
                      onChange={this.eventHandler}
                      required
                    />
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col">
                    <button
                      class="btn btn-primary btn-sm"
                      onClick={this.userLogin}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>

              <div class="row mt-3 d-none" id="registerLink">
                <div class="col">
                  {/* <h5>or <a href={<AddParent />} class="link-primary">Registration</a></h5> */}
                  <h6 onClick={this.renderRegister} style={{color: 'blue', textDecoration: 'underline'}}>
                    Don't have an account? 
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    else if(this.state.renderPage === 'ADD_PARENT')
    {
      return (
      <div>
        <AddParent/>
      </div>);
    }
    else
    {
      return <div>{this.state.renderPage}</div>;
    }
  }
}

export default MainLogin;
