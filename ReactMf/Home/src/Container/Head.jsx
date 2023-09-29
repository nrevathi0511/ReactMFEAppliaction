import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Head = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/UploadUser');
  };
  const handleEvent = () => {
    navigate('/EditUser');
  };
const handleEventForCrud = () => {
  navigate('/CrudApp');
}

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const pages = ["UploadUser", "EditUser"];

  return(
    
<div>

    <Box sx={{ flexGrow: 1, p:3 }}>
      <AppBar position="static">
        <Toolbar>
        <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="https://api.freelogodesign.org/assets/thumb/logo/1369166d32754c86bfc3f1e09f8a69de_400.png" />

    </Stack>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <center>  Miracle Software Systems </center>
          </Typography>
                  </Toolbar>
      </AppBar>
    </Box>
    <Button onClick={handleClick} variant="contained" color="success"> Upload User</Button>
    <Button onClick={() => navigate("/")} variant="contained" color="success">Back</Button>
    <Button onClick={handleEvent} variant="contained" color="success"> Edit User</Button>
    <Button onClick={handleEventForCrud} variant="contained" color="success"> CrudApp</Button>
    </div>
  )
};

export default Head;