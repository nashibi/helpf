
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Post from "./Post";
import Helppost from "./Helppost";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    paddingTop:theme.spacing(0),
    
   
  },
  div:{
  
    paddingLeft:theme.spacing(1)
    

  },
  Container:{
    display:"flex",
    alignItems:"center",
    
    
  }
}))

export default function Homepost() {
  const classes = useStyles();
  const [Show,SetShow]=useState(true);
  function handleClick1(newValue) {
    
    SetShow(newValue)
    
      
}
  return (
     <div>
       
        {Show && <Grid container >
        
          <Post  onClick={handleClick1} Show={Show}/>
          <Post  onClick={handleClick1} Show={Show}/>
          <Post  onClick={handleClick1} Show={Show}/>
          <Post  onClick={handleClick1} Show={Show}/>
          <Post  onClick={handleClick1} Show={Show}/>
          <Post  onClick={handleClick1} Show={Show}/>
                
        </Grid> 
         
}
          {!Show && <Grid Container>
          <Helppost />
        </Grid>
            }
     </div> 
      
  )
 
  ;
  }