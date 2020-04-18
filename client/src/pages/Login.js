import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AppHeadLogin from "../components/AppHeadLogin";

const style = {
  margin: 15,
};
function Login() {
  return (
    <div>
      <AppHeadLogin />
      <MuiThemeProvider>
        <div>
          <AppBar title="Login" />
          <TextField
            hintText="Enter your Username"
            floatingLabelText="Username"
            onChange={(event, newValue) =>
              this.setState({ username: newValue })
            }
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, newValue) =>
              this.setState({ password: newValue })
            }
          />
          <br />
          <Button
            variant="contained"
            label="Submit"
            primary={true}
            style={style}
            onClick={(event) => this.handleClick(event)}
          />
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default Login;
