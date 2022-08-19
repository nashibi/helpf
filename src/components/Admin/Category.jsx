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

    display: "flex",
    alignItems: "center",
    color: "#ffffff"

  },
  form2: {

    display: "flex",
    alignItems: "center",
    color: "#ffffff"

  },
}))
export default function Category() {
  const classes = useStyles();

  const [mother, setMother] = React.useState(0);
  const [categoriesList, setCategories] = React.useState([
    {
      id: 1,
      name: "موبایل",
      children: [
        {
          id: 4,
          name: "ایفون"
        },
        {
          id: 5,
          name: "سامسونگ"
        },
      ]
    },
    {
      id: 2,
      name: "قاب موبایل",
      children: [],
    },
    {
      id: 3,
      name: "کنسول",
      children: [
        {
          id: 6,
          name: "سونی"
        },
      ],
    },
  ]);




  const handleChangeMother = (event) => {
    setMother(event.target.value);
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
        p: 2,
        m: 2,
        borderRadius: '16px'
      }}
      noValidate
      autoComplete="off"

    >


      <TextField
        className={classes.form1}
        required
        label="عنوان دسته"
      />

      <FormControl required sx={{ m: 1, minWidth: 190 }}>
        <InputLabel className={classes.form1}>دسته مادر</InputLabel>
        <Select
          value={mother}
          label="دسته مادر"
          onChange={handleChangeMother}
        >
          <MenuItem value={0}>هیچکدام</MenuItem>
          {categoriesList.map(({ id, name }) => (
            <MenuItem value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>




      <List
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          position: 'relative',
          color: "#ffffff",
          overflow: 'auto',
          maxHeight: 300,
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
      >
        {categoriesList.map(({ id: motherID, name: motherName, children }) => (
          <li key={`section-${motherID}`}>
            <ul>
              <ListSubheader>{`${motherName}`}</ListSubheader>
              {children.map(({ id, name }) => (
                <ListItem key={`-${id}-${name}`} sx={{ textAlign: "right" }}>
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