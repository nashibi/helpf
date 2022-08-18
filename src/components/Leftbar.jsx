import { colors, makeStyles } from "@material-ui/core";
import { Container,Typography } from "@material-ui/core";
import { Autorenew, Battery80Rounded, Block, FlipCameraIos, FolderShared, Gamepad, Home, Info, Instagram } from "@material-ui/icons";
import { theme } from "../theme";


const useStyles = makeStyles((theme) => ({
    Container:{
        paddingTop:theme.spacing(10),
        backgroundColor : '#bf360c',
        height:'100vh',
        color:"white"
    },

    item:{
        display:"flex",
        alignItems:"center",
        paddingTop:theme.spacing(2),
        
    },
    text:{
        
        [theme.breakpoints.down("sm")]:{
            display:"none"
        },
        

    }

}))
export default function Leftbar(){
    const classes = useStyles();
    return(
        <Container className= {classes.Container} >
           
            <div className={classes.item} >
                <Home className={classes.icon} />
                <Typography className={classes.text}>خانه</Typography>

            </div>
            
            <div className={classes.item}>
                <Info className={classes.icon} />
                <Typography className={classes.text}>اطلاعات</Typography>

            </div>
            <div className={classes.item}>
                <Autorenew className={classes.icon} />
                <Typography className={classes.text}>اپدیت</Typography>

            </div>
            <div className={classes.item}>
                <Battery80Rounded className={classes.icon} />
                <Typography className={classes.text}>باطری</Typography>

            </div>
            <div className={classes.item}>
                <FlipCameraIos className={classes.icon} />
                <Typography className={classes.text}>دوربین</Typography>

            </div>
            <div className={classes.item}>
                <Gamepad className={classes.icon} />
                <Typography className={classes.text}>پست</Typography>

            </div>
            <div className={classes.item}>
                <Instagram className={classes.icon} />
                <Typography className={classes.text}>اینستگرام</Typography>

            </div>
            <div className={classes.item}>
                <FolderShared className={classes.icon} />
                <Typography className={classes.text}>پوشه</Typography>

            </div>
        </Container>
    )


}