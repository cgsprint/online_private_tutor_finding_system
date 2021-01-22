import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import TutorLogin from './TutorLogin'
import TutorViewEbook from './TutorViewEbook'
import UpdateTutor from './UpdateTutor'


function TutorRouting() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/viewBookings">
                                        View Bookings
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/updateTutor">
                                        Update  Profile
                                    </Link>
                                </li>


                                
                                <li className="nav-item">
                                    <Link className="nav-link" to="/viewEbook">
                                        View Ebook
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Switch>
                    
                    <Route path="/updatetutor">
                        <UpdateTutor></UpdateTutor>
                    </Route>

                    <Route path="/viewbook">
                        <TutorViewEbook></TutorViewEbook>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
 export default TutorRouting

