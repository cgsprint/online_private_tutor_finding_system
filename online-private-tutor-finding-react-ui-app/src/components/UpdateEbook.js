import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/UpdateEbookAction'
import { connect } from 'react-redux';

class UpdateEbook extends Component {
  constructor(props) {
    super(props);
    
    this.ebookId = React.createRef()
    this.title = React.createRef()
    this.authorname = React.createRef()
    this.url = React.createRef()
  }
  
  componentDidMount() {
    this.props.clearState()
}
  componentDidUpdate() {
    let check = this.props.returnedMessage.split(' ')
    if(check[0] === 'Successfully') {
      setTimeout(() => {
        this.props.history.push('/updateebook')
      }, 2000)
    }
  }

  update() {
    let ebook = {
      ebookId : this.ebookId.current.value,
      title : this.title.current.value,
      authorname : this.authorname.current.value,
      url : this.url.current.value

    }
    this.props.onUpdateEbook(ebook)
  }
    render() {
        return (
            <div className="container mt-5 px-3 py-3 border border-dark rounded">
        <div className="row">
          <div className="col">
            <h2>Add Ebook</h2>
            <br></br>
            <form>
              <div className="mb-3 row">
                <label htmlFor="ebookId" className="col-sm-4 col-form-label">
                  Ebook Id
                </label>
                <div className="col-sm-5 ">
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    name="ebookId"
                    id="ebookId"
                    ref={this.ebookId}
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="title" className="col-sm-4 col-form-label">
                  Ebook Title
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="title"
                    id="title"
                    ref={this.title}
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label for="auth" className="col-sm-4 col-form-label">
                  Ebook Authorname
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="authorname"
                    id="authorname"
                    ref={this.authorname}
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label for="url" className="col-sm-4 col-form-label">
                  Ebook Url
                </label>
                <div className="col-sm-5">
                  <input
                    type="url"
                    className="form-control form-control-sm"
                    name="url"
                    id="url"
                    ref={this.url}
                    required
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={this.update.bind(this)}
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className={(this.props.returnedMessage === '') ? '' : "alert"} role="alert">
              {this.props.returnedMessage}
            </div>

      </div>

        )
    }
}

const mapStateToProps = (state) => {
  return {
      returnedMessage: state.returnedMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      
      onUpdateEbook: (newEbookObject) => {
          dispatch(actionCreators.updateEbook(newEbookObject))
      },
      clearState: () => {
          dispatch(actionCreators.clearState())

      }

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UpdateEbook))
