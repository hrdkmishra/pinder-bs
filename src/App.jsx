import React from "react";
import Landing from "./Components/Landing/Landing";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Nav />
          <Landing />
        </Route>
        <Route path="/register">
          <h1>I am Login</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
