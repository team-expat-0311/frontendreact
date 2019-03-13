import React, { Component } from 'react';
import axios from 'axios';

class Photo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            photo: null
        }
    }

    render() {
    if (this.props.delete == null){

        return (
            <div className="Photo">
            <img src={this.props.photo.img_url} />
            <ul>
    
                <li><b>location:</b> {this.props.photo.location}</li>
                <li><b>description:</b> {this.props.photo.description}</li>
    
                <footer>
                <li><b>created at:</b> {this.props.photo.created_at}</li>
                <li><b>updated at:</b> {this.props.photo.updated_at}</li>
                </footer>
            </ul>
            </div>
        )
    }
    else {
        // console.log("Photo id:", props.photo.id)
        return (

            <div className="Photo" onClick = {() => this.props.clickPhoto(this.props.photo.id) }>
            <img src={this.props.photo.img_url} />
            <ul>
    
                <li><b>location:</b> {this.props.photo.location}</li>
                <li><b>description:</b> {this.props.photo.description}</li>
    
                <footer>
                <b>created at:</b> {this.props.photo.created_at}
                <b>updated at:</b> {this.props.photo.updated_at}
                </footer>

                <button onClick={(e) => this.props.delete(e, this.props.photo.id)}>Delete</button>

            </ul>
            </div>

        )
        
    }
    }
}
export default Photo; 