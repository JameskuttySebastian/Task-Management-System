<<<<<<< HEAD
import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
=======
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./pages/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/Home"]}></Route>
        </Switch>
>>>>>>> b54550ec9006aad81ebaca6a6b991aefebbc5e90
      </div>
    </Router>
  );
}

export default App;
