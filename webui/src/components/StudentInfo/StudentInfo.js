import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const StudentInfo = () => {
  const { id } = useParams();

  const [studentData, setStudentData] = useState([]);
  // const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /**
     * Handled memory leaks using Abort Controller
     */
    let abortController = new AbortController();
    setLoading(true);
    fetch(`http://localhost:8080/api/v1/student/${id}`)
      .then((response) => response.json())
      .then((data) => setStudentData(data));
    setLoading(false);
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <>
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
        }}
      >
        <div style={{ maxWidth: `900px` }}>
          <Card style={{ width: `100%` }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {studentData.firstname} {` `} {studentData.lastname}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {studentData.email}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/">Go Back</Link>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default StudentInfo;
