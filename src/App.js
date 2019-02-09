import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Peliculas from './components/Peliculas';
import { Switch, Route, NavLink } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <ul className="navbar">
          <NavLink to="/" style={{color:"#fff", textDecoration: "none"}}>
            <li className="linksito">
              Home
            </li>
          </NavLink>
          <NavLink to="/peliculas" style={{color:"#fff", textDecoration: "none"}}>
            <li className="linksito">
              Movies
            </li>
          </NavLink>
          </ul>
          <switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/peliculas" component={Peliculas} />
          </switch>
      </div>
    );
  }
}

export default App;
