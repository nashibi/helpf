import React,{forwardRef, useState} from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {  Button, Snackbar} from '@material-ui/core';
import ReactPlayer from 'react-player';
import Plyr from "plyr-react";
import {Helmet} from "react-helmet";
import { Player } from 'video-react';
import Box from '@mui/material/Box';
import { borders } from '@mui/system';
import MuiAlert, { AlertProps, AlertColor } from '@mui/material/Alert';
import { Grid } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Editor } from "@tinymce/tinymce-react";
import TextboxSP from './TextboxSP';
import SelectPic from './SelectPic';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems:"center",
    '& > *': {
      margin: theme.spacing(1),
    },
 
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
    },
  },
  player:{
      paddingLeft:"20px",
      paddingRight:"30px",
      paddingBottom:"40px",  
      paddingTop:"30px"
  },
  box:{
    display: 'flex',
    p:2,
    m:2,
    alignItems:"center",
    
  },
}));
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  alignItems:'center',
};
const plyrProps = {
    URL: "https://www.youtube.com/watch?v=BS2SjDBMD_k"
  }
  const Alert = forwardRef(function Alert(
    props,
    ref,
  ) {
    
    return <MuiAlert elevation={13} ref={ref} variant="filled" {...props} />;
    
  });
export default function Helppost(){
 
  const [modalopen, setModalopen] = useState(false);
  
  const [open, setOpen] = useState(false);
  const [pic, setPic] = useState("");
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');
  
  const handleModalopen = () => {
  console.log(modalopen)
  setModalopen(true);
};
  const handleModalClose = () => {
    setModalopen(false);
    console.log(modalopen)
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClose = () => {
    
      
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handlePic = () => {
    setPic("https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png");
    console.log(pic);
  };
  

  return (
      <div>
            <div className={classes.player}>
            <Player
             playsInline
             poster="https://media.istockphoto.com/photos/villefranche-on-sea-in-evening-picture-id1145618475?k=20&m=1145618475&s=612x612&w=0&h=_mC6OZt_eWENYUAZz3tLCBTU23uvx5beulDEZHFLsxI="
             src="https://cdn-cf-east.streamable.com/video/mp4/a9dl1m.mp4?Expires=1660090980&Signature=k~l7doocNajbb7ytLSIok48qvy-5tfPAW79GVyQeuowj0m5zS~Eh0LbH4MBjmM9n8uFlKLk2GACGOJTgxN1vbdDuUNmzHvZ1Vm702heTy8UTk8PofILIpXXxIiaKBwSZ3NF7HbO8aMQAh4cnhWYxi-5gqilQuSe5QOchjl9ZpalUA0yRxBLWYDClMpxEJbHQeKOs-sY~RjtuaSZlTX6wjwkTJguvqNXXxFhId0I-LhoA7isyHljj0E07U3EHNfJQCwEFd7wkVYMzzGJ8KmDMnCyMStqNseMdr-91t-tZvIjGsGMEeFncYcNeaxeWxptSnsoVb6vgdAr4s~mMGp0zcQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ"
            
                />
                
            </div>
          
          <form className={classes.roowt} noValidate autoComplete="off">
            
            <Grid sx={{mr:2,ml:2}}  >
              <Box bgcolor='#ffccbc' className={classes.box} sx={{ border: 1, borderRadius:'16px',borderColor: '#dd2c00'}}>
              
                <Grid  sm={2} sx={{ p: 2, borderLeft:2,borderColor: '#dd2c00'}} >
                  <Avatar  alt="Remy Sharp" src="https://v4.mui.com/static/images/avatar/1.jpg" />
              
                   <h4>ali</h4>
                   <h4>data:4/2/2020</h4>
              </Grid>
              
              <Grid  sm={8} className={classes.box} 
              //sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
              //maxWidth="xs"
              >
                <Box  >
              {"ممنونم عالی بود"}
                 </Box>  
              
              </Grid>
              

              </Box>
              
            </Grid>
            
            
            
            <Grid py={{xs:2}}>
            <Box  className={classes.text}    sx={{mr:4,ml:4}} >
            
            <Button size="medium" variant='contained' onClick={handleModalopen}>
              افزودن عکس
              
            </Button> 
            <Modal
                  open={modalopen}
                  onClose={handleModalClose}
                  
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                <SelectPic />
              </Box>
                </Modal>
             <TextboxSP addImg={pic} />
             
     
            
            </Box>
            <Box dir='ltr' py={{xs:2}}  px={{xs:2}}>
            <Button size="medium" variant='contained' onClick={handleClick}>
              ارسال نظر
            </Button>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
               نظر شما ثبت شد
              </Alert>
              </Snackbar>
            </Box>
            </Grid>
        
        </form>
        </div>   
    );
}