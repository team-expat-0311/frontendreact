import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
    constructor(){
        super()

        this.state = {
            username: "",
            password: "",
            name: "",
            role: "",
            age: "",
            location: ""
        }

    }

    register = e => {
        e.preventDefault();
        let newUser = {username: this.state.username, password: this.state.password,
        name: this.state.name, role: this.state.role, age: this.state.age, location: this.state.location}
        
        console.log(newUser);

        axios.post("https://expat-journal.herokuapp.com/api/auth/register", newUser)
            .then(res => console.log(res))
            .catch(err => console.log(err));
            
    }

    handleChanges = e => {
        e.preventDefault();
        console.log(e.target.name, e.target.value )
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            
            <div className="register">
                <form onSubmit={this.register}>
                
                <b>Username:</b> <input type="text" name="username" onChange={this.handleChanges}></input>
                <b>Password:</b><input type="text" name="password" onChange={this.handleChanges}></input>
                <b>Name:</b><input type="text" name="name" onChange={this.handleChanges}></input>
                <b>Role:</b>
                <select onChange={this.handleChanges} name="role">
                <option name="role" value="user">user</option>
                <option name="role" value="expat">expat</option>
                </select>
                <b>Age:</b><input type="text" name="age" onChange={this.handleChanges}></input>
                <b>Location:</b><input type="text" name="location" onChange={this.handleChanges}></input>

                <button type="submit">Register</button>
                
                </form>
            </div>
        )
    }
}

export default Register