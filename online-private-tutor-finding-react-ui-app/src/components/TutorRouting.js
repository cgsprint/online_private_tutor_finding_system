
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from "react-router-dom";
import TutorHome from './TutorHome';
import ViewBookings from './ViewBookings';
import TutorViewEbook from './TutorViewEbook'
import UpdateTutor from './UpdateTutor'
import ViewDemoRequests from './ViewDemoRequests';
import Logout from './Logout';



// function TutorRouting() {
//     return (
        // <Router>
        //     <div>
        //         <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //             <div className="container-fluid">
        //                 <div className="collapse navbar-collapse" id="navbarNav">
        //                     <ul className="navbar-nav">
        //                         <li className="nav-item">

        //                             <Link className="nav-link" to="/">
                                        
        //                             </Link>
        //                         </li>
        //                         <li className="nav-item">

        //                             <Link className="nav-link" to="/viewBookings">

        //                                 View Bookings
        //                             </Link>
        //                         </li>
        //                         <li className="nav-item">
        //                             <Link className="nav-link" to="/updateTutor">
        //                                 Update  Profile
        //                             </Link>
        //                         </li>
        //                         <li className="nav-item">
        //                             <Link className="nav-link" to="/viewrequests">
        //                                  Demo Requests
        //                             </Link>
        //                         </li>
                                
        //                         <li className="nav-item">
        //                             <Link className="nav-link" to="/viewEbook">
        //                                 View Ebook
        //                             </Link>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </nav>

        //         <Switch>
        //             <Route exact path="/viewbookings">
        //                 <ViewBookings/>
        //             </Route>
        //             <Route path="/updatetutor">
        //                 <UpdateTutor></UpdateTutor>
        //             </Route>
        //             <Route path="/viewparents">
        //                 <ViewBookings></ViewBookings>
        //             </Route>
        //             <Route path="/viewrequests">
        //                 <ViewDemoRequests></ViewDemoRequests>
        //             </Route>

        //             <Route path="/viewEbook">
        //                 <TutorViewEbook></TutorViewEbook>
        //             </Route>

        //         </Switch>
        //     </div>
        // </Router>
//     )
// }
//  export default TutorRouting



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
                                    Logout
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
                        <UpdateTutor></UpdateTutor>
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
        )
    }
}

export default TutorRouting
