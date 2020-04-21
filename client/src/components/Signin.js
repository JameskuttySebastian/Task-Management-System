import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import API from "../utils/API/API";

// for setting user data;
import UserContext from "../utils/context/UserContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  // for css styling
  const classes = useStyles();

  // for holing login info
  // setting user information

  const { setUserId, setUserType, setAccessToken } = useContext(UserContext);
  // for getting user input

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handles updating component state when the user types into the input field
  function handleSubmit(event) {
    event.preventDefault();
    let userInfo = {
      email: userName,
      password: password,
    };

    API.apiLogin(userInfo)
      .then((res) => {
        console.log(res);
        setUserId(res.data.email);
        setUserType(res.data.userType);
        setAccessToken(res.data.accesstoken);
      })
      .catch((err) => {
        console.log(err.response);
        console.log(err.response.status);
        console.log(err.response.data);
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login Page
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User ID"
            name="username"
            autoComplete="user"
            autoFocus
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
}
