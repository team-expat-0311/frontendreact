import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";

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
        
        <Router path="/" component={Home}/>
        <Router path="/register" component={Register}/>
        <Router path="/login" component={LogIn}/>
        <Router path="/photos" component={Photos}/>
      </div>
    );
  }
}

export default App;
