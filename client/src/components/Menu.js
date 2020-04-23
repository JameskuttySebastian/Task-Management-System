import React, { useContext } from "react";
import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";

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
        <div className={classes.drawerHeader}></div>
        <h3 style={{ marginLeft: 20 }}>MENU ITEMS</h3>
        <Divider />
        <Link
          to="/landingpage"
          className="link"
          style={{ marginTop: 20, marginLeft: 50 }}
          onClick={handleDrawerClose}
        >
          Home
        </Link>
        <Link
          to="/register"
          className="link"
          style={{ marginTop: 20, marginLeft: 50 }}
          onClick={handleDrawerClose}
        >
          Create Users
        </Link>
        <Link
          to="/createClient"
          className="link"
          style={{ marginTop: 20, marginLeft: 50 }}
          onClick={handleDrawerClose}
        >
          Create Client
        </Link>
        <Link
          to="/createTask"
          className="link"
          style={{ marginTop: 20, marginLeft: 50 }}
          onClick={handleDrawerClose}
        >
          Create Task
        </Link>
        <Link
          to="/viewUsers"
          className="link"
          style={{ marginTop: 20, marginLeft: 50 }}
          onClick={handleDrawerClose}
        >
          View Users
        </Link>
        <Link
          to="/viewClients"
          className="link"
          style={{ marginTop: 20, marginLeft: 50 }}
          onClick={handleDrawerClose}
        >
          View Clients
        </Link>
        <Link
          to="/"
          className="link"
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
        <div className={classes.drawerHeader}></div>
        <h3 style={{ marginLeft: 20 }}>MENU ITEMS</h3>
        <Divider />
        <Link
          to="/landingpage"
          className="link"
          style={{ marginTop: 20, marginLeft: 50}}
          onClick={handleDrawerClose}
        >
          Home
        </Link>
        <Link
          to="/register"
          className="link"
          style={{ marginTop: 20, marginLeft: 50 }}
          onClick={handleDrawerClose}
        >
          Create Users
        </Link>
        <Link
          to="/"
          className="link"
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
