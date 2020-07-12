import React, { Component } from 'react';
import DropdownMenu from './Components/DropdownMenu';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



class App extends Component {
  render() {

    return (
      <Router>
        <div>
          <DropdownMenu />
          <div className="container">
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route exaxt path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </Router>

    );
  }
}

export default App;