import React, { Component } from "react";

class AddUpdateEbook extends Component {
  render() {
    return (
      <div class="container mt-5 px-3 py-3 border border-dark rounded">
        <div class="row">
          <div class="col">
            <h2>Add Ebook</h2>
            <br></br>
            <form method="post">
              

              <div class="mb-3 row">
                <label for="title" class="col-sm-4 col-form-label">
                  Ebook Title
                </label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    name="ebookTitle"
                    required
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="auth" class="col-sm-4 col-form-label">
                  Ebook Authorname
                </label>
                <div class="col-sm-5">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    name="ebookAuthorname"
                    required
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="url" class="col-sm-4 col-form-label">
                  Ebook Url
                </label>
                <div class="col-sm-5">
                  <input
                    type="url"
                    class="form-control form-control-sm"
                    name="ebookUrl"
                    required
                  />
                </div>
              </div>

              <div class="row mt-3">
                <div class="col">
                  <button
                    class="btn btn-primary btn-sm"
                    onClick={this.addEbook}
                  >
                    Add
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

export default AddUpdateEbook;
