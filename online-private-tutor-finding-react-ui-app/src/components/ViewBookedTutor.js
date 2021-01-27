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

        const parent = localStorage.getItem("parentObj")
        console.log(JSON.parse(parent).parentId)
        const parentId = JSON.parse(parent).parentId
        this.props.onGetBookedTutor(parentId)
    }


    render() {

        var render_form = this.state.renderForm;
        console.log(render_form)
        if(this.props.bookedTutorList != null)
        {
            var bookedTutorList = this.props.bookedTutorList.map((b,index) =>{
                return (
                    <tr key={index}>
                        <th>{b.tutorId}</th>
                        <th>{b.subject}</th>
                        <th>{b.localDate}</th>
                        <th>{b.localTime}</th>
                    </tr>
                )
            });
        }
        else
        {
            return (
                <div>Seems you have not booked any tutor</div>
            )
        }

        if(render_form === 'VIEW_BOOKED_TUTOR')
    {
        return (
            <div>
                <h2 className="text-center">My booked Tutors</h2>

                <table className="table table-striped demo-request-table">
                    <thead>
                        <tr>
                            <th scope="col">TutorId</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookedTutorList}
                    </tbody>
                </table>  

            </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        bookedTutorList:state.bookedTutorsList,
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetBookedTutor: (parentId) => {
          return  dispatch(actionCreators.getBookedTutor(parentId))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ViewBookedTutor)


