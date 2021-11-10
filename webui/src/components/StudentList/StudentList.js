import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
// import AddStudent from "../AddStudent/addStudent";

const StudentList = () => {
  const [data, setData] = useState([]);
  // const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /**
     * Handled memory leaks using Abort Controller
     */
    let abortController = new AbortController();
    setLoading(true);
    fetch("http://localhost:8080/api/v1/student/all")
      .then((response) => response.json())
      .then((data) => setData(data));
    setLoading(false);
    return () => {
      abortController.abort();
    };
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("http://localhost:8080/api/v1/student/all")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  //   setLoading(false);
  // });
  //   console.log(data);
  return (
    <>
      <h1>All Students</h1>
      <Link to="/add">
        <Button variant="contained">
          Add Student
        </Button>
      </Link>
      <br />
      <br />
      {!loading ? (
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          <TableContainer style={{ maxWidth: `900px` }} component={Paper}>
            <Table style={{ width: `100%` }} aria-label="student table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((student) => (
                  <TableRow
                    key={student.id}
                    // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {student.id}
                    </TableCell>
                    <TableCell align="center">{student.firstname}</TableCell>
                    <TableCell align="center">{student.lastname}</TableCell>
                    <TableCell align="center">{student.email}</TableCell>
                    <TableCell align="center">
                      <Button variant="contained">View</Button>
                      {` `}
                      <Button variant="contained" color="success">
                        Edit
                      </Button>
                      {` `}
                      <Button variant="contained" color="error">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default StudentList;
