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
import Paper from "@mui/material/Paper";

const StudentList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/student/all")
      .then((response) => response.json())
      .then((data) => setData(data));
  });
  //   console.log(data);
  return (
    <>
      <h1>All Students</h1>
      <Button variant="contained">Add Students</Button>
      
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {/* <table border="2">
        <thead>
          <td>Sno.</td>
          <td>Firstname</td>
          <td>Lastname</td>
          <td>Email</td>
        </thead>

        {data.map((student) => {
          return (
            <tbody key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstname}</td>
              <td>{student.lastname}</td>
              <td>{student.email}</td>
            </tbody>
          );
        })}
      </table> */}
    </>
  );
};

export default StudentList;
