import React from "react";
 import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Foot = () => {
    
    return(

        <div>
            <Box sx={{ flexGrow: 1, p:3 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <center> Footer </center>
          </Typography>
                  </Toolbar>
      </AppBar>
    </Box>
        </div>
    );
}


export default Foot;