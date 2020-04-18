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
import Main from "./pages/Main";
function App() {
<<<<<<< HEAD
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
=======
  return <Main />;
>>>>>>> cfacd2f0fd35f7dc9dfe6de6f4bbcfbfa6b39d99
}

export default App;
