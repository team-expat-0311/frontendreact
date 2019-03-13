import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LogIn from "./Components/LogIn";
import Photos from "./Components/Photos";
import Photo from "./Components/Photo";
import PhotosPrivate from "./Components/PhotosPrivate";

import Register from "./Components/Register";
import Home from "./Components/Home";
import ProtectedRoute from "./Routers/ProtectedRoute";

import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import './photos.css';
import "./register.css";
=======
import "./Project.css";
>>>>>>> 93a470b77cf2a575e8b2a7234cf98e03022147d5

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
        <Route path="/photos/:id"  component={<Photo/>}/>
        <ProtectedRoute path="/private" component={PhotosPrivate}/>
      </div>
    );
  }
}

export default App;
