import { Home } from "@material-ui/icons"
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';
import Navbar from './components/Navbar';
import { Grid ,Box} from '@material-ui/core';
import Leftbar from './components/Leftbar';
import Homep from './components/Homep';
import Homepost from './components/Homepost'
import { PinDropSharp } from '@material-ui/icons';
import Apagination from './components/pagination';

export default function Homer() {
  return (  
        <div>
          
          <ThemeProvider theme={theme}>
            <Navbar/>
          </ThemeProvider>
          <Grid container>
            <Grid item  xs={2}>
              <Leftbar />
            </Grid>
            <Grid item  xs={10}>
            
              <Homepost /> 
              <Apagination />

            </Grid>
            
          </Grid>
          
        </div>
  );
}