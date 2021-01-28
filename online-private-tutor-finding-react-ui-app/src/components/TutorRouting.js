
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from "react-router-dom";
import TutorHome from './TutorHome';
import ViewBookings from './ViewBookings';
import TutorViewEbook from './TutorViewEbook'
import UpdateTutor from './UpdateTutor'
import ViewDemoRequests from './ViewDemoRequests';
import Logout from './Logout';
import * as actionCreators3 from '../actions/GetTutorById'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Footer from './footer';


export class TutorRouting extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem('token');
    
        console.log("token is",token);
        let loggedIn = true

        if(token === null)
        {
            loggedIn = false
        }

        this.state = {
             loggedIn
        }

        
    }

    

    render() {

        if(this.state.loggedIn === false)
        {
            return <Redirect to="/" />
        }

        return (
            <div className="page-container">
              <div className="content-wrap">
            <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">

                                    <Link className="nav-link" to="/tutor/home">
                                        
                                    </Link>
                                </li>
                                <li className="nav-item">

                                    <Link className="nav-link" to="/tutor/viewBookings">

                                        View Bookings
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/tutor/updateTutor">
                                        Update  Profile
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/tutor/viewrequests">
                                         Demo Requests
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link" to="/tutor/viewEbook">
                                        View Ebook
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">
                                    <div className="ml-auto">  Logout </div>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route exact path="/tutor/home">
                        <TutorHome/>
                    </Route>
                    <Route exact path="/tutor/viewbookings">
                        <ViewBookings/>
                    </Route>
                    <Route path="/tutor/updatetutor">
                        <UpdateTutor />
                    </Route>
                    <Route path="/tutor/viewparents">
                        <ViewBookings></ViewBookings>
                    </Route>
                    <Route path="/tutor/viewrequests">
                        <ViewDemoRequests></ViewDemoRequests>
                    </Route>

                    <Route path="/tutor/viewEbook">
                        <TutorViewEbook></TutorViewEbook>
                    </Route>
                    <Route path="/logout">
                    <Logout/>
                </Route>
                </Switch>
            </div>
        </Router>
        </div>
            <Footer />
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state is jkjn ",state);
  
    return {
          tutor: state.tutor,
          returnedMessage: state.tutorUpdationMsg,
  
    };
  };
  

  
  export default TutorRouting;