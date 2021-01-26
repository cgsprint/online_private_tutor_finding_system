import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import MainLogin from './components/MainLogin';


import ParentLogin from './components/ParentLogin';
import AdminRouting from './components/AdminRouting';

import AddUpdateTutor from './components/AddTutor';
import ParentTable from './components/ParentTable';
import TutorTable from './components/TutorTable';
// import AdminRouting from './components/AdminRouting';
import AdminLogin from './components/AdminLogin';
import TutorLogin from './components/TutorLogin';
import TutorRouting from './components/TutorRouting';

import TutorViewEbook from './components/TutorViewEbook';
import UpdateTutor from './components/UpdateTutor';
import ParentRouting from './components/ParentRouting'
import  AddParent  from './components/RegisterParent';
import RateTutor from './components/RateTutor';
import ViewDemoRequests from './components/ViewDemoRequests';
import AdminUpdateTutor from './components/AdminUpdateTutor'




function App() {
  return (
    <div className="App">

      {/* <ViewDemoRequests></ViewDemoRequests> */}

    {/* <TutorRouting></TutorRouting> */}
      

    {/* <MainLogin/> */}

    <Router>
    <Switch>
      <Route exact path="/" component={MainLogin}></Route>
      <Route path="/admin/home" component={AdminRouting}></Route>
      <Route path="/tutor" component={TutorRouting}></Route>
      <Route path="/parent" component={ParentRouting}></Route>
      <Route path="/updatetutor" component={AdminUpdateTutor}></Route>
    </Switch>
    </Router>
  {/* <UpdateTutor/> */}
    {/* <AddParent /> */}


      {/* <ParentRouting></ParentRouting> */}
    {/* <ParentLogin />*/}
     
      {/* <AddUpdateTutor/> */}
      {/* <ParentTable/> */}
      {/* <TutorTable/> */}

     {/* <AdminRouting/> */}
     {/* <AdminLogin/>*/}
     {/*<UpdateTutor></UpdateTutor>*/}
    {/* <TutorLogin></TutorLogin>*/}

    {/* <TutorRouting></TutorRouting> */}

     

    {/* <TutorRouting></TutorRouting> */}

     {/* <AdminRouting/>*/}
      {/* <AdminLogin/> */}
      {/* <TutorViewEbook/>*/} 
      {/* <UpdateTutor/> */}


    </div>
  );
}

export default App;
