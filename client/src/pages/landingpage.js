import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import logo from "../task-management.jpg";
import UserContext from "../utils/context/UserContext";

function landingpage() {
  const { name } = useContext(UserContext);
  return (
    <div
      style={{
        width: "100%",
        margin: "auto",
        textAlign: "justify",
        paddingTop: 100,
      }}
    >
      <Grid item xs={12}>
        <div>
          <h2 style={{ fontWeight: 'bold', textTransform: "uppercase" }}>welcome {name}</h2>
        </div>
        <div className="banner-text" style={{ clear: "both" }}>
          <h1 style={{ textAlign: "center", textDecoration: "underline" }}>TASK MASTER PRO</h1>
        </div>
        <p style={{ fontWeight: "bold" }}>
          Task Master Pro is an application which is allows groups of users to
          work together more cohesively to quickly and thoroughly complete
          assigned tasks. Features such as time tracking and project tracking
          ensure that all given tasks are covered and progress reports are up to
          date. Task Master Pro is mobile-first application and including other
          functions such google maps and address retrival, email syncing,
          collaborative interfaces for all users. Task Master Pro application is
          related to Project Management software, Time Management software,
          Professional Services Automation software.
        </p>
        <img
          style={{ width: "100%", margin: "auto" }}
          className="img-responsive"
          src={logo}
          alt="logo"
        />
      </Grid>
    </div>
  );
}

export default landingpage;
