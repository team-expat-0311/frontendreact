import React, { Component } from 'react';
import axios from 'axios';

const Photo = props => {
    console.log(props.photo);
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

export default Photo; 