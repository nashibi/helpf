
import React from 'react';
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

export default function Homep() {
  const classes = useStyles();

  return (
    <Grid container>
         <Grid item sm={4}>
            <div className={classes.div}>
                <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://v4.mui.com/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                        />
                    <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
                </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                        Share
                    </Button>
                        <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
                </Card>
        </div>
    </Grid>
    <Grid item sm={4}>
            <div className={classes.div}>
                <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://v4.mui.com/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                        />
                    <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
                </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                        Share
                    </Button>
                        <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
                </Card>
        </div>
    </Grid>
    <Grid item sm={4}>
            <div className={classes.div}>
                <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://v4.mui.com/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                        />
                    <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
                </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                        Share
                    </Button>
                        <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
                </Card>
        </div>
     </Grid>
     <Grid item sm={4}>
            <div className={classes.div}>
                <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://v4.mui.com/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                        />
                    <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
                </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                        Share
                    </Button>
                        <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
                </Card>
        </div>
    </Grid>
    <Grid item sm={4}>
            <div className={classes.div}>
                <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://v4.mui.com/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                        />
                    <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
                </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                        Share
                    </Button>
                        <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
                </Card>
        </div>
    </Grid>
    <Grid item sm={4}>
            <div className={classes.div}>
                <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://v4.mui.com/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                        />
                    <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
                </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                        Share
                    </Button>
                        <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
                </Card>
        </div>
     </Grid>
    </Grid>

  );
}