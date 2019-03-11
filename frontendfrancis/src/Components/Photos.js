import React, { Component } from 'react';
import axios from 'axios';

import Photo from "./Photo";

class Photos extends Component {
    constructor() {
        super()

        this.state = {
            photos: []
        }
    }

    componentDidMount() {

    }

    render() {
    return (
        <div className="photos">
            {this.state.photos.map(a_photo =>
                
            <Photo photo={a_photo} />    

            )}
        </div>
    )
    }
}

export default Photos