import './App.css';

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



function App() {
  return (
    <div className="App">

      
    <MainLogin/>
    
    {/* <AddParent /> */}

      {/* <ParentRouting /> */}
    {/* <ParentLogin />*/}
     
      {/* <AddUpdateTutor/> */}
      {/* <ParentTable/> */}
      {/* <TutorTable/> */}

     {/* <AdminRouting/> */}
     {/* <AdminLogin/>*/}
     {/*<UpdateTutor></UpdateTutor>*/}
    {/* <TutorLogin></TutorLogin>*/}
    {/* <TutorRouting></TutorRouting> */}
     
     {/* <AdminRouting/>*/}
      {/* <AdminLogin/> */}
      {/* <TutorViewEbook/>*/} 
      {/* <UpdateTutor/> */}


    </div>
  );
}

export default App;
