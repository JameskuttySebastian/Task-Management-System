import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      marginTop: 20,
      display: 'flex',
      width: '100%'
      },
  },

}));

export default function Createuser() {
  const classes = useStyles();

  return (
    <div >
    <form className={classes.root} noValidate autoComplete="off" style={{margin: 'auto', textAlign: 'justify', paddingTop: 100 }}>
    <h2 style = {{clear: 'both' }}>USER CREATION FORM</h2>
      <TextField id="outlined-basic" variant="outlined" label="Name" />
      <TextField id="outlined-basic" variant="outlined" label="Email Address" />
      <TextField id="outlined-basic" variant="outlined" label="Password" />
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">User Type</InputLabel>
        <Select
          native
          label="User Type"
          
        >
          <option aria-label="None" value="" />
          <option value={10}>Administrator</option>
          <option value={20}>Client</option>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" style = {{clear: 'both' , marginTop: 50}}>SUMBIT</Button>
    </form>
    </div>
  );
}