import "./App.css";
import StudentList from "./components/StudentList/StudentList";
import { Routes, Route } from "react-router-dom";
import AddStudent from "./components/AddStudent/addStudent";
import StudentInfo from "./components/StudentInfo/StudentInfo";
function App() {
  return (
    <div className="App">
      <h1>Student Management System</h1>
      <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />}/>
          <Route path="/student/:id" element={<StudentInfo />}/>
      </Routes>
    </div>
  );
}

export default App;
