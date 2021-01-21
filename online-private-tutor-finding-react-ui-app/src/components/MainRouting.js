
import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import AdminLogin from './AdminLogin';
import ParentLogin from './ParentLogin';
import TutorLogin from './TutorLogin';

function MainRouting() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/adminlogin">
                                        Admin
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/tutorlogin">
                                        Tutor
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/parentlogin">
                                        Parent
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route  exact path="/adminlogin">
                        <AdminLogin/>
                    </Route>

                    <Route path="/tutorlogin">
                        <TutorLogin/>
                    </Route>

                    <Route path="/parentlogin">
                        <ParentLogin/>
                    </Route>

                    
                </Switch>
            </div>
        </Router>
    )
}

export default MainRouting
