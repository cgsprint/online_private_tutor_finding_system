import logo from './logo.svg';
import './App.css';
import AddUpdateTutor from './components/AddUpdateTutor';
import ParentTable from './components/ParentTable';
import TutorTable from './components/TutorTable';
import AdminRouting from './components/AdminRouting';
import AdminLogin from './components/AdminLogin';

function App() {
  return (
    <div className="App">
      {/* <AddUpdateTutor/> */}
      {/* <ParentTable/> */}
      {/* <TutorTable/> */}
      {/* <AdminRouting/> */}
      <AdminLogin/>
    </div>
  );
}

export default App;
