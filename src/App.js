import React from "react";
import "./index.css"
import './App.css';
import Home from "./routes/Home";
import { Project } from "./routes/Project";

import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import { Route, Switch, Redirect, useLocation } from "wouter";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/project"  component={Project}/>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
