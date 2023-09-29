import React from "react";
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Grid from "@mui/material/Unstable_Grid2";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Paper from "@mui/material/Paper";
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const EditUser = () => {
  const [Brand, setBrand] = React.useState();

  const Change = (event) => {
    setBrand(event.target.value);
  };

  const [Organization, setOrganization] = React.useState();

  const handleChange = (event) => {
    setOrganization(event.target.value);
  };

  const [User, setUser] = React.useState();

  const Use = (event) => {
    setUser(event.target.value);
  };

  return (
   
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
            p :5,
            width: 1000,
            height: 450
          }
        }}
      >
        <Paper elevation={4} >
          <div>
            <h1>Edit User</h1>

            <Grid container spacing={2} columns={24}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "1ch" }
                }}
                noValidate
                autoComplete="off"
              >
                <label><span>*</span> Brand </label>
                <Grid xs={1} alignItems={"flex-start"}>
                  <FormControl sx={{ m: 1, minWidth: 400 }} size="small">
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
                <label> Organization </label>
                <Grid xs={10} alignItems={"flex-start"}>
                  <FormControl sx={{ m: 1, minWidth: 400 }} size="small">
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
                  </Grid >
              </Box>
            </Grid>


            <label> User </label>
            <Grid xs={10} alignItems={"flex-start"}>
              <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <InputLabel id="demo-select-small-label">Select a User</InputLabel>

                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={User}
                  label="User"
                  onChange={Use}
                >
                  <MenuItem value="">
                    <em>Select an User</em>
                  </MenuItem>
                  <MenuItem value={10}>Kdfdhf</MenuItem>
                  <MenuItem value={20}>Dczvvd</MenuItem>
                  <MenuItem value={30}>Ghsddf</MenuItem>

                </Select>
              </FormControl>
              <Checkbox {...label} />Include Inactive Users in Search
            </Grid>

            <Checkbox {...label} />Copy preferences from another user

            <Stack direction="row" spacing={2}>
              <Button variant="contained">Update User</Button>
              {/* <Button variant="contained" disabled elevation>
        Update User
      </Button> */}
            </Stack>
          </div>
          <br />
        </Paper>

      </Box>
    </Grid>
  )
}

export default EditUser; 