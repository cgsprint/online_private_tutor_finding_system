import logo from './logo.svg';
import './App.css';
import AddUpdateTutor from './components/AddTutor';
import ParentTable from './components/ParentTable';
import TutorTable from './components/TutorTable';
import AdminRouting from './components/AdminRouting';
import AdminLogin from './components/AdminLogin';
import TutorViewEbook from './components/TutorViewEbook';
import UpdateTutor from './components/UpdateTutor';

function App() {
  return (
    <div className="App">
      {/* <AddUpdateTutor/> */}
      {/* <ParentTable/> */}
      {/* <TutorTable/> */}
      <AdminRouting/>
      {/* <AdminLogin/> */}
      {/* <TutorViewEbook/> */}
      {/* <UpdateTutor/> */}
    </div>
  );
}

export default App;
