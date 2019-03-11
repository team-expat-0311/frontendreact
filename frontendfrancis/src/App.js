import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LogIn from "./Components/LogIn";
import Photos from "./Components/Photos";
import Register from "./Components/Register";
import Home from "./Components/Home";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={LogIn}/>
        <Route path="/photos" component={Photos}/>
      </div>
    );
  }
}

export default App;
