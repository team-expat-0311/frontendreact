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
            .then(function(res){

                // let photoList = res.data;
                this.setState({photoList: res.data});
                // console.log(this.state.photos)
                })
            .catch(err => console.log(err));

            console.log(this.state.photoList)
    }

    render() {
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