import logo from './logo.svg';
import './App.css';
import AddUpdateTutor from './components/AddUpdateTutor';
import ParentTable from './components/ParentTable';
import TutorTable from './components/TutorTable';
import AdminRouting from './components/AdminRouting';
import AdminLogin from './components/AdminLogin';
import UpdateTutor from './components/UpdateTutor';
import TutorLogin from './components/TutorLogin';
import TutorRouting from './components/TutorRouting';

function App() {
  return (
    <div className="App">
      {/* <AddUpdateTutor/> */}
      {/* <ParentTable/> */}
      {/* <TutorTable/> */}
      {/* <AdminRouting/>/*} 
     {/* <AdminLogin/>*/}
     {/*<UpdateTutor></UpdateTutor>*/}
    {/* <TutorLogin></TutorLogin>*/}
     <TutorRouting></TutorRouting>
     
    </div>
  );
}

export default App;
