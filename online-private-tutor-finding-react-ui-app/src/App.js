import logo from './logo.svg';
import './App.css';
import AddTutor from './components/AddTutor';
import ParentTable from './components/ParentTable';
import TutorTable from './components/TutorTable';
import AdminRouting from './components/AdminRouting';
import AdminLogin from './components/AdminLogin';
import UpdateTutor from './components/UpdateTutor';
import TutorLogin from './components/TutorLogin';
import TutorRouting from './components/TutorRouting';
import TutorViewEbook from './components/TutorViewEbook';
// import UpdateTutor from './components/UpdateTutor';

function App() {
  return (
    <div className="App">
      {/* <AddTutor/> */}
      {/* <ParentTable/> */}
      {/* <TutorTable/> */}

      {/* <AdminRouting/>/*} 
     {/* <AdminLogin/>*/}
     {/*<UpdateTutor></UpdateTutor>*/}
    {/* <TutorLogin></TutorLogin>*/}
     <TutorRouting></TutorRouting>

      <AdminRouting/>
      {/* <AdminLogin/> */}
      {/* <TutorViewEbook/> */}
      {/* <UpdateTutor/> */}
    </div>
  );
}

export default App;
