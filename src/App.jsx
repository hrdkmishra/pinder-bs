import React from "react";
import Landing from "./Components/Landing/Landing";
import Nav from "./Components/Nav/Nav";
import Create from "./Components/Create/Create";
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
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
