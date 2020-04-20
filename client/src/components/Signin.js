import React, { useRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// for setting user data;
import { useUserContext } from "../utils/context/UserContext";

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

  for holing login info
  setting user information
  const {
    id: [userId, setUserId],
  } = useContext(useUserContext);
  const {
    type: [userType, setUserType],
  } = useContext(useUserContext);
  const {
    token: [accessToken, setAccessToken],
  } = useContext(useUserContext);

  for getting user input

  const userNameRef = useRef();
  const passwordRef = useRef();

  // Handles updating component state when the user types into the input field
  function handleSubmit(event) {
    event.preventDefault();
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
            ref={userNameRef}
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
            ref={passwordRef}
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
