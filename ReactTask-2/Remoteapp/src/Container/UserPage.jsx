import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const UserPage = () => {

  return (
    <>
    <div>
  
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

                  <label><span>*</span> Organization </label>
                  <Grid xs={8}>
                    <Paper elevation={2}>
                      <TextField id="outlined-basic" variant="outlined" />
                    </Paper>
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
      </div>
    </>
  )

}

export default UserPage;