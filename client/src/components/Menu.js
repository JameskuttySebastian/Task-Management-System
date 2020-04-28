import React, { useContext } from "react";
import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import UserContext from "../utils/context/UserContext";

import styled from 'styled-components';


const HoverMenuLinks = styled.p`
  color: #01579B;
	:hover {
    background: #C0C0C0;
		cursor: pointer;
	}
`

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
          <HoverMenuLinks style= {{fontWeight: '900'}}>Home</HoverMenuLinks>  
        </Link>
        <Link
          to="/register"
          className={classes.link}
          onClick={handleDrawerClose}
        >
          <HoverMenuLinks style= {{fontWeight: '900'}}>Create Users</HoverMenuLinks>
        </Link>
        <Link
          to="/createClient"
          className={classes.link}
          onClick={handleDrawerClose}
        >
          <HoverMenuLinks style= {{fontWeight: '900'}}>Create Client</HoverMenuLinks>
        </Link>
        <Link
          to="/createTask"
          className={classes.link}
          onClick={handleDrawerClose}
        >
          <HoverMenuLinks style= {{fontWeight: '900'}}>Create Task</HoverMenuLinks>
        </Link>
        <Link
          to="/viewUser"
          className={classes.link}
          onClick={handleDrawerClose}
        >
          <HoverMenuLinks style= {{fontWeight: '900'}}>View Users</HoverMenuLinks>
        </Link>
        <Link
          to="/viewClient"
          className={classes.link}
          onClick={handleDrawerClose}
        >
          <HoverMenuLinks style= {{fontWeight: '900'}}>View Clients</HoverMenuLinks>
        </Link>
        <Link
          to="/viewTasks"
          className={classes.link}
          onClick={handleDrawerClose}
        >
          <HoverMenuLinks style= {{fontWeight: '900'}}>Assign Tasks</HoverMenuLinks>
        </Link>
        <Link
          to="/viewAssignedTask"
          className={classes.link}
          onClick={handleDrawerClose}
        >
          <HoverMenuLinks style= {{fontWeight: '900'}}>View Assigned Tasks</HoverMenuLinks>
        </Link>
        <Link
          to="/"
          className={classes.link}
          style={{ marginTop: 20, marginLeft: 50 }}
          onClick={handleLogOff}
        >
          <HoverMenuLinks style= {{fontWeight: '900'}}>Logoff</HoverMenuLinks>
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
          <HoverMenuLinks style= {{fontWeight: '900'}}>Home</HoverMenuLinks>
        </Link>
        <Link
          to="/viewAssignedTaskToClient"
          className={classes.link}
          onClick={handleDrawerClose}
        >
          <HoverMenuLinks style= {{fontWeight: '900'}}>View Assigned Task</HoverMenuLinks>
        </Link>
        <Link
          to="/"
          className={classes.link}
          style={{ marginTop: 200, marginLeft: 50 }}
          onClick={handleLogOff}
        >
          <HoverMenuLinks style= {{fontWeight: '900'}}>Logoff</HoverMenuLinks>
          
        </Link>
      </Drawer>
    );
  };

  return adminUser ? adminMenu() : clientMenu();
}

export default Menu;
