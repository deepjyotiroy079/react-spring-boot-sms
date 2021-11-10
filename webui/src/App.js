import "./App.css";
import StudentList from "./components/StudentList/StudentList";
import { Routes, Route } from "react-router-dom";
import AddStudent from "./components/AddStudent/addStudent";
function App() {
  return (
    <div className="App">
      <h1>Student Management System</h1>
      <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />}/>  
      </Routes>
    </div>
  );
}

export default App;
