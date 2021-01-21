import React from "react";

const initialState = {
  id: "",
  name: "",
  subject: "",
  address: "",
  phonenumber: "",
  nameError: "",
  subjectError: "",
  addressError: "",
  phoneError: "",
};

export default class UpdateTutor extends React.Component {
  state = initialState;

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.id]: isCheckbox ? event.target.checked : event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let subjectError = "";
    let addressError = "";
    let phoneError = "";
    let idError = "";
    let nameIsString = "";
    let idIsNumber = "";

    if (!this.state.id) {
      idError = "id cant be blank";
    }

    if (this.state.name.length > 5) {
      nameError = "name cant be small";
    }

    if (!this.state.subject) {
      subjectError = "Subject cant be blank";
    }

    if (!this.state.address) {
      addressError = "address cant be blank";
    }

    if (!this.state.phonenumber) {
      phoneError = "mobile number cant be blank";
    }

    if (idError || nameError || subjectError || addressError || phoneError) {
      this.setState({
        idError,
        nameError,
        subjectError,
        addressError,
        phoneError,
      });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);

      //Clear state
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div className="container mt-5 px-3 py-3 border border-dark rounded">
        <div className="row">
          <div className="col">
            <h2>Update Tutor Profile</h2>
            <br></br>
            <form method="post" onSubmit={this.handleSubmit}>
              <div className="mb-3 row">
                <label for="tutorId" className="col-sm-4 col-form-label">
                  Tutor Id
                </label>
                <div className="col-sm-5">
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    name="tutorId"
                    id="tutorId"
                    ref={this.id}
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label for="tutorName" className="col-sm-4 col-form-label">
                  Tutor Name
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="tutorName"
                    id="tutorName"
                    ref={this.name}
                    required
                  />
                </div>

                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.nameError}
                </div>

                <div style={{fontSize:12,color:"red"}}>
        {this.state.nameError}
        </div>

              </div>

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
              </div>

              <div className="mb-3 row">
                <label for="tutorPassword" className="col-sm-4 col-form-label">
                  Tutor Password
                </label>
                <div className="col-sm-5">
                  <input
                    type="password"
                    pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}"
                    className="form-control form-control-sm"
                    name="tutorPassword"
                    id="tutorPassword"
                    ref={this.password}
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label for="tutorSubject" className="col-sm-4 col-form-label">
                  Tutor Subject
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="tutorSubject"
                    id="tutorSubject"
                    ref={this.subject}
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label for="tutorPhoneNo" className="col-sm-4 col-form-label">
                  Tutor Phone Number
                </label>
                <div className="col-sm-5">
                  <input
                    type="number"
                    pattern="[6-9]{4}[0-9]{6}"
                    className="form-control form-control-sm"
                    name="tutorPhoneNo"
                    id="tutorPhoneNo"
                    ref={this.phonenumber}
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label for="tutorAddress" className="col-sm-4 col-form-label">
                  Tutor Address
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="tutorAddress"
                    id="tutorAddress"
                    ref={this.address}
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  for="tutorQualification"
                  className="col-sm-4 col-form-label"
                >
                  Tutor Qualification
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="tutorQualification"
                    id="tutorQualification"
                    ref={this.qualification}
                    required
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col">
                  <button type="submit" className="btn btn-primary btn-sm">
                    Update Profile
                  </button>
                </div>
              </div>
              </form> 
            </div>
          </div>
        </div>


      //         <div>
      //           <label>Subject :</label>
      //           <input
      //             style={{ fontSize: 16 }}
      //             name="subject"
      //             type="text"
      //             placeholder="Subject"
      //             value={this.state.subject}
      //             onChange={this.handleChange}
      //           />
      //         </div>
      //         <div style={{ fontSize: 12, color: "red" }}>
      //           {this.state.subjectError}
      //         </div>
      //         <div>
      //           <label>Address :</label>
      //           <input
      //             style={{ fontSize: 16 }}
      //             name="address"
      //             type="text"
      //             placeholder="Address"
      //             value={this.state.address}
      //             onChange={this.handleChange}
      //           />
      //         </div>

      //         <div>
      //           <label>Phone Number :</label>
      //           <input
      //             style={{ fontSize: 16 }}
      //             name="phonenumber"
      //             type="number"
      //             placeholder="Phone Number"
      //             value={this.state.phonenumber}
      //             onChange={this.handleChange}
      //           />
      //         </div>
      //         <br />

      //         <button type="submit">Submit</button>
      //       </form>
      //     </div>
      //   </div>
      // </div>
    );


  }
}
