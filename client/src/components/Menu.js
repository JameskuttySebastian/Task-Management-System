import React, { useContext } from "react";
import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import UserContext from "../utils/context/UserContext";

function Menu({ open, handleDrawerClose, handleLogOff, classes }) {
  const { userType } = useContext(UserContext);
  let adminUser;
  if (userType === "admin") {
    adminUser = true;
  }
  const adminMenu = () => {
    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRightIcon />
        </IconButton>
        </div>
        <h3 style={{ marginLeft: 20, marginTop: 0 }}>MENU ITEMS</h3>
        <Divider />
        <Link
          to="/landingpage"
          className={classes.link}
          onClick={handleDrawerClose}
        >
          Home
        </Link>
        <Link
          to="/register"
          className={classes.link}
          onClick={handleDrawerClose}
        >
          Create Users
        </Link>
        <Link
          to="/createClient"
          className={classes.link}
          onClick={handleDrawerClose}
        >
          Create Client
        </Link>
        <Link
          to="/createTask"
          className={classes.link}
          onClick={handleDrawerClose}
        >
          Create Task
        </Link>
        <Link
          to="/viewUser"
          className={classes.link}
          onClick={handleDrawerClose}
        >
          View Users
        </Link>
        <Link
          to="/viewClient"
          className={classes.link}
          onClick={handleDrawerClose}
        >
          View Clients
        </Link>
        <Link
          to="/viewTasks"
          className={classes.link}
          onClick={handleDrawerClose}
        >
          Assign Tasks
        </Link>
        <Link
          to="/viewAssignedTask"
          className={classes.link}
          onClick={handleDrawerClose}
        >
          View Assigned Tasks
        </Link>
        <Link
          to="/"
          className={classes.link}
          style={{ marginTop: 200, marginLeft: 50 }}
          onClick={handleLogOff}
        >
          Logoff
        </Link>
      </Drawer>
    );
  };

  const clientMenu = () => {
    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRightIcon />
        </IconButton>
        </div>
        <h3 style={{ marginLeft: 20 }}>MENU ITEMS</h3>
        <Divider />
        <Link
          to="/landingpage"
          className={classes.link}
          onClick={handleDrawerClose}
        >
          Home
        </Link>
        <Link
          to="/viewAssignedTaskToClient"
          className={classes.link}
          onClick={handleDrawerClose}
        >
          View Assigned Task
        </Link>
        <Link
          to="/"
          className={classes.link}
          style={{ marginTop: 200, marginLeft: 50 }}
          onClick={handleLogOff}
        >
          Logoff
        </Link>
      </Drawer>
    );
  };

  return adminUser ? adminMenu() : clientMenu();
}

export default Menu;
