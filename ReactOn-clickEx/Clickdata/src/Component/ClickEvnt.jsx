import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, Checkbox, Box, Typography, } from '@mui/material';

const ClckEvnt = () => {

  // const [userData, setUserData] = useState('');

  const [userData, setUserData] = useState({
    RegistrationId: "",
    FirstName: "",
    LastName: "",
    Branch: "",
    Email: "",
    MobileNumber: "",
    confirmRegistrationId:"",
  })



  const handleChange = ({ target: { name, value } }) => {
    let updatedData = { ...userData }
    updatedData[name] = value;
    setUserData(updatedData)
  }

  const handleSubmit = (event) => {
    {
      event.preventDefault();
      if (userData.RegistrationId === userData.confirmRegistrationId) {
        alert("Successfully Submitted");

      }
      else {
        alert("Id dosen't match !");
      }

      console.log(
        userData.RegistrationId,
        userData.FirstName,
        userData.LastName,
        userData.Branch,
        userData.Email,
        userData.MobileNo,
        userData.confirmRegistrationId,
      )
    }
  }

    return (
   <>

      <Box
        sx={{
          p: 10,
          width: '100%',
          maxWidth: 500,
          background: "#E6E6FA",
          borderRadius: 10,

        }}
      >
        <Typography variant="h2" align="center" fontStyle="italic" gutterBottom>
          Registration Form
        </Typography>

        <form onSubmit={handleSubmit}>

          <TextField
            sx={{ margin: 1 }}
            required
            fullWidth
            label="Registration Id"
            type="number"
            variant="outlined"
            onChange={handleChange}
            name="RegistrationId"
          />


          <TextField
            sx={{ margin: 1 }}
            required
            fullWidth
            label="First Name"
            variant="outlined"
            onChange={handleChange}
            name="firstname"
          />

          <TextField
            sx={{ margin: 1 }}
            required
            fullWidth
            label="Last Name"
            variant="outlined"
            onChange={handleChange}
            name="lastname"
          />

          <TextField
            sx={{ margin: 1 }}
            required
            fullWidth
            label="Branch"
            variant="outlined"
            onChange={handleChange}
            name="branch"
          />

          <TextField
            sx={{ margin: 1 }}
            required
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            onChange={handleChange}
            name="email"
          />

          <TextField
            sx={{ margin: 1 }}
            required
            fullWidth
            label="Mobile number"
            variant="outlined"
            onChange={handleChange}
            name="MobileNo"
          />

          <TextField
            sx={{ margin: 1 }}
            required
            fullWidth
            label="Confirm Registration Id"
            type="password"
            variant="outlined"
            onChange={handleChange}
            name="confirmRegistrationId"
          />

          <FormControlLabel
            sx={{ margin: 1 }}
            control={<Checkbox color="primary" />}
            label="I agree to the terms and conditions"
          />

          <Button sx={{ margin: 1 }} type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>

        </form>

      </Box>
      </>
    );
  }


export default ClckEvnt;
