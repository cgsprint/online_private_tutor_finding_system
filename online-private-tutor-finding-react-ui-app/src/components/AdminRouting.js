import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import AddUpdateTutor from './AddUpdateTutor';
import ParentTable from './ParentTable';
import TutorTable from './TutorTable';

function AdminRouting() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/viewparents">
                                        View Parents
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/addupdatetutor">
                                        Add/Update Tutor
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/addupdateebook">
                                        Add/Update Ebook
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/viewtutors">
                                        View Tutor
                                    </Link>
                                </li><li className="nav-item">
                                    <Link className="nav-link" to="/viewebook">
                                        View Ebook
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route  exact path="/viewparents">
                        <ParentTable/>
                    </Route>

                    <Route path="/addupdatetutor">
                        <AddUpdateTutor/>
                    </Route>

                    <Route path="/addupdateebook">
                        
                    </Route>

                    <Route path="/viewtutors">
                        <TutorTable/>
                    </Route>

                    <Route path="/viewebooks">
                        
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default AdminRouting
