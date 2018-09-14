import React, { Component } from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import About from "./components/about/About";
import Artwork from "./components/artwork/Artwork";
import Sketches from "./components/sketches/Sketches";

import './App.css';

import logo from './images/logo.png';


class App extends Component {
  render() {
    return (
      <div class="container">
      <HashRouter>
        <div className="App">
        <h2>
          <img src={logo}/>
        </h2>
          <ul className="header">
              <li><NavLink to="/">Artwork</NavLink></li>
              <li><NavLink to="/About">About</NavLink></li>
              <li><NavLink to="/Sketches">Process</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Artwork}/>
            <Route path="/About" component={About}/>
            <Route path="/Sketches" component={Sketches}/>

          </div>
        </div>
      </HashRouter>
      </div>
    );
  }
}

export default App;
