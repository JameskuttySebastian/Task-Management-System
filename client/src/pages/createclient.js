import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import API from "../utils/API/API";
import swal from "sweetalert";
import UserContext from "../utils/context/UserContext";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      marginTop: 20,
      width: "100%",
      display: "flex",
    },
  },
}));

export default function CreateClient() {
  const { accessToken } = useContext(UserContext);
  const classes = useStyles();
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data) => {
    data = {
      ...data,
      status: "Active",
    };
    console.log(data);

    API.apiCreateClient(data, accessToken)
      .then((response) => {
        console.log(response);
        swal("Client Record Created Sucessfully!");
      })
      .catch((err) => {
        console.log(err);
        swal("oooooPs,,,,,Error!");
      });
    reset();
  };
  return (
    <div>
      <Container maxWidth="sm">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.root}
          noValidate
          autoComplete="off"
          style={{ margin: "auto", textAlign: "justify", paddingTop: 100 }}
        >
          <h2 style={{ clear: "both" }}>CLIENT CREATION FORM</h2>
          <TextField
            id="name"
            variant="outlined"
            label="Client Name"
            name="name"
            inputRef={register({ required: true })}
          />
          <TextField
            id="address"
            variant="outlined"
            label="Address"
            name="address"
            inputRef={register({ required: true })}
          />
          <TextField
            id="email"
            variant="outlined"
            label="Email Address"
            name="email"
            inputRef={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />

          {errors.email && (
            <h4 style={{ color: "red" }}>{errors.email.message}</h4>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ clear: "both", marginTop: 50 }}
          >
            SUMBIT
          </Button>
        </form>
      </Container>
    </div>
  );
}
