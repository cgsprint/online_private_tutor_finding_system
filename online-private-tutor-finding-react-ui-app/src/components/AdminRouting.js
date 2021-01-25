
import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import AdminHome from './AdminHome';
import AddTutor from './AddTutor';
import UpdateTutor from './UpdateTutor';
import AddEbook from './AddEbook';
import UpdateEbook from './UpdateEbook';
import ParentTable from './ParentTable';
import TutorTable from './TutorTable';
import EbookTable from './AdminEbookTable';

function AdminRouting() {
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
                                    <Link className="nav-link" to="/viewparents">
                                        View Parents
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/addtutor">
                                        Add Tutor
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/addebook">
                                        Add Ebook
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/updateebook">
                                        Update Ebook
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/viewtutors">
                                        View Tutor
                                    </Link>
                                </li><li className="nav-item">
                                    <Link className="nav-link" to="/viewebooks">
                                        View Ebook
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route  exact path="/">
                        <AdminHome/>
                    </Route>
                    <Route  exact path="/viewparents">
                        <ParentTable/>
                    </Route>

                    <Route path="/addtutor">
                        <AddTutor/>
                    </Route>

                    <Route path="/addebook">
                        <AddEbook/>
                    </Route>

                    <Route path="/updateebook">
                        <UpdateEbook/>
                    </Route>

                    <Route path="/viewtutors">
                        <TutorTable/>
                    </Route>

                    <Route path="/viewebooks">
                        <EbookTable/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default AdminRouting
