import "./App.css";
import StudentList from "./components/StudentList/StudentList";
import { Routes, Route } from "react-router-dom";
import AddStudent from "./components/AddStudent/addStudent";
import StudentInfo from "./components/StudentInfo/StudentInfo";
import EditStudent from "./components/EditStudent/EditStudent";
import DeleteStudent from "./components/DeleteStudent/DeleteStudent";
function App() {
  return (
    <div className="App">
      <h1>Student Management System</h1>
      <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />}/>
          <Route path="/student/:id" element={<StudentInfo />}/>
          <Route path="/student/edit/:id" element={<EditStudent />} />
          <Route path="/student/delete/:id" element={<DeleteStudent />} />
      </Routes>
    </div>
  );
}

export default App;
