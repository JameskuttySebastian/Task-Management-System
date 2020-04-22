import React, { useContext, useState } from "react";
import Container from "@material-ui/core/Container";
import Drawer from "@material-ui/core/Drawer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Createuser from "./pages/createusers";
import Createclient from "./pages/createclient";
import Createtask from "./pages/createtask";
import viewusers from "./pages/viewusers";
import viewclients from "./pages/viewclients";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import UserContext from "../utils/context/UserContext";
const { userType } = useContext(UserContext);

function RouteDrawer() {
  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-start",
    },
  }));

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const adminDrawer = () => {
    return (
      <Container>
        <Router>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}></div>
            <h3>MENU ITEMS</h3>
            <Divider />
            <Link
              to="/landingpage"
              className="link"
              style={{ marginTop: 20 }}
              onClick={handleDrawerClose}
            >
              Home
            </Link>
            <Link
              to="/createuser"
              className="link"
              style={{ marginTop: 20 }}
              onClick={handleDrawerClose}
            >
              Create Users
            </Link>
            <Link
              to="/createclient"
              className="link"
              style={{ marginTop: 20 }}
              onClick={handleDrawerClose}
            >
              Create Client
            </Link>
            <Link
              to="/createtask"
              className="link"
              style={{ marginTop: 20 }}
              onClick={handleDrawerClose}
            >
              Create Task
            </Link>
            <Link
              to="/viewusers"
              className="link"
              style={{ marginTop: 20 }}
              onClick={handleDrawerClose}
            >
              View Users
            </Link>
            <Link
              to="/viewclients"
              className="link"
              style={{ marginTop: 20 }}
              onClick={handleDrawerClose}
            >
              View Clients
            </Link>
            <Link
              to="/"
              className="link"
              style={{ marginTop: 200 }}
              onClick={handleDrawerClose}
            >
              Logoff
            </Link>
          </Drawer>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/landingpage" component={Landingpage} />
            <Route path="/createuser" component={Createuser} />
            <Route path="/createclient" component={Createclient} />
            <Route path="/createtask" component={Createtask} />
            <Route path="/viewusers" component={viewusers} />
            <Route path="/viewclients" component={viewclients} />
          </Switch>
        </Router>
      </Container>
    );
  };

  const clientDrawer = () => {
    return (
      <Container>
        <Router>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}></div>
            <h3>MENU ITEMS</h3>
            <Divider />
            <Link
              to="/landingpage"
              className="link"
              style={{ marginTop: 20 }}
              onClick={handleDrawerClose}
            >
              Home
            </Link>
            <Link
              to="/createuser"
              className="link"
              style={{ marginTop: 20 }}
              onClick={handleDrawerClose}
            >
              Create Users
            </Link>
            <Link
              to="/createclient"
              className="link"
              style={{ marginTop: 20 }}
              onClick={handleDrawerClose}
            >
              Create Client
            </Link>
          </Drawer>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/landingpage" component={Landingpage} />
            <Route path="/createuser" component={Createuser} />
            <Route path="/createclient" component={Createclient} />
          </Switch>
        </Router>
      </Container>
    );
  };

  const defaultDrawer = () => {
    return (
      <Container>
        <Router>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}></div>
            <h3>MENU ITEMS</h3>
            <Divider />
            <Link
              to="/landingpage"
              className="link"
              style={{ marginTop: 20 }}
              onClick={handleDrawerClose}
            >
              Home
            </Link>
          </Drawer>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </Router>
      </Container>
    );
  };

  const routeType = () => {
    if (userType === "admin") {
      return adminDrawer;
    } else if (userType === "user") {
      return clientDrawer();
    } else {
      return defaultDrawer();
    }
  };

  return routeType();
}

export default RouteDrawer;
