import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Graph from "./components/Graph";
function App() {
  return (
    <Router>
      <div className="container-fluid px-0">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/user/:member_id" component={User} />
        <Route path="/graphs" component={Graph} />
      </div>
    </Router>
  );
}

export default App;
