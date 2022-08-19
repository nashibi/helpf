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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

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
    { id: 1, name: "موبایل",father:"" },
    { id: 2, name: "قاب موبایل",father:"" },
    { id: 3, name: "کنسول" , father:""},
    { id: 4, name: "ایفون" , father:"موبایل"},

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
          
          {category.map(({id,name}) => (
        <MenuItem value={id}>
            {name}
            </MenuItem>
      ))}
          
          
          
        </Select>
        </FormControl>
        }
      </label>
      <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        color:"#ffffff",
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {category.map(({id,father}) => (
        <li key={`section-${id}`}  >
          <ul>
            <ListSubheader>{`${father}`}</ListSubheader>
            {category.map(({id,name}) => (
              <ListItem key={`-${id}-${name}`}>
                <ListItemText primary={` ${name}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
    </Box>
    
  );
  
}