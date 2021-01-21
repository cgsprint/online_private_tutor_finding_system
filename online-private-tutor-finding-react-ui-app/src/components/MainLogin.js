import React, { Component } from "react";

export class MainLogin extends Component {
  parentSelected = () => {

    let admin = document.getElementById("admin");
    let tutor = document.getElementById("tutor");
    let parent = document.getElementById("parent");
    let element = document.getElementById("registerLink");

    if(admin.checked)
    {
      // console.log("admin")
      element.classList.remove("d-block")
    }
    if(tutor.checked)
    {
      // console.log("tutor")
      element.classList.remove("d-block")

    }
    if(parent.checked)
    {
      // console.log("parent")
      element.classList.add("d-block")
    }

   

    
  };
  render() {
    return (
      <div class="container mt-5 px-3 py-3 border border-dark rounded bg-light text-dark">
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
                  <div class="col d-flex flex-row bd-highlight mb-3 justify-content-between" id="role" >
                    <div class="form-check p-2 bd-highlight">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="role"
                        id="admin"
                        value="admin"
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
                        onChange={this.parentSelected}

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
                        onChange={this.parentSelected}
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

            <div class="row mt-3 d-none" id="registerLink">
              <div class="col">
                {/* <h5>or <a href={<AddParent />} class="link-primary">Registration</a></h5> */}
                <h6 onClick={this.renderRegister}>
                  <a class="link-primary">Don't have an account? </a>
                </h6>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default MainLogin;
