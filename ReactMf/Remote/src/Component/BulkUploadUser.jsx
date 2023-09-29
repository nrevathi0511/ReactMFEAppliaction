import React, {useState} from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";


const BulkUploadUser = () => {
    const [file, setFile] = useState()
    
    const handleFile =(event) => {
        setFile(event.target.files[0])
        console.log(event.target.files[0])
    }
    return(
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
            p : 5,
            width: 1000,
            height: 100
          }
        }}
        >
                    <Paper elevation={4} >
        <div>
        <h1>Bulk Upload User</h1>
        <form>
            <input type="file" name="file" onchange={handleFile}/>
            <button>Upload File</button>
        </form>
        </div>
        </Paper>
        </Box>
        </Grid>

    )
} 

export default BulkUploadUser;