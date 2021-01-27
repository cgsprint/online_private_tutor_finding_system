import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../Ebook/AddEbookAction'

class AddEbook extends Component {
  constructor(props) {
    super(props);
    
    this.title = React.createRef()
    this.authorname = React.createRef()
    this.url = React.createRef()
  }
  componentDidMount() {
    this.props.clearState()
  }
  componentDidUpdate() {
    let check = this.props.returnedMessage.split(' ')
    if (check[0] === 'Successfully') {
      setTimeout(() => {
        this.props.history.push('/addebook')
      } ,2000)
    }
  }
  add(e) {
      let newEbook = {
        title : this.title.current.value,
        authorname : this.authorname.current.value,
        url : this.url.current.value
      }
      this.props.onAddEbook(newEbook)
  }


  
 
  render() {
    return (
      <div >
      <div className="container mt-5 px-3 py-3 border border-dark rounded">
        <div className="row">
          <div className="col">
            <h2>Add Ebook</h2>
            <br></br>
            <form>
              

              <div className="mb-3 row">
                <label htmlFor="title" className="col-sm-4 col-form-label">
                  Ebook Title
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    ref={this.title}
                    name="title"
                    required
                  />
                  </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="authorname" className="col-sm-4 col-form-label">
                  Ebook Authorname
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    ref={this.authorname}
                    name="authorname"
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="url" className="col-sm-4 col-form-label">
                  Ebook Url
                </label>
                <div className="col-sm-5">
                  <input
                    type="url"
                    className="form-control form-control-sm"
                    ref={this.url}
                    name="url"
                    required
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={this.add.bind(this)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <br></br>
      <br></br>

      <div className={(this.props.returnedMessage === '') ? '' : "alert"} role="alert">
              {this.props.returnedMessage}
            </div>

         

      </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
      returnedMessage: state.returnedMessage ,
      
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onAddEbook: (ebook) => {
        console.log(actionCreators.addEbook)
          dispatch(actionCreators.addEbook(ebook))
      }

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddEbook))
