
import './App.css';
import { Button,makeStyles } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'


const useStyles = makeStyles((theme)=>(
  {
  button: {
    

    color: "blue",
    backgroundColor: theme.palette.primary.main
   
  },
}));

function App() {
  const classes=useStyles();
  return (
  <div>
    
    <Button 
    variant="contained" 
     
    startIcon={<CloudUploadIcon />} 
    className={classes.button}
    >hello</Button>
    
  </div>
  );
}

export default App;
