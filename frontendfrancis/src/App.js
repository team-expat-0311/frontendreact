import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LogIn from "./Components/LogIn";
import Photos from "./Components/Photos";
import PhotosPrivate from "./Components/PhotosPrivate";

import Register from "./Components/Register";
import Home from "./Components/Home";
import ProtectedRoute from "./Routers/ProtectedRoute";

import logo from './logo.svg';
import './App.css';
import "./Project.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/" className="link">Home</Link>
          <Link to="/register" className="link">Register</Link>
          <Link to="/login" className="link">Login</Link>
          <Link to="/photos" className="link">Public Photos</Link>
          <Link to="/private" className="link"> Private</Link>
        </nav>

        <Route exact path="/" component={Home}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={LogIn}/>
        <Route path="/photos" component={Photos}/>
        <ProtectedRoute path="/private" component={PhotosPrivate}/>
      </div>
    );
  }
}

export default App;
