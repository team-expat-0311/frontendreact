import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      localStorage.getItem("role") == "expat"
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
)

export default ProtectedRoute;
