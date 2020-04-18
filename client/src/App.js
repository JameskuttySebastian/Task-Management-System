import React from 'react';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Login from './pages/login';
import Landingpage from './pages/landingpage';
import Createuser from './pages/createusers';
import Createclient from './pages/createclient'
import Createtask from './pages/createtask'
import viewusers from './pages/viewusers'
import viewclients from './pages/viewclients'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';
import { makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import './App.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',

  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,

  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',

  },
  
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <CssBaseline />
      <AppBar style= {{display:'block'}}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
      <Toolbar style={{ float: 'right' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          className={clsx(open && classes.hide)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      </AppBar>
      <Container>
      <Router>
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}>
            <div className={classes.drawerHeader}></div>
            <h3>MENU ITEMS</h3>
            <Divider />
            <Link to="/landingpage" className="link" style = {{marginTop: 20}} onClick={handleDrawerClose}>Home</Link>
            <Link to="/createuser" className="link" style = {{marginTop: 20}} onClick={handleDrawerClose}>Create Users</Link>
            <Link to="/createclient" className="link" style = {{marginTop: 20}} onClick={handleDrawerClose}>Create Client</Link>
            <Link to="/createtask" className="link" style = {{marginTop: 20}} onClick={handleDrawerClose}>Create Task</Link>
            <Link to="/viewusers" className="link" style = {{marginTop: 20}} onClick={handleDrawerClose}>View Users</Link>
            <Link to="/viewclients" className="link" style = {{marginTop: 20}} onClick={handleDrawerClose}>View Clients</Link>
            <Link to="/" className="link" style = {{marginTop: 200}} onClick={handleDrawerClose}>Logoff</Link>
          </Drawer>
          <Switch >
            <Route  exact path="/" component={Login} />
            <Route  exact path="/landingpage" component={Landingpage} />
            <Route path="/createuser" component={Createuser} />
            <Route path="/createclient" component={Createclient} />
            <Route path="/createtask" component={Createtask} />
            <Route path="/viewusers" component={viewusers} />
            <Route path="/viewclients" component={viewclients} />
          </Switch>
      </Router>
      </Container>
    </div>
  );
}

