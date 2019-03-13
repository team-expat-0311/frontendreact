import React, { Component } from 'react';
import axios from 'axios';

import Photo from "./Photo";

class Photos extends Component {
    constructor(props) {
        super(props)

        this.state={
            photoList:[]
        };
    }

    componentDidMount() {
        axios.get("https://expat-journal.herokuapp.com/api/photos/all")
            .then((res) =>{
               return this.setState({photoList: res.data});
            })
            .catch(err => console.log(err));

            
    }

    render() {
        console.log(this.state.photoList)
    return (
        <div className="photos">
            {this.state.photoList.map(a_photo =>
                
            <Photo photo={a_photo} />    

            )}
            
        </div>
    )
    }
}

export default Photos