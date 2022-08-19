import React from "react"
import Navbar from "./Admin/Navbar"
import Data from "./Admin/Data"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { colors, Grid } from "@mui/material";
import RefMassage from "./Admin/RefMassage";
import Chartx from "./Admin/Chart";
import Chartx2 from "./Admin/Chartx2";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import NewPost from "./Admin/NewPost";
import Category from "./Admin/Category";

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
                       <Grid item xs={5.2}>
                           <NewPost />
                       </Grid>
                       <Grid item xs={6.8}>
                           <Category />
                       </Grid>
                        <Grid item xs={6} sx={{ m: 2 }}>
                            <Data />
                        </Grid>
                        <Grid item xs={3} sx={{ m: 2 }}  >
                           
                            <Chartx2 />
                            
                        </Grid>
                        <Grid>
                        
                         </Grid>
                        </Grid>
                    </ThemeProvider>
             </div>
            
    )
    
}