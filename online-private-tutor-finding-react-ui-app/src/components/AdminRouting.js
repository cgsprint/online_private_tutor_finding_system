
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


// class AdminRouting extends React.Component {

//     constructor(props) {
//         super(props)
//         const token = localStorage.getItem('token');
    
//         let loggedIn = true

//         if(token === null)
//         {
//             loggedIn = false
//         }
        
//         this.state = {
//              loggedIn
//         }
//     }
    

    // const token = localStorage.getItem('token');

    // let loggedIn = true;
    // if(token == null)
    // {
    //     loggedIn = false;
    // }

    // render() {
    // if(this.state.loggedIn === false)
    // {
    //     return <Redirect to="/" />
    // }

    // return (

        

        // <Router>
        //     <div>
        //         <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //             <div className="container-fluid">
        //                 <div className="collapse navbar-collapse" id="navbarNav">
        //                     <ul className="navbar-nav">
        //                         <li className="nav-item">
        //                             <Link className="nav-link" to="/">

// function AdminRouting() {
//     return (
//         <Router>
//             <div>
//                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                     <div className="container-fluid">
//                         <div className="collapse navbar-collapse" id="navbarNav">
//                             <ul className="navbar-nav">
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/">

                                        
//         //                             </Link>
//         //                         </li>
//         //                         <li className="nav-item">
//         //                             <Link className="nav-link" to="/viewparents">
//         //                                 View Parents
//         //                             </Link>
//         //                         </li>
//         //                         <li className="nav-item">
//         //                             <Link className="nav-link" to="/addtutor">
//         //                                 Add Tutor
//         //                             </Link>
//         //                         </li>
//         //                         <li className="nav-item">
//         //                             <Link className="nav-link" to="/addebook">
//         //                                 Add Ebook
//         //                             </Link>
//         //                         </li>
//         //                         <li className="nav-item">
//         //                             <Link className="nav-link" to="/updateebook">
//         //                                 Update Ebook
//         //                             </Link>
//         //                         </li>
//         //                         <li className="nav-item">
//         //                             <Link className="nav-link" to="/viewtutors">
//         //                                 View Tutor
//         //                             </Link>
//         //                         </li>
//         //                         <li className="nav-item">
//         //                             <Link className="nav-link" to="/viewebooks">
//         //                                 View Ebook
//         //                             </Link>
//         //                         </li>
//         //                         <li className="nav-item">
//         //                             <Link className="nav-link" to="/logout">
//         //                                 Logout
//         //                             </Link>
//         //                         </li>
//         //                     </ul>
//         //                 </div>
//         //             </div>
//         //         </nav>

//         //         <Switch>
//         //             <Route  exact path="/">
//         //                 <AdminHome/>
//         //             </Route>
//         //             <Route  exact path="/viewparents">
//         //                 <ParentTable/>
//         //             </Route>

//         //             <Route path="/addtutor">
//         //                 <AddTutor/>
//         //             </Route>

//         //             <Route path="/addebook">
//         //                 <AddEbook/>
//         //             </Route>

//         //             <Route path="/updateebook">
//         //                 <UpdateEbook/>
//         //             </Route>

//         //             <Route path="/viewtutors">
//         //                 <TutorTable/>
//         //             </Route>

//         //             <Route path="/viewebooks">
//         //                 <EbookTable/>
//         //             </Route>
//         //             {/* <Route path="/logout">
//         //                 <Logout/>
//         //             </Route> */}
//         //         </Switch>
//         //     </div>
//         // </Router>
//     )
// }
// }

// export default AdminRouting

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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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

        {/* <Switch>
        <Route exact path="/" component={AdminHome}>
            Home
        </Route>
        <Route path="/viewparents" component={ParentTable}></Route>
        <Route path="/addtutor" component={AddTutor}></Route>
        <Route path="/addebook" component={AddEbook}></Route>
        <Route path="/updateebook" component={UpdateEbook}></Route>
        <Route path="/tutortable" component={TutorTable}></Route>
        <Route path="/ebooktable" component={EbookTable}></Route>
        <Route path="/logout" component={Logout}></Route>
        </Switch> */}
    </Router>
        )
    }
}

export default AdminRouting
