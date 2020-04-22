import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import API from "../utils/API/API";
import UserContext from "../utils/context/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      marginTop: 20,
      display: "flex",
      width: "100%",
    },
  },
}));
function Register() {
  const { accessToken } = useContext(UserContext);
  const { register, handleSubmit, errors, reset } = useForm();
  const [clientList, setClientList] = useState([]);
  const [userType, setUserType] = useState("admin");

  // Get all the client list and if the user type is client, user must select client name
  useEffect(() => {
    API.apiGetClient()
      .then((response) => {
        console.log(response.data);
        const clientListJsx = response.data.map((client) => (
          <option id={client.id}>{client.name}</option>
        ));
        setClientList(clientListJsx);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleInputchange = () => {};

  const onSubmit = (data) => {
    data = {
      ...data,
      status: "Active",
    };
    // console.log(data);
    API.apiRegister(data, accessToken)
      .then((response) => {
        console.log(response);
        swal("User Record Created Sucessfully!");
      })
      .catch((err) => {
        console.log(err);
        swal("oooooPs,,,,,Error!");
      });
    reset();
  };
  const classes = useStyles();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classes.root}
      style={{ margin: "auto", textAlign: "justify", paddingTop: 100 }}
    >
      <h2 style={{ clear: "both" }}>USER CREATION FORM</h2>
      <TextField
        id="name"
        variant="outlined"
        label="Name"
        type="text"
        name="name"
        inputRef={register({ required: true, minLength: 4 })}
      />
      <TextField
        id="email"
        variant="outlined"
        label="Email Address"
        name="email"
        inputRef={register}
      />
      <TextField
        id="password"
        variant="outlined"
        label="Password"
        name="password"
        type="password"
        inputRef={register({ required: true, minLength: 1 })}
      />

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">User Type</InputLabel>
        <Select
          native
          label="User Type"
          // onChange={}
          inputRef={register}
          name="type"
        >
          <option aria-label="None" value="" />
          <option value="client">Client</option>
          <option value="admin">Administrator</option>
        </Select>
      </FormControl>

      {/* {usertype === "client" ? (*/}
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">User Type</InputLabel>
        <Select
          onChange={handleInputchange}
          native
          label="User Type"
          inputRef={register}
          name="type"
        >
          <option aria-label="None" value="" />
          {clientList}
        </Select>
      </FormControl>
      {/* ) : null}*/}

      {errors.name && (
        <h4 style={{ color: "red" }}>
          User name needs to be minimum 4 charactors
        </h4>
      )}
      {errors.password && (
        <h4 style={{ color: "red" }}>
          Password needs to be minimum 1 charactors
        </h4>
      )}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: 50 }}
      >
        SUBMIT
      </Button>
    </form>
  );
}
export default Register;
