
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/material';
import { Autorenew, Battery80Rounded, Block, FlipCameraIos, FolderShared, Gamepad, Home, Info, Instagram } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    item:{
        color:"white",
        
        

    }

}))
export default function Footer() {
    const classes = useStyles();
    return (
            <Box 
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                 width: 1470,
                  height: 200,
                  border: 2,
                  borderColor: 'grey.500',
                  p:2,
                  mt:1,
                  borderRadius: '16px',
                  backgroundColor : '#bf360c',
                  position: "relative",
                  textAlign: 'center'
              }}
            >

                <div className={classes.item}>
                    <h1>در حال توسعه</h1>
                
                <div className={classes.item}>
                <Instagram className={classes.icon} />
                    <h3>شماره تماس </h3>
                </div>
                </div>
            

            </Box>
    )

}