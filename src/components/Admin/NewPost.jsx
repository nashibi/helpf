import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles((theme) => ({
    form1: {
      
        display:"flex",
        alignItems:"center",
        color:"#ffffff"
     
    },
    form2: {
      
        display:"flex",
        alignItems:"center",
        color:"#ffffff"
     
    },
  }))
export default function NewPost() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [value, setValue] = React.useState();
    const [valuelink, setValuelink] = React.useState();

  const handleChange = (event) => {
    setAge(event.target.value);
  };
      
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
      width: 600,
        height: 500,
        border: 2,
        borderColor: 'grey.500',
        p:2,
        m:2,
        borderRadius: '16px'
    }}
    noValidate
    autoComplete="off"
    
  >
        <label className={classes.form1} >
            عنوان
    
         
        <TextField
            className={classes.form1}
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        
        
        <label class={classes.form1}>
            دسته بندی
        </label>
        <FormControl  required sx={{ m: 1, minWidth: 190 }}>
        <InputLabel  className={classes.form1}  id="demo-simple-select-required-label">Age</InputLabel>
        <Select
           
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          label="Age *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        
      </FormControl>
        </label>
        <label
        className={classes.form2}>
            توضیحات
        
       <TextField
       
         sx={{ m: 1, minWidth: 520 }}
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          value={value}
          onClick={(e) => setValue("")}
          onChange={(e) => setValue(e.target.value)}
        />
         </label>
         <label className={classes.form2} 
         sx={{ m: 1 }}>
             عکس پست
             <Button variant="contained" component="label" sx={{ m: 1 }}>
                 Upload
             <input hidden accept="image/*" multiple type="file" />
            </Button> 
         </label>
         <label className={classes.form2} 
         sx={{ m: 1 }}>
             لینک ویدئو
             <TextField
             sx={{ m: 1, minWidth: 520 }}

             required
            id="outlined-required"
             label="Required"
             defaultValue="link"
             value={valuelink}
             onClick={(e) => setValuelink("")}
             onChange={(e) => setValuelink(e.target.value)}
        />
         </label>
    </Box>
  );
}