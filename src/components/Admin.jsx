import React from "react"
import Navbar from "./Admin/Navbar"
import Data from "./Admin/Data"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { colors, Grid } from "@mui/material";
import RefMassage from "./Admin/RefMassage";
import Chartx from "./Admin/Chart";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

export default function Admin() {
    return(
        
            <div>
                <ThemeProvider theme={darkTheme}>
                    <Grid container style={{
                            backgroundColor:'#121212'
                        }} >
                        <Grid item xs={12}>
                            <Navbar />
                        </Grid>
                       
                        <Grid item xs={6} sx={{ m: 2 }}>
                            <Data />
                        </Grid>
                        <Grid item xs={3} sx={{ m: 2 }}  >
                           
                            <Chartx />
                            
                        </Grid>
                        <Grid>
                        
                         </Grid>
                        </Grid>
                    </ThemeProvider>
             </div>
            
    )
    
}