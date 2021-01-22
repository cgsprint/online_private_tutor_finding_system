import './App.css';

import MainLogin from './components/MainLogin';


import ParentLogin from './components/ParentLogin';
import ParentRouting from './components/ParentRouting';

import AddUpdateTutor from './components/AddTutor';
import ParentTable from './components/ParentTable';
import TutorTable from './components/TutorTable';
import AdminRouting from './components/AdminRouting';
import AdminLogin from './components/AdminLogin';
import TutorLogin from './components/TutorLogin';
import TutorRouting from './components/TutorRouting';

import TutorViewEbook from './components/TutorViewEbook';
import UpdateTutor from './components/UpdateTutor';




function App() {
  return (
    <div className="App">

      
    {/*<MainLogin/>*/}
    


      {/*<ParentRouting />*/}
    {/* <ParentLogin />*/}
     
      {/* <AddUpdateTutor/> */}
      {/* <ParentTable/> */}
      {/* <TutorTable/> */}

      {/* <AdminRouting/>/*} 
     {/* <AdminLogin/>*/}
     {/*<UpdateTutor></UpdateTutor>*/}
    {/* <TutorLogin></TutorLogin>*/}
    <TutorRouting></TutorRouting>
     
     {/* <AdminRouting/>*/}
      {/* <AdminLogin/> */}
      {/* <TutorViewEbook/>*/} 
      {/* <UpdateTutor/> */}


    </div>
  );
}

export default App;
