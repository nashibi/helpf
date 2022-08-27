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
import React from "react";
import Footer from "./components/Footer";

class homer extends React.Component {
  componentDidMount() {
    // Include the Crisp code here, without the <script></script> tags
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "69d9d6a6-d361-4461-ab84-285fdbc78e5a";

    (function() {
      var d = document;
      var s = d.createElement("script");

      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
   };
  
  render () {
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
            <Grid>
              <Footer /> 
            </Grid>
          </Grid>
          
        </div>
  );
}
}
export default homer