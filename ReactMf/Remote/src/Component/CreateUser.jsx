import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));




const CreateUser = () => {

  const [Organization, setOrganization] = React.useState();

  const handleChange = (event) => {
    setOrganization(event.target.value);
  };

  const [Brand, setBrand] = React.useState();

  const Change = (event) => {
    setBrand(event.target.value);
  };

  return (
    <>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              p: 5,
              width: 1000,
              height: 650,

            }
          }}
        >
          <Paper elevation={4} >
            <div>

              <h1>Create User</h1>
              <Grid container spacing={2} columns={24}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" }
                  }}
                  noValidate
                  autoComplete="off"
                >


                  <label><span>*</span> User Name </label>

                  <Grid xs={8}>
                    <Paper elevation={2}>
                      <TextField id="outlined-basic" variant="outlined" />
                    </Paper>
                  </Grid>
                </Box>
              </Grid>

              <Grid container spacing={2} columns={24}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" }
                  }}
                  noValidate
                  autoComplete="off"
                >

                  <label><span>*</span>Password</label>
                  <Grid xs={8}>
                    <Paper elevation={2}>
                      <TextField
                        id="outlined-password-input"
                        type="password"
                        autoComplete="current-password"
                      />
                    </Paper>
                  </Grid>
                </Box>
              </Grid>

              <Grid container spacing={2} columns={24}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" }
                  }}
                  noValidate
                  autoComplete="off"
                >

                  <label> <span>*</span>Brand </label>
                  <Grid xs={12}>
                    <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                      <InputLabel id="demo-select-small-label">Select a brand</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={Brand}
                        label="Brand"
                        onChange={Change}
                      >
                        <MenuItem value="">
                          <em>Select an Brand</em>
                        </MenuItem>
                        <MenuItem value={10}>Dulux</MenuItem>
                        <MenuItem value={20}>Berger Paints</MenuItem>
                        <MenuItem value={30}>Sherwin-Williams</MenuItem>
                      </Select>
                    </FormControl>
                    {/* <TextField id="outlined-basic" label=" Select a Brand" variant="outlined" /> */}
                  </Grid>
                </Box>
              </Grid>

              <Grid container spacing={2} columns={24}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" }
                  }}
                  noValidate
                  autoComplete="off"
                >

                  <label><span>*</span> Organization </label>
                  <Grid xs={10}>
                    <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                      <InputLabel id="demo-select-small-label">Select an organization</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={Organization}
                        label="Organization"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>Select an Organization</em>
                        </MenuItem>
                        <MenuItem value={10}>Dulux</MenuItem>
                        <MenuItem value={20}>Berger Paints</MenuItem>
                        <MenuItem value={30}>Sherwin-Williams</MenuItem>
                      </Select>
                    </FormControl>

                    {/* <TextField id="outlined-basic" label="Select an Organization" variant="outlined" /> */}
                  </Grid>
                </Box>
              </Grid>

              <h4>Selected:None</h4>
              <Checkbox {...label} />
              copy preferences from another user

              <Stack direction="row" spacing={2}>
                <Button variant="contained">Create</Button>

              </Stack>
            </div><br />
          </Paper>
        </Box>
      </Grid>
    </>
  )

}

export default CreateUser;