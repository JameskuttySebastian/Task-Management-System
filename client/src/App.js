import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Menu from "./components/Menu";
import Login from "./pages/Login";
import Landingpage from "./pages/landingpage";
import Createuser from "./pages/createusers";
import Createclient from "./pages/createclient";
import Createtask from "./pages/createtask";
import viewusers from "./pages/viewusers";
import viewclients from "./pages/viewclients";
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
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  //for user context
  const [userId, setUserId] = useState("");
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

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
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
          style={{ display: "block" }}
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
              <Route exact path="/landingpage" component={Landingpage} />
              <Route path="/createuser" component={Createuser} />
              <Route path="/createclient" component={Createclient} />
              <Route path="/createtask" component={Createtask} />
              <Route path="/viewusers" component={viewusers} />
              <Route path="/viewclients" component={viewclients} />
            </Switch>
          </Router>
        </Container>
      </div>
    </UserContext.Provider>
  );
}

export default App;

// <Drawer
//               className={classes.drawer}
//               variant="persistent"
//               anchor="right"
//               open={open}
//               classes={{
//                 paper: classes.drawerPaper,
//               }}
//             >
//               <div className={classes.drawerHeader}></div>
//               <h3>MENU ITEMS</h3>
//               <Divider />
//               <Link
//                 to="/landingpage"
//                 className="link"
//                 style={{ marginTop: 20 }}
//                 onClick={handleDrawerClose}
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/createuser"
//                 className="link"
//                 style={{ marginTop: 20 }}
//                 onClick={handleDrawerClose}
//               >
//                 Create Users
//               </Link>
//               <Link
//                 to="/createclient"
//                 className="link"
//                 style={{ marginTop: 20 }}
//                 onClick={handleDrawerClose}
//               >
//                 Create Client
//               </Link>
//               <Link
//                 to="/createtask"
//                 className="link"
//                 style={{ marginTop: 20 }}
//                 onClick={handleDrawerClose}
//               >
//                 Create Task
//               </Link>
//               <Link
//                 to="/viewusers"
//                 className="link"
//                 style={{ marginTop: 20 }}
//                 onClick={handleDrawerClose}
//               >
//                 View Users
//               </Link>
//               <Link
//                 to="/viewclients"
//                 className="link"
//                 style={{ marginTop: 20 }}
//                 onClick={handleDrawerClose}
//               >
//                 View Clients
//               </Link>
//               <Link
//                 to="/"
//                 className="link"
//                 style={{ marginTop: 200 }}
//                 onClick={handleLogOff}
//               >
//                 Logoff
//               </Link>
//             </Drawer>
