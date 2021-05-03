import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Nav from "./components/Nav/Nav";
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/skills" component={Skills} />
      </Switch>
    </Router>
  );
}

export default App;
