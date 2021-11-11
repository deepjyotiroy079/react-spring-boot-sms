import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
// import { useEffect, useState } from "react";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line
    watch,
    // eslint-disable-next-line
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`http://localhost:8080/api/v1/student/edit/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        // console.log("New Student Updated");
        // navigate to home page
        navigate("/", { state: { from: { pathname: `/student/edit/${id}` } } });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Edit Student</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              fullWidth
              id="firstname"
              label="First Name"
              {...register("firstname")}
            />
          </div>
          <div>
            <TextField
              required
              fullWidth
              id="lastname"
              label="Last Name"
              {...register("lastname")}
            />
          </div>
          <div>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              {...register("email")}
            />
          </div>

          <div>
            <Button variant="contained" type="submit">
              Update Student
            </Button>
          </div>
        </Box>
      </form>
    </>
  );
};

export default EditStudent;
