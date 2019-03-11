import React, { Component } from 'react';
import axios from 'axios';

class LogIn extends Component {

    constructor(){
        super()

        this.state = {
            username: "",
            password: ""
        }
    }

    handleChanges = e => {
        e.preventDefault();
        console.log(e.target.name, e.target.value )
        this.setState({[e.target.name]: e.target.value});
    }

    loggingin = e => {
        e.preventDefault();
        let data = {username: this.state.username, password: this.state.password}
        console.log(data);
        axios.post("https://expat-journal.herokuapp.com/api/auth/login", data)
            .then(function(res){
                console.log(res);
                localStorage.setItem("token", res.data.token);
            })
            .catch(err => console.log(err));
        console.log("Done!")
        this.props.history.push('/photos');
    }

    render() {

        return (
            <div className="login">
                <form onSubmit={this.loggingin}>
                    <input type="text" name="username" onChange={this.handleChanges}></input>
                    <input type="text" name="password" onChange={this.handleChanges}></input>

                    <button type="submit">Log In</button>
                </form>
            </div>
        )

    }
}

export default LogIn;