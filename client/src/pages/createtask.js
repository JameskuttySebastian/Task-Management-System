import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      marginTop: 20,
      width: '100%',
      display: 'flex',
      },
  },


}));

export default function Createuser() {
  const classes = useStyles();

  return (
    <div>
    <form className={classes.root} noValidate autoComplete="off" style={{margin: 'auto', textAlign: 'justify', paddingTop: 100 }}>
    <h2 style = {{clear: 'both'}}>TASK CREATION FORM</h2>
      <TextField id="outlined-basic" variant="outlined" label="Title" />
      <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={12}
          variant="outlined"
        />
      <Button variant="contained" color="primary" style = {{clear: 'both' , marginTop: 50}}>SUMBIT</Button>
    </form>
    </div>
  );
}