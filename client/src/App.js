import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Menu from "./components/Menu";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import CreateClient from "./pages/CreateClient";
import CreateTask from "./pages/CreateTask.js";
import ViewUser from "./pages/ViewUsers.js";
import ViewClient from "./pages/ViewClient";
import ViewTasks from "./pages/ViewTask";
import AssignTasks from "./pages/AssignTask";
import ViewAssignedTask from "./pages/ViewAssignedTask";
import ViewAssignedTaskDetail from "./pages/ViewAssignedTaskDetail";
import ViewAssignedTaskToClient from "./pages/ViewAssignedTaskToClient";
import CompleteAssignedTask from "./pages/CompleteAssignedTask";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

// for providing user context and provided as the outer most layer
import UserContext from "./utils/context/UserContext";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
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
  link: {
    marginTop: 20,
    marginLeft: 50,
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  //for user context
  const [userId, setUserId] = useState("");
  const [id, setId] = useState("");
  const [clientId, setClientId] = useState("");
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("");
  const [accessToken, setAccessToken] = useState("");

  // const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogOff = () => {
    setOpen(false);
    setUserId("");
    setUserType("");
    setAccessToken("");
  };

  const isAuthenticated = () => {
    if (accessToken) return true;
    else {
      return false;
    }
  };
  const isAdminAuthenticated = () => {
    if (accessToken && userType === "admin") return true;
    else {
      return false;
    }
  };
  const isClientAuthenticated = () => {
    if (accessToken && userType === "client") return true;
    else {
      return false;
    }
  };

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        id,
        setId,
        clientId,
        setClientId,
        name,
        setName,
        userType,
        setUserType,
        accessToken,
        setAccessToken,
      }}
    >
      <div className="App">
        <CssBaseline />
        <AppBar
          style={{
            display: "block",
            backgroundColor: "#01579b",
            color: "#FFF",
          }}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar style={{ float: "right" }}>
            {accessToken ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            ) : null}
          </Toolbar>
        </AppBar>
        <Container>
          <Router>
            <Menu
              open={open}
              handleDrawerClose={handleDrawerClose}
              classes={classes}
              handleLogOff={handleLogOff}
            />
            <Switch>
              <Route exact path="/">
                {accessToken ? <Redirect to="/landingpage" /> : <Login />}
              </Route>

              <Route
                path="/landingpage"
                render={() =>
                  isAuthenticated() ? (
                    <LandingPage />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/",
                      }}
                    />
                  )
                }
              />
              <Route
                path="/register"
                render={() =>
                  isAdminAuthenticated() ? (
                    <Register />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/",
                      }}
                    />
                  )
                }
              />
              <Route
                path="/createClient"
                render={() =>
                  isAdminAuthenticated() ? (
                    <CreateClient />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/",
                      }}
                    />
                  )
                }
              />
              <Route
                path="/createTask"
                render={() =>
                  isAdminAuthenticated() ? (
                    <CreateTask />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/",
                      }}
                    />
                  )
                }
              />
              <Route
                path="/viewUser"
                render={() =>
                  isAdminAuthenticated() ? (
                    <ViewUser />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/",
                      }}
                    />
                  )
                }
              />
              <Route
                path="/viewClient"
                render={() =>
                  isAdminAuthenticated() ? (
                    <ViewClient />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/",
                      }}
                    />
                  )
                }
              />
              <Route
                path="/viewTasks"
                render={() =>
                  isAdminAuthenticated() ? (
                    <ViewTasks />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/",
                      }}
                    />
                  )
                }
              />

              <Route
                path="/viewAssignedTask"
                render={() =>
                  isAdminAuthenticated() ? (
                    <ViewAssignedTask />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/",
                      }}
                    />
                  )
                }
              />
              <Route
                path="/ViewAssignedTaskDetail/:id"
                render={() =>
                  isAdminAuthenticated() ? (
                    <ViewAssignedTaskDetail />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/",
                      }}
                    />
                  )
                }
              />

              <Route
                path="/assignTasks/:id"
                render={() =>
                  isAdminAuthenticated() ? (
                    <AssignTasks />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/",
                      }}
                    />
                  )
                }
              />

              <Route
                path="/viewAssignedTaskToClient"
                render={() =>
                  isClientAuthenticated() ? (
                    <ViewAssignedTaskToClient />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/",
                      }}
                    />
                  )
                }
              />

              <Route
                path="/completeAssignedTask/:id"
                render={() =>
                  isClientAuthenticated() ? (
                    <CompleteAssignedTask />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/",
                      }}
                    />
                  )
                }
              />





            </Switch>
          </Router>
        </Container>
      </div>
    </UserContext.Provider>
  );
}

export default App;
