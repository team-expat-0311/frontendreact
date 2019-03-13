import React, { Component } from 'react';
import axios from 'axios';

const Photo = props => {
    console.log(props.photo);
    if (props.delete == null){

        return (
            <div className="Photo">
            <img src={props.photo.img_url} />
            <ul>
    
                <li><b>location:</b> {props.photo.location}</li>
                <li><b>description:</b> {props.photo.description}</li>
    
                <footer>
                <b>created at:</b> {props.photo.created_at}
                <b>updated at:</b> {props.photo.updated_at}
                </footer>
            </ul>
            </div>
        )
    }
    else {
        // console.log("Photo id:", props.photo.id)
        return (

            <div className="Photo">
            <img src={props.photo.img_url} />
            <ul>
    
                <li><b>location:</b> {props.photo.location}</li>
                <li><b>description:</b> {props.photo.description}</li>
    
                <footer>
                <b>created at:</b> {props.photo.created_at}
                <b>updated at:</b> {props.photo.updated_at}
                </footer>

                <button onClick={(e) => props.delete(e, props.photo.id)}>Delete</button>

            </ul>
            </div>

        )
        
    }
}
export default Photo; 