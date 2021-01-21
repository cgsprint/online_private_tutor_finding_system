import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import ViewTutor from './ViewTutor';

export default function ParentRouting() {
    return (
        <Router>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/viewTutor">
                                    View Parents
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/requestDemo">
                                    Request Demo
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/bookTutor">
                                    Book Tutor
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/viewEbook">
                                    View Ebook
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/viewBookedTutor">
                                    View BookedTutor
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/rateTutor">
                                    Rate Tutor
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route  exact path="/viewTutor">
                    <ViewTutor />
                </Route>

                <Route path="/requestDemo">
                    
                </Route>

                <Route path="/bookTutor">
                    
                </Route>

                <Route path="/viewBookedTutor">
                    
                </Route>

                <Route path="/rateTutor">
                    
                </Route>
                <Route path="/viewEbook">
                    
                </Route>
            </Switch>
        </div>
    </Router>
    )
}