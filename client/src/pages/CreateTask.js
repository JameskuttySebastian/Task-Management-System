import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import API from "../utils/API/API";
import swal from "sweetalert";
import UserContext from "../utils/context/UserContext";
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
export default function CreateTask() {
  const { accessToken, id } = useContext(UserContext);
  const classes = useStyles();
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data) => {
    data = {
      ...data,
      UserId: id,
      status: "Active",
    };

    console.log(data);
    API.apiCreateTask(data, accessToken)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    reset();
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.root}
        noValidate
        autoComplete="off"
        style={{ margin: "auto", textAlign: "justify", paddingTop: 100 }}
      >
        <h2 style={{ clear: "both" }}>TASK CREATION FORM</h2>
        <TextField
          id="title"
          variant="outlined"
          label="Title"
          name="title"
          inputRef={register({ required: true })}
        />
        <TextField
          id="description"
          label="Description"
          multiline
          rows={12}
          variant="outlined"
          name="description"
          inputRef={register({ required: true })}
        />
        <TextField
          id="completedBy"
          variant="outlined"
          label="Due Date"
          defaultValue={Date.now}
          type="date"
          name="completedBy"
          inputRef={register({ required: true })}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ clear: "both", marginTop: 50 }}
        >
          SUBMIT
        </Button>
      </form>
    </div>
  );
}
