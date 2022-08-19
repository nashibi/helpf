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
export default function Category() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [valueC, setValueC] = React.useState(false);
    const [valuelink, setValuelink] = React.useState();
    const [category,setcategory]=React.useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },

    ]);

    
    const handleChangeca = (event) => {
        setValueC(event.target.value);
        console.log(setValueC)
      };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
      
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
      width: 800,
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
            نام دسته
    
         
        <TextField
            className={classes.form1}
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        
        <label class={classes.form1}>
            دسته پدر؟
        </label>
        <FormControl  required sx={{ m: 1, minWidth: 190 }}>
        <InputLabel  className={classes.form1}  id="demo-simple-select-required-label">ندارد</InputLabel>
        <Select
           
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={valueC}
          label="Age *"
          onChange={handleChangeca}
        >
          
          <MenuItem value={false} > ندارد</MenuItem>
          <MenuItem value={true} >دارد</MenuItem>
          
          
        </Select>
        
      </FormControl>
      {valueC && <FormControl  required sx={{ m: 1, minWidth: 190 }}>
        <InputLabel  className={classes.form1}  id="demo-simple-select-required-label">ندارد</InputLabel>
        <Select
           
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          label="Age *"
          onChange={handleChange}
        >
          
          {category.map((name) => (
        <MenuItem value={name}>
            {name}
            </MenuItem>
      ))}
          
          
          
        </Select>
        </FormControl>
        }
      </label>
      
    </Box>
    
  );
  
}