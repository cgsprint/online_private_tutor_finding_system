import React, { Component } from 'react'
import * as actionCreators from '../actions/ParentBookedTutor'
import { connect } from 'react-redux'

 class ViewBookedTutor extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            renderForm: 'VIEW_BOOKED_TUTOR',
            tId: 0
        }
    }
    
    componentDidMount() {
        this.props.onGetBookedTutor()
    }


    render() {

        var render_form = this.state.renderForm;
        console.log(render_form)
        if(this.props.bookedtutorsList!==null)
        {
        var bookedtutorsList = this.state.bookedtutorsList.map((b,index) =>{
            return (
                <tr key={index}>
                    <th>{b.tutorid}</th>
                    <td>{b.name}</td>
                    <td>{b.address}</td>
                    <td>{b.subject}</td>
                    <td>{b.qualification}</td>
                    <td>{b.phoneno}</td>
                </tr>
            )
        })
    }

        if(render_form === 'VIEW_BOOKED_TUTOR')
{
        return (
            <div>
                <table className="table table-info demo-request-table">
                    <thead>
                        <tr>
                            <th scope="col">TutorId</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Qualification</th>
                            <th scope="col">Phone no</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookedtutorsList}
                    </tbody>
                </table>  

            </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        bookedtutorsList:state.bookedtutorsList,
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetBookedTutor: () => {
          return  dispatch(actionCreators.getBookedTutor())
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ViewBookedTutor)


