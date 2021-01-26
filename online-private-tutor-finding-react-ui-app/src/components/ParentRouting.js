import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Link, Route ,Redirect} from "react-router-dom";
import ParentHome from './ParentHome';
import ViewTutorTable from './ViewTutorTable';

import RateTutor from './RateTutor';
import EbookTable from './AdminEbookTable';

import RequestDemo from './RequestDemo'
import BookTutor from './BookTutor'
import ViewBookedTutor from './ViewBookedTutor'
import Logout from './Logout';
import ViewEbook from './ViewEbook';

// export default function ParentRouting() {
//     return (
    //     <Router>
    //     <div>
    //         <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //             <div className="container-fluid">
    //                 <div className="collapse navbar-collapse" id="navbarNav">
    //                     <ul className="navbar-nav">
    //                         <li className="nav-item">
    //                             <Link className="nav-link" to="/">

// export default function ParentRouting() {
//     return (
//         <Router>
//         <div>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                 <div className="container-fluid">
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/">
                                    
//     //                             </Link>
//     //                         </li>
//     //                         <li className="nav-item">
//     //                             <Link className="nav-link" to="/viewTutor">
//     //                                 View Tutor
//     //                             </Link>
//     //                         </li>
//     //                         <li className="nav-item">
//     //                             <Link className="nav-link" to="/requestDemo">
//     //                                 Request Demo
//     //                             </Link>
//     //                         </li>
//     //                         <li className="nav-item">
//     //                             <Link className="nav-link" to="/bookTutor">
//     //                                 Book Tutor
//     //                             </Link>
//     //                         </li>
//     //                         <li className="nav-item">
//     //                             <Link className="nav-link" to="/viewEbook">
//     //                                 View Ebook
//     //                             </Link>
//     //                         </li>
//     //                         <li className="nav-item">
//     //                             <Link className="nav-link" to="/viewBookedTutor">
//     //                                 View BookedTutor
//     //                             </Link>
//     //                         </li>
//     //                         <li className="nav-item">
//     //                             <Link className="nav-link" to="/rateTutor">
//     //                                 Rate Tutor
//     //                             </Link>
//     //                         </li>
//     //                     </ul>
//     //                 </div>
//     //             </div>
//     //         </nav>

//     //         <Switch>
//     //             <Route  exact path="/">
//     //                 <ParentHome/>
//     //             </Route>
//     //             <Route  exact path="/viewTutor">
//     //                 <ViewTutorTable />
//     //             </Route>

//     //             <Route path="/requestDemo">
//     //                 <RequestDemo />
//     //             </Route>

//     //             <Route path="/bookTutor">
//     //                 <BookTutor />
//     //             </Route>

//     //             <Route path="/viewBookedTutor">
//     //                 <ViewBookedTutor />
//     //             </Route>

//     //             <Route path="/rateTutor">
//     //                 <RateTutor/>
//     //             </Route>
//     //             <Route path="/viewEbook">

//     //             <ViewEbook></ViewEbook>


//     //             </Route>
//     //         </Switch>
//     //     </div>
//     // </Router>
//     )
// }


export class ParentRouting extends Component {

    
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
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/viewTutor">
                                        View Tutor
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
                    <Route  exact path="/">
                        <ParentHome/>
                    </Route>
                    <Route  exact path="/viewTutor">
                        <ViewTutorTable />
                    </Route>
    
                    <Route path="/requestDemo">
                        <RequestDemo />
                    </Route>
    
                    <Route path="/bookTutor">
                        <BookTutor />
                    </Route>
    
                    <Route path="/viewBookedTutor">
                        <ViewBookedTutor />
                    </Route>
    
                    <Route path="/rateTutor">
                        <RateTutor/>
                    </Route>
                    <Route path="/viewEbook">
    
                    <ViewEbook></ViewEbook>
    
    
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

export default ParentRouting

