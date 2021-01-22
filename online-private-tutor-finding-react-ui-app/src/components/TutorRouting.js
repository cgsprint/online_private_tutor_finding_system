import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import TutorHome from './TutorHome';
import ViewBookings from './ViewBookings';
import TutorViewEbook from './TutorViewEbook'
import UpdateTutor from './UpdateTutor'
import ViewDemoRequests from './ViewDemoRequests';


function TutorRouting() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/viewbookings">
                                        View Bookings
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/updatetutor">
                                        Update  Profile
                                    </Link>
                                </li>


                                
                                <li className="nav-item">
                                    <Link className="nav-link" to="/viewbook">
                                        View Ebook
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/viewdemorequests">
                                        View Demo Requests
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route exact path="/viewbookings">
                        <ViewBookings/>
                    </Route>
                    <Route path="/updatetutor">
                        <UpdateTutor></UpdateTutor>
                    </Route>

                    <Route path="/viewbook">
                        <TutorViewEbook></TutorViewEbook>
                    </Route>

                    <Route path="/viewdemorequests">
                        <ViewDemoRequests/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
 export default TutorRouting

