
import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Link, Route , Redirect} from "react-router-dom";

import AdminHome from './AdminHome';
import AddTutor from './AddTutor';
import UpdateTutor from './UpdateTutor';
import AddEbook from './AddEbook';
import UpdateEbook from './UpdateEbook';
import ParentTable from './ParentTable';
import TutorTable from './TutorTable';
import EbookTable from './AdminEbookTable';
import Logout from './Logout';

export class AdminRouting extends Component {

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
        
        console.log(this.state.loggedIn);
        return (
        <Router>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/home">
                                    
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/viewparents">
                                    View Parents
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/addtutor">
                                    Add Tutor
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/addebook">
                                    Add Ebook
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/viewtutors">
                                    View Tutor
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/viewebooks">
                                    View Ebook
                                </Link>
                            </li>
                            
                            <li className="nav-item text-right">
                                <Link className="nav-link" to="/logout">
                                    Logout
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            {/* </div> */}

            <Switch>
                <Route  exact path="/admin/home">
                    <AdminHome/>
                </Route>
                <Route path="/admin/viewparents">
                    <ParentTable/>
                </Route>

                <Route path="/admin/addtutor">
                    <AddTutor/>
                </Route>

                <Route path="/admin/addebook">
                    <AddEbook/>
                </Route>

                <Route path="/admin/viewtutors">
                    <TutorTable/>
                </Route>

                <Route path="/admin/viewebooks">
                    <EbookTable/>
                </Route>
                <Route path="/logout" >
                    <Logout/>
                </Route>
            </Switch>
            </div>

    </Router>
        )
    }
}

export default AdminRouting
